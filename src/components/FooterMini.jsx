import { Link } from "react-router-dom";
import { useState } from "react";
import { Col, Container, Modal, Nav, Row } from "react-bootstrap";
import FooterLinkedin from "./FooterLinkedin";

const FooterMini = function () {
  const [show, setShow] = useState(false);

  return (
    <>
      <footer className="mt-4">
        <Container>
          <Row className="text-center">
            <Col >
              <Nav className="justify-content-center ">
                <Link to="/" className="footerMini p-1 ">
                  Informazioni
                </Link>
                <Link to="/" className="footerMini p-1 ">
                  Accessibilità
                </Link>
                <Link to="/" className="footerMini p-1 ">
                  Centro assistenza
                </Link>
                <Link to="/" className="footerMini p-1 ">
                  Privacy e condizioni
                </Link>
                <Link to="/" className="footerMini p-1 ">
                  Opzioni per gli annunci pubblicitari
                </Link>
                <Link to="/" className="footerMini p-1">
                  Pubblicità
                </Link>
                <Link to="/" className="footerMini p-1 ">
                  Servizi alle aziende
                </Link>
                <Link to="/" className="footerMini p-1 ">
                  Scarica l’app LinkedIn.
                </Link>
                <Link
                  to="/"
                  className="footerMini p-1 "
                  onClick={() => setShow(true)}
                >
                  Altro.
                </Link>
                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  id="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
                        alt="logo Linkedin"
                        width={100}
                      />
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <FooterLinkedin />
                  </Modal.Body>
                </Modal>
              </Nav>
              <p className="footerMini p-1 ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
                  alt="logo Linkedin"
                  width={50}
                />{" "}
                LinkedIn Corporation &copy;2025
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default FooterMini;
