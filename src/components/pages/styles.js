import styled from "styled-components";
import { desktop } from "../../constants/breakpoints";
import { CORAL_PINK } from "../../constants/colors";

export const SectionContainer = styled.section`
  height: 100vh;
  overflow: hidden;
  background-color: white;

  & h1 {
    color: ${CORAL_PINK};
  }

  &:nth-child(2n) {
    background: ${CORAL_PINK};

    & h1 {
      color: white;
    }
  }
`;

export const SectionContent = styled.div`
  height: 100%;
  padding: 4rem 2rem 0;

  ${desktop} {
    padding: 4rem 8rem 0;
  }
`;
