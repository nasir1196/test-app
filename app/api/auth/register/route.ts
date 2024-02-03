import {NextResponse} from "next/server";
import {connectDatabase} from "@/utils/connectDatabase";
import prisma from "@/prisma";
import bcrypt from 'bcrypt'



export const POST = async(request:Request)=>{
    try {
        const {name, email, password} = await request.json()
        if(!name || !email || !password){
            NextResponse.json({message:"Invalid data"}, {status:422})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        await connectDatabase()
        const user = await prisma.user.create({data:{name,email,hashedPassword}})
        return NextResponse.json({user},{status:201})
    }catch (e:any) {
        NextResponse.json({message:e.message},{status:500})
    }finally {
        await prisma.$disconnect()
    }
}