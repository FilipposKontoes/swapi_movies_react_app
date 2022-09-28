import {useEffect} from "react";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";


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
  flex: 1;
  border: 3px solid #ccc;
`;

const FavIcon = styled.span`
  position: absolute;
  left: 22px;
  top: 9px;
  color: #ccc;
`;

const SearchBar = ({userInput, setUserInput}) => {

    function updateUserInput(event) {
        setUserInput(event.target.value);
    }

    useEffect(() => {
    }, [userInput]);

  return (
    <Wrapper>
      <FavIcon>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </FavIcon>
      <TextInput placeholder="Type to search..." value={userInput} onChange={updateUserInput} ></TextInput>
    </Wrapper>
  );
};

SearchBar.propTypes = {
    userInput: PropTypes.string,
    setUserInput: PropTypes.func
};

export default SearchBar;