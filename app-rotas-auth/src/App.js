import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';

const Home = () => <div className='text-5xl p-20 bg-slate-300 text-center'>Página Principal</div>;
const Sobre = () => <div className='text-5xl p-20 bg-slate-300 text-center'>Página Sobre</div>;
const Contato = () => <div className='text-5xl p-20 bg-slate-300 text-center'>Página Contato</div>;
const Admin = () => <div className='text-5xl p-20 bg-slate-300 text-center'>Área Administrativa</div>;

const NotFound = () => <div className='text-5xl p-20 bg-slate-300 text-center'>Página não encontrada</div>;

const user = {
  username: 'admin',
  password: '123456',
  name: 'John Doe',
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Simulação de logout
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <div className="flex justify-between bg-slate-800 text-white font-bold">
        <nav className="flex space-x-1 ">
            <Link className="px-4 text-3xl hover:text-blue-300" to="/">App Rotas Auth</Link>
            <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10' to="/">Home</Link>
            <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10' to="/sobre">Sobre</Link>
            <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10' to="/contato">Contato</Link>
        </nav>
        {isAuthenticated && <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10' to="/admin">Área administrativa</Link>}
        <nav className="flex space-x-1 items-center">
            {
              !isAuthenticated 
              ? <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10' to="/login">Entrar</Link>
              : <>
                <span className="px-4 text-xl font-bold hover:text-blue-300" to="/">Bem vindo {user.name}</span>
                <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10' onClick={handleLogout} to="/">Sair</Link>
              </>
            }
        </nav>
      </div>
      
      <div className="mx-10 mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login user={user} setIsAuthenticated={setIsAuthenticated}  />} />
          <Route
            path="/admin"
            element={isAuthenticated ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
