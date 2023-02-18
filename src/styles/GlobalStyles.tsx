import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, 
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  }

body {
  padding: 20px;
  background-color: #fff;
  font-family: monospace;
  width: 100%;
  min-height: 100vh;
  
}
ol, ul, li {
  list-style: none;
}
`;

export default GlobalStyles;
