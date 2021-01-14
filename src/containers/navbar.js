import { Nav } from "../components";

export default function NavBarContainer() {
    return(
        <Nav>
            <Nav.Container>
                <Nav.LogoContainer>
                    <img src="/images/logo.png" alt="FIT Diary"/>
                </Nav.LogoContainer>
                <Nav.MenuOpener>
                    <img src="/images/menu.svg" alt="Menu"/>
                </Nav.MenuOpener>
            </Nav.Container>
        </Nav>
    )
}
