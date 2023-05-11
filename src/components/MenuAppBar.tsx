import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {signIn, signOut, useSession} from "next-auth/react";
import MenuItem from "@mui/material/MenuItem";
import {Avatar, Button, Grid, Menu} from "@mui/material";
import {useRouter} from "next/router";
import {useDeleteUser} from "@/fetchApi/userRequest/useDeleteUser";

export default function MenuAppBar() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const {data: session} = useSession();
    const router = useRouter()
    const deleteUser = useDeleteUser();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteAccount = async (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        const userDeleted = await deleteUser(session?.user?.email ?? '').then(res => res.json());
        setAnchorEl(null);
    }

    return (
        <Box sx={{flexGrow: 0}}>
            <AppBar position="static">
                <Toolbar>
                    <Grid sx={{flexGrow: 1}}>
                        <Button
                            onClick={() => router.push('/post')}
                            color="inherit"
                            aria-label="menu"
                        >
                            <Typography variant="h5">Cityhoy</Typography>
                        </Button>
                    </Grid>

                    {session ? (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Avatar alt="Remy Sharp" src={`${session.user?.image}`}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem>{session.user?.name}</MenuItem>
                                <MenuItem onClick={() => router.push('/post')}>Ver Post</MenuItem>
                                <MenuItem onClick={() => router.push('/post/create')}>Crear Post</MenuItem>
                                <MenuItem onClick={handleDeleteAccount}>Borrar Cuenta</MenuItem>
                                <MenuItem onClick={() => signOut()}>Cerrar Sesion</MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <div>
                            <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
                                <Button
                                    variant="contained"
                                    disableElevation
                                    onClick={() => signIn()}
                                >
                                    Sign in
                                </Button>
                            </Typography>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
