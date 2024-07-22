import styled from "styled-components"

const ContainerFooter =  styled.footer`
  text-align: center;
  margin: 0;
  font-size: 400;
  *{
    font-family: "Inter", sans-serif;
  }
  @media screen and (min-width: 0){ 
    font-size:8px;
    padding: 32px 0;
  }
  @media screen and (min-width: 768px){
    font-size:16px;
  }
  @media screen and (min-width: 1024px){
    font-size:24px;
    padding: 64px 0;
  }
`

export default function Footer() {
  return(
    <ContainerFooter>
      <p>Produzido pela turma do tecjovem 2024@Todos os direitos reservados</p>
    </ContainerFooter>
  )
}