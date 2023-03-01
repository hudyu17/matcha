import { prisma } from "@/prisma";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function getSavedCareers(req, res) {
    const session = getServerSession(req, res, authOptions)
    
    if (!session) {
        res.status(401).send('No permissions')
        return
    }
    
    const { userId } = req.body;

    const savedCareers = await prisma.userSaved.findUnique({
        where: {
          userId: userId
        },
        select: {
          saved: true
        }
      })

    res.json(savedCareers)
}