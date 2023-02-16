import Palavra from "./Palavra/Palavra"
import imagens from "../../utils/imagens"

export default function Game (props) {
  return (
    <div className="jogo"> 
      <img src={imagens[0]} alt="" />
      <Palavra />
    </div>
  )
}