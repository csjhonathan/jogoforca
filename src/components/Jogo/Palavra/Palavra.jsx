export default function Palavra({palavraAtual, handleWord, usedLetters, endGame, img}) {
  return (

    <div className="rightBoard">
      <button data-test="choose-word"  className="selectWord" onClick={() => handleWord()}>Escolher Palavra</button>
      <div data-test="word" className={`currentWord ${endGame}`}>{palavraAtual.map((e, index) => {
        return (
          <span key={index} className = "currentWordLetter">{usedLetters.includes(e) || img === 6 ? e : "_"}</span>
        )
      })}
      </div>
    </div>

  )
}