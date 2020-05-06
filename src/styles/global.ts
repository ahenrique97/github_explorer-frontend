import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1.2rem Roboto, sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 100%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 90%;
    }
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    font-size: 10px;
  }

  button {
    cursor: pointer;
  }
`;
