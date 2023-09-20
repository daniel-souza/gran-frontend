import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { headers } from 'next/headers'

const NEXTAUTH_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000';

export default async function Home() {
  const session = await getServerSession();
  if(!session) {
    return (
      <main className='flex flex-col justify-stretch gap-2 p-2'>
        <p className='p-10 text-2xl bg-slate-300'>
            Gerenciador de tarefas com Next.js e NextAuth
        </p>
      </main>
    )
  }
  
  const response = await fetch('http://localhost:3000/api/tasks', { 
    cache: 'no-cache',
    headers: headers()
  });
  const json = await response.json();
  const tasks = json.tasks as Task[];
  
  return (
    <main className='flex flex-col justify-stretch gap-2 p-2'>
      <h1 className='p-10 text-2xl bg-slate-300'>
          Gerenciador de tarefas com Next.js e NextAuth
      </h1>
      <div className='mx-auto rounded shadow-lg p-10 text-xl bg-yellow-100'>
        <p className='mb-5'>Olá, {session?.user?.name}</p>
        <p>Resumo das tarefas</p>
        <p>Quantidade de tarefas: {tasks.length}</p>
        <p>Quantidade de tarefas pendentes: {tasks.filter(task => task.status === 'pendente').length}</p>
        <p>Quantidade de tarefas em andamento: {tasks.filter(task => task.status === 'andamento').length}</p>
        <p className='mb-5'>Quantidade de tarefas concluídas: {tasks.filter(task => task.status === 'concluida').length}</p>
        <Link href='/tasks' className='bg-blue-500 p-2 text-white rounded'>
          Gerenciar Tarefas
        </Link>
      </div>
    </main>
  )
}
