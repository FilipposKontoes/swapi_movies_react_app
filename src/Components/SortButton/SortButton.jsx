import styled from "styled-components";

const Button = styled.select`
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


export default function SortButton({sortByEpisode}) {
  return <Button>
    //defaultValue=selected true
    <Option disabled="disabled">Sort by...</Option>
  <Option onClick={sortByEpisode}>Episode</Option>
  <Option>Year</Option>
  </Button>;
}
