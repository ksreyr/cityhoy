import Typography from "@mui/material/Typography";
import {signIn, signOut, useSession} from "next-auth/react";

export default function SignInComponent() {
    const {data: session} = useSession();
    return session ? (
        <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
            {session.user?.name}
            <button onClick={() => signOut()}>Sign out</button>
        </Typography>
    ) : (
        <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
            <button onClick={() => signIn()}>Sign in</button>
        </Typography>
    );
}
