import { prisma } from "@/prisma";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function unsaveCareer(req, res) {
    const session = getServerSession(req, res, authOptions)
    
    const { userId, careerId } = req.body;

    if (!session) {
        res.status(401).send('No permissions')
        return
    }

    const savedCareers = await prisma.userSaved.findUnique({
        where: {
          userId: userId
        },
        select: {
          saved: true
        }
      })
      const index = savedCareers.saved.indexOf(careerId);
      if (index > -1) { // Only splice array when item is found
        savedCareers.saved.splice(index, 1); // Note: 2nd param means remove one item only
      } else {
        // Career wasn't saved previously, i.e. error
        res.status(400).send('Already removed from saved')
        return
      }
    const newSaved = savedCareers.saved;
        
    const updateUserSaved = await prisma.userSaved.update({
        where: {
            userId: userId
        },
        data: {
            saved: newSaved
        }
        })
    res.json(updateUserSaved);
}