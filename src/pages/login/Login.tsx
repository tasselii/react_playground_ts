import { useState } from "react"
import Home from "../home/Home";

function Login() {

  const[isLogged, setIsLogged] = useState(false);


  return (
    <>
      {
        isLogged ? (
          <Home
            titulo = "Seja Bem Vindo"
            texto = "Login efetuado com sucesso" 
          />
        ) : (
          <div>
            <h1>Componente Login</h1>
            <button onClick={() => setIsLogged(true)}>Entrar</button>
          </div>
        )
      }
    </>
  )
}

export default Login