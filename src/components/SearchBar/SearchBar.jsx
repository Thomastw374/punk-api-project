import "../../sass/main.scss";

const SearchBar = ({searchTerm, handleInput}) => {
  return (
  <form action="search-box">
    <label htmlFor="search" className="search-box__label">Search by name:</label>
    <input className="search-box__input" type="search" name="search" id="" value={searchTerm} onInput={handleInput} />
    </form>
  );
};

export default SearchBar;
