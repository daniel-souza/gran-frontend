import { useContext } from "react";
import { TarefasContext } from "../App";

export default function Tarefa( { tarefa } ) {
  
  const { dispatch } = useContext(TarefasContext);

  function concluirTarefa(tarefa) {
    dispatch({ type: "CONCLUIR_TAREFA", tarefa });
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