import palavras from "../../../palavras";
export default function Palavra({palavraAtual, setPalavraAtual, enable, setEnabled}) {
  const selecionaPalavra = () => {
    const indiceAleatorio = parseInt(Math.random() * palavras.length) - 1;
    // console.log(palavras[indiceAleatorio], palavras[indiceAleatorio].split(""), indiceAleatorio)
    setPalavraAtual(palavras[indiceAleatorio]);
    const palavraAtualArr = palavras[indiceAleatorio].split("");
    if(enable===true){
      setEnabled(false)
    }
  }
  return (
    <div className="wordArea">
      <button className="selectWord" onClick={() => selecionaPalavra()}>Escolher Palavra</button>
      <div className="currentWord">{palavraAtual.split("").map((e, index) => {
        return (
          <span key={index} className = "currentWordLetter">_</span>
        )
      })}
      </div>
    </div>
  )
}