import styled from "styled-components";

const Comtainer = styled.main`
  display: flex;
  flex-direction:column;
  *{
    font-family: "Inter", sans-serif;
  }
`
const Title = styled.h1`
  font-weight:800;
  text-align: center;
  margin: 86px 0 0;
  @media screen and (min-width: 0){ 
    font-size:16px;
  }
  @media screen and (min-width: 768px){
    font-size:24px;
  }
  @media screen and (min-width: 1024px){
    font-size:32px;
  }
`
const Text = styled.p`
  font-weight:400;
  text-align: center;
  margin: 170px 0 0;
  @media screen and (min-width: 0){
    font-size:16px;
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
    strong{
      font-size:32px;
    }
  }
`

export default function App() {
  return (
    <Comtainer>
      <Title>Quiz interativo de Vocabulário em Inglês</Title>
      <Text>
        <strong>Bem vindo ao quiz interativo!</strong>
        <br/>
        Teste seus conhecimentos da lingua inglesa
      </Text>
    </Comtainer>
  );
}

