import { getServerSession } from "next-auth";

export default async function Tasks() {
  const session = await getServerSession();
  if(!session) return (
    <p>Não autenticado!</p>
  );
  return (
    <main>
      <h1 className='p-10 text-2xl bg-slate-300'>
          Gerenciador de tarefas com Next.js e NextAuth
      </h1>
    </main>
  )
}