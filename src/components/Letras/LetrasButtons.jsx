import { useState } from "react";

export default function LetrasButtons({letra, palavraAtual, setPalavraAtual, img, setImg, usedLetters, setUsedLetters, disabled}){
  const [disableLetter, setDisableLetter] = useState(false)
  
  const handleUsedLetter = letter => {
    
    const used = [...usedLetters, letter]
    const correctLetters = palavraAtual.split("").map( l => {
      if(used.includes(l)){
        return l
      }
    })
    const currentImg = img+1
    console.log(correctLetters)
    console.log(letter)
    if(currentImg < 6){
      setPalavraAtual(palavraAtual)
      setUsedLetters(used)
    }

    if(!palavraAtual.includes(letter) && img < 6){
      setImg(currentImg)
    }
    setDisableLetter(true)  

    if(correctLetters.join("").length === palavraAtual.length && correctLetters.join("") === palavraAtual){
      setTimeout(() => alert("Você venceu"), 500)
    }else if(currentImg===6){
      setTimeout(() => alert("Você perdeu"), 500)
    }
  }
  return (
    <button disabled = {disabled === disableLetter ? disableLetter : true } className={`letra ${(disableLetter===disabled? "enabled" : "")}`} onClick = {() => handleUsedLetter(letra)} >{letra.toUpperCase()}</button>
  )
}