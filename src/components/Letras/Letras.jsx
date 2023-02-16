import alfabeto from "../../utils/alfabeto"
import LetrasButtons from "./LetrasButtons"

export default function Letras ({enable}){
  return (
    <div className="letras">
      {alfabeto.map((l) =>{
        return (
        <LetrasButtons 
          letra = {l} 
          key = {l} 
          enable = {enable}/>)
      } )}
    </div>
  )
}