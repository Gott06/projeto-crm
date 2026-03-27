import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function Home() {

  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#0d1117] text-white">

      <h1 className="text-3xl font-bold">
        Bem vindo ao sistema
      </h1>

      <p className="text-gray-400">
        Usuário logado: {user?.email}
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
      >
        Sair
      </button>

    </div>
  )
}

export default Home