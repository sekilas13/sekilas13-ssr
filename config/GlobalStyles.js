import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.jumbotron.bg} !important;
    transition: all 0.2s linear;
  }

  .jumbotron {
    background: ${({ theme }) => theme.jumbotron.bg} !important;
    color: ${({ theme }) => theme.jumbotron.color};
    transition: all 0.50s linear;
  }

  #deskripsi {
    background: ${({ theme }) => theme.deskripsi.bg} !important;
    transition: all 0.50s linear;
  }

  #deskripsi h2 {
    color: ${({ theme }) => theme.deskripsi.h2};
    transition: all 0.50s linear;
  }

  #deskripsi p {
    color: ${({ theme }) => theme.deskripsi.p};
    transition: all 0.50s linear;
  }

  #KataOrang {
    background-color: ${({ theme }) => theme.kataOrang};
  }

  .carousel-caption {
    color: ${({ theme }) => theme.carousel.color};
    transition: all 0.50s linear;
  }

  .carousel-indicators li {
    background-color: ${({ theme }) => theme.carousel.indicator};
    transition: all 0.50s linear;
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23${({
      theme,
    }) =>
      theme.carousel
        .arrow}' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
    transition: all 0.50s linear;
   }
   
   .carousel-control-next-icon {
     background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23${({
       theme,
     }) =>
       theme.carousel
         .arrow}' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
    transition: all 0.50s linear;
   }

   #gambar {
    background: linear-gradient(
      to bottom,
      #${({ theme }) =>
        theme.carousel.arrow !== "fff" ? "f1faee" : "373940"} 0%,
      #${({ theme }) =>
        theme.carousel.arrow !== "fff" ? "f1faee" : "373940"} 13.5%,
      ${({ theme }) => theme.gambar.bg} 35%,
      ${({ theme }) => theme.gambar.bg} 100%
    );
    transition: all 0.50s linear;
  }

  .covid .card {
    transition: all 0.50s linear;
    background-color: ${({ theme }) => theme.cardCovid.bg};
    color: ${({ theme }) => theme.cardCovid.text};
  }

  .covid h1 {
    color: ${({ theme }) => theme.cardCovid.text};
  }

  .covid p {
    color: ${({ theme }) => theme.cardCovid.text};
  }
  
  #NotFound {
    transition: all 0.50s linear;
    background-color: ${({ theme }) => theme.cardCovid.bg};
  }

  #NotFound h5, #NotFound p {
    color: ${({ theme }) => theme.cardCovid.text};
  }
  `;
