import {z} from "zod";

const OAuthConfigSchema = z.object({
    clientId: z.string(),
    clientSecret: z.string(),
    httpOptions: z.object({
        timeout: z.number(),
    }),
});

const oauthConfigDiscordProvider = {
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    httpOptions: {
        timeout: 40000,
    },
};
const oauthConfigFacebookProvider = {
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    httpOptions: {
        timeout: 40000,
    },
};
const oauthConfigGithubProvider = {
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    httpOptions: {
        timeout: 40000,
    },
};

export const validatedOAuthConfigFaceBook = OAuthConfigSchema.parse(
    oauthConfigFacebookProvider
);
export const validatedOAuthConfigDiscord = OAuthConfigSchema.parse(
    oauthConfigDiscordProvider
);
export const validatedOAuthConfigGithub = OAuthConfigSchema.parse(
    oauthConfigGithubProvider
);
