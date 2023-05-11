import React, {Dispatch, useContext} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {UIContext} from "@/context/UIContext";

export default function CookieConsent({setConsentGiven, consentGiven, children}:
{setConsentGiven:Dispatch<boolean>, consentGiven:boolean, children:React.ReactNode}) {
    const [open, setOpen] = React.useState(true);
    const {setAlertState} = useContext(UIContext);
    const handleClose = (agree: string) => {
        if (agree == 'agree') {
            handleConsent()
            setOpen(false);
        } else {
            setAlertState({
                type: 'CHANGE',
                payload: {type: 'error', message: 'Coockies policy need to be accepted', visible: true}
            })
        }
    };
    const handleConsent = () => {
        setConsentGiven(true);
        localStorage.setItem("cookieConsentCityHoy", "true");
    };
    return (
        !consentGiven ? (
            <div className="cookie-consent">
                {children}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"English"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            We use cookies for session management and to enhance your experience,
                            including Google Maps api. By using our software, you agree to our use of cookies
                        </DialogContentText>
                    </DialogContent>
                    <DialogTitle id="alert-dialog-title">
                        {"Español"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Usamos cookies para el manejo de sesiones y mejorar tu experiencia, incluyendo el
                            autocompletado de Google Maps. Al utilizar nuestro software, aceptas el uso de cookies.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose("disagree")}>Disagree</Button>
                        <Button variant="contained" disableElevation onClick={() => handleClose("agree")} >Agree</Button>
                    </DialogActions>
                </Dialog>
            </div>
        ) : (<></>)
    );
};
