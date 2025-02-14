import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

 *, *::before, *::after {
  box-sizing: border-box;
 },
 
  html {
    --background: #0a192f;
    --foreground: #ccd6f6 ;
    --accent: #63ffda;
}

 * {
  margin: 0;
  padding: 0;
 }

  body {
    color: var(--foreground);
    font-family: Inter;
    background: var(--background);
    color: var(--foreground);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea, select {
    font: inherit;
  }
`;

export default GlobalStyles;
