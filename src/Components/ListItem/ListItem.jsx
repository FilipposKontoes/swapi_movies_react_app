import styled from "styled-components";
import PropTypes from 'prop-types';

const MovieItemWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid;
  border-bottom-color: gray;
  padding: 10px 10px;
`;

const MovieEpisode = styled.span`
  flex: 1;
  text-align: left;
  padding-left: 1px;
`;

const MovieName = styled.span`
  flex: 2;
  text-align: left;
  font-weight: bold;
`;

const MovieDate = styled.span`
  flex: 1;
  text-align: right;
`;

const ListItem = ({movie, setSelectedMovie}) => {

  return (
    <MovieItemWrapper onClick={() => { setSelectedMovie(movie);}}>
      <MovieEpisode>Episode {movie?.episode_id}</MovieEpisode>
      <MovieName>{movie?.title}</MovieName>
      <MovieDate>{movie?.release_date}</MovieDate>
    </MovieItemWrapper>
  );
};

ListItem.propTypes = {
    optionalObjectWithShape: PropTypes.shape({
        episode_id: PropTypes.number,
        title: PropTypes.string,
        release_date: PropTypes.string
    }),
    setSelectedMovie: PropTypes.func
};

export default  ListItem;