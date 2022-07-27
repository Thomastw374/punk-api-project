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

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleHighAbvCheck = (event) => {
    setHighAbvChecked(!highAbvChecked);
  };

  const getBeers = async (highAbvChecked) => {

    const url = `https://api.punkapi.com/v2/beers${'?abv_gt=6'}`;
    const res = await fetch(url);
    const beerData = await res.json();
    setBeers(beerData);
  };

  useEffect(() => {
    getBeers(highAbvChecked);
    console.log(highAbvChecked);
  }, [highAbvChecked]);

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
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
