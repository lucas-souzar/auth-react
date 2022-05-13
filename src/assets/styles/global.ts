import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, sans-serif;
    }

    body{
        background-color: #010101;
        color: #fefefe;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            cursor: pointer;
        }
    }
`;
