import {styled} from "@mui/material/styles";
import Card from "@mui/material/Card";

export const StyledPaper =
    styled(Card)(({theme}) =>
    ({
    background: "rgba(255, 255, 255, 0.4)",
    border: "1px solid rgba(255, 255, 255, 0.37)",
    boxShadow: "0 4px 6px 0 rgba(31, 38, 135, 0.1), 0 1px 3px 0 rgba(31, 38, 135, 0.2)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "10px",
    padding: theme.spacing(2),
}));