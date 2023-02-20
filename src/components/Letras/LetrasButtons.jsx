import styled from "styled-components"


export default function LetrasButtons({ letra, palavraAtual, setPalavraAtual, img, setImg, usedLetters, setUsedLetters, disabled, setDisabled, setEndgame, setCorrect }) {
  
  const handleUsedLetter = letter => {
    const normalizedWord = palavraAtual.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const used = [...usedLetters, letter]
    const correctLetters = normalizedWord.split("").map(l => used.includes(l) ? l : undefined)
    setCorrect(correctLetters)

    let currentImg = img
    if (!normalizedWord.includes(letter) && img < 6) {
      currentImg = img+1
      setImg(currentImg)
    }

    if (currentImg < 6) {
      setPalavraAtual(palavraAtual)
      setUsedLetters(used)
    }

    if (!normalizedWord.includes(letter) && img < 6) {
      setImg(currentImg)
    }
    if (correctLetters.join("").length === normalizedWord.length && correctLetters.join("") === normalizedWord) {
      setDisabled(true)
      setEndgame("win")
    } else if (currentImg === 6) {
      setDisabled(true)
      setEndgame("lose")
    }
  }

  return (
    <LettersButton data-test="letter"  
    disabled={disabled} 
    onClick={() => handleUsedLetter(letra)}
    >{letra.toUpperCase()}</LettersButton>
  )
}

const LettersButton = styled.button`

  width: 40px;
  height: 40px;
  background:${({disabled}) => disabled ? "#9FAAB5" :"#E1ECF4"};
  border: 1px solid #7AA7C7;
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({disabled}) => disabled ? "#798A9F" :"#39739D"};
  transition : all .3s;
  cursor : ${({disabled}) => disabled ? "" :"pointer"};
  &:hover{
    background: #9FAAB5;
    transition: all .3s;
  }

`