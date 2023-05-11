import {PrismaClient} from "@prisma/client";
import NextAuth, {AuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import FacebookProvider from "next-auth/providers/facebook";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

import {validatedOAuthConfigDiscord, validatedOAuthConfigGithub,validatedOAuthConfigFaceBook} from "../../../../prisma/providersModels";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider(validatedOAuthConfigGithub),
        DiscordProvider(validatedOAuthConfigDiscord),
        FacebookProvider(validatedOAuthConfigFaceBook)
    ],
    callbacks: {
        async jwt({token, account}) {

            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({session, token, user}) {
            return session;
        },
    },
};

export default NextAuth(authOptions);
