import styled from "styled-components";

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

export default function ListItem({episode, title, date, setMovieId}) {

  return (
    <MovieItemWrapper onClick={() => { setMovieId(episode-1);}}>
      <MovieEpisode>Episode {episode}</MovieEpisode>
      <MovieName>{title}</MovieName>
      <MovieDate>{date}</MovieDate>
    </MovieItemWrapper>
  );
}
