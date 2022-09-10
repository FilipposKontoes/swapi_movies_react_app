import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
    position: relative;
    flex: 1;
    border-radius: 5px;
    padding-left: 15px;
`;

const TextInput = styled.input`
    padding-left: 24px;
    width: 100%;
`;

//https://stackoverflow.com/questions/45871439/before-and-after-pseudo-classes-used-with-styled-components
//δεν παίζει το :before
const FavIcon = styled.span`    
        position: absolute;
         left: 20px;
        top: 1px;
`;

export default function SearchBar () {
    return <Wrapper>
        <FavIcon><FontAwesomeIcon icon={faMagnifyingGlass} /></FavIcon>
        <TextInput placeholder='Type to search...'>
        </TextInput>
    </Wrapper>
}