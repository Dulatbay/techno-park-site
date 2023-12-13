import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './HeaderTop.css'
import {NavLink} from "react-router-dom";

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
                                <div className={"dropdown-item"}>
                                    <NavLink to={"/about-it-park"} className={({isActive, isPending}) =>
                                        isPending ? "pending" : isActive ? "active" : "pending"
                                    }>
                                        О нас, IT Park
                                    </NavLink>
                                </div>
                                <div className={"dropdown-item"}>
                                    <NavLink to={"/it-park-projects"} className={({isActive, isPending}) =>
                                        isPending ? "pending" : isActive ? "active" : "pending"
                                    }>
                                        Проекты
                                    </NavLink>
                                </div>
                                <div className={"dropdown-item"}>
                                    <NavLink to={"/courses"} className={({isActive, isPending}) =>
                                        isPending ? "pending" : isActive ? "active" : "pending"
                                    }>
                                        Курсы
                                    </NavLink>
                                </div>
                            </NavDropdown>
                            <NavDropdown title="Технопарк" id="basic-nav-dropdown">
                                <div className={"dropdown-item"}>
                                    <NavLink to={"/about-techno-park"} className={({isActive, isPending}) =>
                                        isPending ? "pending" : isActive ? "active" : "pending"
                                    }>
                                        О нас, Технопарк
                                    </NavLink>
                                </div>
                                <div className={"dropdown-item"}>
                                    <NavLink to={"/software"} className={({isActive, isPending}) =>
                                        isPending ? "pending" : isActive ? "active" : "pending"
                                    }>
                                        Software
                                    </NavLink>
                                </div>
                                <div className={"dropdown-item"}>
                                    <NavLink to={"/hardware"} className={({isActive, isPending}) =>
                                        isPending ? "pending" : isActive ? "active" : "pending"
                                    }>
                                        Hardware
                                    </NavLink>
                                </div>
                            </NavDropdown>
                            <NavDropdown title="Офис предпринимательства" id="basic-nav-dropdown">
                                <div className={"dropdown-item"}>
                                    <NavLink to={"/office"} className={({isActive, isPending}) =>
                                        isPending ? "pending" : isActive ? "active" : "pending"
                                    }>
                                        О нас, ОП
                                    </NavLink>
                                </div>
                                <div className={"dropdown-item"}>
                                    <NavLink to={"/enactus"} className={({isActive, isPending}) =>
                                        isPending ? "pending" : isActive ? "active" : "pending"
                                    }>
                                        Enactus
                                    </NavLink>
                                </div>
                            </NavDropdown>
                            <div className={"nav-link"}>
                                <NavLink to={"/news"} className={({isActive, isPending}) =>
                                    isPending ? "pending" : isActive ? "news-active" : "news-pending"
                                }>
                                    Новости
                                </NavLink>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default HeaderTop;