import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Col, Dropdown, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
//i<mport NavDropdown from 'react-bootstrap/NavDropdown';
import * as Icon from "react-bootstrap-icons";

function NavbarLinkedin() {
  const location = useLocation();
  return (
    <header className=" container-fluid p-0">
      <Row>
        <Col>
          <Navbar expand="lg" className="bg-white ">
            <Container className="d-flex justify-content-between align-items-center">
              <Navbar.Brand href="#home" className="m-0 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="#0A66C2"
                  className="mercado-match"
                  width="40"
                  height="40"
                  focusable="false"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                <Icon.Search className="my-auto mx-1" />
                <input
                  type="text"
                  className="form-control d-none d-lg-block"
                  placeholder="Cerca"
                />
              </Navbar.Brand>
              
              <Nav className="d-flex flex-row align-items-center ">
                <Nav.Item className="mx-2 mx-lg-0">
                  <Link
                    to="/"
                    className={
                      location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginRight :"2px",
                    }}
                  >
                    <Icon.HouseDoorFill fill="secondary" className="fs-4" />
                    <span className="d-none d-lg-inline">Home</span>
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-2 mx-lg-0">
                  <Link
                    to="/rete"
                    className={
                      location.pathname === "rete"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginRight :"2px",
                    }}
                  >
                    <Icon.PeopleFill className="fs-4" />
                    <span className="d-none d-lg-inline">Rete</span>
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-2 mx-lg-0">
                  <Link
                    to="/lavoro"
                    className={
                      location.pathname === "lavoro"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginRight :"2px",
                    }}
                  >
                    <Icon.BriefcaseFill className="fs-4" />
                    <span className="d-none d-lg-inline">Lavoro</span>
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-2 mx-lg-0"> 
                  <Link
                    to="/messaggistica"
                    className={
                      location.pathname === "messaggistica"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginRight :"2px",
                    }}
                  >
                    <Icon.ChatDotsFill className="fs-4" />
                    <span className="d-none d-lg-inline">Messaggistica</span>
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-2 mx-lg-0">
                  <Link
                    to="/notifiche"
                    className={
                      location.pathname === "notifiche"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginRight :"2px",
                    }}
                  >
                    <Icon.BellFill className="fs-4" />
                    <span className="d-none d-lg-inline">Notifiche</span>
                  </Link>
                </Nav.Item>

                <Dropdown className="d-flex flex-column align-items-center mx-0 my-2 ps-4">
                  <Link to={'/profile'}><Icon.PersonCircle className="fs-5" /></Link> 
                  <div className="m-0">
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-basic"
                      className="p-0"
                    >
                      Tu
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </div>
                </Dropdown>

                <Dropdown className="d-flex flex-column align-items-center my-autod mx-0 my-2 ps-4">
                  <Icon.Grid3x3GapFill className="fs-5" />

                  <div className="m-0">
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-basic"
                      className="p-0"
                    >
                      Per le aziende
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </div>
                </Dropdown>
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </header>
  );
}

export default NavbarLinkedin;
