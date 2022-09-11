import styled from "styled-components";

const MovieItemWrapper = styled.div`
  display: flex;
  border-bottom:   1px solid ;
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

export default function ListItem () {

    return <MovieItemWrapper>
            <MovieEpisode>
                Episode 13
            </MovieEpisode>
            <MovieName>
                Tafos kai Tyfos
            </MovieName>
            <MovieDate>
                1908-03-08
            </MovieDate>
        </MovieItemWrapper>

}