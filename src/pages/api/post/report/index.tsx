import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import {z} from "zod"
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient()

const requestBodySchema = z.object({
    id: z.string(),
});

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            const session = await getServerSession(req, res, authOptions)
            if (!(session && session.user && session.user.email == "ksreyr@gmail.com")) {
                return res.status(401)
                    .json([])
            }
            const postUpdated = await prisma.post.findMany({
                where: {reported: true},
                include: {
                    author: true,
                    comments: true
                }
            })
            return res.status(200)
                .json(postUpdated)
        case 'POST':
            const validatedBody = requestBodySchema.parse(req.body);
            const postToUpdate = await prisma.post.findUnique({
                where: {
                    id: validatedBody.id
                }
            })
            if (postToUpdate) {
                postToUpdate.reported = true;
                const postUpdated = await prisma.post.update({
                    where: {id: postToUpdate.id},
                    data: postToUpdate,
                })
                return res.status(200)
                    .json({message: "post reported", post: postUpdated})

            } else {
                return res.status(400)
                    .json({message: "Internal Server Error"})
            }
        default:
            return res.status(405)
                .json({message: "Method Not allowed"})

    }
}

export default handle;