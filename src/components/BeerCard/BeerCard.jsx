import "../../sass/main.scss";

const BeerCard = ({beerName, beerDescription, beerImage}) => {
    return (
      <div className="beer-card">
        <img
          className="beer-card__beer-image"
          src={beerImage}
          alt={`image of ` + beerName}
        />
        <div className="beer-card__details">
          <h6 className="beer-card__name">{beerName}</h6>
          <p className="beer-card__description">{beerDescription}</p>
        </div>
      </div>
    );
}

export default BeerCard;