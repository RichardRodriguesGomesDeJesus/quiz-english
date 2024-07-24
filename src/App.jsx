import styled from "styled-components";
import Footer from "./components/footer.jsx";
import { useState } from "react";
import Question from "./components/Question.jsx";

const Comtainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction:column;
  flex-grow: 1;
  *{
    font-family: "Inter", sans-serif;
  }
`
const BtnStart = styled.button`
  background: #D9D9D9;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 32px;
  margin: 27px 0 0 0;
  height: 80px;
  min-width: 270px;
`

const Title = styled.h1`
  font-weight:800;
  text-align: center;
  
  @media screen and (min-width: 0){ 
    font-size:16px;
  }
  @media screen and (min-width: 768px){
    font-size:24px;
    margin: 49px 0 0;
  }
  @media screen and (min-width: 1024px){
    font-size:32px;
    margin: 86px 0 0;
  }
`
const Text = styled.p`
  font-weight:400;
  text-align: center;
  @media screen and (min-width: 0){
    font-size:16px;
    margin: 106px 0 0;
    strong{
      font-size:16px;
    }
  }
  @media screen and (min-width: 768px){
    font-size:24px;
    strong{
      font-size:24px;
    }
  }
  @media screen and (min-width: 1024px){
    font-size:32px;
    margin: 170px 0 0;
    strong{
      font-size:32px;
    }
  }
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export default function App() {
  const [start, setStart] = useState(false)
  return (
    <Div className="App">
      {start === false&&(
        <Comtainer>
          <Title>Quiz interativo de Vocabulário em Inglês</Title>
          <Text>
            <strong>Bem vindo ao quiz interativo!</strong>
            <br/>
              Teste seus conhecimentos da lingua inglesa
          </Text>  
          <BtnStart onClick={()=>{setStart(true)}}>Começar</BtnStart>
        </Comtainer>
      )}
      {start === true &&(
        <Comtainer>
          <Title>Quiz interativo de Vocabulário em Inglês</Title>
          <Question/>
        </Comtainer>
      )}
      <Footer/>
    </Div>
  );
}

