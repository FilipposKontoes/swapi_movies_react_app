import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    padding-left: 15px;
`;

const TextInput = styled.input`
    margin-right: 10px;
    padding: 10px 24px;
    width: fit-content;
    border-radius: 5px;
    flex:1;
    border: 3px solid #ccc;
`;

//https://stackoverflow.com/questions/45871439/before-and-after-pseudo-classes-used-with-styled-components
//δεν παίζει το :before
const FavIcon = styled.span`    
        position: absolute;
         left: 22px;
        top: 9px;
        color: #ccc;
`;

export default function SearchBar () {
    return <Wrapper>
        <FavIcon><FontAwesomeIcon icon={faMagnifyingGlass} /></FavIcon>
        <TextInput placeholder='Type to search...'>
        </TextInput>
    </Wrapper>
}