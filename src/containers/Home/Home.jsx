import Nav from "../Nav/Nav"
import Main from "../Main/Main"
import "../../sass/main.scss";

const Home = props => {
  const {
    beers,
    handleInput,
    searchTerm,
    handleHighAbvCheck,
    handleClassicRangeCheck,
  } = props;
    return (
      <>
        <Nav
          handleInput={handleInput}
          searchTerm={searchTerm}
          handleHighAbvCheck={handleHighAbvCheck}
          handleClassicRangeCheck={handleClassicRangeCheck}
        />
        <Main beers={beers} />
      </>
    );
}

export default Home;