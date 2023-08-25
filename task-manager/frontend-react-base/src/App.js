import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProfileLayout from './components/ProfileLayout';
import UserInfo from './components/UserInfo';
import UserTasks from './components/UserTasks';
import Task from './components/Task';
import UserSettings from './components/UserSettings';
import Login from './components/Login';

function App() {

  const [hasJWTAuth, setHasJWTAuth] = React.useState(false);

  const handleLogout = () => {
    setHasJWTAuth(false);
  };


  return (
    <BrowserRouter>
      <nav className='flex justify-between bg-slate-800 text-white p-2'>
        <Link className='px-4 text-3xl font-bold hover:text-blue-500' to='/'>App Tarefas</Link>
        {
          !hasJWTAuth 
            ? <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10 rounded' to='/login'>Login</Link>
            : <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10 rounded' to='/' onClick={handleLogout}>Logout</Link>
        }
        
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setHasJWTAuth={setHasJWTAuth} />} />
        <Route path='/profile' element={<ProfileLayout />}>
          <Route index element={<UserInfo />} />
          <Route path='tasks' element={<UserTasks />}>
            <Route path=':taskId' element={<Task />} />
          </Route>
          <Route path='configuracoes' element={<UserSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
