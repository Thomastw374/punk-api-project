import BeerCard from "../../components/BeerCard/BeerCard";

const CardsContainer = ({beers}) => {

    const beerCardsArr = beers.map((beer)=> {
        return (
          <>
            <BeerCard key={beer.id}
              beerName={beer.name}
              beerDescription={beer.description}
              beerImage={beer.image_url}
            />
          </>
        );
            
    })

    
    return beerCardsArr
}

export default CardsContainer;