import { useState } from "react"
import NavBar from "../navBar/NavBar";

function Header() {
  const [valor, setValor] = useState(false);

  function handleChange() {setValor(!valor); }

  return (
    <>
      <div>
        <link 
        rel="stylesheet" 
        href="https://ronaltyfernandes.github.io/" />
        <h1>Ronalty Fernandes</h1>
      </div>
      <div>
        {/* lista de itens da pagina */}
        <button onClick={handleChange}>///</button>
        {valor? <NavBar/>: <p></p>}
      </div>
    </>
  )
}

export default Header
