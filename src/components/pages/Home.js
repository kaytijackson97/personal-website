import styled from "styled-components";
import { desktop, tablet } from "../../constants/breakpoints";
import { CORAL_PINK } from "../../constants/colors";
import { SectionContent } from "./styles";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

const NameText = styled.h1`
  font-size: 5.5rem;
  color: ${CORAL_PINK};
  margin: 0;

  ${tablet} {
    font-size: 7.5rem;
  }

  ${desktop} {
    font-size: 10.5rem;
  }
`;

const SubtitleText = styled.h2`
  display: inline-block;
  font-size: 1.5rem;
  margin: 0;

  ${tablet} {
    font-size: 2rem;
  }

  ${desktop} {
    font-size: 2.75rem;
  }
}
`;

export const Home = () => {
  return (
      <SectionContent id="home">
        <TextContainer>
          <NameText>Kayti Jackson</NameText>
          <SubtitleText>
            Software Engineer | Web Developer | Checkbox Maker
          </SubtitleText>
        </TextContainer>
      </SectionContent>
  );
};
