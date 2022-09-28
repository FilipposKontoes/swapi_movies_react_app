import useData from "./Hooks/useData";
import { ColorRing } from 'react-loader-spinner';
import {useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import ListItem from "./Components/ListItem/ListItem";
import ItemDescription from "./Components/ItemDescription/ItemDescription";
import {
  MainContentWrapper,
  ListItemsWrapper,
  DescriptionWrapper,
} from "./styled";


function App() {
    const {data, isLoading, sortByEpisode, sortByYear} = useData();
    const [selectedMovie, setSelectedMovie] = useState(0);
    const [userInput, setUserInput] = useState('');

    function filterMovies (movie) {
        return movie.title.toUpperCase().includes(userInput.toUpperCase());
    }

  return (
    <div>
      <NavBar userInput={userInput} setUserInput={setUserInput} sortByEpisode={sortByEpisode} sortByYear={sortByYear} />
      <MainContentWrapper>
        <ListItemsWrapper>
            {isLoading ? <ColorRing/> :
            data?.filter(filterMovies).map((movie) => {
                return (<ListItem key={movie.episode_id} movie={movie} setSelectedMovie={setSelectedMovie} />);
            })}
        </ListItemsWrapper>
        <DescriptionWrapper>
            <ItemDescription selectedMovie={selectedMovie}/>
        </DescriptionWrapper>
      </MainContentWrapper>
    </div>
  );
}

export default App;
