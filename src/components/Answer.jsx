import styled from "styled-components";

const ItemList = styled.li`
    display: inline-block;
    margin-right: 15px;

`
const Input = styled.input`
    visibility:hidden;
    &:checked + label {
        background: red;
    }
`
const Label = styled.label`
    cursor: pointer;
`

export default function Answer(props){
    return(
        <ItemList>
            <Input type="radio" value={props.value} name={props.name} id={props.id} />
            <Label for={props.name}>{props.label}</Label>
        </ItemList>
    );
}