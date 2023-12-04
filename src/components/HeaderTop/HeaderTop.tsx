import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './HeaderTop.css'
import { NavLink } from "react-router-dom";

function HeaderTop() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">SDU Teхнопарк</Navbar.Brand>
                <Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="SDU IT Park" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <NavLink to={"/about-it-park"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "pending"
                                    }>
                                        О нас, IT Park
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to={"/it-park-projects"} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "pending"
                                    }>
                                        Проекты
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/cources">Курсы</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Технопарк" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/about-techno-park">О нас, Технопарк</NavDropdown.Item>
                                <NavDropdown.Item href="/software">Software</NavDropdown.Item>
                                <NavDropdown.Item href="/technopark/hardware">Hardware</NavDropdown.Item>
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