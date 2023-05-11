import {NextApiRequest, NextApiResponse} from "next"
import  {PrismaClient} from '@prisma/client'
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {z} from 'zod'
const prisma = new PrismaClient()
const userIdStructure = z.object({
    id : z.string()
})
const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const {id} = req.query
    const session = await getServerSession(req, res, authOptions)
    switch (req.method) {
        case 'GET':
            return res.status(200).json('')
        case 'DELETE':
            const parser = userIdStructure.safeParse({id})
            if(!parser.success){
                return res.status(400).json({ error: 'Invalid user ID' });
            }

            const userIdFromDb = await prisma.user.findUnique({
                where:{
                    email: parser.data.id
                }
            })

            if(userIdFromDb && session && session.user && userIdFromDb.email!=session.user.email){
                return res.status(400).json({ error: 'Invalid data' });
            }

            const comments = await prisma.comment.deleteMany({
                where:{
                    author: userIdFromDb!
                }
            })

            const posts = await prisma.post.deleteMany({
                where:{
                    author: userIdFromDb!
                },
            })

            const user = await prisma.user.delete({
                where:{
                    id: userIdFromDb!.id
                }
            })
            return res.status(200).json({ message: 'User deleted successfully' });
        default:
            return res.status(405).json('')
    }
}

export default handler