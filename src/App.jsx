import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Perfil/formulario"
import ReposList from "./components/Reposlist"

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
    <>
    {/* anotar sobre o onBlur */}
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario/>
    )}
    <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>Toggle form</button> */}
    </>
  )
}
export default App
