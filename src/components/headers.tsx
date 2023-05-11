import Head from 'next/head';

const Headers = ({title, description, image, url,}: {
    title: string; description: string; image: string; url: string;
}) => {
    const logoIcon = '/logoIcon.svg';
    const logo = '/logo.svg';

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" type="image/svg+xml" sizes="180x180" href={logoIcon}/>
            <link rel="icon" type="image/svg+xml" sizes="32x32" href={logoIcon}/>
            <link rel="icon" type="image/svg+xml" sizes="16x16" href={logoIcon}/>
            <meta name="title"
                  content="cityhoy noticias locales por 24 horas | local news for 24 Hours | informacion de en la localidad"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description"
                  content="CityHoy ofrece noticias locales las 24 horas del día, con cobertura de eventos y noticias de última hora en tu ciudad. Mantente informado con CityHoy, la plataforma de información ciudadana."/>
            <meta name="keywords"
                  content="noticias locales, eventos, noticias de última hora, ciudad, información, 24 horas, CityHoy, ciudadanos"/>
            <meta name="author" content="ksreyr"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="CityHoy - Noticias locales las 24 horas"/>
            <meta property="og:description"
                  content="CityHoy ofrece noticias locales las 24 horas del día, con cobertura de eventos y noticias de última hora en tu ciudad. Mantente informado con CityHoy, la plataforma de información ciudadana."/>
            <meta property="og:url" content="https://cityhoy.com/"/>
            <meta property="og:site_name" content="CityHoy"/>
            <meta name="twitter:card" content={logo}/>
            <meta name="twitter:title" content="CityHoy - Noticias locales las 24 horas"/>
            <meta name="twitter:description"
                  content="CityHoy ofrece noticias locales las 24 horas del día, con cobertura de eventos y noticias de última hora en tu ciudad. Mantente informado con CityHoy, la plataforma de información ciudadana."/>
            <meta name="twitter:image" content={logo}/>
            <link rel="canonical" href="https://cityhoy.com/"/>
            <meta name="robots" content="index, follow"/>
        </Head>
    );
};

export default Headers;
