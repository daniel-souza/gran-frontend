import { getServerSession } from 'next-auth'
export default async function Home() {
  const session = await getServerSession();
  return (
    <main>
      <p className='p-10 flex items-center bg-slate-200'>
        {session 
          ? <span>{session?.user?.name}</span>
          : <span>Usuário não autenticado</span>
        }
      </p>
    </main>
  )
}
