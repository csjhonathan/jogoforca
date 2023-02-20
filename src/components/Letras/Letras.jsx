import alfabeto from "../../utils/alfabeto"
import LetrasButtons from "./LetrasButtons"
import styled from "styled-components"

const Letters = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: 11px;
  width: 664px;
  @media (max-width : 768px){
    grid-template-columns: repeat(9, 1fr);
    width: 100%;
    gap: 1px;
  
  }
`

export default function Letras({ palavraAtual, setPalavraAtual, img, setImg, usedLetters, setUsedLetters, disabled, setDisabled, setEndgame, correct, setCorrect}) {


  return (
    <Letters>
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
    </Letters>
  )
}