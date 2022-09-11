import styled from "styled-components";

const Button = styled.button`
  background-color: #f7f8fa;
  border-radius: 5px;
  border: 3px solid #ccc;
  color: gray;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`;

export default function SortButton() {
  return <Button>Sort by...</Button>;
}
