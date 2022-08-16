import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    
}
body{
    background-color: ${(props) => props.theme.background};
    font-family: 'Enriqueta', serif;
    transition: all 0.1s ease;
}
a{
    text-decoration:none;
    color: ${(props) => props.theme.primary};
}
`;
