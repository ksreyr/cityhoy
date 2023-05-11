import type {AppProps} from "next/app";
import {SessionProvider} from "next-auth/react";
import { CssBaseline, ThemeProvider} from "@mui/material";
import {UIProvider} from "@/context/UIContext";
import React, {useEffect, useState} from 'react';
import CookieConsent from "@/components/CoockiesConsent/index.";
import AlerComponent from "@/components/AlertComponent";
import {themeLight} from "@/components/utils/Theme";


export default function App({Component, pageProps: {session, ...pageProps},}: AppProps) {
    const [consentGiven, setConsentGiven] = useState(false);
    useEffect(() => {
        const consent = localStorage.getItem("cookieConsentCityHoy");
        if (consent === "true") {
            setConsentGiven(true);
        }
    }, [consentGiven]);
    return (
        <ThemeProvider theme={themeLight}>
            <CssBaseline/>
            <UIProvider>
                {consentGiven ? (
                    <SessionProvider session={session}>
                        <Component {...pageProps} />
                    </SessionProvider>
                ) : (
                    <CookieConsent setConsentGiven={setConsentGiven} consentGiven={consentGiven}>
                        <>
                            <AlerComponent/>
                        </>
                    </CookieConsent>
                )
                }
            </UIProvider>
        </ThemeProvider>
    );
}



