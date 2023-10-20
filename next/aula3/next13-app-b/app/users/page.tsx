import userAPI from "@/lib/userAPI"
import Link from "next/link";

export default async function page() {
  const users : User[] = await userAPI.getUsers();
  return (
    <div className="p-2 bg-cyan-800">
      <p className="p-3 bg-slate-200 font-bold">Página de usuários</p>
      <div className="flex flex-col">
        {users.map((user) => (
          <div className="bg-orange-100 p-2 my-1 flex gap-3" key={user.id}>
            <Link href={`/users/${user.id}`} className="font-bold bg-green-200 px-2">Exibir usuário</Link>
            <span className="font-bold">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
