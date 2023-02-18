export default function LetrasButtons({ letra, palavraAtual, setPalavraAtual, img, setImg, usedLetters, setUsedLetters, disabled, setDisabled, setEndgame, setCorrect }) {
  

  const handleUsedLetter = letter => {

    const used = [...usedLetters, letter]
    const correctLetters = palavraAtual.split("").map(l => {
      if (used.includes(l)) {
        return l
      }
    })

    setCorrect(correctLetters)

    let currentImg = img
    if (!palavraAtual.includes(letter) && img < 6) {
      currentImg = img+1
      setImg(currentImg)
    }

    if (currentImg < 6) {
      setPalavraAtual(palavraAtual)
      setUsedLetters(used)
    }

    if (!palavraAtual.includes(letter) && img < 6) {
      setImg(currentImg)
    }
    if (correctLetters.join("").length === palavraAtual.length && correctLetters.join("") === palavraAtual) {
      setDisabled(true)
      setEndgame("win")
    } else if (currentImg === 6) {
      setDisabled(true)
      setEndgame("lose")
    }
  }

  return (
    <button data-test="letter"  
    disabled={disabled} 
    className={`letra ${(disabled ? "" : "enabled")}`} 
    onClick={() => handleUsedLetter(letra)}
    >{letra.toUpperCase()}</button>
  )
}