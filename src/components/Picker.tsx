import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


export default function Picker({label, data, setState}: {
    label: string,
    data: any[],
    setState: React.Dispatch<React.SetStateAction<any>>
}) {

    const selectFunction = (event: object, value: any) => {
        console.log(":::::::");
        setState(value)
        console.log(value);
    };
    return (
        <Autocomplete
            id="demo"
            options={data}
            autoHighlight
            onChange={selectFunction}
            fullWidth
            getOptionLabel={(option) => option.departamento ? option.departamento : option.city}
            renderOption={(props, option) => (
                <Box component="li" {...props}>
                    ({option.departamento ? option.departamento : option.city})
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}
