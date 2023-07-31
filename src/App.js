import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { NavListItem, NavListLink, NavMenu } from "./components/NavMenu/NavMenu";

function App() {
  return (
    <Router>
      <div>
        <NavMenu>
            <NavListItem>
              <NavListLink to="/">Home</NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink to="/about">About</NavListLink>
            </NavListItem>
        </NavMenu>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
