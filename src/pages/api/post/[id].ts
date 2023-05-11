import {Post, PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import {z} from "zod";
import {getServerSession} from "next-auth/next"
import {authOptions} from "../auth/[...nextauth]"

const prisma = new PrismaClient()

const idParam = z.object({
    id: z.string(),
})

export default async function handle(
    req: NextApiRequest, res: NextApiResponse<Post | Post[] | string>
) {
    const session = await getServerSession(req, res, authOptions)
    const {id} = idParam.parse(req.query);
    switch (req.method) {
        case 'GET':
            const postToSave = await prisma.post.findUnique({
                   where:{
                       id: id
                   },
            })
            if(postToSave){
                const postToUpdate= {...postToSave, likes: postToSave.likes+1}
                const postToSaved = await prisma.post.update({
                    where:{
                        id: id
                    },
                    data:postToUpdate
                })
                return res.status(200).json('updated')
            }
            return res.status(404).json('bad request')
        case 'DELETE':

            const post = await prisma.post.findUnique({
                where: {
                    id: id,
                },
                include: {
                    author: true
                }
            })
            if ((session && session.user && post?.author.email == session.user.email) || (session && session.user && session.user.email == "ksreyr@gmail.com")) {
                await prisma.comment.deleteMany({
                    where: {
                        postId: id
                    }
                }),
                await prisma.post.delete({
                    where: {
                        id: id,
                    }
                })
                return res.status(200).json('Delete')
            }
            return res.status(401).json('Unauthorized')

        default:
            return res.status(405).json('Error processioning request')
    }
}
