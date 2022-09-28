import {NoMovieWrapper} from "../../styled";
import styled from "styled-components";
import PropTypes from 'prop-types';

const ItemDescriptionWrapper = styled.div`
  padding: 10px 40px;
`;

const MovieFullTitle = styled.h2`
  font-weight: bold;
`;



 const ItemDescription = ({selectedMovie}) => {
  return (
    <>
        {selectedMovie ?
              <ItemDescriptionWrapper data-testid="movieDescription"><MovieFullTitle>{selectedMovie.title}</MovieFullTitle>
      <p>{selectedMovie.opening_crawl}</p>
      <span>Directed by: {selectedMovie.director}</span></ItemDescriptionWrapper> : <NoMovieWrapper data-testid={'noMovieDescription'}><p>No movie selected</p></NoMovieWrapper>}
    </>
  );
};

ItemDescription.propTypes = {
    optionalObjectWithShape: PropTypes.shape({
        title: PropTypes.string,
        opening_crawl: PropTypes.string,
        director: PropTypes.string
    })
};

export default ItemDescription;