import mock from '../data/mock';

export default function UserInfo() {
  return (

    <div className='bg-blue-100 p-4'>
      <h3 className='text-xl font-semibold mb-2'>Informações Pessoais</h3>
      <p>Nome: John Doe</p>
      <p>Email: john@doe.com</p>
      <h3 className='text-xl font-semibold mb-2 mt-4'>Resumo do Usuário</h3>
        <p>A fazer: {mock.tarefas.filter(t => t.status === "a fazer").length}</p>  
        <p>Em andamento: {mock.tarefas.filter(t => t.status === "em andamento").length}</p>
        <p>Completa(s): {mock.tarefas.filter(t => t.status === "completa").length}</p>
    </div>
  );
} 