import React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Github from "@mui/icons-material/GitHub"
import Twitter from "@mui/icons-material/Twitter"
import Paypal from "@mui/icons-material/Info"

function Copyright(props: any) {
    return (<Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', m: 2, flexGrow: 1}}>
            <Typography color="text.secondary"  sx={{ flexGrow: 1}}>
                {'Copyright © '}
                <Link color="inherit" href="https://cityhoy.com">
                    cityhoy.com
                </Link>
                {' '}
                {new Date().getFullYear()}
                {' - '}
                <Typography
                    variant="overline"
                    color="text.primary"
                >
                    version:0.1.0
                </Typography>
            </Typography>
            <Grid sx={{mr:4}}>
                <IconButton onClick={() => window.open('https://github.com/ksreyr')}>
                    <Github></Github>
                </IconButton>
                <IconButton onClick={() => window.open('https://twitter.com/ksreyr')}>
                    <Twitter></Twitter>
                </IconButton>
                <IconButton onClick={() => window.open('https://cityhoy.com/datapolicy')}>
                    <Paypal></Paypal>
                </IconButton>
            </Grid>

        </Grid>
    );
}

export default Copyright