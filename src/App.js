import useFetch from "./Hooks/useFetch";
import NavBar from "./Components/NavBar/NavBar";
import ListItem from "./Components/ListItem/ListItem";
import ItemDescription from "./Components/ItemDescription/ItemDescription";
import {
  MainContentWrapper,
  ListItemWrapper,
  DescriptionWrapper,
} from "./styled";

function App() {
    const {data, isLoading, isError} = useFetch();
  return (
    <div>
      <NavBar />
      <MainContentWrapper>
        <ListItemWrapper>
          <ListItem />
        </ListItemWrapper>
        <DescriptionWrapper>
          <ItemDescription />
        </DescriptionWrapper>
      </MainContentWrapper>
    </div>
  );
}

export default App;
