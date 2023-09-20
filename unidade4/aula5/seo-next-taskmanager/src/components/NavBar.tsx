"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <span>{session?.user?.name}</span>
        <button onClick={() => signOut()}
          className="bg-blue-500 rounded p-2">
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <span>Not signed in</span>
      <button onClick={() => signIn()}
        className="bg-blue-500 rounded p-2">
        Sign in
      </button>
    </>
  );
}

export default function NavBar() {
  return (
    <nav className="flex justify-between bg-slate-800 text-white p-5 items-center">
      <div className="flex gap-2 items-center">
        <Link href='/' className="text-2xl">Gerenciador de Tarefas</Link>
        <Link href='/sobre' className="bg-blue-500 rounded p-2">Sobre</Link>
      </div>
      <div className="flex gap-2 items-center">
        <AuthButton />
      </div>
    </nav>
  );
}