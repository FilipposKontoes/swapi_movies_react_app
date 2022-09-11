import useFetch from "./Hooks/useFetch";
import {useEffect, useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import ListItem from "./Components/ListItem/ListItem";
import ItemDescription from "./Components/ItemDescription/ItemDescription";
import {
  MainContentWrapper,
  ListItemsWrapper,
  DescriptionWrapper,
} from "./styled";


function App() {
    const {data, isLoading, isError} = useFetch();
    const [movieId, setMovieId] = useState(0);

    useEffect(() => {console.log(movieId)},[movieId])

  return (
    <div>
      <NavBar />
      <MainContentWrapper>
        <ListItemsWrapper>
            {data?.results?.map((movie) => {
                return (<ListItem key={movie.episode_id} episode={movie.episode_id} title={movie.title} date={movie.release_date} setMovieId={setMovieId} />)
            })}
        </ListItemsWrapper>
        <DescriptionWrapper>
          <ItemDescription title={data?.results?.[movieId]?.title} description={data?.results?.[movieId]?.opening_crawl} director={data?.results?.[movieId]?.director} />
        </DescriptionWrapper>
      </MainContentWrapper>
    </div>
  );
}

export default App;
