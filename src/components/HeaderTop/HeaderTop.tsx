import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './HeaderTop.css'

function HeaderTop() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">SDU Teхнопарк</Navbar.Brand>
                <Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="SDU IT Park" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">О нас, IT Park</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Проект</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Курсы</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Технопарк" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">О нас, Технопарк</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Software</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Hardware</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Офис предпринимательства" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">О нас, ОП</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Enactus</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#office">Новости</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default HeaderTop;