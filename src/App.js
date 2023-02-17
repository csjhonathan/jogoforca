import { useState } from "react";
import Letras from "./components/Letras/Letras";
import Jogo from "./components/Jogo/Jogo";
import palavras from "./palavras";
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
        palavras = {palavras} 
        palavraAtual={palavraAtual}
        setPalavraAtual={setPalavraAtual}
        img={img}
        setImg={setImg}
        usedLetters={usedLetters}
        setUsedLetters={setUsedLetters}
        disabled = {disabled}
        setDisabled = {setDisabled}
        endGame = {endGame}
        setEndgame = {setEndgame}
        correct = {correct}
        setCorrect = {setCorrect}
        
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