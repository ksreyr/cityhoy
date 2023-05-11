import React, {Dispatch} from "react";
import {StyledPaper} from "../StyledCard";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import PickerByGoogle from "@/components/PickerByGoogle";
import {useRouter} from "next/router";
import TagComponent from "@/components/Tag";

// eslint-disable-next-line react/display-name
const FilterComponent = React.memo((
    {handleClick, setLocationState, tag, setTag}: {
        handleClick: (event: any) => Promise<void>,
        setLocationState: Dispatch<any>,
        tag: string,
        setTag:Dispatch<string>
    }) => {
    const [inputValue, setInputValue] = React.useState('');
    const router = useRouter();

    return (
        <StyledPaper sx={{m: 1}}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} lg={12} py={4}>
                    <Typography variant={"h4"}>Filtrar por ciudad o tag</Typography>
                </Grid>
            </Grid>
            <Box component="form" onSubmit={handleClick}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <PickerByGoogle setLocationState={setLocationState}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <TagComponent value={tag} setValue={setTag} inputValue={inputValue} setInputValue={setInputValue}/>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{py: 2}}
                        >
                            Filtrar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </StyledPaper>)
});

export default FilterComponent