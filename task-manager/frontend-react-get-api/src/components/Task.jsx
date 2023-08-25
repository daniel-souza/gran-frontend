import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import api from '../api';

function Task() {
  const { taskId } = useParams();

  const [task, setTask] = useState([]);

  const { setUserName, JWTAuth, setJWTAuth } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserTasks() {
      try {
        const res = await api.get(`/profile/tasks/${taskId}`, {
          headers: {
            Authorization: `Bearer ${JWTAuth}`
          }
        });
        setTask(res.data.task);
      } catch(err) {
        setJWTAuth(null);
        setUserName(null);
        navigate('/login');
      }
    }
    getUserTasks();
  });
  
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