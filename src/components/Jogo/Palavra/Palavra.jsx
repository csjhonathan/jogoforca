export default function Palavra({palavraAtual, handleWord, usedLetters}) {
  
  return (

    <div className="rightBoard">
      <button className="selectWord" onClick={() => handleWord()}>Escolher Palavra</button>
      <div className="currentWord">{palavraAtual.map((e, index) => {
        return (
          <span key={index} className = "currentWordLetter">{usedLetters.includes(e) ? e : "_"}</span>
        )
      })}
      </div>
    </div>

  )
}