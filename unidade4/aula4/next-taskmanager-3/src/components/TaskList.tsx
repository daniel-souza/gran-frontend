import Task from "./Task"

type TaskProps = {
  taskList: Task[]
  title: string
}

export default function TaskList({ taskList, title }: TaskProps) {
  return (
    <div className="flex flex-col gap-2 bg-yellow-200 m-2 rounded">
      <p className="text-2xl p-2 font-bold rounded bg-slate-800 text-white">{title}</p>
      <ul className="flex flex-col gap-2">
        {taskList.length === 0 && <p className="bg-blue-100 m-1 p-1">Nenhuma tarefa</p>}
        {taskList.map((task, index) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}
