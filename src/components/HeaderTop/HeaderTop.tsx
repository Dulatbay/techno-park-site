import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './HeaderTop.css'

const HeaderTop = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">SDU Teхнопарк</Navbar.Brand>
                <Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="SDU IT Park" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/about-it-park">О нас, IT Park</NavDropdown.Item>
                                <NavDropdown.Item href="/it-park-projects">Проект</NavDropdown.Item>
                                <NavDropdown.Item href="/cources">Курсы</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Технопарк" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/about-techno-park">О нас, Технопарк</NavDropdown.Item>
                                <NavDropdown.Item href="/software">Software</NavDropdown.Item>
                                <NavDropdown.Item href="/hardware">Hardware</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Офис предпринимательства" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/office">О нас, ОП</NavDropdown.Item>
                                <NavDropdown.Item href="/enactus">Enactus</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/news">Новости</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    );
}


export default HeaderTop;