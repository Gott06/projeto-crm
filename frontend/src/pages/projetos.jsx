import { useNavigate } from "react-router-dom"

import {
  FaFolderOpen,
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
  FaClock
} from "react-icons/fa"

function Projetos() {

  const navigate = useNavigate()

  const projetos = [
    {
      id: 1,
      nome: "CRM Dashboard",
      cliente: "Silva Tech",
      status: "Em andamento",
      prazo: "12/04/2026"
    },
    {
      id: 2,
      nome: "Landing Page Premium",
      cliente: "MO Marketing",
      status: "Concluído",
      prazo: "28/03/2026"
    },
    {
      id: 3,
      nome: "Sistema Financeiro",
      cliente: "CS Solutions",
      status: "Pendente",
      prazo: "20/04/2026"
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
            onClick={() => navigate("/clientes")}
            className="hover:bg-[#21262d] px-4 py-3 rounded-lg text-left transition"
          >
            Clientes
          </button>

          <button
            className="bg-[#21262d] px-4 py-3 rounded-lg text-left"
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
              <FaFolderOpen />
              Projetos
            </h1>

            <p className="text-gray-400 mt-1">
              Gerencie todos os seus projetos
            </p>

          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg flex items-center gap-2 transition">

            <FaPlus />

            Novo Projeto

          </button>

        </div>

        {/* PESQUISA */}
        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-4 mb-6">

          <div className="relative">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Pesquisar projeto..."
              className="w-full bg-[#0d1117] border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500"
            />

          </div>

        </div>

        {/* TABELA */}
        <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden">

          {/* TOPO */}
          <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800 text-gray-400 font-medium">

            <span>Projeto</span>
            <span>Cliente</span>
            <span>Status</span>
            <span>Prazo</span>
            <span>Ações</span>

          </div>

          {/* PROJETOS */}
          {projetos.map((projeto) => (

            <div
              key={projeto.id}
              className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800 items-center hover:bg-[#21262d] transition"
            >

              <span className="font-medium">
                {projeto.nome}
              </span>

              <span className="text-gray-400">
                {projeto.cliente}
              </span>

              {/* STATUS */}
              <span>

                <span className={`
                  px-3 py-1 rounded-full text-sm
                  
                  ${projeto.status === "Concluído"
                    ? "bg-green-500/20 text-green-400"
                    : projeto.status === "Em andamento"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-yellow-500/20 text-yellow-400"
                  }
                `}>
                  {projeto.status}
                </span>

              </span>

              {/* PRAZO */}
              <span className="flex items-center gap-2 text-gray-300">

                <FaClock className="text-gray-500" />

                {projeto.prazo}

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

export default Projetos