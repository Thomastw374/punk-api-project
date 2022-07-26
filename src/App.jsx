import beers from './beers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './containers/Main/Main';
import Nav from './containers/Nav/Nav';
import './App.css';
import './sass/main.scss'

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Main beers={beers}/>
      </div>
    </Router>
  );
}

export default App;
