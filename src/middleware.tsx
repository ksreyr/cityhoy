import {withAuth} from "next-auth/middleware"

export default withAuth({
    callbacks: {
        authorized({req, token}) {
            console.log("::::::authorized:::::::");
            console.log("req:", req);
            console.log("token:", token);
            return true
        },
    },
})

export const config = {matcher: ["/about", "/me"]}