import {useEffect} from "react";
import NavBar from "./Components/NavBar/NavBar";
import ListItem from "./Components/ListItem/ListItem";
import ItemDescription from "./Components/ItemDescription/ItemDescription";
import {MainContentWrapper, ListItemWrapper, DescriptionWrapper} from "./styled";

function App() {

  useEffect(() => {
    fetch("https://swapi.dev/api/films/", {headers: {'Content-Type' : 'application/json'} }).then((response) => {
      if (response.ok)
        return response.json();

      throw new Error('Fetch Failed')
    }).then((data) => {
      console.log(`${data}`);
    })
  },[]);
  //οταν deps είναι κενό array τρέχει μόνο μια φορά στο render!
  return (
    <div className="App">
      <NavBar/>
        <MainContentWrapper>
          <ListItemWrapper>
            <ListItem/>
          </ListItemWrapper>
          <DescriptionWrapper>
            <ItemDescription/>
          </DescriptionWrapper>
        </MainContentWrapper>
    </div>
  );
}

export default App;
