import { prisma } from "@/prisma";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function saveInterest(req, res) {
    const session = getServerSession(req, res, authOptions)
    
    const { userId } = req.body;

    if (!session) {
        res.status(401).send('No permissions')
        return
    }
    
    // if save 
    // check if user in table
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
            data: { cmplus: true }
        })
    res.json(update)

    } else {
        const create = await prisma.userSaved.create({
            data: {
            userId: userId,
            saved: [],
            cmplus: true
            }
        })
        res.json(create)
    }

}