import { prisma } from "@/prisma";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function saveCareer(req, res) {
    const session = getServerSession(req, res, authOptions)
    
    const { userId, careerId } = req.body;

    if (!session) {
        res.status(401).send('No permissions')
        return
    }
    
    // Grab user info
    const user = await prisma.userSaved.findUnique({
        where: {
          userId: userId
        }
    })

    if (user) {
        // User already in table i.e. has saved something previously
        const update = await prisma.userSaved.update({
            where: {
            userId: userId
            },
            data: {
                saved: {
                    push: careerId
                }
            }
        })
    res.json(update)
    } else {
        // User has not previously saved anything, need to create row
        const create = await prisma.userSaved.create({
            data: {
            userId: userId,
            saved: [careerId]
            }
        })
        res.json(create)
    }

}