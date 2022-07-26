import beers from './beers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './containers/Main/Main';
import './App.css';
import './sass/main.scss'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-pane">
          <h2>Search</h2>
          <h2>Categories</h2>
        </nav>
        <Main beers={beers}/>
      </div>
    </Router>
  );
}

export default App;
