import { useState } from "react";
import Letras from "./components/Letras/Letras";
import Jogo from "./components/Jogo/Jogo";
import palavras from "./palavras.js";
import Chute from "./components/Chute";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`

const GameApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
const GameBottom = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
function App() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [palavraAtual, setPalavraAtual] = useState("");
  const [img, setImg] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [endGame, setEndgame] = useState("");
  const [correct, setCorrect] = useState([]);
  const [kick, setKick] = useState("");

  return (
    <GameApp >
      <GlobalStyles/>
      <Jogo
        palavras={palavras}
        palavraAtual={palavraAtual}
        setPalavraAtual={setPalavraAtual}
        img={img}
        setImg={setImg}
        usedLetters={usedLetters}
        setUsedLetters={setUsedLetters}
        disabled={disabled}
        setDisabled={setDisabled}
        endGame={endGame}
        setEndgame={setEndgame}
        correct={correct}
        setCorrect={setCorrect}
        setKick = {setKick}
      />

      <GameBottom >
        <Letras
          palavraAtual={palavraAtual}
          setPalavraAtual={setPalavraAtual}
          img={img}
          setImg={setImg}
          usedLetters={usedLetters}
          setUsedLetters={setUsedLetters}
          disabled={disabled}
          setDisabled={setDisabled}
          setEndgame={setEndgame}
          correct={correct}
          setCorrect={setCorrect}
        />

        <Chute
          disabled={disabled}
          kick={kick}
          setKick = {setKick}
          palavraAtual={palavraAtual}
          setEndgame={setEndgame}
          setDisabled = {setDisabled}
        />
      </GameBottom>
    </GameApp>
  );
}

export default App;