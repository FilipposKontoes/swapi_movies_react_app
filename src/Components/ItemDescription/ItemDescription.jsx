import {NoMovieWrapper} from "../../styled";
import styled from "styled-components";


const ItemDescriptionWrapper = styled.div`
  padding: 10px 40px;
`;

const MovieFullTitle = styled.h2`
  font-weight: bold;
`;

export default function ItemDescription({selectedMovie}) {
  return (
    <>
        {selectedMovie ?
              <ItemDescriptionWrapper data-testid="movieDescription"><MovieFullTitle>{selectedMovie.title}</MovieFullTitle>
      <p>{selectedMovie.opening_crawl}</p>
      <span>Directed by: {selectedMovie.director}</span></ItemDescriptionWrapper> : <NoMovieWrapper data-testid={'noMovieDescription'}><p>No movie selected</p></NoMovieWrapper>}
    </>
  );
}
