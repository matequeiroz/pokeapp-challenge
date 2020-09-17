import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #121212;
    -webkit-font-smoothing: antialiased;
    color: #FFF;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 1em;
  }

  button {
    cursor: pointer;
  }
`;
