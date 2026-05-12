import { useState } from "react"
import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaPlus,
  FaSearch
} from "react-icons/fa"

function Tarefas() {

  const [tarefas] = useState([
    {
      id: 1,
      titulo: "Criar layout do dashboard",
      status: "Concluída",
      prioridade: "Alta"
    },
    {
      id: 2,
      titulo: "Integrar API de clientes",
      status: "Em andamento",
      prioridade: "Média"
    },
    {
      id: 3,
      titulo: "Corrigir bugs do login",
      status: "Pendente",
      prioridade: "Alta"
    },
    {
      id: 4,
      titulo: "Adicionar sistema de notificações",
      status: "Pendente",
      prioridade: "Baixa"
    }
  ])

  function corStatus(status) {

    if (status === "Concluída") {
      return "text-green-400 bg-green-400/10"
    }

    if (status === "Em andamento") {
      return "text-yellow-400 bg-yellow-400/10"
    }

    return "text-red-400 bg-red-400/10"
  }

  function corPrioridade(prioridade) {

    if (prioridade === "Alta") {
      return "text-red-400"
    }

    if (prioridade === "Média") {
      return "text-yellow-400"
    }

    return "text-green-400"
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-8">

      {/* TOPO */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Tarefas
          </h1>

          <p className="text-gray-400 mt-1">
            Gerencie suas tarefas do sistema
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg flex items-center gap-2 transition">
          <FaPlus />
          Nova tarefa
        </button>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">

          <div className="flex items-center justify-between mb-4">

            <span className="text-gray-400">
              Total de tarefas
            </span>

            <FaTasks className="text-blue-400" />

          </div>

          <h2 className="text-3xl font-bold">
            24
          </h2>

        </div>

        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">

          <div className="flex items-center justify-between mb-4">

            <span className="text-gray-400">
              Concluídas
            </span>

            <FaCheckCircle className="text-green-400" />

          </div>

          <h2 className="text-3xl font-bold">
            16
          </h2>

        </div>

        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">

          <div className="flex items-center justify-between mb-4">

            <span className="text-gray-400">
              Pendentes
            </span>

            <FaClock className="text-yellow-400" />

          </div>

          <h2 className="text-3xl font-bold">
            8
          </h2>

        </div>

      </div>

      {/* BUSCA */}
      <div className="bg-[#161b22] border border-gray-800 rounded-xl p-4 mb-6">

        <div className="relative">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            placeholder="Buscar tarefas..."
            className="w-full bg-[#0d1117] border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      {/* LISTA */}
      <div className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden">

        {/* HEADER */}
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-800 text-gray-400 font-semibold">

          <span>ID</span>
          <span>Tarefa</span>
          <span>Status</span>
          <span>Prioridade</span>

        </div>

        {/* ITENS */}
        {tarefas.map((tarefa) => (

          <div
            key={tarefa.id}
            className="grid grid-cols-4 gap-4 p-4 border-b border-gray-800 hover:bg-[#21262d] transition"
          >

            <span>
              #{tarefa.id}
            </span>

            <span className="font-medium">
              {tarefa.titulo}
            </span>

            <span
              className={`w-fit px-3 py-1 rounded-full text-sm ${corStatus(tarefa.status)}`}
            >
              {tarefa.status}
            </span>

            <span className={`font-semibold ${corPrioridade(tarefa.prioridade)}`}>
              {tarefa.prioridade}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Tarefas