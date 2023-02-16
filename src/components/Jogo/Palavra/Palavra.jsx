import palavras from "../../../palavras"

export default function Palavra(props) {

  const selecionaPalavra = () => {
    const indiceAleatorio = parseInt(Math.random() * palavras.length) - 1;
    console.log(palavras[indiceAleatorio])
    return palavras[indiceAleatorio]
  }
  return (
    <div className="wordArea">
      <button className="selectWord" onClick={() => selecionaPalavra()}>Escolher Palavra</button>
      <div className="currentWord">{selecionaPalavra().split("").map(e => {
        return (
          <span key={e} className = "currentWordLetter">_</span>
        )
      })}
      </div>
    </div>
  )
}