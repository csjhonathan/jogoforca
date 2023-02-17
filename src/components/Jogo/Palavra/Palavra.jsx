export default function Palavra({palavraAtual, handleWord, endGame, img, correct}) {

  return (

    <div data-test="word" className="rightBoard">
      <button data-test="choose-word"  className="selectWord" onClick={() => handleWord()}>Escolher Palavra</button>
      <h1 data-test="word" className={`word ${endGame}`}>{palavraAtual.map((e) => correct.includes(e) || img === 6  || endGame === "lose"? e : "_")}</h1>
    </div>

  )
}