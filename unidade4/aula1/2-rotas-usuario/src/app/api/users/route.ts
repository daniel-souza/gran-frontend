import { NextRequest, NextResponse } from "next/server";
import userController from '@/lib/UserController'

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {

    return NextResponse.json({ error: false, users: userController.getUsers() })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    if(userController.emailExists(body.email))
        return NextResponse.json(
            { error: true, message:  "Email já cadastrado" },
            { status: 400 } // 400: Bad Request
        );
    userController.createUser(body);
    return NextResponse.json({ 
        error: false, 
        message: "Usuário cadastrado com sucesso"
        },
        { status: 201 } // 201: Created
    ); 
}
