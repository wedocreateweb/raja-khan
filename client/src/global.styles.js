import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Nunito-Regular';
    src: url('../src/assets/fonts/Nunito-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: 'Nunito-Regular';
    padding: 20px 80px;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
}
`;
