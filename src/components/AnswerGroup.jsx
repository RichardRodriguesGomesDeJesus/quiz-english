import styled from "styled-components";
import Answer from "./Answer";

const List = styled.ul`
    list-style: none;
` 

export default function AnswerGroup(){
    return(
        <List>
            <Answer value='1' name='radio'  id='radio1'
                label='Voce ja deu?'
            />
            <Answer value='2' name='radio'  id='radio2'
                label='Se leu mamou eu'
            />
            <Answer value='3' name='radio'  id='radio3'
                label='Sem memem'
            />
            <Answer value='4' name='radio'  id='radio4'
                label='Boa'
            />
        </List>
    );
}