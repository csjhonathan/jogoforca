import styled from "styled-components"

export default function Palavra({ palavraAtual, handleWord, endGame, img, correct }) {
  return (

    <RightBoard >
      <SelectWord data-test="choose-word" onClick={() => handleWord()}>Escolher Palavra</SelectWord>
      <Word data-test="word" endGame = {endGame} palavraAtual = {palavraAtual}>{palavraAtual.map((e) => correct.includes(e.normalize('NFD').replace(/[\u0300-\u036f]/g, '')) || img === 6 || endGame === "lose" || endGame === "win" ? e : "_")}</Word>
    </RightBoard>

  )
}

const RightBoard = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width : 768px){
    width: 55%;
    height: 80%;
  }

`
const SelectWord = styled.button`
  width: 200px;
  height: 60px;
  background: #27AE60;
  border-radius: 8px;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  border: none;
  cursor : pointer;
  @media (max-width : 768px){
    width: 133px;
    height: 40px;
    font-size: 13px;
  }
`
const Word = styled.div`

  height: 68px;
  display: ${({palavraAtual}) =>  palavraAtual.length === 0 ? "none" : "flex"};
  align-items: center;
  justify-content: flex-end;
  font-weight: 700;
  color: ${({endGame}) => endGame === "" ? "#000000" : endGame === "win" ? "#27AE60" : "#FF0000"};
  font-size: 50px;
  line-height: 68px;
  letter-spacing: 10px;

  @media (max-width : 768px){
    font-size: 25px;
    line-height: 38px;
    letter-spacing: 2px;
  }
`