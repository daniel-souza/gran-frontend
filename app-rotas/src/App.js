import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const Home = () => <div className='text-5xl p-20 bg-slate-300 text-center'>Página Principal</div>;
const Sobre = () => <div className='text-5xl p-20 bg-slate-300 text-center'>Página Sobre</div>;
const Contato = () => <div className='text-5xl p-20 bg-slate-300 text-center'>Página Contato</div>;
const NotFound = () => <div className='text-5xl p-20 bg-slate-300 text-center'>Página não encontrada</div>;

function App() {
  return (
    <BrowserRouter>
      <nav className="flex space-x-1 bg-slate-800 text-white">
        <Link className="px-4 text-3xl font-bold hover:text-blue-300" to="/">App Rotas</Link>
          <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10' to="/">Home</Link>
          <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10' to="/sobre">Sobre</Link>
          <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10' to="/contato">Contato</Link>
      </nav>
      <div className="mx-10 mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
