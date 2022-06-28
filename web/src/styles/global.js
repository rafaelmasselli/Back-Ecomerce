import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    color:white;
    padding: 0;
    margin: 0;
    font-family: Times, "Times New Roman", Georgia, serif;
    
   h1{
     text-align: center;
     margin-top: 50px;
     font-size:50px;
   }
   body{
     background: black;
}
  }
`;
