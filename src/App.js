import { useState } from "react";
// import imagens from "./utils/imagens";
// import palavras from "./palavras";
import Letras from "./components/Letras/Letras";
import Jogo from "./components/Jogo/Jogo";
function App() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [palavraAtual, setPalavraAtual] = useState("");
  const [img, setImg] = useState(0);
  const [disabled, setDisabled] = useState( true );
  const [endGame, setEndgame] = useState("")
  const [correct, setCorrect] = useState([])

  return (
    <div className="App">
      <Jogo 
        palavraAtual={palavraAtual}
        setPalavraAtual={setPalavraAtual}
        img={img}
        setImg={setImg}
        usedLetters={usedLetters}
        setUsedLetters={setUsedLetters}
        disabled = {disabled}
        setDisabled = {setDisabled}
        endGame = {endGame}
        correct = {correct}
        setCorrect = {setCorrect}
        setEndgame = {setEndgame}
        />
      <Letras
        palavraAtual={palavraAtual}
        setPalavraAtual={setPalavraAtual}
        img={img}
        setImg={setImg}
        usedLetters={usedLetters}
        setUsedLetters={setUsedLetters}
        disabled = {disabled}
        setDisabled = {setDisabled}
        setEndgame = {setEndgame}
        correct = {correct}
        setCorrect = {setCorrect}
      />
    </div>
  );
}

export default App;