"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();
  if (session) return <>
    <span>{session?.user?.name}</span>
    <button onClick={() => signOut()}
      className="bg-blue-500 rounded p-2">
      Sign out
    </button>
  </>;
  return <>
    <span>Usuário não autenticado</span>
    <button onClick={() => signIn()}
      className="bg-blue-500 rounded p-2">
      Sign in
    </button>
  </>;
}
