import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import { useEffect, useState } from "react";
import "./App.css";
import "./sass/main.scss";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [highAbvChecked, setHighAbvChecked] = useState(false);
  const [classicRangeChecked, setClassicRangeChecked] = useState(false);
  const [ph4Checked, setPh4Checked] = useState(false);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleHighAbvCheck = (event) => {
    setHighAbvChecked(!highAbvChecked);
  };

  const handleClassicRangeCheck = (event) => {
    setClassicRangeChecked(!classicRangeChecked);
  };

  const handlePh4Check = () => {
    setPh4Checked(!ph4Checked);
  };

  useEffect(() => {
    getBeers(highAbvChecked, classicRangeChecked, ph4Checked);
  }, [highAbvChecked, classicRangeChecked, ph4Checked]);

  const getBeers = async (highAbvChecked, classicRangeChecked, ph4Checked) => {
    const beerData = [];

    for (let pageNumber = 1; pageNumber < 6; pageNumber++) {
      const url =
        `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80` +
        (highAbvChecked ? `&abv_gt=6` : "") +
        (classicRangeChecked ? `&brewed_before=01-2010` : "");
      const res = await fetch(url);
      beerData.push(await res.json());
    }

    const flattenedBeerArray = await [].concat.apply([], beerData);

    if (ph4Checked === true) {
      const phFilteredBeerArray = flattenedBeerArray.filter((beer) => {
        return beer.ph < 4;
      });
      setBeers(phFilteredBeerArray);
    } else {
      setBeers(flattenedBeerArray);
    }
  };

  const filteredBeers = beers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm);
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                beers={filteredBeers}
                handleInput={handleInput}
                searchTerm={searchTerm}
                handleHighAbvCheck={handleHighAbvCheck}
                handleClassicRangeCheck={handleClassicRangeCheck}
                handlePh4Check={handlePh4Check}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
