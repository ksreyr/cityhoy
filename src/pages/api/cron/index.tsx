import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient()
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const posts = await prisma.post.findMany({
        include: {
            comments: true,
        }
    })
    const postIds: string[] = posts.map(post => {
        const now = new Date();
        const mes = now.getUTCMonth() - post.createdAt.getUTCMonth();
        const dia = now.getDate() - post.createdAt.getDate();
        console.log("::dia::", dia)
        console.log("::mes::", mes)
        if (mes > 0 || dia > 0) {
            return post.id;
        }
        return null
    }).filter((id): id is string => id !== null);
    console.log("::postIds::", postIds)
    await prisma.comment.deleteMany({
        where: {
            postId: {
                in: postIds
            }
        }
    });

    await prisma.post.deleteMany({
        where: {
            city: {
                in: postIds
            }
        },

    });
    return res.status(200).json('cleaned')
}
