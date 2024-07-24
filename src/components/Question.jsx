import styled from "styled-components";
import { useRef, useState } from "react";
import { data } from "../assets/data";
import './OptionsGroup.css'

const ContainerQuestion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    width: 80vw;
`

const TitleQuestion = styled.p`
    margin-top: 0.4em;
`

const NumberQuestion = styled.h1`
    margin-bottom: 0.2em;
`

const Divider = styled.hr`
    margin: 0;
    border: 0.1em solid #000000;
    border-radius: 0.3em;
`

const BtnNextQuestion = styled.button`
    margin: 1.5em;
    align-self: center;
    width: 50%;
    padding: 1em;
    border: none;
    border-radius: 0.5em;
    background-color: #0099ff;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 0;
    margin: 0;
` 

const OptionItem = styled.li`
    display: inline-block;
    list-style-type: none;
    text-align: center;
    cursor: pointer;
    padding: 1em;
    border-radius: 2em;
    border: 0.1em solid;
    
    &:hover{
        background-color: #D9D9D9;
    }
`
const Result = styled.p`
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    strong{
        font-weight: 800;
    }
    @media screen and (min-width: 0){
        font-size: 16px;
    }
    
    @media screen and (min-width: 768px){
        font-size: 24px;
    }

    @media screen and (min-width: 1024px){
        font-size: 32px;
    }
`

export default function Question(){

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    const [finish, setFinish] = useState(false)
    const [hits, setHits] = useState(0)

    const nextQuestion = () => {
        if (index<data.length-1) {
            ++index;
        } else {
            setFinish(true)
            setIndex(0)
        }
        setIndex(index);
        setQuestion(data[index]);
        setLock(false);
        option_array.map(o=>{   
            o.current.classList.remove("wrong");
            o.current.classList.remove("correct");
            return null;
        })
    }

    const checkAns = (e, ans) => {
        if (!lock) {
            if (ans===question.ans) {
                e.target.classList.add("correct");
                setHits(hits + 1)
            } else {
                e.target.classList.add("wrong");
                option_array[question.ans-1].current.classList.add("correct");
            }
        }
        setLock(true);
    }
    
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    return(
        <ContainerQuestion>
            {finish == false &&(
                <>
                    <NumberQuestion>Pergunta {index+1}</NumberQuestion>
                    <Divider />
                    <TitleQuestion>{question.question}</TitleQuestion>

                    <List>
                        <OptionItem ref={Option2} onClick={(e)=>checkAns(e, '1')} value='1' id='option1'>{question.option1}</OptionItem>
                        <OptionItem ref={Option1} onClick={(e)=>checkAns(e, '2')} value='2' id='option2'>{question.option2}</OptionItem>
                        <OptionItem ref={Option3} onClick={(e)=>checkAns(e, '3')} value='3' id='option3'>{question.option3}</OptionItem>
                        <OptionItem ref={Option4} onClick={(e)=>checkAns(e, '4')} value='4' id='option4'>{question.option4}</OptionItem>
                    </List>

                    <BtnNextQuestion onClick={nextQuestion}> Próximo </BtnNextQuestion>

                </>
            )}
            { finish == true &&(
                <Result>
                    <strong>Parabéns!</strong>
                    <br/>
                    Você acertou {hits}/{data.length}
                </Result>
            )}
        </ContainerQuestion>
    );
}