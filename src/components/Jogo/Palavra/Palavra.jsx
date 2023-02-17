export default function Palavra({ palavraAtual, handleWord, endGame, img, correct }) {
  console.log(img)
  console.log(endGame)
  return (

    <div className="rightBoard">
      <button data-test="choose-word" className="selectWord" onClick={() => handleWord()}>Escolher Palavra</button>
      <div data-test="word" className={`word ${endGame}`}>{palavraAtual.map((e) => correct.includes(e) || img === 6 || endGame === "lose"  ? e : "_")}</div>
    </div>

  )
}