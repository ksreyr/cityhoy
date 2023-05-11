import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import {z} from "zod";

const prisma = new PrismaClient();

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "POST":
            const user = await prisma.user.findUnique({
                where: {
                    email: req.body.authorId,
                },
            });

            const zodObject = z.string();
            const authorId = zodObject.parse(user?.id);

            const comment = await prisma.comment.create({
                data: {
                    ...req.body,
                    authorId: authorId,
                },
            });
            return res.status(200).json("Create");
        default:
            return res.status(405).json({error: "Not Allowed"});
    }
};

export default handle;
