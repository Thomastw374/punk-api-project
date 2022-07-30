import "../../sass/main.scss";

const SearchBar = props => {
  const {searchTerm, handleInput} = props;
  return (
  <form action="search-box">
    <h3 className="search-box__label">Search by name:</h3>
    <input className="search-box__input" type="search" name="search" id="" value={searchTerm} onInput={handleInput} />
    </form>
  );
};

export default SearchBar;
