import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  article.markdown-body h1,h2,h3,h4,h5,h6,p,ol,li,ul, .container .row .col h1 {
    color: ${({ theme }) => theme.article.all.color};
    transition: all 0.20s linear;
  }

  article.markdown-body a, .card .card-footer a  {
    color: ${({ theme }) => theme.article.anchor.color};
    transition: all 0.20s linear;
  }

  .card {
    border-color: ${({ theme }) => theme.card.border};
    transition: all 0.20s linear;
    border-radius: 0.30em;
  }

  .card .card-header,.card .card-body {
    color: ${({ theme }) => theme.card.textColor};
    transition: all 0.20s linear;
  }

  .card .card-header,.card-footer {
    background-color: ${({ theme }) => theme.card.lighter.bg};
    transition: all 0.20s linear;
    border-top-right-radius: 0.25em;
    border-top-left-radius: 0.25em;
  }

  .card-body {
    background-color: ${({ theme }) => theme.card.center.bg};
    transition: all 0.20s linear;
  }
`;

export default GlobalStyles;
