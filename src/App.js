import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
//componentes
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";

//imagens

import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="movies">Movies</Link>
            </li>
            <li>
              <Link to="shows">Shows</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="shows" element={<Shows />} />
        </Routes>
      </Router>
    );
  }
}
