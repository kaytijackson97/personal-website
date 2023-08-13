import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../images/Logo.svg";
import styled from "styled-components";
import { CORAL_PINK } from "../../constants/colors";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  margin: 0 4rem;
  top: 0;
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
    background-color: ${CORAL_PINK};
  }
`;

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 4rem;
`;

export const NavMenu = ({ children }) => {
  return (
    <Nav>
      <NavLogo to="#home">
        <img src={Logo} alt="Kayti Jackson logo" />
      </NavLogo>
      <NavList>{children}</NavList>
    </Nav>
  );
};
