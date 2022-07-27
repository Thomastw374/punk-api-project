import Nav from "../Nav/Nav"
import Main from "../Main/Main"
import "../../sass/main.scss";

const Home = props => {
  const { beers, handleInput, searchTerm, handleHighAbvCheck } = props;
    return (
      <>
        <Nav
          handleInput={handleInput}
          searchTerm={searchTerm}
          handleHighAbvCheck={handleHighAbvCheck}
        />
        <Main beers={beers} />
      </>
    );
}

export default Home;