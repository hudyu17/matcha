import { prisma } from "@/prisma";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function unsaveInterest(req, res) {
    const session = getServerSession(req, res, authOptions)
    
    const { userId } = req.body;

    if (!session) {
        res.status(401).send('No permissions')
        return
    }
    
    // check if user in table, should be there anyway
    const user = await prisma.userSaved.findUnique({
        where: {
          userId: userId
        }
    })

    // user already in table
    if (user) {
        const update = await prisma.userSaved.update({
            where: {
            userId: userId
            },
            data: { cmplus: false }
        })
    res.json(update)

    } else {
        res.status(400).send('User not found');
    }

}