import { useReducer } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';
import { createContext } from 'react';


export const TarefasContext = createContext(null);

// Reducer function
function tarefasReducer(tarefas, action) {
  switch (action.type) {
    case "NOVA_TAREFA":
      const id = tarefas[tarefas.length-1].id + 1;
      const novaTarefa = { id, titulo: action.value, completa: false };
      return [...tarefas, novaTarefa];
    case "CONCLUIR_TAREFA":
      const index = tarefas.findIndex(t => t.id === action.tarefa.id);
      tarefas[index].completa = true;
      return [...tarefas];
    default:
      return tarefas;
  }
}

export default function App() {

  const [tarefas, dispatch] = useReducer(tarefasReducer, [
    { id: 1, titulo: 'Estudar React', completa: false },
    { id: 2, titulo: 'Estudar Node', completa: true }
  ]);

  return (
    <div className="App">
      <TarefasContext.Provider value={{ dispatch }}>
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