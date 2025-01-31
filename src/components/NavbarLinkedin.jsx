import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Card, Col, Form, Offcanvas, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as Icon from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { BsFillPlayBtnFill, BsFillSignpostSplitFill } from "react-icons/bs";
import { CgInsights } from "react-icons/cg";
import { GiOnTarget } from "react-icons/gi";
import { IoMdArrowDropdown, IoMdCompass } from "react-icons/io";
import { MdCloudDone } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { useState } from "react";

function NavbarLinkedin() {
  const location = useLocation();
  const navigate = useNavigate();
  const profilo = useSelector((store) => {
    return store.profile.data;
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    navigate(`/lavoro/${search}`);
    setSearch('')
  };

  return (
    <header className=" container-fluid p-0">
      <Row>
        <Col>
          <Navbar expand="lg" className="bg-white ">
            <div className="d-flex justify-content-between align-items-center container-fluid container-lg">
              <Row className="w-100">
                <Nav.Item
                  href=""
                  className="m-0 d-flex col-6 justify-content-start align-items-center"
                >
                  <Link
                    to="/"
                    className={
                      location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                  >
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
                  </Link>
                  <Icon.Search className="my-auto mx-1" />
                  {/* <input
                  type="text"
                  className="form-control d-none d-lg-block"
                  placeholder="Cerca"
                /> */}
                  <Form onSubmit={handleSubmit}>
                    <Form.Control
                      type="text"
                      className="form-control pe-5"
                      id="search"
                      placeholder="Cerca"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    ></Form.Control>
                  </Form>
                </Nav.Item>

                <Nav className="d-flex flex-row align-items-center col-6 justify-content-center">
                  <Nav.Item className="mx-2 mx-lg-0">
                    <Link
                      to="/"
                      className={
                        location.pathname === "/"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginRight: "2px",
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
                        marginRight: "2px",
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
                        marginRight: "2px",
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
                        marginRight: "2px",
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
                        marginRight: "2px",
                      }}
                    >
                      <Icon.BellFill className="fs-4" />
                      <span className="d-none d-lg-inline">Notifiche</span>
                    </Link>
                  </Nav.Item>
                  <div
                    className="nav-link d-flex flex-column align-items-md-center align-items-start gap-1 gap-md-0 
               border border-bottom-0 border-top-0 border-start-0 pe-2"
                  >
                    <NavDropdown
                      title={
                        <>
                          <img
                            src={profilo.image}
                            alt="logo"
                            className="rounded-circle mt-0"
                            //style={{ top: "15px" }}
                            style={{width:'30px',height:'30px'}}
                          />
                          <br className="d-none d-lg-inline" />
                          <span className="d-none d-lg-inline">Tu</span>
                        </>
                      }
                      id="basic-nav-dropdown"
                      align="end"
                      className="m-0 mb-1 position-relative"
                    >
                      <NavDropdown.Item onClick={() => navigate("/profile")}>
                        <div className="d-flex gap-2">
                          <Col>
                            <img
                              src={profilo.image}
                              alt="profile logo"
                              style={{width:'40px',height:'40px'}}
                              className="rounded-circle"
                            />
                          </Col>
                          <Col>
                            <div>
                              <h5>
                                {profilo.name} {profilo.surname}
                              </h5>
                            </div>
                          </Col>
                        </div>
                        <Button
                          variant="outline-primary"
                          className="w-100 mt-3 rounded rounded-5"
                          onClick={() => navigate("/profile_my")}
                        >
                          Visualizza profilo
                        </Button>
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <h5 className="ms-3">Account</h5>
                      <NavDropdown.Item href="#action/3.4">
                        Impostazioni e privacy
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">Guida</NavDropdown.Item>
                      <NavDropdown.Item href="#">Lingua</NavDropdown.Item>

                      <NavDropdown.Divider />
                      <h5 className="ms-3">Gestisci</h5>
                      <Link
                        to="/activity"
                        className={
                          location.pathname === "activity"
                            ? "dropdown-item active"
                            : "dropdown-item"
                        }
                      >
                        Post e attività
                      </Link>
                      <NavDropdown.Item
                        href="#"
                        style={{
                          maxWidth: "250px",
                          wordBreak: "break-word",
                          overflow: "visible",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Account per la pubblicazione di..
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#">Esci</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div
                    className="nav-link d-flex flex-column align-items-center gap-1 gap-md-0 pointer ps-2 ps-lg-0"
                    onClick={handleShow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="gray"
                      className="bi bi-grid-3x3-gap-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                    </svg>

                    <span
                      className="mt-1 mx-1 text-center"
                      style={{ fontSize: "12px", color: "gray" }}
                    >
                      <span className="d-none d-lg-inline">
                        Per le aziende
                        <IoMdArrowDropdown className="fs-5" />
                      </span>
                    </span>
                  </div>

                  <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Container className="rounded rounded-3 border-2">
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                          <h3>Per le aziende</h3>
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body
                        className="rounded rounded-3 border-2 overflow-auto"
                        style={{ maxHeight: "90vh" }}
                      >
                        <Row>
                          <Col>
                            <Card>
                              <Card.Header className="bg-white">
                                <h4>Le mie app</h4>
                              </Card.Header>
                              <Card.Body>
                                <Row className="row-cols-4 gy-3 justify-content-start">
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-center "
                                    >
                                      <BsFillPlayBtnFill className="text-primary fs-1 p-1 offcanvas-link " />
                                      <span
                                        className="text-center"
                                        style={{ color: "gray" }}
                                      >
                                        Learning
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-center "
                                    >
                                      <CgInsights className="text-primary fs-1 p-1 offcanvas-link " />
                                      <span
                                        className="text-center"
                                        style={{ color: "gray" }}
                                      >
                                        Talent Insights
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-center "
                                    >
                                      <BsFillSignpostSplitFill className="text-primary fs-1 p-1 offcanvas-link " />
                                      <span
                                        className="text-center"
                                        style={{ color: "gray" }}
                                      >
                                        Pubblica un&apos;offerta di lavoro
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-center "
                                    >
                                      <GiOnTarget className="text-primary fs-1 p-1 offcanvas-link " />
                                      <span
                                        className="text-center"
                                        style={{ color: "gray" }}
                                      >
                                        Pubblicizza
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-center "
                                    >
                                      <IoMdCompass className="text-primary fs-1 p-1 offcanvas-link " />
                                      <span
                                        className="text-center"
                                        style={{ color: "gray" }}
                                      >
                                        Trova nuovi clienti
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-center "
                                    >
                                      <TiGroup className="text-primary fs-1 p-1 offcanvas-link " />
                                      <span
                                        className="text-center"
                                        style={{ color: "gray" }}
                                      >
                                        Gruppi
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-center "
                                    >
                                      <MdCloudDone className="text-primary fs-1 p-1 offcanvas-link " />
                                      <span
                                        className="text-center"
                                        style={{ color: "gray" }}
                                      >
                                        Marketplace di servizi
                                      </span>
                                    </Link>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                            <Card className="mt-3">
                              <Card.Header className="bg-white">
                                <h4>Scopri altro per il business</h4>
                              </Card.Header>
                              <Card.Body>
                                <Row
                                  className=" justify-content-start row-cols-1 gy-3"
                                  id="altroBusiness"
                                >
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-start "
                                    >
                                      <p className="mb-0 fw-semibold">
                                        Assumi su Linkedin
                                      </p>
                                      <span style={{ color: "gray" }}>
                                        Trova, attrai e assumi
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-start "
                                    >
                                      <p className="mb-0 fw-semibold">
                                        Vendi con LinkedIn{" "}
                                      </p>
                                      <span style={{ color: "gray" }}>
                                        Sblocca nuove opportunità di vendita{" "}
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-start "
                                    >
                                      <p className="mb-0 fw-semibold">
                                        Offerta di lavoro gratuita{" "}
                                      </p>
                                      <span style={{ color: "gray" }}>
                                        Ottieni rapidamente candidati
                                        qualificati{" "}
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-start "
                                    >
                                      <p className="mb-0 fw-semibold">
                                        Fai pubblicità su LinkedIn{" "}
                                      </p>
                                      <span style={{ color: "gray" }}>
                                        Acquisisci clienti e fai crescere la tua
                                        azienda{" "}
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-start "
                                    >
                                      <p className="mb-0 fw-semibold">
                                        Impara con LinkedIn{" "}
                                      </p>
                                      <span style={{ color: "gray" }}>
                                        Assumi su LinkedIn
                                      </span>
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      to={"/"}
                                      className=" nav-link d-flex flex-column align-items-start "
                                    >
                                      <p className="mb-0 fw-semibold">
                                        Centro amministrazione{" "}
                                      </p>
                                      <span style={{ color: "gray" }}>
                                        Gestisci i dettagli di fatturazione e
                                        account
                                      </span>
                                    </Link>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                            <Card className="mt-3">
                              <Card.Header className="bg-white">
                                <Link
                                  to={"/"}
                                  className=" nav-link"
                                  id="paginaAziendale"
                                >
                                  <p className="mb-0 fw-semibold">
                                    Crea una pagina aziendale +
                                  </p>
                                </Link>
                              </Card.Header>
                            </Card>
                          </Col>
                        </Row>
                      </Offcanvas.Body>
                    </Container>
                  </Offcanvas>
                </Nav>
              </Row>
            </div>
          </Navbar>
        </Col>
      </Row>
    </header>
  );
}

export default NavbarLinkedin;
