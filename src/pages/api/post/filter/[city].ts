import {Post, PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import {z} from "zod";


const prisma = new PrismaClient()

const deletePostParams = z.object({
    city: z.string(),
})

export default async function handle(
    req: NextApiRequest, res: NextApiResponse<Post | Post[] | string>
) {
    switch (req.method) {
        case 'GET':
            console.log(req.query)
            const {city} = deletePostParams.parse(req.query);
            const post = await prisma.post.findMany({
                where: {
                    city: city
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
