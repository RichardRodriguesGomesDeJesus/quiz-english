import styled from "styled-components";
import AnswerGroup from "./AnswerGroup";
import { useState } from "react";
import { data } from "../assets/data";

const ContainerQuestion = styled.div`
    display: flex;
    flex-direction: column;
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

export default function Question(props){

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);

    const nextQuestion = () => {
        if (index<data.length-1) {
            ++index;
        }   
        else {
            index=0;
        }
        setIndex(index);
        setQuestion(data[index]);
    }

    return(
        <ContainerQuestion>
            <NumberQuestion>Pergunta {index+1}</NumberQuestion>
            <Divider />
            <TitleQuestion>{question.question}</TitleQuestion>
            <AnswerGroup 
                option1={question.option1}
                option2={question.option2}
                option3={question.option3}
                option4={question.option4}
            />
            <p id="isCorrect">{question.ans}</p>

            <button onClick={nextQuestion}> Corrigir </button>
            

        </ContainerQuestion>
    );
}