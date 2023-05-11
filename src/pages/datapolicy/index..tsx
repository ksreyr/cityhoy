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
                    {english?<div><Typography variant="h6" align="center" color="text.secondary" paragraph>
                        Esta Política de Datos explica cómo CityHoy recopila, almacena, utiliza y comparte información
                        personal y no
                        personal de sus usuarios. Esta política se aplica a la versión beta de CityHoy y está sujeta a
                        cambios sustanciales en el futuro.
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" paragraph>

                        Al utilizar CityHoy en su versión beta, usted acepta los términos y condiciones de esta Política
                        de Datos. Si no está de acuerdo con esta política, por favor no utilice CityHoy.
                    </Typography></div>:<div>

                        <Typography variant="h6" align="center" color="text.secondary" paragraph>
                        This Data Policy explains how CityHoy collects, stores, uses, and shares personal and non-personal information from its users. This policy applies to the beta version of CityHoy and is subject to substantial changes in the future.
                        </Typography>
                        <Typography variant="h6" align="center" color="text.secondary" paragraph>
                        By using CityHoy in its beta version, you agree to the terms and conditions of this Data Policy. If you do not agree with this policy, please do not use CityHoy.
                        </Typography></div>}
                    <Stack
                        sx={{py: 2}}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained" onClick={() => setEnglish(false)}>English</Button>
                        <Button variant="outlined" onClick={() => setEnglish(true)}>Spanish</Button>
                    </Stack>
                </Container>
                {english?<Container maxWidth="md">
                    <Typography color="text.primary" paragraph>
                        Exoneración de responsabilidad
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                        Durante el período de prueba de la versión beta, CityHoy se exonera de cualquier responsabilidad
                        en cuanto a la recopilación, almacenamiento, uso y compartición de datos personales y no
                        personales de sus usuarios. Además, CityHoy no garantiza la integridad, seguridad ni exactitud
                        de los datos almacenados y se reserva el derecho de modificar esta Política de Datos en
                        cualquier momento y sin previo aviso.
                    </Typography>
                    <Typography color="text.primary" paragraph>
                        Pérdida de datos
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                        CityHoy no se hace responsable de la pérdida de datos que pueda ocurrir durante el uso de la
                        aplicación en su versión beta. A pesar de que CityHoy se esfuerza por garantizar la seguridad y
                        protección de los datos de los usuarios, es posible que los datos puedan sufrir pérdidas.
                    </Typography>
                    <Typography color="text.primary" paragraph>
                        Compartición de datos con terceros
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                        CityHoy no compartirá los datos recopilados, de manera voluntaria, salvo en los casos en
                        que sea requerido por ley o estipulado en esta política.
                    </Typography>
                    <Typography color="text.primary" paragraph>
                        Exoneración de responsabilidad y cumplimiento de normas
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                        CityHoy se encuentra en una fase de desarrollo como versión beta, lo que significa que aún
                        estamos trabajando para mejorar nuestras prácticas y cumplir con los estándares internacionales
                        de protección de datos personales y privacidad. Durante este período de prueba, CityHoy no puede
                        garantizar el cumplimiento total de todas las regulaciones y leyes aplicables, y se exonera de
                        cualquier responsabilidad en este sentido.
                    </Typography> <Typography color="text.secondary" paragraph>
                    Al utilizar CityHoy en su versión beta, usted reconoce y acepta que esta aplicación está en fase de
                    prueba y, como tal, puede estar sujeta a errores, fallas y cambios en sus políticas. Entendemos y
                    valoramos las opiniones de nuestros usuarios, por lo que si desea proporcionar sugerencias para
                    mejorar nuestras prácticas y cumplir con los estándares de protección de datos de cada usuario,
                    puede hacerlo a través de nuestras cuentas oficiales en GitHub o Twitter.
                </Typography> <Typography color="text.secondary" paragraph>

                    Aunque CityHoy se esfuerza por preservar la seguridad y protección de los datos de los usuarios, no
                    podemos garantizar la total seguridad de los datos almacenados. Al utilizar CityHoy en su versión
                    beta, usted acepta y entiende los riesgos asociados con la pérdida o exposición de sus datos
                    personales.
                </Typography> <Typography color="text.secondary" paragraph>

                    Recomendamos a los usuarios que consideren cuidadosamente estos riesgos antes de utilizar CityHoy en
                    su versión beta y que tomen precauciones adicionales para proteger su información personal.
                </Typography>
                    <Typography color="text.primary" paragraph>
                        Datos recopilados y uso de la API de Google Maps
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                        CityHoy recopila información personal y no personal de sus usuarios para mejorar la experiencia
                        y funcionalidad del producto. Entre los datos personales recopilados se encuentran:
                    </Typography> <Typography color="text.secondary" paragraph>

                    Fotografía de perfil
                    Nombre
                    Dirección de correo electrónico
                    Es posible que también se recopilen otros datos personales y no personales en función de las
                    interacciones del usuario con la aplicación.
                </Typography> <Typography color="text.secondary" paragraph>
                    CityHoy utiliza la API de localización de Google Maps para mejorar las funcionalidades principales
                    del producto web. Esta integración permite a CityHoy proporcionar información relevante y
                    personalizada basada en la ubicación de los usuarios. Al utilizar CityHoy en su versión beta, usted
                    acepta y entiende que sus datos de localización pueden ser compartidos con Google Maps de acuerdo
                    con su Política de Privacidad y Términos de Servicio.
                </Typography> <Typography color="text.secondary" paragraph>

                    Para obtener más información sobre cómo Google Maps recopila, utiliza y protege su información, por
                    favor consulte su Política de Privacidad en: https://policies.google.com/privacy?hl=es
                </Typography> <Typography color="text.secondary" paragraph>

                    CityHoy no se hace responsable de las prácticas de privacidad o el contenido de sitios web de
                    terceros, como Google Maps, y le recomendamos que revise las políticas de privacidad de dichos
                    sitios antes de proporcionarles información personal.
                </Typography>
                </Container>:
                    <Container maxWidth="md">
                        <Typography color="text.primary" paragraph>
                            IMPORTANT INFORMATION
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            During the beta version trial period, CityHoy disclaims any liability for the collection, storage, use and sharing of personal and non-personal data of its users. In addition, CityHoy does not guarantee the integrity, security or accuracy of stored data and reserves the right to modify this Data Policy at any time and without prior notice.
                        </Typography>
                        <Typography color="text.primary" paragraph>
                            Data Loss
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            CityHoy is not responsible for any data loss that may occur during the use of the application in its beta version. Although CityHoy strives to ensure the security and protection of user data, data loss may occur.
                        </Typography>
                        <Typography color="text.primary" paragraph>
                            Data Sharing with Third Parties
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            CityHoy will not share voluntarily collected data except where required by law or as stipulated in this policy.
                        </Typography>
                        <Typography color="text.primary" paragraph>
                            Disclaimer and Compliance with Regulations
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            CityHoy is in a beta development phase, which means we are still working to improve our practices and comply with international standards for personal data protection and privacy. During this trial period, CityHoy cannot guarantee full compliance with all applicable regulations and laws and is therefore not liable in this regard.
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            By using CityHoy in its beta version, you acknowledge and accept that this application is in a trial phase and, as such, may be subject to errors, failures and changes in its policies. We understand and value the opinions of our users, so if you would like to provide suggestions to improve our practices and comply with each user's data protection standards, you can do so through our official accounts on GitHub or Twitter.
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            Although CityHoy strives to preserve the security and protection of user data, we cannot guarantee the total security of stored data. By using CityHoy in its beta version, you accept and understand the risks associated with the loss or exposure of your personal data.
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            We recommend that users carefully consider these risks before using CityHoy in its beta version and take additional precautions to protect their personal information.
                        </Typography>
                        <Typography color="text.primary" paragraph>
                            Data Collection and Use of the Google Maps API
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            CityHoy collects personal and non-personal information from its users to improve the experience and functionality of the product. Personal data collected includes:
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            Personal profile photo, name, and email address may be collected by CityHoy to improve the experience and functionality of the product. Other personal and non-personal data may also be collected based on user interactions with the application.
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            CityHoy uses the Google Maps location API to enhance the main features of the web product. This integration allows CityHoy to provide relevant and personalized information based on user location. By using CityHoy in its beta version, you accept and understand that your location data may be shared with Google Maps in accordance with their Privacy Policy and Terms of Service.
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            For more information on how Google Maps collects, uses, and protects your information, please refer to their Privacy Policy at: https://policies.google.com/privacy?hl=en.
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                            CityHoy is not responsible for the privacy practices or content of third-party websites, such as Google Maps, and we recommend that you review the privacy policies of such sites before providing them with personal information.
                        </Typography>
                    </Container>}
            </StyledPaper>
            <Copyright/>
        </>
    )
}

export default DataPolicy;