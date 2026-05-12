import { useNavigate } from "react-router-dom"
import {
  FaUsers,
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash
} from "react-icons/fa"

function Clientes() {

  const navigate = useNavigate()

  const clientes = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao@email.com",
      empresa: "Silva Tech",
      status: "Ativo"
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      email: "maria@email.com",
      empresa: "MO Marketing",
      status: "Pendente"
    },
    {
      id: 3,
      nome: "Carlos Santos",
      email: "carlos@email.com",
      empresa: "CS Solutions",
      status: "Ativo"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#161b22] border-r border-gray-800 p-6">

        <h1 className="text-2xl font-bold mb-10">
          CRM System
        </h1>

        <nav className="flex flex-col gap-2">

          <button
            onClick={() => navigate("/home")}
            className="hover:bg-[#21262d] px-4 py-3 rounded-lg text-left transition"
          >
            Dashboard
          </button>

          <button
            className="bg-[#21262d] px-4 py-3 rounded-lg text-left"
          >
            Clientes
          </button>

          <button
            onClick={() => navigate("/projetos")}
            className="hover:bg-[#21262d] px-4 py-3 rounded-lg text-left transition"
          >
            Projetos
          </button>

          <button
            onClick={() => navigate("/tarefas")}
            className="hover:bg-[#21262d] px-4 py-3 rounded-lg text-left transition"
          >
            Tarefas
          </button>

        </nav>

      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-8">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FaUsers />
              Clientes
            </h1>

            <p className="text-gray-400 mt-1">
              Gerencie todos os seus clientes
            </p>

          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg flex items-center gap-2 transition">

            <FaPlus />

            Novo Cliente

          </button>

        </div>

        {/* PESQUISA */}
        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-4 mb-6">

          <div className="relative">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Pesquisar cliente..."
              className="w-full bg-[#0d1117] border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500"
            />

          </div>

        </div>

        {/* TABELA */}
        <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden">

          {/* TOPO TABELA */}
          <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800 text-gray-400 font-medium">

            <span>Nome</span>
            <span>Email</span>
            <span>Empresa</span>
            <span>Status</span>
            <span>Ações</span>

          </div>

          {/* CLIENTES */}
          {clientes.map((cliente) => (

            <div
              key={cliente.id}
              className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800 items-center hover:bg-[#21262d] transition"
            >

              <span className="font-medium">
                {cliente.nome}
              </span>

              <span className="text-gray-400">
                {cliente.email}
              </span>

              <span>
                {cliente.empresa}
              </span>

              <span>

                <span className={`
                  px-3 py-1 rounded-full text-sm
                  ${cliente.status === "Ativo"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                  }
                `}>
                  {cliente.status}
                </span>

              </span>

              {/* AÇÕES */}
              <div className="flex items-center gap-3">

                <button className="text-blue-400 hover:text-blue-300 transition">
                  <FaEye />
                </button>

                <button className="text-yellow-400 hover:text-yellow-300 transition">
                  <FaEdit />
                </button>

                <button className="text-red-400 hover:text-red-300 transition">
                  <FaTrash />
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  )
}

export default Clientes