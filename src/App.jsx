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

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url)
    const beerData = await res.json()
    setBeers(beerData)
  }

  useEffect(()=>{
    getBeers();
  },[])

  
  
  const filteredBeers = beers.filter(beer => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm)
  })

  console.log(filteredBeers)

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home beers={filteredBeers} handleInput={handleInput} searchTerm={searchTerm}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
