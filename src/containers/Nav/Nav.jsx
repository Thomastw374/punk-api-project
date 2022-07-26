import SearchBar from "../../components/SearchBar/SearchBar";
import "../../sass/main.scss";

const Nav = ({searchTerm, handleInput}) => {

    return (
      <nav className="nav-pane">
        <SearchBar handleInput={handleInput} searchTerm={searchTerm}/>
      </nav>
    );
}

export default Nav;