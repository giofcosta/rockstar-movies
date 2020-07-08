import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Movie from "./components/Movie";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Rockstar Movie List
          </a>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/movie/:id" component={Movie} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
