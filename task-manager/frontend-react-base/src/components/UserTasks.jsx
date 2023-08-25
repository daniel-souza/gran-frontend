import mock from '../data/mock';
import { Link, Outlet } from 'react-router-dom';

export default function UserTasks() {

  return (
    <div className='bg-green-100 p-4'>
      <h3 className='text-xl font-semibold mb-2'>Tarefas do Usuário</h3>
      <div className='grid grid-cols-3 gap-4'>
        {mock.tarefas.map(task => (
          <div key={task.id} className={"p-4 m-2 rounded-md flex flex-col gap-2" + (task.status === 'a fazer' ? ' bg-red-200 text-red-800' : task.status === 'em andamento' ? ' bg-blue-200 text-blue-800' : ' bg-green-200 text-green-800')
          }>
            <h3 className='text-lg font-semibold mb-2'>{task.title}</h3>
            <p>Status: {task.status}</p>
            <Link to={task.id.toString()} className='bg-blue-500 hover:bg-blue-800 font-semibold text-white p-2 px-10 rounded mt-2'>Ver Detalhes</Link>
          </div>
        ))}
      </div>
      <Outlet /> {/* Renderiza rotas aninhadas */}
    </div>
  )
};