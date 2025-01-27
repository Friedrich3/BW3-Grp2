/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { Camera, PencilSquare, Trash } from "react-bootstrap-icons";


const ProfileHero = function (props) {




    
    // HANDLE MODALE ICONA PROFILO
  const [profileEdit, setProfileEdit] = useState(false);
  const handleClose = () => setProfileEdit(false);
  const handleShow = () => setProfileEdit(true);


    






  return (
    <>
    {props  &&
   
      <Card className="">
        <Card.Img variant="top" src="https://placecats.com/500/120" />

        <Card.Body className="">
          <Row className="">
            <Col xs={2}>
              <div className="position-relative">
                <Card.Img
                  src="https://placecats.com/100/100"
                  style={{ width: "150px" }}
                  className=" rounded-circle border border-3 border-white custom-position"
                  onClick={handleShow}
                />
                {/* MODALE MODICA ICONA PROFILO */}
                {profileEdit && (
                  <div
                    className="modal show"
                    style={{ display: "block", position: "initial" }}
                  >
                    <Modal
                      show={profileEdit}
                      onHide={handleClose}
                      animation={false}
                      className="text-white"
                    >
                      <Modal.Header
                        closeButton
                        className=" bg-dark border-secondary"
                      >
                        <Modal.Title>Foto Profilo</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className=" bg-dark border-secondary d-flex justify-content-center">
                        <img
                          src="https://placecats.com/100/100"
                          style={{ width: "150px" }}
                          className=" rounded-circle border border-3 border-white"
                          onClick={handleShow}
                        />
                      </Modal.Body>
                      <Modal.Footer className=" bg-dark border-secondary justify-content-between">
                        <Button variant="dark">
                          <Camera />
                          <br />
                          Modifica
                        </Button>
                        <Button variant="dark">
                          <Trash></Trash>
                          <br />
                          Elimina
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                )}
              </div>
            </Col>
            <Col className="text-end">
              <Button
                variant="outline-secondary"
                className=" opacity-75 border-0 rounded-circle"
              >
                <PencilSquare color="black" size={20}></PencilSquare>
              </Button>
            </Col>
          </Row>
          <div>
            <Card.Title className=" fs-3">
              {`${props.profilo.name} ${props.profilo.surname}` }
              <small className="btn btn-outline-primary custom-border py-0 rounded-pill">
                Aggiungi Badge
              </small>
            </Card.Title>
            <Card.Text>{props.profilo.title}</Card.Text>
            <small className="text-secondary">{props.profilo.area}</small>
          </div>
          <div className="mt-3">
            <Button variant="primary" className=" rounded-pill me-2 fw-medium">
              Disponibile per
            </Button>
            <Button
              variant="outline-primary"
              className=" rounded-pill me-2 fw-medium"
            >
              Aggiungi sezione del profilo
            </Button>
            <Button
              variant="outline-secondary"
              className=" rounded-pill me-2 fw-medium"
            >
              Risorse
            </Button>
          </div>
        </Card.Body>
      </Card>
       }
    </>
  );
};
export default ProfileHero;
