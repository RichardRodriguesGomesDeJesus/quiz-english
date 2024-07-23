import { useState } from "react"
import styled from "styled-components"

const Form = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 0){ 
    margin:  95 20px 0;
    width:100%;
  }
  @media screen and (min-width: 768px){
    margin: 100px;
    width:596px;
  }
  @media screen and (min-width: 1024px){
    margin: 160px 0 0 ;
    width:996px;
  }
`
const Btn = styled.button`
  background: #D9D9D9;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 32px;
  margin: 27px 0 0 0;
  height: 80px;
  width: 100%;
`

export default function FormQuest({questoes}) {
  const [acertou, setAcertou] = useState(false)
  const [click, setClick] = useState(false)
  const [i , setI] = useState(0)
  console.log(qu)
  return(
    <Form>

      {click == false &&questoes[i].options.map((e,index)=>(
        <Btn key={index} onClick={()=>{
          if (e.certo === true) {
            setAcertou(true)
          }
          setClick(true)
          setI(i + 1)
        }}>{e.text}</Btn>
      ))}
      {}
    </Form>
  )
}