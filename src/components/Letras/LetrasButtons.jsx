export default function LetrasButtons({letra, enable}){
  return (
    <button disabled = {enable} className={`letra ${enable===false? "enabled" : ""}`} onClick = {() => console.log(letra,enable)}>{letra.toLocaleUpperCase()}</button>
  )
}