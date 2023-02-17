export default function Palavra({palavraAtual, handleWord, endGame, img, correct}) {

  return (

    <div className="rightBoard">
      <button data-test="choose-word"  className="selectWord" onClick={() => handleWord()}>Escolher Palavra</button>
      <h1 data-test="word" className={`word ${endGame}`}>{palavraAtual}</h1>
    </div>

  )
}