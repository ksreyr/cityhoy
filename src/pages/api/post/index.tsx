import {Post, PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import {z} from "zod";

const prisma = new PrismaClient()

const postObject = z.object({
    city: z.string(),
    region: z.string(),
    authorId: z.string(),
    content: z.string(),
    tag: z.string()
})

export default async function handle(
    req: NextApiRequest, res: NextApiResponse<Post | Post[] | string>
) {
    switch (req.method) {
        case 'POST':
            if (!req.body?.authorId) return res.status(405).json('Error prossesing request')

            const user = await prisma.user.findUnique({
                where: {
                    email: req.body.authorId
                }
            });

            postObject.parse(req.body)

            const postCreate = await prisma.post.create(
                {
                    data: {
                        ...req.body,
                        authorId: user?.id,
                    },
                }
            )
            return res.status(200).json({...postCreate})
        case 'GET':
            const response = await prisma.post.findMany(
                {
                    include: {
                        author: true,
                        comments: true
                    }
                }
            );
            return res.status(200).json(response)
        case 'DELETE':
            console.log('req.query', req.query)
            if (!req.query?.city) return res.status(405).json('Error prossesing request')
            return res.status(200).json('Delete')
        case 'UPDATE':
            return res.status(200).json('Hello from API')
        default:
            return res.status(405).json('Error prossesing request')
    }
}
