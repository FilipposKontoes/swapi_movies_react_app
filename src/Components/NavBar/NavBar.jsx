import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import SortButton from "../SortButton/SortButton";

const Navbar = styled.div`
  background-color: #f7f8fa;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 2px solid;
  border-bottom-color: gray;

  @media (min-width: 767px) {
    padding-right: 30px;
  }
`;

const NavBar = ({userInput, setUserInput, sortByEpisode, sortByYear}) => {
  return (
    <Navbar>
      <SortButton sortByEpisode={sortByEpisode} sortByYear={sortByYear} />
      <SearchBar userInput={userInput} setUserInput={setUserInput} />
    </Navbar>
  );
}


export default NavBar;