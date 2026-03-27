import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { AuthContext } from "../context/AuthContext"

function Login() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [erro, setErro] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  function handleLogin(e) {
    e.preventDefault()

    setErro("")
    setLoading(true)

    setTimeout(() => {

      if (email === "teste@email.com" && senha === "teste") {

        login(email)
        navigate("/home")

      } else {
        setErro("Email ou senha inválidos")
      }

      setLoading(false)

    }, 1200)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117]">

      <h1 className="text-white text-3xl font-semibold mb-8">
        Meu Sistema
      </h1>

      <div className="bg-[#161b22] border border-gray-700 rounded-lg p-8 w-full max-w-lg">

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          {/* EMAIL */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0d1117] border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* SENHA */}
          <div className="flex flex-col">

            <label className="text-sm text-gray-300 mb-1">
              Senha
            </label>

            <div className="relative">

              <input
                type={mostrarSenha ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="bg-[#0d1117] border border-gray-600 rounded-md p-2 text-white w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />

              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {mostrarSenha ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>

            </div>

            <span className="text-blue-400 text-sm mt-2 hover:underline cursor-pointer self-end">
              Esqueceu a senha?
            </span>

          </div>

          {/* ERRO */}
          {erro && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 text-sm p-2 rounded-md">
              {erro}
            </div>
          )}

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#238636] hover:bg-[#2ea043] text-white py-2 rounded-md font-medium mt-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login