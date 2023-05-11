import {NextApiRequest, NextApiResponse} from "next";

export default function handle(
    req: NextApiRequest,
    res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return res.status(200).json('')
        default:
            return res.status(405).json('method not allowed')
    }
}