import { createGlobalStyle } from 'styled-components';

import waveImg from '../images/wave.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --orange: #f55f11;
    --green: #4caf50;
    --red: #E62E4D;
    --white: #FFFFFF;
    --gray: #74757c;
    --blue: #002346;
    
    --max-width: 1100px;
  }

  html {
    @media(max-width: 499px) {
     font-size: 87.5%; // 14px
    }

    @media(min-width: 500px) and (max-width: 700px) {
     font-size: 93.75%; // 15px
    }
  }

  body {
    background: var(--orange);
    min-height: 100vh;
    background-image: url(${waveImg});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  .overlay-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
  }

  .modal {
    max-width: 400px;
    width: 100%;
  }
`;