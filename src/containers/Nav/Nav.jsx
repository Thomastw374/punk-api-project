import SearchBar from "../../components/SearchBar/SearchBar";
import "../../sass/main.scss";

const Nav = props => {
  const {searchTerm, handleInput} = props;
    return (
      <nav className="nav-pane">
        <SearchBar handleInput={handleInput} searchTerm={searchTerm}/>
      </nav>
    );
}

export default Nav;