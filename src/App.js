import styled from "styled-components";
import Footer from "./components/footer.js";
import AnswerGroup from "./components/AnswerGroup.jsx";

const Comtainer = styled.main`
  display: flex;
  flex-direction:column;
  min-height: 100vh;

  section{
    display: flex;
    flex-direction:column;
    flex-grow:1;
  }
  *{
    font-family: "Inter", sans-serif;
  }
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

export default function App() {
  return (
    <Comtainer>
      <section>
        <Title>Quiz interativo de Vocabulário em Inglês</Title>
        <AnswerGroup></AnswerGroup>
        <Text>
          <strong>Bem vindo ao quiz interativo!</strong>
          <br/>
          Teste seus conhecimentos da lingua inglesa
        </Text>
      </section>
      <Footer/>
    </Comtainer>
  );
}

