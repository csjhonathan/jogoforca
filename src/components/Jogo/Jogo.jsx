import Palavra from "./Palavra/Palavra"
import imagens from "../../utils/imagens"
import palavras from "../../palavras";
import Letras from "../Letras/Letras";
import { useState } from "react";

export default function Jogo() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [palavraAtual, setPalavraAtual] = useState("");
  const [img, setImg] = useState(0)
  const [disabled, setDisabled] = useState( true );

  const handleWord = () => {

    if (palavraAtual === "") {
      const indiceAleatorio = parseInt(Math.random() * palavras.length) - 1;
      const word = palavras[indiceAleatorio];
      setPalavraAtual(word);
      setDisabled(false)
      console.log(word)
    }
    
  }

  return (
    <div className="jogo">
      <div className="board">
        <img src={`${imagens[img]}`} alt="" />
        <Palavra
          palavraAtual={palavraAtual.split("")}
          handleWord={handleWord}
          usedLetters={usedLetters}
        />
      </div>
      <Letras
        palavraAtual={palavraAtual}
        setPalavraAtual={setPalavraAtual}
        img={img}
        setImg={setImg}
        usedLetters={usedLetters}
        setUsedLetters={setUsedLetters}
        disabled = {disabled}
        setDisabled = {setDisabled}
      />
    </div>
  )
}

