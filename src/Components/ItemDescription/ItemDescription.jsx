import styled from "styled-components";

const ItemDescriptionWrapper = styled.div`
  padding: 10px 40px;
`;

const MovieFullTitle = styled.h2`
  font-weight: bold;
`;

export default function ItemDescription({title, description, director}) {
  return (
    <ItemDescriptionWrapper>
      <MovieFullTitle>{title}</MovieFullTitle>
      <p>{description}</p>
      <span>Directed by: {director}</span>
    </ItemDescriptionWrapper>
  );
}
