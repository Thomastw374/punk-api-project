// import beers from "./beers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import { useEffect, useState } from "react";
import "./App.css";
import "./sass/main.scss";
// So app should contain the pages. App should contain a Home container (one of the routes), which should contain our Nav and Main. Something outside of the routes will always display.
function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [highAbvChecked, setHighAbvChecked] = useState(false);
  const [classicRangeChecked, setClassicRangeChecked] = useState(false);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  useEffect(() => {
    getBeers(highAbvChecked, classicRangeChecked);
    console.log(highAbvChecked);
  }, [highAbvChecked, classicRangeChecked]);

  const handleHighAbvCheck = (event) => {
    setHighAbvChecked(!highAbvChecked);
  };

  const handleClassicRangeCheck = (event) => {
    setClassicRangeChecked(!classicRangeChecked);
    console.log(classicRangeChecked)
  };

  // Classic range was brewed before 2010

  // Going to have to make several requests. Add them all together and then use a getBeers on the final
  const getBeers = async (highAbvChecked, classicRangeChecked) => {
    const url =
      `https://api.punkapi.com/v2/beers?page=1&per_page=80` +
      (highAbvChecked ? `&abv_gt=6` : "") +
      (classicRangeChecked ? `&brewed_before=01-2010` : "");
    const res = await fetch(url);
    const beerData = await res.json();
    setBeers(beerData);
    console.log(beerData);
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
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
