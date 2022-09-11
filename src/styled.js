import styled from "styled-components";

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const ListItemsWrapper = styled.div`
  flex: 1;
  border-right: 2px solid;
  border-right-color: gray;
`;

export const DescriptionWrapper = styled.div`
   display: flex;
   justify-content: center;
  flex: 1;
`;

export const NoMovieWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
