import SearchBar from "../../components/SearchBar/SearchBar";
import "../../sass/main.scss";
import FilterList from "../FilterList/FilterList";

const Nav = props => {
  const {
    searchTerm,
    handleInput,
    handleHighAbvCheck,
    handleClassicRangeCheck,
    handlePh4Check
  } = props;
    return (
      <nav className="nav-pane">
        <SearchBar handleInput={handleInput} searchTerm={searchTerm} />
        <FilterList
          handleHighAbvCheck={handleHighAbvCheck}
          handleClassicRangeCheck={handleClassicRangeCheck}
          handlePh4Check={handlePh4Check}
        />
      </nav>
    );
}

export default Nav;