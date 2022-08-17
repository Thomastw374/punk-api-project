import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import { useEffect, useState } from "react";
import "./App.css";
import "./sass/main.scss";

function App() {
  // States
  // beers is an array of objects containing data on beers
  const [beers, setBeers] = useState([]);
  // searchTerm is the search box input string
  const [searchTerm, setSearchTerm] = useState("");
  // checked states are booleans representing checkbox state. False if unchecked, true if checked.
  const [highAbvChecked, setHighAbvChecked] = useState(false);
  const [classicRangeChecked, setClassicRangeChecked] = useState(false);
  const [ph4Checked, setPh4Checked] = useState(false);

  // Cleans the search box input and then sets the state.
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  // Flip the checked states.
  const handleHighAbvCheck = (event) => {
    setHighAbvChecked(!highAbvChecked);
  };

  const handleClassicRangeCheck = (event) => {
    setClassicRangeChecked(!classicRangeChecked);
  };

  const handlePh4Check = () => {
    setPh4Checked(!ph4Checked);
  };

  // calls the getBeers function when filters are clicked

  useEffect(() => {
    getBeers(highAbvChecked, classicRangeChecked, ph4Checked);
  }, [highAbvChecked, classicRangeChecked, ph4Checked]);

  const getBeers = async (highAbvChecked, classicRangeChecked, ph4Checked) => {
    const beerData = [];

    // loops through paginated data and appends each page of data to an array

    for (let pageNumber = 1; pageNumber < 6; pageNumber++) {
      const url =
        `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80` +
        (highAbvChecked ? `&abv_gt=6` : "") +
        (classicRangeChecked ? `&brewed_before=01-2010` : "");
      const res = await fetch(url);
      beerData.push(await res.json());
    }

    // flattens the beer array as pagination led to an array of arrays
    const flattenedBeerArray = await [].concat.apply([], beerData);

    // filters based on a ph of less than 4
    if (ph4Checked === true) {
      const phFilteredBeerArray = flattenedBeerArray.filter((beer) => {
        return beer.ph < 4;
      });
      setBeers(phFilteredBeerArray);
    } else {
      setBeers(flattenedBeerArray);
    }
  };

  // filters the beers based upon the value of the search term
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
