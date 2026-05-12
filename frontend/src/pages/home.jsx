import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

import {
  FaUsers,
  FaFolder,
  FaClipboardList,
  FaBell,
  FaSignOutAlt,
  FaChartLine
} from "react-icons/fa"

function Home() {

  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#161b22] border-r border-gray-800 p-6 flex flex-col justify-between">

        <div>

          <h1 className="text-2xl font-bold mb-10">
            CRM System
          </h1>

          {/* MENU */}
          <nav className="flex flex-col gap-2">

            <button
              onClick={() => navigate("/home")}
              className="bg-[#21262d] px-4 py-3 rounded-lg text-left hover:bg-[#30363d] transition"
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

        </div>

        {/* BOTÃO SAIR */}
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 py-3 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FaSignOutAlt />
          Sair
        </button>

      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-8">

        {/* TOPO */}
        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-1">
              Bem-vindo de volta
            </p>
          </div>

          {/* DIREITA TOPO */}
          <div className="flex items-center gap-4">

            {/* NOTIFICAÇÃO */}
            <button className="bg-[#161b22] border border-gray-800 p-3 rounded-lg hover:bg-[#21262d] transition">
              <FaBell />
            </button>

            {/* PERFIL */}
            <div className="bg-[#161b22] border border-gray-800 px-4 py-2 rounded-xl flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                M
              </div>

              <div>
                <p className="text-sm font-medium">
                  Murilo
                </p>

                <p className="text-xs text-gray-400">
                  {user?.email}
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          {/* CARD 1 */}
          <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">

            <div className="flex items-center justify-between mb-4">

              <span className="text-gray-400">
                Clientes
              </span>

              <FaUsers className="text-blue-400" />

            </div>

            <h2 className="text-3xl font-bold">
              128
            </h2>

            <p className="text-green-400 text-sm mt-2">
              +12 este mês
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">

            <div className="flex items-center justify-between mb-4">

              <span className="text-gray-400">
                Projetos
              </span>

              <FaFolder className="text-yellow-400" />

            </div>

            <h2 className="text-3xl font-bold">
              14
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              4 em andamento
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">

            <div className="flex items-center justify-between mb-4">

              <span className="text-gray-400">
                Tarefas
              </span>

              <FaClipboardList className="text-purple-400" />

            </div>

            <h2 className="text-3xl font-bold">
              36
            </h2>

            <p className="text-red-400 text-sm mt-2">
              8 pendentes
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6">

            <div className="flex items-center justify-between mb-4">

              <span className="text-gray-400">
                Crescimento
              </span>

              <FaChartLine className="text-green-400" />

            </div>

            <h2 className="text-3xl font-bold">
              +22%
            </h2>

            <p className="text-green-400 text-sm mt-2">
              Últimos 30 dias
            </p>

          </div>

        </div>

        {/* ATIVIDADES */}
        <section className="bg-[#161b22] border border-gray-800 rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-6">
            Atividades recentes
          </h2>

          <div className="flex flex-col gap-4">

            <div className="border border-gray-800 rounded-lg p-4">

              <h3 className="font-semibold">
                Novo cliente cadastrado
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                João Silva entrou no sistema.
              </p>

            </div>

            <div className="border border-gray-800 rounded-lg p-4">

              <h3 className="font-semibold">
                Projeto atualizado
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Landing Page Premium recebeu alterações.
              </p>

            </div>

            <div className="border border-gray-800 rounded-lg p-4">

              <h3 className="font-semibold">
                Tarefa concluída
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Reunião com cliente finalizada.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  )
}

export default Home