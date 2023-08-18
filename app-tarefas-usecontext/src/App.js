import { useState } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';
import { createContext } from 'react';


export const TarefasContext = createContext(null);

export default function App() {


  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', completa: false },
    { id: 2, titulo: 'Estudar Node', completa: true }
  ]);

  return (
    <div className="App">
      <TarefasContext.Provider value={[ tarefas, setTarefas ]}>
        <Cabecalho />
        <NovaTarefa />
        <ListaTarefas titulo="Tarefas Pendentes:" 
            tarefasFiltradas={tarefas.filter(t => !t.completa)} />
        <ListaTarefas titulo="Tarefas Concluídas:" 
            tarefasFiltradas={tarefas.filter(t => t.completa)} />
      </TarefasContext.Provider>
    </div>
  );
}