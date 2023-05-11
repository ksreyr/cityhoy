import {AlertColor, Snackbar} from "@mui/material";
import * as React from "react";
import {useContext} from "react";
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {UIContext} from "@/context/UIContext";

const Alert =
    React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AlerComponent =  () => {
    const {visible, setAlertState, type, message} = useContext(UIContext);

    return (
        message?(
        <Snackbar open={visible}
                  sx={{display: 'flex', position: 'cover', alignItems: 'center', justifyContent: 'center'}}
                  onClose={() => setAlertState({type: 'CHANGE', payload: {type: '', message: '', visible: false}})}>
            <Alert onClose={() => setAlertState({type: 'CHANGE', payload: {type: '', message: '', visible: false}})}
                   severity={type as AlertColor} sx={{width: '100%', position: 'cover'}}>
                {message}
            </Alert>
        </Snackbar>):<></>)
}
export default AlerComponent;