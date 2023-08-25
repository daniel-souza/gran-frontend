import { UserContext } from "../App";
import { useContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from 'react-router-dom';

export default function UserInfo() {

  const [tarefas, setTarefas] = useState([]);
  const [user, setUser] = useState({});

  const { setUserName, JWTAuth, setJWTAuth } = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function getUserInfo() {
      try {
        const { data } = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${JWTAuth}`
          }
        });
        setUser(data.user);
        const res = await api.get('/profile/tasks', {
          headers: {
            Authorization: `Bearer ${JWTAuth}`
          }
        });
        setTarefas(res.data.tasks);
      } catch(err) {
        setJWTAuth(null);
        setUserName(null);
        navigate('/login');
      }
    }
    getUserInfo();
  });
  
  return (

    <div className='bg-blue-100 p-4'>
      <h3 className='text-xl font-semibold mb-2'>Informações Pessoais</h3>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <h3 className='text-xl font-semibold mb-2 mt-4'>Resumo do Usuário</h3>
        <p>A fazer: {tarefas.filter(t => t.status === "a fazer").length}</p>  
        <p>Em andamento: {tarefas.filter(t => t.status === "em andamento").length}</p>
        <p>Completa(s): {tarefas.filter(t => t.status === "completa").length}</p>
    </div>
  );
} 