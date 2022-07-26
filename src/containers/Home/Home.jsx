import Nav from "../Nav/Nav"
import Main from "../Main/Main"
import "../../sass/main.scss";

const Home = ({beers}) => {
    return (
      <>
        <Nav />
        <Main beers={beers} />
      </>
    );
}

export default Home;