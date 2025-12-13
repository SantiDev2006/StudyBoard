import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse} from "next/server";

export async function PATCH(request:NextRequest){
    const session = await getServerSession(authOptions);
    if(!session){
        return NextResponse.json({error:"Unauthorized"},{status:401});
    }
    try {
        const body = await request.json();
        const updated = await prisma.user.update({
            where:{
                id:session.user.id
            },
            data:{
                ...(body.name !== undefined && {name:body.name}),
                ...(body.avatar !== undefined && {avatar:body.avatar})
            }
        });
        return NextResponse.json({
            id:updated.id,
            name:updated.name,
            email:updated.email,
            avatar:updated.avatar
        });
    } catch (error) {
        return NextResponse.json({error:"Something went wrong"},{status:500});
    }
}