import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import {
  NavListItem,
  NavListLink,
  NavMenu,
} from "./components/NavMenu/NavMenu";
import { Projects } from "./components/pages/Projects";
import { Contact } from "./components/pages/Contact";
import styled from "styled-components";
import { SectionContainer } from "./components/pages/styles";

const Main = styled.main`
  padding-top: 4rem;
`;

const pages = [<Home />, <About />, <Projects />, <Contact />];

function App() {
  return (
    <Router>
      <div>
        <NavMenu>
          <NavListItem>
            <NavListLink to="#about">About</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink to="#projects">Projects</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink to="#contact">Contact</NavListLink>
          </NavListItem>
        </NavMenu>
        <Main>
          {pages.map((component) => {
            return <SectionContainer>{component}</SectionContainer>;
          })}
        </Main>
      </div>
    </Router>
  );
}

export default App;
