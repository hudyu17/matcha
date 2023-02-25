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
    
    // if save 
    // check if user in table
    const user = await prisma.userSaved.findUnique({
        where: {
          userId: userId
        }
    })

    // user already in table
    if (user) {
    await prisma.userSaved.update({
        where: {
        userId: userId
        },
        data: {
            saved: {
                push: careerId
            }
        }
    })
    } else {
        await prisma.userSaved.create({
            data: {
            userId: userId,
            saved: [careerId]
            }
        })
    }

}