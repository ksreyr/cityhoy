import {Inter} from "next/font/google";
import MenuAppBar from "@/components/MenuAppBar";
import PostCreation from "@/components/post/PostCreation";
import Headers from "@/components/headers";
import Copyright from "@/components/Copyright/index.";
import AlerComponent from "../../../components/AlertComponent";
import React from "react";
import {Container} from '@mui/material';

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <Headers title={"cityhoy"} description={"ciudadanos infirmando"} image={"cityhoy"} url={"cityhoy.com"}/>
            <MenuAppBar/>
            <Container maxWidth="lg">
                <PostCreation/>
                <Copyright/>
            </Container>
            <AlerComponent/>

        </>
    );
}
