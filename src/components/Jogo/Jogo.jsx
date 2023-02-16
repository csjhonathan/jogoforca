import Palavra from "./Palavra/Palavra"
import imagens from "../../utils/imagens"

export default function Jogo ({palavraAtual, setPalavraAtual, enable, setEnabled}) {
  return (
    <div className="jogo"> 
      <img src={imagens[0]} alt="" />
      <Palavra
      palavraAtual = {palavraAtual}
      setPalavraAtual = {setPalavraAtual}
      enable = {enable}
      setEnabled = {setEnabled}
      />
    </div>
  )
}