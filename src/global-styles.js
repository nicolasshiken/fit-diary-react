import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        min-height: 100vh;
        width: 100%;
        max-width: var(--max-width);
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        margin: 0 auto;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        background-image: url(images/background.png);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        justify-content: center;
        align-items: center;
    }

    img {
        display: block;
        max-height: 100%;
    }

    :root {
        --clr-grey: #AAAAAA;
        --clr-dark: #555555;
        --clr-main: #F1EC40;
        --clr-white: #FFFFFF;
        --txt-shadow: 1px 0 0 var(--clr-dark), -1px 0 0 var(--clr-dark), 0 1px 0 var(--clr-dark), 0 -1px 0 var(--clr-dark), 1px 1px var(--clr-dark), -1px -1px 0 var(--clr-dark), 1px -1px 0 var(--clr-dark), -1px 1px 0 var(--clr-dark);
        --drop-shadow: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        --border-raduis: 5px;
        --max-width: 500px;
        --font-family: 'Roboto', sans-serif;
        font-family: var(--font-family);
    }

    .title {
        font-size: 30px;
        color: var(--clr-white);
        text-shadow: var(--txt-shadow);
        margin: 8px 0;
    }

    .subtitle {
        font-size: 25px;
        color: var(--clr-white);
        text-shadow: var(--txt-shadow);
        margin-bottom: 8px;
    }
    
    .add-btn {
        height: 55px;
        width: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        filter: var(--drop-shadow);
        margin: 8px 0;

        img {
            height: 100%;
            width: 100%;
        }
    }

    .cta {
        width: 160px;
        height: 55px;
        font-size: 20px;
        color: var(--clr-dark);
        font-weight: 700;
        border-radius: var(--border-raduis);
        border: 1px solid var(--clr-dark);
        background-color: var(--clr-main);
        filter: var(--drop-shadow);
        margin: 8px 0;
        text-transform: uppercase;
    }

    .section {
        margin: 8px 0;
        width: 100%;
        max-width: var(--max-width);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;