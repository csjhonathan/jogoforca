export default function Chute({ disabled, kick, setKick, palavraAtual,setEndgame,setDisabled }) {
  const checkAnswer = kickAnswer =>{
    
    if ( kickAnswer === palavraAtual) {
      setDisabled(true)
      setEndgame("win")
    }else{
      setDisabled(true)
      setEndgame("lose")
    }
  }

  return (
    <div className="kickArea">
      <label className="kickTitle">Já sei a palavra!</label>
      <input
        className={`kickInput ${disabled ? "" : "inputEnabled"}`}
        disabled={disabled}
        onChange={e => setKick(e.target.value)}
        value={kick}
        onKeyDown = {e => e.code === "Enter" ? checkAnswer(kick): ""}
        data-test="guess-input"
      />
      <button
        className={`kick ${disabled ? "" : "enabled"}`}
        disabled={disabled}
        onClick={() => checkAnswer(kick)}
        data-test="guess-button"
        >Chutar</button>
    </div>
  )
}