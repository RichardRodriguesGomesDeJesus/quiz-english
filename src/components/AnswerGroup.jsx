import styled from "styled-components";
import Answer from "./Answer";

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 0;
    margin: 0;
` 

export default function AnswerGroup(props){
    return(
        <List role="list">
            <Answer value='A' name='radio' id='radio1'
                label={props.option1}
            />
            <Answer value='B' name='radio' id='radio2'
                label={props.option2}
            />
            <Answer value='C' name='radio' id='radio3'
                label={props.option3}
            />
            <Answer value='D' name='radio' id='radio4'
                label={props.option4}
            />
        </List>
    );
}