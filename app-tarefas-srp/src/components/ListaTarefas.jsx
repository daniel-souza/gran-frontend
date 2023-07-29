import Tarefa from "./Tarefa";

export default function ListaTarefas({ titulo, tarefasFiltradas, ...props }) {
  return (
    <div className='ListaTarefas'>
      <h2>{titulo}</h2>
      {tarefasFiltradas.map(tarefa => (
        <Tarefa key={tarefa.id} tarefa={tarefa} {...props} />
      ))}
    </div>
  )
}
