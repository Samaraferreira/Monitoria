import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  *, button, input {
    border: 0;
    -webkit-font-smoothing: antialiased;
  }
`;
