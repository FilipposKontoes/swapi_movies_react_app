import styled from "styled-components";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";

const Select = styled.select`
  background-color: #f7f8fa;
  border-radius: 5px;
  border: 3px solid #ccc;
  color: gray;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`;

const Option = styled.option`
  
`;


const SortButton = ({sortByEpisode, sortByYear}) => {
  return <Select data-testid="noOptionSelected" defaultValue="None" onChange={event => {
    if(event.target.value==='Episode')
    sortByEpisode();

    if(event.target.value==='Year')
      sortByYear();
  }}>
    <Option value='None' disabled="disabled">Sort by...</Option>
  <Option value='Episode'>Episode</Option>
  <Option value='Year'>Year</Option>
  </Select>;
}

SortButton.propTypes = {
  sortByEpisode: PropTypes.func,
  sortByYear: PropTypes.func
};

export default SortButton;