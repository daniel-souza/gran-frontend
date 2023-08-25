import { Link, Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-semibold mb-4'>Perfil do Usuário</h2>
      <nav className='mb-4'>
        <ul className='flex space-x-4 text-white font-bold'>
          <li><Link to='' className='bg-blue-600 hover:bg-blue-800 py-2 px-10 rounded-md'>Informações Pessoais</Link></li>
          <li><Link to='tasks' className='bg-blue-600 hover:bg-blue-800 py-2 px-10 rounded-md'>Tarefas do Usuário</Link></li>
          <li><Link to='configuracoes' className='bg-blue-600 hover:bg-blue-800 py-2 px-10 rounded-md'>Configurações do Usuário</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* Renderiza rotas aninhadas */}
    </div>
  );
} 