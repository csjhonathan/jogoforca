export default function Palavra({ palavraAtual, handleWord, endGame, img, correct }) {

  return (

    <div className="rightBoard">
      <button data-test="choose-word" className="selectWord" onClick={() => handleWord()}>Escolher Palavra</button>
      <div data-test="word" className={`word ${endGame}`}>{img === 6 || endGame === "lose" ? palavraAtual : palavraAtual.map((e) => correct.includes(e) ? e : "_")}</div>
    </div>

  )
}