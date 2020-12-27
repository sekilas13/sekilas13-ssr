import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.jumbotron.bg} !important;
    transition: all 0.2s linear;
  }
  .card {
	  transition: all 0.50s linear;
    background-color: ${({ theme }) => theme.cardCovid.bg};
    color: ${({ theme }) => theme.cardCovid.text};
  }
  #all p, #provinsi h1 {
    transition: all 0.50s linear;
    color: ${({ theme }) => theme.cardCovid.text};
  }
  `;

export default GlobalStyles;
