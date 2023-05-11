import Headers from "@/components/headers";
import MenuAppBar from "@/components/MenuAppBar";
import React, {useState} from "react";
import {StyledPaper} from "@/components/StyledCard";
import {Button, Container, Stack, Typography} from "@mui/material";
import Copyright from "@/components/Copyright/index.";

const DataPolicy = () => {
    const[english, setEnglish]=useState(false)
    return (<>
            <Headers title={"cityhoy"} description={"ciudadanos infirmando"} image={"cityhoy"} url={"cityhoy.com"}/>
            <MenuAppBar/>
            <StyledPaper sx={{m: 1}}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Cityhoy
                    </Typography>
                    <Typography
                        component="h1"
                        variant="overline"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        version:0.0.1 Beta
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" paragraph>
                        Esta Política de Datos explica cómo CityHoy recopila, almacena, utiliza y comparte información
                        personal y no
                        personal de sus usuarios. Esta política se aplica a la versión beta de CityHoy y está sujeta a
                        cambios sustanciales en el futuro.
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" paragraph>
                        Al utilizar CityHoy en su versión beta, usted acepta los términos y condiciones de esta Política
                        de Datos. Si no está de acuerdo con esta política, por favor no utilice CityHoy.
                    </Typography>
                    <Stack
                        sx={{py: 2}}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained" onClick={() => setEnglish(true)}>English</Button>
                        <Button variant="outlined" onClick={() => setEnglish(false)}>Spanish</Button>
                    </Stack>
                </Container>
                <Container maxWidth="md">{
                    english?<div>  <Typography color="text.primary" paragraph>
                            IMPORTANT INFORMATION
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            At our web application, we understand that privacy and data protection are of utmost importance to our users. Therefore,
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            if a user decides to delete their CityHoy account at any point, we offer a direct option to "Delete Account."
                        </Typography>
                    <Typography color="text.secondary" paragraph>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                    It is important for our users to know that clicking "Delete Account" will remove all personal data and application-generated
                    data such as comments and posts. This action is irreversible and permanent, and the application will not retain any of this data.
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                    We want to ensure that our users have full control over their personal data and respect their right to choose to delete
                    it if they wish.
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                    It is important to note that this information is provided clearly and transparently to comply with privacy policies and to
                    ensure that our users are informed and make informed decisions about using our application. If you have any questions or
                    concerns about our privacy policy or data deletion, please do not hesitate to contact us.
                    </Typography></div>:<div>
                        <Typography color="text.primary" paragraph>
                            Exoneración de responsabilidad
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            En nuestra aplicación web, entendemos que la privacidad y la protección de datos son de gran importancia para nuestros usuarios.
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Por lo tanto, si en algún momento un usuario decide eliminar su cuenta de CityHoy, le ofrecemos una opción directa de "Borrar Cuenta".
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Es importante que nuestros usuarios sepan que si hacen clic en "Borrar Cuenta", se eliminarán todos los datos personales y los
                            datos generados en la aplicación, como comentarios y publicaciones. Esta acción no se puede deshacer y es permanente, y la
                            aplicación no guardará de ninguna manera estos datos.
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            Queremos asegurarnos de que nuestros usuarios tengan el control total sobre sus datos personales y respetamos su derecho a decidir
                            eliminarlos si así lo desean.
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            Es importante destacar que esta información se proporciona de manera clara y transparente para cumplir con las políticas de privacidad
                            de Facebook y garantizar que nuestros usuarios estén informados y tomen decisiones informadas sobre el uso de nuestra aplicación.
                            Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad o la eliminación de datos, no dude en ponerse en contacto con
                            nosotros.
                        </Typography>
                    </div>
                }


                </Container>
            </StyledPaper>
            <Copyright/>
        </>
    )
}

export default DataPolicy;