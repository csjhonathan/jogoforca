import { useState } from "react";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras/Letras";
import palavras from "./palavras";

function App() {
  const [palavraAtual, setPalavraAtual] = useState("");
  const [enable, setEnabled] = useState(true);
  return (
    <div className="App">
      <Jogo 
      palavraAtual = {palavraAtual}
      setPalavraAtual = {setPalavraAtual}
      enable = {enable}
      setEnabled = {setEnabled}
      />
      <Letras enable = {enable}/>
    </div>
  );
}

export default App;