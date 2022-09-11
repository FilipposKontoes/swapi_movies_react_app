import styled from "styled-components";

const Button = styled.button`
    background-color: #F7F8FA;
    border-radius: 5px;
    border: 3px solid #ccc;
    color: gray;
    
    &:hover {
        background-color: #FFF;
        cursor: pointer;
    }
`;

export  default function SortButton () {
    return <Button>
        Sort by...
    </Button>
}
