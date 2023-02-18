import styled from "styled-components"
export default function Chute({ disabled, kick, setKick, palavraAtual,setEndgame,setDisabled }) {
  const checkAnswer = kickAnswer =>{
    
    if(kickAnswer===""){
      return
    }

    const kickAnswerNormalized = kickAnswer.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    if ( (kickAnswerNormalized === palavraAtual.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))|| kickAnswerNormalized === palavraAtual) {
      setDisabled(true)
      setEndgame("win")
    }else{
      setDisabled(true)
      setEndgame("lose")
    }
  }

  return (
    <KickArea >
      <KickTitle>Já sei a palavra!</KickTitle>
      <KickInput
        disabled={disabled}
        placeholder = {disabled? "INICIE O JOGO" : "TENTE A SORTE"}
        onChange={e => setKick(e.target.value)}
        value={kick}
        onKeyDown = {e => e.code === "Enter" ? checkAnswer(kick): ""}
        data-test="guess-input"
      />
      <KickButton
        disabled={disabled}
        onClick={() => checkAnswer(kick)}
        data-test="guess-button"
        >Chutar
        </KickButton>
    </KickArea>
  )
}

const KickArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const KickTitle = styled.label`
font-size: 20px;
line-height: 23px;
`

const KickInput = styled.input`
  width: 353px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 3px;
  box-shadow: ${({disabled}) => disabled ? "" : "2px 2px 5px rgba(0, 0, 0, 0.25)"};
  transition: all .3s;
  padding: 10px;
  &:focus{
    outline: 1px solid #CCCCCC;
  }
`
const KickButton = styled.button `
  width: 100px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({disabled}) => disabled ? "#798A9F" :"#39739D"};
  border: 1px solid #7AA7C7;
  border-radius: 3px;
  background: ${({disabled}) => disabled ? "#9FAAB5" :"#E1ECF4"};
  transition : background .3s;
  cursor : ${({disabled}) => disabled ? "" :"pointer"};
  &:hover{
    background: #9FAAB5;
    transition: all .3s;
  }
`