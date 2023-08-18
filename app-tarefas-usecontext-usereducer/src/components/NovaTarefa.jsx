import { useContext } from "react";

import { TarefasContext } from "../App";

export default function NovaTarefa() {
  const { dispatch } = useContext(TarefasContext);

  function novaTarefa() {
    const input = document.querySelector('div.NovaTarefa input');
    if(input.value === '') return;
    dispatch({type: "NOVA_TAREFA", value: input.value });
    input.value = '';
  }

  return (
    <div className='NovaTarefa'>
      <input type='text' placeholder='Digite uma nova tarefa' />
      <button type='button' onClick={novaTarefa}>Nova Tarefa</button>
    </div>
  )
}
