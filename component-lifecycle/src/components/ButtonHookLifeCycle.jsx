import { memo, useEffect, useState } from "react";

const limit = 10;
let mounted = false;
const darkColor = 'bg-red-800 text-blue-200 hover:bg-red-600';
const lightColor = 'bg-blue-800 text-red-200 hover:bg-blue-600';

function ButtonHookLifeCycle({ darkMode }) {

  // Similar ao construtor (inicialização da classe)
  const [count, setCount] = useState(0);

  // component did update
  useEffect(() => {
    if(!mounted) return;
    console.log('componentDidUpdate (ButtonHookLifeCycle)');
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  // component did mount / will unmount
  useEffect(() => {
      console.log('componentDidMount (ButtonHookLifeCycle)');
      document.title = `Componente ButtonHookLifeCycle montado!`;
      mounted = true;
    return () => {
      console.log('componentWillUnmount (ButtonHookLifeCycle)');
      document.title = `Componente ButtonHookLifeCycle será desmontado!`;
      alert('O componente ButtonHookLifeCycle será desmontado');
    }
  }, []);

  console.log('render (ButtonHookLifeCycle)');
  return (
    <div className='m-10 flex items-center justify-center'>
      <button  
      className={`p-5 ${darkMode ? darkColor: lightColor } rounded-md text-2xl font-bold`} 
              onClick={() => count < limit && setCount(count+1)}>
        Cliques: {count}
      </button>
    </div>
  )
}

function areCachedPropsEqual(prevProps, nextProps) {
  console.log('shouldComponentUpdate (ButtonHookLifeCycle)');
  return prevProps.darkMode === nextProps.darkMode;
}

export default memo(ButtonHookLifeCycle, areCachedPropsEqual);