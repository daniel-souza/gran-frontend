import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function Login({ setHasJWTAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulação de autenticação bem-sucedida
    // const username = document.getElementById('username').value;
    // const password = document.getElementById('password').value;
    // if (username !== user.username || password !== user.password) {
    //   document.getElementById('mensagem-erro').innerHTML = 'Usuário ou senha inválidos';
    //   return;
    // } 
    setHasJWTAuth(true);
    navigate('/profile');
  };

  return (
    <>
    <h1 className='m-5 text-center font-bold text-blue-800 text-2xl'>Faça o login para a área administrativa</h1>
      <div className='flex font-bold gap-1 flex-col p-20 text-lg  bg-blue-200 text-center w-1/3 m-auto rounded-2xl'>
        <input id='username' className='rounded-md border-2 border-blue-500 p-2' type="text" placeholder='Usuário' />
        <input id='password' className='rounded-md border-2 border-blue-500 p-2' type="password" placeholder='Senha' />
        <button className='rounded-md bg-blue-500 text-white hover:bg-blue-800 p-2 px-10' onClick={handleLogin}>Login</button>
        <div id="mensagem-erro" className='mt-5 text-red-600'></div>
      </div>
    </>
  )
}
