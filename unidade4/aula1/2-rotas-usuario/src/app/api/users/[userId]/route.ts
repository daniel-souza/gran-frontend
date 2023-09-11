import { NextRequest, NextResponse } from "next/server";
import userController from '@/lib/UserController'

type Params = {
  params: {
    userId: string
  }
};

export async function GET(req: NextRequest, { params: { userId } }: Params) {
  const user: User | undefined = userController.getUser(userId);
  if(!user)
      return NextResponse.json(
        { error: true, message: "Usuário não encontrado" },
        { status: 404 } // 404: Not Found
      );
  return NextResponse.json({ error: false, user });
}

export async function PUT(req: NextRequest, { params: { userId } }: Params) {
  const user: User | undefined = userController.getUser(userId);
  if(!user)
    return NextResponse.json(
      { error: true, message: "Usuário não encontrado" },
      { status: 404 } // 404: Not Found
    );
  const body = await req.json();
  if(body.email && userController.emailExists(body.email))
    return NextResponse.json(
        { error: true, message: "Email já cadastrado" },
        { status: 400 } // 400: Bad Request
    );
  // Update user
  if(body.name) user.name = body.name;
  if(body.email) user.email = body.email;
  // o ideal é que a senha a ser atualizada seja criptografada
  if(body.password) user.password = body.password;
  userController.updateUser(userId, user);
  return NextResponse.json({
      error: false,
      message: "Usuário atualizado com sucesso"
  });
}

export async function DELETE(req: NextRequest, { params: { userId } }: Params) {
  if(userController.deleteUser(userId) === null)
    return NextResponse.json(
        { error: true, message: "Usuário não encontrado" },
        { status: 404 } // 404: Not Found
    );
  return NextResponse.json({
    error: false,
    message: "Usuário deletado com sucesso"
  });
}
