import { prisma } from "@/prisma";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function findSavedCareers(req, res) {
    const session = getServerSession(req, res, authOptions)
    
    if (!session) {
        res.status(401).send('No permissions')
        return
    }
    
    const { userId, careerId } = req.body;

    

}