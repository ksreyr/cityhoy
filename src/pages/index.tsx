import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import {signIn, useSession} from "next-auth/react";
import {Inter} from "next/font/google";
import Image from "next/image";
import {useRouter} from "next/router";
import custom from "../../public/custom.svg";
import logo from "../../public/logo.svg";
import Headers from "@/components/headers";
import React from "react";
import Copyright from "@/components/Copyright/index.";
import Avatar from "@mui/material/Avatar";


const inter = Inter({subsets: ["latin"]});

export default function Home() {
    const router = useRouter()
    const {data:session,update,status}=useSession();
    return (
        <>
            <Headers title={"cityhoy"} description={"ciudadanos infirmando"} image={"cityhoy"}
                     url={"../../public/logoIcon.svg.svg"}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={"center"}
                    flexDirection={"column"}
                    sx={{height: '100vh'}}
                >
                    <Grid container
                          display="flex"
                          justifyContent="center"
                          alignItems={"center"}
                          component="main"
                          padding={3}>
                        <Grid
                            item
                            sx={{
                                display: {xs: 'none', sm: "flex", height: '100vh'},
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            sm={2}
                            md={7}
                        > <Image
                            src={custom}
                            alt="Follow us on Twitter"
                        />
                        </Grid>

                        <Grid item xs={12}
                              sm={8}
                              md={5}
                              component={Paper}
                              elevation={6}
                              sx={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  py: 8
                              }} square>
                            <Box
                                sx={{
                                    px: 5,
                                    flexDirection: 'column',
                                }}
                            >
                                <Image
                                    priority
                                    src={logo}
                                    alt="Follow us on Twitter"
                                />
                                <Typography sx={{flexGrow: 1, pb: 1, pt: 1}}>
                                    Ciudadanos informando a ciudadanos: únete a la comunidad de Cityhoy
                                </Typography>

                                <Typography variant="body1" component="div" sx={{flexGrow: 1, pb: 2}}>
                                    {session?.user?<Grid sx={{display:'flex', direction:'row', alignItems:'center'}}>
                                        <Typography variant={"h6"} sx={{pr:2}}>Es gusto que estes aqui </Typography>
                                        <Avatar alt="Remy Sharp" src={session?.user?.image??''} />
                                    </Grid>:<Button
                                        variant="contained"
                                        disableElevation
                                        fullWidth
                                        sx={{py: 2}}
                                        onClick={() => signIn()}
                                    >
                                        Registrate
                                    </Button>}
                                </Typography>
                                <Typography sx={{flexGrow: 1, pb: 1}}>
                                    Cityhoy es una plataforma de noticias 24 horas diseñada
                                    para mantenerte al día sobre los eventos y sucesos más
                                    importantes de tu ciudad
                                </Typography>
                                <Typography sx={{flexGrow: 1, pb: 1}}>
                                    <Button
                                        variant="contained"
                                        disableElevation
                                        fullWidth
                                        sx={{py: 2}}
                                        onClick={() => router.push('/post')}
                                    >Mira las noticias de hoy</Button>
                                </Typography>
                                <Typography sx={{mb:3}}>
                                    Conéctate con una comunidad local.
                                    ¡Únete a Cityhoy y sé parte de nuestra red de ciudadanos informados!
                                </Typography>
                                <Copyright/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    );
}
