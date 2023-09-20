"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

type TaskProps = {
  task: Task
}

async function updateTask(router: AppRouterInstance, task: Task, status: string) {
  task.status = status;
  const response = await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task)
  });
  
  const json = await response.json();
  if(!json.error) {
    router.refresh();
  }
}

async function deleteTask(router: AppRouterInstance, taskId: number) {
  const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  const json = await response.json();
  if(!json.error) {
    router.refresh();
  }
}

export default function Task({task}: TaskProps) {
  const router = useRouter();
  const taskUI = {
    pendente: {
      botao: "bg-blue-500 font-bold text-white rounded p-2",
      titulo: "bg-blue-100 m-1 p-1 w-full",
      novoStatus: "andamento",
      textoBotao: "Iniciar",
    },
    andamento: {
      botao: "bg-green-500 font-bold text-white rounded p-2",
      titulo: "bg-green-100 m-1 p-1 w-full",
      novoStatus: "concluida",
      textoBotao: "Concluir",
    },
    concluida: {
      botao: null,
      titulo: "bg-red-100 m-1 p-1 line-through w-full",
      novoStatus: null,
      textoBotao: null,
    },
  };

  const ui = taskUI[task.status as keyof typeof taskUI];
  return (
    // @refresh reset
    <div className="flex flex-row gap-2 justify-between mx-1">
      <p className={ui.titulo}>{task.title}</p>
      { ui.botao && 
        <>
          {/* <button className={`${ui.botao} m-l3`} onClick={() => submit(task, ui.novoStatus)}>Adicionar</button> */}
          <button className={ui.botao} onClick={() => updateTask(router, task, ui.novoStatus)}>
            {ui.textoBotao}
          </button>
          
        </>}
      <button className="bg-red-500 font-bold text-white rounded p-2" onClick={() => deleteTask(router, task.id)}>
        Deletar
      </button>
    </div>
  )
}
