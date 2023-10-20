import userAPI from "@/lib/userAPI";
import Link from "next/link";

// app/blog/[slug]/page.tsx
export default async function Page({ params }: { params: { userId: string, postId: string } }) {
  const { userId, postId } = params;
  const post: Post = await userAPI.getUserPost(userId, postId);
  if(!post) return (<div>Post não encontrado!</div>);

  // criar uma página para exibir o usuário
  // com o id, nome e o email
  return (
    <div className="p-2 bg-cyan-800">
      <p className="p-3 bg-slate-200 font-bold">Post id: {post.id}, User id: {userId}</p>
      <div className="bg-orange-100 p-2 my-1 flex flex-col gap-3">
        <span className="font-bold">Título: {post.title}</span>
        <span className="font-bold">Conteúdo: {post.body}</span>
        <Link className="px-2 py-1 font-bold bg-green-300" href={`/users/${userId}/posts`}>Voltar</Link>
      </div>
    </div>
  )
}
