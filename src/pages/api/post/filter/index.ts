import {Post, PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import {z} from "zod";


const prisma = new PrismaClient()


export default async function handle(
    req: NextApiRequest, res: NextApiResponse<Post | Post[] | string>
) {
    switch (req.method) {
        case 'POST':
            const {city, tag} = req.body;
            const post = await prisma.post.findMany({
                where: {
                    ...(city && {city}),
                    ...(tag && {tag}),
                },
                include: {
                    author: true
                }
            })
            return res.status(200).json(post)
        default:
            return res.status(405).json('Error processioning request')
    }
}