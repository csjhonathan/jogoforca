import alfabeto from "../../utils/alfabeto"
import LetrasButtons from "./LetrasButtons"

export default function Letras (props){
  return (
    <div className="letras">
      {alfabeto.map(l => <LetrasButtons letra = {l.toLocaleUpperCase()}/>)}
    </div>
  )
}