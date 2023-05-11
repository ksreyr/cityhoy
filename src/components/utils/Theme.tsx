import {createTheme} from "@mui/material";
import {grey} from "@mui/material/colors";

export const themeLight = createTheme({
    palette: {
        background: {
            default: grey[100]
        },
        primary: {
            main: '#554994'
        },
        secondary:{
            main: '#00C89D'
        },
        text: {
            secondary: grey[700],
        },
    },
    typography: {
        h4: {
            color: '#000134'
        },
        h6: {
            color: '#000134'
        }
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage: `url(/background.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                },
            },
        },
    },
});