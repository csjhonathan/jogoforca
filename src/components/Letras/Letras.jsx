
import { useState } from "react"
import alfabeto from "../../utils/alfabeto"
import LetrasButtons from "./LetrasButtons"

export default function Letras({ palavraAtual, setPalavraAtual, img, setImg, usedLetters, setUsedLetters, disabled, setDisabled }) {


  return (
    <div className="letras">
      {alfabeto.map((l) => {
        return (
          <LetrasButtons
            key={l}
            letra={l}
            palavraAtual={palavraAtual}
            setPalavraAtual={setPalavraAtual}
            img={img}
            setImg={setImg}
            usedLetters={usedLetters}
            setUsedLetters={setUsedLetters}
            disabled={disabled}
            setDisabled={setDisabled}
          />)
      })}
    </div>
  )
}