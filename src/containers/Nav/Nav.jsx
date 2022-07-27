import SearchBar from "../../components/SearchBar/SearchBar";
import "../../sass/main.scss";
import FilterList from "../FilterList/FilterList";

const Nav = props => {
  const { searchTerm, handleInput, handleHighAbvCheck} = props;
    return (
      <nav className="nav-pane">
        <SearchBar handleInput={handleInput} searchTerm={searchTerm} />
        <FilterList handleHighAbvCheck={handleHighAbvCheck} />
      </nav>
    );
}

export default Nav;