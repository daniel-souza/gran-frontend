import { useParams } from 'react-router-dom';
import mock from '../data/mock';

function Task() {
  const { taskId } = useParams();
  const task = mock.tarefas.find(task => task.id === taskId);
  if(!task) {
    return <div className='bg-green-200 p-4'>Tarefa não encontrada</div>
  }
  switch(task.status) {
    case 'a fazer':
      return (
        <div className='bg-red-200 p-4 text-red-800 text-lg font-semibold mb-2'>
        <h3 className=''>{task.title}</h3>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
      </div>
      );
    case 'em andamento':
      return (
        <div className='bg-blue-200 p-4 text-blue-800 text-lg font-semibold mb-2'>
        <h3 className=''>{task.title}</h3>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
      </div>
      );
    case 'completa':
      return (
        <div className='bg-green-200 p-4 text-green-800 text-lg font-semibold mb-2'>
          <h3 className=''>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
        </div>
        );
    default:
      return null;
  }
};

export default Task;