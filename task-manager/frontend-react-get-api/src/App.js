import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProfileLayout from './components/ProfileLayout';
import UserInfo from './components/UserInfo';
import UserTasks from './components/UserTasks';
import Task from './components/Task';
import UserSettings from './components/UserSettings';
import Login from './components/Login';

export const UserContext = createContext(null);

function App() {

  const [JWTAuth, setJWTAuth] = useState(null);
  const [userName, setUserName] = useState(null);

  const handleLogout = () => {
    setJWTAuth(null);
  };

  return (
    <BrowserRouter>
      <nav className='flex justify-between bg-slate-800 text-white p-2'>
        <Link className='px-4 text-3xl font-bold hover:text-blue-500' to='/'>App Tarefas</Link>
        {
          !JWTAuth 
            ? <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10 rounded' to='/login'>Login</Link>
            : (
              <div className='flex items-center'>
                <span className='mr-4'>Olá, {userName}</span>
                <Link className='bg-blue-500 hover:bg-blue-800 p-2 px-10 rounded' to='/' onClick={handleLogout}>Logout</Link>
              </div>
            )
        }
      </nav>
      <UserContext.Provider value={{ JWTAuth, setJWTAuth, userName, setUserName }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<ProfileLayout />}>
            <Route index element={<UserInfo />} />
            <Route path='tasks' element={<UserTasks />}>
              <Route path=':taskId' element={<Task />} />
            </Route>
            <Route path='configuracoes' element={<UserSettings />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
