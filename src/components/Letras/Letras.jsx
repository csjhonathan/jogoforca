import alfabeto from "../../utils/alfabeto"
import LetrasButtons from "./LetrasButtons"

export default function Letras({ palavraAtual, setPalavraAtual, img, setImg, usedLetters, setUsedLetters, disabled, setDisabled, setEndgame, correct, setCorrect}) {


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
            disabled={usedLetters.includes(l) ? true : disabled}
            setDisabled={setDisabled}
            setEndgame = {setEndgame}
            correct = {correct}
            setCorrect = {setCorrect}
          />)
      })}
    </div>
  )
}