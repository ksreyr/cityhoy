import React, {Dispatch} from "react";
import Autocomplete from "@mui/material/Autocomplete";
import {TextField} from "@mui/material";

const options = [
    'Informacion',
    'Evento',
    'Noticia',
    'Alerta']
const TagComponent = ({value, setValue, inputValue, setInputValue}:
                          {
                              value: string | null,
                              setValue: Dispatch<any>,
                              inputValue: string,
                              setInputValue: Dispatch<any>
                          }) => {

    return (
        <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
                setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            renderInput={(params) => <TextField {...params} label="Tag"/>}
        />
    );
}
export default TagComponent;