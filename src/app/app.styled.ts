import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@200;300;400;500;600;700&display=swap');
  
  ${normalize}
  
  html {
    font-size: 16px;
    font-family: 'Sofia Sans', sans-serif;
  }
  
  body {
    max-height: 100vh;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  #app {
    overflow: hidden;
  }
`;
