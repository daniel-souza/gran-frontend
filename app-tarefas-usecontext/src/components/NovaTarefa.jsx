import { useContext } from "react";

import { TarefasContext } from "../App";

export default function NovaTarefa() {
  const [tarefas, setTarefas] = useContext(TarefasContext); // Moved useContext here

  function novaTarefa() {
    const input = document.querySelector('div.NovaTarefa input');
    if(input.value === '') return;
    const id = tarefas[tarefas.length-1].id + 1;
    const novaTarefa = { id, titulo: input.value, completa: false };
    setTarefas([...tarefas, novaTarefa]);
    input.value = '';
  }

  return (
    <div className='NovaTarefa'>
      <input type='text' placeholder='Digite uma nova tarefa' />
      <button type='button' onClick={novaTarefa}>Nova Tarefa</button>
    </div>
  )
}
