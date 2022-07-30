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
    handlePh4Check
  } = props;
    return (
      <>
        <Nav
          handleInput={handleInput}
          searchTerm={searchTerm}
          handleHighAbvCheck={handleHighAbvCheck}
          handleClassicRangeCheck={handleClassicRangeCheck}
          handlePh4Check={handlePh4Check}
        />
        <Main beers={beers} />
      </>
    );
}

export default Home;