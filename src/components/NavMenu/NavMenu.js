import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #f0f0f0;
  position: fixed;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 4rem;
`;

export const NavListItem = styled.li`
  display: inherit;
  align-items: center;
  height: 100%;
  list-style-type: none;
`;

export const NavListLink = styled(Link)`
  display: inherit;
  align-items: inherit;
  height: inherit;
  text-decoration: none;
  color: black;
  padding: 0 4rem;

  &:hover {
    background-color: #dadada;
  }
`;

export const NavMenu = ({ children }) => {
  return (
    <Nav>
      <NavList>{children}</NavList>
    </Nav>
  );
};
