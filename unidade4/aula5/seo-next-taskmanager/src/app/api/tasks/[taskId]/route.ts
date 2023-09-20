import TaskController from "@/lib/TaskController";
import { NextRequest, NextResponse } from "next/server";

type ParamProps = {
  params: {
    taskId: string
  }
};

export async function GET(req: NextRequest, { params: { taskId } }: ParamProps) {
  const task = TaskController.getUserTask(taskId);
  if(!task) return NextResponse.json({ error: true, message: "Tarefa não encontrada" }, { status: 404 });
  return NextResponse.json({ error: false, task });
}

export async function PUT(req: NextRequest, { params: { taskId } }: ParamProps) {
  const task : Task = await req.json();
  if(!TaskController.updateUserTask(Number(taskId), task))
    return NextResponse.json({ error: true, message: "Tarefa não encontrada" }, { status: 404 });
  return NextResponse.json({ error: false, task });
}

export async function DELETE(req: NextRequest, { params: { taskId } }: ParamProps) {
  if(!TaskController.deleteUserTask(taskId))
    return NextResponse.json({ error: true, message: "Tarefa não encontrada" }, { status: 404 });
  return NextResponse.json({ error: false, message: "Tarefa deletada com sucesso" });
}