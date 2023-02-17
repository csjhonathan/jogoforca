export default function Palavra({palavraAtual, handleWord, usedLetters, endGame, img, correct}) {

  return (

    <div className="rightBoard">
      <button data-test="choose-word"  className="selectWord" onClick={() => handleWord()}>Escolher Palavra</button>
      <div data-test="word" className={`currentWord ${endGame}`}>{palavraAtual.map((e) => correct.includes(e) || img === 6  || endGame === "lose"? e : "_")}
      </div>
    </div>

  )
}