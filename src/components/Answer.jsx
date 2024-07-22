import styled from "styled-components";

const ItemList = styled.li`
    display: inline-block;
    margin-right: 15px;
`
const Input = styled.input`
    visibility:hidden;

    &:checked + label {
        background-color: red;
    }
`
const Label = styled.label`
    cursor: pointer;
    border: 0.1em solid;
    padding: 1em;
    border-radius: 2em;

    &:hover{
        background-color: red;
    }
`

export default function Answer(props){
    return(
        <ItemList>
            <Input type="radio" value={props.value} name={props.name} id={props.id} ></Input>
            <Label for={props.id}>{props.label}</Label>
        </ItemList>
    );
}