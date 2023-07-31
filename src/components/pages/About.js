import styled from "styled-components";
import { Page } from "./styles";

const AboutTitle = styled.h1`
    margin: 0;
    font-size: 2rem;
`;

export const About = () => {
    return (
        <Page>
            <AboutTitle>About</AboutTitle>
        </Page>
    )
};