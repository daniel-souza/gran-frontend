import { NextRequest, NextResponse } from "next/server";
import taskController from '@/lib/TaskController'

type Params = {
  params: {
      userId: string,
      taskId: string
  }
};

export async function GET(req: NextRequest, { params: { userId, taskId } }: Params) {
  const tasks = taskController.getUserTasks(userId);
  if(!tasks)
    return NextResponse.json(
        { error: true, message: "Usuário não encontrado" },
        { status: 404 } // 404: Not Found
    );
  const task = tasks.find(task => task.id === parseInt(taskId));
  if(!task)
    return NextResponse.json(
        { error: true, message: "Tarefa não encontrada" },
        { status: 404 } // 404: Not Found
    );
  return NextResponse.json({ error: false, task });
}


export async function PUT(req: NextRequest, { params: { userId, taskId } }: Params) {
  const tasks = taskController.getUserTasks(userId);
  if(!tasks)
    return NextResponse.json(
        { error: true, message: "Usuário não encontrado" },
        { status: 404 } // 404: Not Found
    );
  const task = tasks.find(task => task.id === parseInt(taskId));
  if(!task)
    return NextResponse.json(
        { error: true, message: "Tarefa não encontrada" },
        { status: 404 } // 404: Not Found
    );
  // Update task
  const body = await req.json();
  if(body.title) task.title = body.title;
  if(body.status) task.status = body.status;
  taskController.updateUserTask(userId, taskId, task);
  return NextResponse.json({
    error: false,
    message: "Tarefa atualizada com sucesso"
  });
}
export async function DELETE(req: NextRequest, { params: { userId, taskId } }: Params) {
  const tasks = taskController.getUserTasks(userId);
  if(!tasks)
    return NextResponse.json(
        { error: true, message: "Usuário não encontrado" },
        { status: 404 } // 404: Not Found
    );
  const task = tasks.find(task => task.id === parseInt(taskId));
  if(!task)
    return NextResponse.json(
        { error: true, message: "Tarefa não encontrada" },
        { status: 404 } // 404: Not Found
    );

  taskController.deleteUserTask(userId, taskId);
  return NextResponse.json({
    error: false,
    message: "Tarefa deletada com sucesso"
  });
}