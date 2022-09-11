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
    const [selectedMovie, setSelectedMovie] = useState(0);

    // useEffect(() => {console.log(movieId)},[movieId]);

  return (
    <div>
      <NavBar />
      <MainContentWrapper>
        <ListItemsWrapper>
            {data?.results?.map((movie) => {
                return (<ListItem key={movie.episode_id} movie={movie} setSelectedMovie={setSelectedMovie} />)
            })}
        </ListItemsWrapper>
        <DescriptionWrapper>
          <ItemDescription selectedMovie={selectedMovie} />
        </DescriptionWrapper>
      </MainContentWrapper>
    </div>
  );
}

export default App;
