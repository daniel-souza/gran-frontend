import { NextRequest, NextResponse } from "next/server";
import TaskController from "@/lib/TaskController";
import { getServerSession } from "next-auth";

export async function GET(req: NextRequest) {
  const session = await getServerSession();
  const tasks = TaskController.getUserTasks(session?.user?.email as string);
  return NextResponse.json({ error: false, tasks });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  const path = req.nextUrl.searchParams.get('path')
  const task : Task = await req.json();
  TaskController.createUserTask(session?.user?.email as string, task);
  return NextResponse.json({ error: false, task });
}

