import userAPI from "@/lib/userAPI";
import Link from "next/link";

export default async function page({ params }: any) {
  const { userId } = params;
  const posts: Post[] = await userAPI.getUserPosts(userId);
  if(!posts) return (<div>Posts não encontrados!</div>);
  return (
    <div className="p-2 bg-cyan-800">
      <p className="p-3 bg-slate-200 font-bold">Posts do usuário ({params.userId})</p>
      <div className="flex flex-col">
        {posts.map((post) => (
          <div className="bg-orange-100 p-2 my-1 flex gap-3" key={post.id}>
            <Link href={`/users/${userId}/posts/${post.id}`} className="font-bold bg-green-200 px-2">Exibir post</Link>
            <span className="font-bold">Título: {post.title}</span>
          </div>
        ))}
        <Link className="px-2 py-1 font-bold bg-green-300" href={`/users/${userId}`}>Voltar</Link>
      </div>
    </div>
  )
}
