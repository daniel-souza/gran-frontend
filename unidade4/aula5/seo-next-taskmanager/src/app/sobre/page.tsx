
export function generateStaticParams() {
  return [];
}

export default function Sobre() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-4">Sobre</h1>
        <p className="text-base text-gray-700">
          Este é um gerenciador de tarefas simples criado para ajudar você a se organizar melhor.
        </p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Funcionalidades:</h2>
          <ul className="list-disc list-inside">
            <li className="text-base text-gray-600">Adicionar tarefas</li>
            <li className="text-base text-gray-600">Marcar tarefas como em andamento</li>
            <li className="text-base text-gray-600">Marcar tarefas como concluídas</li>
            <li className="text-base text-gray-600">Excluir tarefas</li>
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Contato:</h2>
          <p className="text-base text-gray-700">
            Para mais informações, por favor entre em contato pelo email: <a href="mailto:info@example.com" className="text-blue-500 underline">info@example.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
