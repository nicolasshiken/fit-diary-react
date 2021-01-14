import {
    NavBar,
    Container,
    LogoContainer,
    MenuOpener
} from './styles';

export default function Nav({ children, ...restProps }) {
    return(
        <NavBar { ...restProps }>{ children }</NavBar>
    )
}

Nav.Container = function NavContainer({ children, ...restProps }) {
    return(
        <Container { ...restProps}>{ children }</Container>
    )
}

Nav.LogoContainer = function NavLogoContainer({ children, ...restProps }) {
    return(
        <LogoContainer { ...restProps}>{ children }</LogoContainer>
    )
}

Nav.MenuOpener = function NavMenuOpener({ children, ...restProps }) {
    return(
        <MenuOpener { ...restProps}>{ children }</MenuOpener>
    )
}