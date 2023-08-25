import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { UserContext } from '../App';

export default function Login() {
  const navigate = useNavigate();

  const { setUserName, setJWTAuth } = useContext(UserContext);

  async function handleLogin() {
    try {
      const body = {
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value.trim()
      };
      console.log(body);
      const res = await api.post("/login", body);
      setUserName(res.data.user.name);
      setJWTAuth(res.data.token);
      navigate('/profile');
    }
    catch (err) {
      const data = err.response.data;
      document.getElementById('mensagem-erro').innerHTML = data.message;
    }
  };

  return (
    <>
    <h1 className='m-5 text-center font-bold text-blue-800 text-2xl'>Faça o login para a área administrativa</h1>
      <div className='flex font-bold gap-1 flex-col p-20 text-lg  bg-blue-200 text-center w-1/3 m-auto rounded-2xl'>
        <input id='email' className='rounded-md border-2 border-blue-500 p-2' type="text" placeholder='Usuário' />
        <input id='password' className='rounded-md border-2 border-blue-500 p-2' type="password" placeholder='Senha' />
        <button className='rounded-md bg-blue-500 text-white hover:bg-blue-800 p-2 px-10' onClick={handleLogin}>Login</button>
        <div id="mensagem-erro" className='mt-5 text-red-600'></div>
      </div>
    </>
  )
}
