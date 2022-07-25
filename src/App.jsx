import logo from './logo.svg';
import beers from './beers';
import BeerCard from './components/BeerCard/BeerCard';
import CardsContainer from './containers/CardsContainer/CardsContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './sass/main.scss'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-pane"></nav>
        <main className="beer-display">
          <CardsContainer beers={beers}/>
        </main>
      </div>
    </Router>
  );
}

export default App;
