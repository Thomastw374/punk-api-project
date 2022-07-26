import Nav from "../Nav/Nav"
import Main from "../Main/Main"
import "../../sass/main.scss";

const Home = props => {
  const {beers, handleInput, searchTerm} = props;
    return (
      <>
        <Nav handleInput={handleInput} searchTerm={searchTerm}/>
        <Main beers={beers} />
      </>
    );
}

export default Home;