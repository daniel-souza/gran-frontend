import { NextRequest, NextResponse } from "next/server";
import taskController from '@/lib/TaskController'

type Params = {
  params: {
      userId: string,
  }
};

export async function GET(req: NextRequest, { params: { userId } }: Params) {
  const tasks = taskController.getUserTasks(userId);
  if(!tasks)
    return NextResponse.json(
        { error: true, message: "Usuário não encontrado" },
        { status: 404 } // 404: Not Found
    );
  return NextResponse.json({ error: false, tasks });
}

export async function POST(req: NextRequest, { params: { userId } }: Params) {
  const tasks = taskController.getUserTasks(userId);
  if(!tasks)
    return NextResponse.json(
        { error: true, message: "Usuário não encontrado" },
        { status: 404 } // 404: Not Found
    );
  const body = await req.json();
  // Create task
  let id = 1;
  if(tasks.length > 0) id = tasks[tasks.length - 1].id + 1;
  const task: Task = {
      id,
      title: body.title,
      userId: parseInt(userId),
      status: "a fazer"
  }
  taskController.createUserTask(userId, task);
  return NextResponse.json({
      error: false,
      message: "Tarefa criada com sucesso"
  });
}