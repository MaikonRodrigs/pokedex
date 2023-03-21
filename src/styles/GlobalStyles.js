import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700,800');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all .2s linear;
    }
    html, border-style, #root {
        max-height: 100vh;
        max-width: 100%;
        width: 100%;
        height: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
        outline: none;
        font-family: var(--font-family-sans-serif);
        font-family: 'Nunito', sans-serif;
    }
    
    html {
        background: var(--gray-light);
        background: rgb(146, 209, 180);
        color: var(--secondary);
        /* background-image: linear-gradient(to bottom, #6b6bd1, #6c77d7, #6f83dc, #748fe0, #7b9ae3, #73a7ec, #6db3f3, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1); */
    }
    :root {
    --primary: #000;
    --secondary: #15181C;
    --white: #D9D9D9;
    --black: #3c3c3c;
    --gray: #7A7A7A;
    --gray-light: #f2f2f2;

    --error: #ED6A5E;
    --shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);

    --text-shadow: 0 0 12px rgba(0,0,0,.25);
    }
`;