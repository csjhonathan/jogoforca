import Palavra from "./Palavra/Palavra"
import imagens from "../../utils/imagens"
import styled from "styled-components";

const Game = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1100px;
  @media (max-width : 768px){
    width: 100%;
  }
`
const Forca = styled.img`
  width: 400px;
  height: 467px;
  @media (max-width : 768px){
    width: 200px;
    height: 233px;
  }
`
const Board = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  width: 1100px;
  @media (max-width : 768px){
    width: 100%;
    max-height: 40vh;
  }
`
export default function Jogo({ palavras, palavraAtual, setPalavraAtual, img, setImg, usedLetters, setUsedLetters, setDisabled, endGame, setEndgame, correct, setCorrect, setKick }) {


  const handleWord = () => {

    const indiceAleatorio = parseInt(Math.random()*palavras.length-1);
    const word = palavras[indiceAleatorio];
    setPalavraAtual(word);
    setDisabled(false);
    setImg(0);
    setEndgame("");
    setUsedLetters([])
    setCorrect([])
    setKick("")

  }

  return (
    <Game >
      <Board>
        <Forca src={`${imagens[endGame === "lose" ? 6 : img]}`} alt="" data-test="game-image" />
        <Palavra
          palavraAtual={palavraAtual.split("")}
          handleWord={handleWord}
          usedLetters={usedLetters}
          correct={correct}
          endGame={endGame}
          img={img}
        />
      </Board>
    </Game>
  )
}


