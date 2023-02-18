export default function Palavra({ palavraAtual, handleWord, endGame, img, correct }) {
  return (

    <div className="rightBoard">
      <button data-test="choose-word" className="selectWord" onClick={() => handleWord()}>Escolher Palavra</button>
      <div  className={`word ${endGame}`} data-test="word">{palavraAtual.map((e) => correct.includes(e) || img === 6 || endGame === "lose" || endGame === "win" ? e : "_")}</div>
    </div>

  )
}