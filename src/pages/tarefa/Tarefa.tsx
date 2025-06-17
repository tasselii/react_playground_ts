import { useEffect, useState } from "react"

function Tarefa() {

  const[completed, setCompleted] = useState(false);
  const[tarefa, setTarefa] = useState('');

  useEffect(() =>{
    if (completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!')
    }
  }, [completed])

    return (
    <div>
      <h1>Componente Tarefa</h1>
      <h2>{tarefa}</h2>
      <p>Conclua a Tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
      </div>
  )
}

export default Tarefa