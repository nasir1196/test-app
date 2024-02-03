import prisma from "@/prisma";


export const connectDatabase = async () => {
    try {
        await prisma.$connect()
        console.log("prisma-mongo-connected")
    } catch (e) {
        console.log(e)
        throw new Error("Unable to connect to database")
    }
}

