import CardsList from "../CardsList/CardsList";
import "../../sass/main.scss";

const Main = ({beers}) => {
    return (
        <main className="beer-display">
            <CardsList beers={beers} />
        </main>
    )
}

export default Main;