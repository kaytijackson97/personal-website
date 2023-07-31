import styled from "styled-components";
import { Page } from "./styles";
import Headshot from "../../images/Headshot.jpg";

const MainBanner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: center;
  padding: 0 10rem;
`;

const NameText = styled.h1`
  font-size: 10.5rem;
  margin: 0;
`;

const SubtitleText = styled.h2`
  font-size: 4rem;
  margin: 0;
`;

const PhotoContainer = styled.div`
  display: flex;
  height: 58.75rem;
`;

export const Home = () => {
  return (
    <Page>
      <MainBanner>
        <TextContainer>
          <NameText>Kayti Jackson</NameText>
          <SubtitleText>Front-end Developer</SubtitleText>
        </TextContainer>
        <PhotoContainer>
          <img src={Headshot} />
        </PhotoContainer>
      </MainBanner>
    </Page>
  );
};
