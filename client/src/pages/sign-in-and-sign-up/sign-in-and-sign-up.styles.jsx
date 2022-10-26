import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";

const bounceAnimation = keyframes`${fadeInLeft

}`;

export const StyledDiv = styled.div`
animation: 1s ${bounceAnimation};

`;
