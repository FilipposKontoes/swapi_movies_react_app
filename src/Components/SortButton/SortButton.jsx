import styled from "styled-components";

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


export default function SortButton({sortByEpisode, sortByYear}) {
  return <Select defaultValue="None" onChange={event => {
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
