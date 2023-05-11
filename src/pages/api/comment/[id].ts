import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import {z} from "zod";

const primsa = new PrismaClient();
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    const postIdParsedType = z.string();
    const postIdParsed = postIdParsedType.parse(req.query.id);
    switch (req.method) {
        case "GET":
            console.log(postIdParsed);
            const comments = await primsa.comment.findMany({
                where: {
                    postId: postIdParsed
                },
                include: {
                    author: true,
                },
            });
            return res.status(200).json(comments);
        default:
            return res.status(405).json({error: "Not Methos allowed"});
    }
};
export default handle;
