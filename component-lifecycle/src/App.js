import { 
  useEffect,
  // eslint-disable-next-line
  useLayoutEffect, 
  useState } from 'react';
import './App.css';
import ButtonClassLifeCycle from './components/ButtonClassLifeCycle';
import ToggleComponent from './components/ToggleComponent';
import ButtonHookLifeCycle from './components/ButtonHookLifeCycle';

const darkColor = 'bg-red-800 text-blue-200 hover:bg-red-600';
const lightColor = 'bg-blue-800 text-red-200 hover:bg-blue-600';

function App() {
  const [darkMode, setDarkMode] = useState(true);
 
  // Atrasa a renderização artificialmente para facilitar
  // a visualização das diferenças de efeito entre useEffect e useLayoutEffect
  let now = performance.now();
  while (performance.now() - now < 100) {
    // não fazemos nada
  }

  // troque o useEffect por useLayoutEffect para ver as diferenças de efeito
  // useLayoutEffect(() => {
  useEffect(() => {
      document.body.className = darkMode ? 'bg-gray-900' : 'bg-gray-200';
  }, [darkMode]);

  return (
    <>
      <h1 className={`text-3xl font-bold ${darkMode ? "text-red-600" : "text-blue-700"} m-10 text-center`}>
        App React 18 - Gerenciando Ciclos de Vida de Componentes: Classes e Hooks
      </h1>
      <div className="flex justify-center">
        <button className={`${ darkMode ? darkColor : lightColor } font-bold py-2 px-4 rounded`} 
            onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>
      </div>
      <ToggleComponent className="text-2xl" title="ButtonClassLifeCycle" darkMode={darkMode}>
        <ButtonClassLifeCycle darkMode={darkMode} />
      </ToggleComponent>
      <ToggleComponent className="text-2xl" title="ButtonHookLifeCycle" darkMode={darkMode}>
        <ButtonHookLifeCycle darkMode={darkMode} />
      </ToggleComponent>
    </>
  );  
}

export default App;