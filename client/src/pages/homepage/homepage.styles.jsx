import styled, { keyframes } from "styled-components";
import { slideInDown } from "react-animations";
const bounceAnimation = keyframes`${slideInDown}`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  height: 60vh;
  animation: 1s ${bounceAnimation};
  @media screen and (max-width: 800px) {
    padding: 10px
  }
`;
