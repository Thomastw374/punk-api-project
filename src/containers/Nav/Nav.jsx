import SearchBar from "../../components/SearchBar/SearchBar";
import "../../sass/main.scss";

const Nav = () => {
    return (
      <nav className="nav-pane">
        <h2>Search</h2>
        <SearchBar />
      </nav>
    );
}

export default Nav;