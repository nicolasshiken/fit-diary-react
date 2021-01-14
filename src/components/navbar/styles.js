import styled from "styled-components/macro";

export const NavBar = styled.nav`
    height: 150px;
    width: 100%;
    padding-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 90%;
    max-width: var(--max-width);
`;

export const LogoContainer = styled.div`
    height: 100%;
`;

export const MenuOpener = styled.div`
    height: 55px;
    width: 55px;
    border-radius: 50%;
    background-color: var(--clr-dark);
    border: 1px solid var(--clr-main);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 32px;
        color: var(--clr-main);
    }
`;