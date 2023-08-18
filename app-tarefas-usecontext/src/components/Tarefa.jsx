import { useContext } from "react";

import { TarefasContext } from "../App";



export default function Tarefa( { tarefa } ) {
  
  const [tarefas, setTarefas] = useContext(TarefasContext);

  function concluirTarefa(tarefa) {
    const index = tarefas.findIndex(t => t.id === tarefa.id);
    tarefas[index].completa = true;
    setTarefas([...tarefas]);
  }


  return (
    <div key={tarefa.id} className='Tarefa'>
      <span style={{textDecoration: tarefa.completa && 'line-through'}}>
        {tarefa.titulo}
      </span>
      {!tarefa.completa 
        && <button type='button' 
            onClick={() => concluirTarefa(tarefa)}>
              Tarefa concluída?
        </button>}
    </div>
  )
}