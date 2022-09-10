//TODO χρησιμοποιώ το import react from react σε κάθε .jsx???
//TODO Τα ονόματα των μεταβλητών
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import SortButton from "../SortButton/SortButton";

const Navbar = styled.div`
    background-color: #F7F8FA;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    
    @media (min-width: 767px) {
    padding-right: 30px;
  }
`;

export default function NavBar () {
    return <Navbar>
        <SortButton/>
        <SearchBar/>
    </Navbar>
}