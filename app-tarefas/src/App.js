import { useState } from 'react';
import './App.css';

export default function App() {

  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', completa: false },
    { id: 2, titulo: 'Estudar Node', completa: true }
  ]);

  function novaTarefa() {
    const input = document.querySelector('div.NovaTarefa input');
    if(input.value === '') return;
    const id = tarefas[tarefas.length-1].id + 1;
    const novaTarefa = { id, titulo: input.value, completa: false };
    setTarefas([...tarefas, novaTarefa]);
    input.value = '';
  }

  function concluirTarefa(tarefa) {
    const index = tarefas.findIndex(t => t.id === tarefa.id);
    tarefas[index].completa = true;
    setTarefas([...tarefas]);
  }

  return (
    <div className="App">
      <header className='Cabecalho'>
        <h1>Aplicativo de Tarefas</h1>
      </header>
      <div className='NovaTarefa'>
        <input type='text' placeholder='Digite uma nova tarefa' />
        <button type='button' onClick={novaTarefa}>Nova Tarefa</button>
      </div>
      <div className='ListaTarefas'>
        <h2>Tarefas Pendentes:</h2>
        {tarefas.filter(tarefa => !tarefa.completa)
            .map(tarefa => (
              <div key={tarefa.id} className='Tarefa'>
                <span>{tarefa.titulo}</span>
                <button type='button' onClick={() => concluirTarefa(tarefa)}>
                  Tarefa concluída?
                </button>
              </div>
        ))}
      </div>
      <div className='ListaTarefas'>
        <h2>Tarefas Concluídas:</h2>
        {tarefas.filter(tarefa => tarefa.completa)
            .map(tarefa => (
              <div key={tarefa.id} className='Tarefa'>
                <span style={{textDecoration: 'line-through'}}>{tarefa.titulo}</span>
              </div>
        ))}
      </div>
    </div>
  );
}