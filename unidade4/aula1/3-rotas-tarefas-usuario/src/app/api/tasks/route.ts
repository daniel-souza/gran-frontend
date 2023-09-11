import { NextRequest, NextResponse } from "next/server";
import TaskController from "@/lib/TaskController";

export async function GET(req: NextRequest) {
  const tasks = TaskController.getTasks();
  return NextResponse.json({ error: false, tasks });
}