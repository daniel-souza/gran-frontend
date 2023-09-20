"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

async function submit(router: AppRouterInstance) {
  const input = document.querySelector('input');
  if(!input?.value || input?.value == '') return;
  
  const response = await fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: input?.value})
  });
  const json = await response.json();
  if(!json.error) {
    input!.value = '';
    router.refresh();
  }
  // return json;
} 

export default function NovaTarefa() {
  const router = useRouter();
  return (
    <div className="mx-auto w-2/4 my-3 p-5 flex flex-row gap-2 rounded bg-yellow-100 shadow-xl">
      <input className="flex-1 border-2 border-blue-500 rounded p-2" type="text" placeholder="Nova tarefa" />
      <button className="bg-blue-500 rounded p-2 text-white"
        onClick={() => submit(router)}>Adicionar</button>
    </div>
  )
}
