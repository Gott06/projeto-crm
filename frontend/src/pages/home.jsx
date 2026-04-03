import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import { useNavigate } from "react-router-dom"

function Home() {

  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/")
  }

  return (
    <div className="min-h-screen flex bg-[#0d1117] text-white">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#161b22] p-6 flex flex-col justify-between">

        <div>
          <h2 className="text-xl font-bold mb-8">CRM</h2>

          <nav className="flex flex-col gap-4 text-gray-300">
            <span className="hover:text-white cursor-pointer">Dashboard</span>
            <span className="hover:text-white cursor-pointer">Clientes</span>
            <span className="hover:text-white cursor-pointer">Projetos</span>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 py-2 rounded"
        >
          Sair
        </button>

      </div>

      {/* CONTEÚDO */}
      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-4">
          Bem vindo, {user?.email}
        </h1>

        <p className="text-gray-400 mb-8">
          Aqui está o seu painel
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-6">

          <div className="bg-[#161b22] p-6 rounded-lg">
            <h3 className="text-gray-400">Clientes</h3>
            <p className="text-2xl font-bold">12</p>
          </div>

          <div className="bg-[#161b22] p-6 rounded-lg">
            <h3 className="text-gray-400">Projetos</h3>
            <p className="text-2xl font-bold">5</p>
          </div>

          <div className="bg-[#161b22] p-6 rounded-lg">
            <h3 className="text-gray-400">Tarefas</h3>
            <p className="text-2xl font-bold">23</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home