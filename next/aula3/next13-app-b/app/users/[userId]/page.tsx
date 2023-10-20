import userAPI from "@/lib/userAPI";
import Link from "next/link";

// app/blog/[slug]/page.tsx
export default async function Page({ params }: { params: { userId: string } }) {
  const user: User = await userAPI.getUser(params.userId);
  if(!user) return (<div>Usuário não encontrado!</div>);

  return (
    <div className="p-2 bg-cyan-800">
      <p className="p-3 bg-slate-200 font-bold">User id: {user.id}</p>
      <div className="bg-orange-100 p-2 my-1 flex flex-col gap-3">
        <span className="font-bold">Nome: {user.name}</span>
        <span className="font-bold">Apelido: {user.username}</span>
        <span className="font-bold">Email: {user.email}</span>
        <Link className="px-2 py-1 font-bold bg-green-300" href={`/users/${user.id}/posts`}>Exibir Posts</Link>
        <Link className="px-2 py-1 font-bold bg-green-300" href={`/users`}>Voltar</Link>
      </div>
    </div>
  )
}
