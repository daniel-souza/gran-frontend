import React from 'react';
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';

const Home = () => <div className='text-5xl p-20 bg-slate-300 text-center'>Página Principal</div>;

const ProfileLayout = () => (
  <div className='p-10'>
    <h2 className='text-2xl font-semibold mb-4'>Perfil do Usuário</h2>
    <nav className='mb-4'>
      <ul className='flex space-x-4 text-white font-bold'>
        <li><Link to='' className='bg-blue-600 hover:bg-blue-800 py-2 px-10 rounded-md'>Informações Pessoais</Link></li>
        <li><Link to='posts' className='bg-blue-600 hover:bg-blue-800 py-2 px-10 rounded-md'>Posts do Usuário</Link></li>
        <li><Link to='configuracoes' className='bg-blue-600 hover:bg-blue-800 py-2 px-10 rounded-md'>Configurações do Usuário</Link></li>
      </ul>
    </nav>
    <Outlet /> {/* Renderiza rotas aninhadas */}
  </div>
);

const UserInfo = () => (
  <div className='bg-blue-100 p-4'>
    <h3 className='text-xl font-semibold mb-2'>Informações Pessoais</h3>
    <p>Nome: John Doe</p>
    <p>Email: john@example.com</p>
  </div>
);

const posts = [
  { id: 1, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.' },
  { id: 2, title: 'Post 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.' },
  { id: 3, title: 'Post 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.' },
];

const UserPosts = () => (
  <div className='bg-green-100 p-4'>
    <h3 className='text-xl font-semibold mb-2'>Posts do Usuário</h3>
    <ul className='my-5 flex flex-col gap-5 font-bold text-white'>
      <li><Link to='1' className='bg-green-600 hover:bg-green-800 py-2 px-10 rounded-md'>Post 1</Link></li>
      <li><Link to='2' className='bg-green-600 hover:bg-green-800 py-2 px-10 rounded-md'>Post 2</Link></li>
      <li><Link to='3' className='bg-green-600 hover:bg-green-800 py-2 px-10 rounded-md'>Post 3</Link></li>
    </ul>
    <Outlet /> {/* Renderiza rotas aninhadas */}
  </div>
);

const Post = () => {
  const { postId } = useParams();
  const post = posts.find(post => post.id === Number(postId));

  return (
    <div className='bg-green-200 p-4'>
      <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

const UserSettings = () => (
  <div className='bg-yellow-100 p-4'>
    <h3 className='text-xl font-semibold mb-2'>Configurações do Usuário</h3>
    <p>Idioma: Português</p>
    <p>Notificações: Ativadas</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <nav className='flex justify-between bg-slate-800 text-white p-2'>
        <Link className='px-4 text-3xl font-bold hover:text-blue-500' to='/'>App Rotas Outlet</Link>
        <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10 rounded' to='/perfil'>Perfil</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/perfil' element={<ProfileLayout />}>
          <Route index element={<UserInfo />} />
          <Route path='posts' element={<UserPosts />}>
            <Route path=':postId' element={<Post />} />
          </Route>
          <Route path='configuracoes' element={<UserSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
