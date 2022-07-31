import '../../sass/main.scss'

const SearchBar = props => {
  const {searchTerm, handleInput} = props;
  return (
  <form className="search-box">
    <h6 className="search-box__label">Search by name:</h6>
    <input className="search-box__input" type="search" name="search" id="" value={searchTerm} onInput={handleInput} />
    </form>
  );
};

export default SearchBar;
