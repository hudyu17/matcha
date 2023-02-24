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

    // get the save or unsave flag
    
    // if save 
    // check if user in table
    // const user = await prisma.userSaved.findUnique({
    //     where: {
    //       userId: userId
    //     }
    //   })

    // user already in table
    //   if (user) {
    //     await prisma.userSaved.update({
    //       where: {
    //         userId: userId
    //       },
    //       data: {
    //         saved: {
    //           push: careerId
    //         }
    //       }
    //     })
    //   } else {
    //     await prisma.userSaved.create({
    //       data: {
    //         userId: userId,
    //         upvoted: [careerId]
    //       }
    //     })
    //   }

    // if unsave
    // const savedCareers = await prisma.userSaved.findUnique({
    //     where: {
    //       userId: userId
    //     },
    //     select: {
    //       saved: true
    //     }
    //   })
    //   const index = savedCareers.saved.indexOf(careerId);
    //   if (index > -1) { // only splice array when item is found
    //     savedCareers.saved.splice(index, 1); // 2nd parameter means remove one item only
    //   } else {
    //     // career wasn't saved previously, error
    //     res.status(400).send('Already removed from saved')
    //     return
    //   }
    // const newSaved = savedCareers.saved;
        
    // const updateUserSaved = await prisma.userSaved.update({
    //     where: {
    //         userId: userId
    //     },
    //     data: {
    //         saved: newSaved
    //     }
    //     })
    // res.json(updateUserSaved);
}