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

  // Going to have to make several requests. Add them all together and then use a getBeers on the final. 325 beers total. 5 pages, 5 separate requests?
  const getBeers = async (highAbvChecked, classicRangeChecked) => {

    var beerData = []

    for(let pageNumber=1; pageNumber < 6; pageNumber++){
      const url =
        `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80` +
        (highAbvChecked ? `&abv_gt=6` : "") +
        (classicRangeChecked ? `&brewed_before=01-2010` : "");
      const res = await fetch(url);
      beerData.push(await res.json());
    }
    

    // const restOfPages = await Promise.all(
    //   Array(4)
    //     .fill(0)
    //     .map((i) =>
    //       fetch(
    //         `https://api.punkapi.com/v2/beers?page=${i + 2}&per_page=80`
    //           .then((res) => res.json())
    //           .then((d) => d.results)
    //       )
    //     )
    // );

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
