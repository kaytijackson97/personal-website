import { styled } from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  height: 10rem;
  align-items: center;
`;

const TitleText = styled.h1`
  color: white;
  font-size: 5rem;
  margin: 0;
`;

export const Header = ({ title }) => (
  <HeaderContainer>
    <TitleText>{title}</TitleText>
  </HeaderContainer>
);
