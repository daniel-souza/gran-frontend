import NovaTarefa from "@/components/NovaTarefa";
import TaskList from "@/components/TaskList";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
  },
}

export default async function Tasks() {
  const session = await getServerSession();
  const response = await fetch('http://localhost:3000/api/tasks', { 
    cache: 'no-cache',
    headers: headers()
  });
  const json = await response.json();
  const tasks = json.tasks as Task[];
  if(!session) return (
    <p>Não autenticado!</p>
  );
  return (
    <main>
      <h1 className='p-10 text-2xl bg-slate-300'>
          Gerenciador de tarefas com Next.js e NextAuth
      </h1>
      <NovaTarefa />
      <TaskList title="Pendente(s)" taskList={tasks.filter(task => task.status == 'pendente')} />
      <TaskList title="Em andamento" taskList={tasks.filter(task => task.status == 'andamento')} />
      <TaskList title="Concluída(s)" taskList={tasks.filter(task => task.status == 'concluida')} />
    </main>
  )
}