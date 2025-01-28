/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import {
  Camera,
  PencilSquare,
  ShieldCheck,
  Trash,
} from "react-bootstrap-icons";
import EditProfileModal from "./EditProfileModal";

const ProfileHero = function (props) {
  // HANDLE MODALE ICONA PROFILO
  const [profilePictureEdit, setProfilePictureEdit] = useState(false);
  const handleClose = (e) => e(false);
  const handleShow = (e) => e(true);

  //Modale Modifica profilo
  const[editProfile,setEditProfile] = useState(false)

  return (
    <>
      {props && (
        <Card className="">
          <Card.Img
            variant="top"
            src="../public/assets/PlaceholderBackground.jpeg"
          />

          <Card.Body className="">
            <Row className="">
              <Col xs={2}>
                <div className="position-relative">
                  <Card.Img
                    src={props.profilo.image}
                    style={{ width: "150px" }}
                    className=" rounded-circle border border-3 border-white custom-position"
                    onClick={()=>{handleShow(setProfilePictureEdit)}}
                  />
                  {/* MODALE MODICA ICONA PROFILO */}
                  {profilePictureEdit && (
                    <div
                      className="modal show"
                      style={{ display: "block", position: "initial" }}
                    >
                      <Modal
                        show={profilePictureEdit}
                        onHide={()=>{handleClose(setProfilePictureEdit)}}
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
                            src={props.profilo.image}
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
                  className="border-0 rounded-circle py-2 align-text-top"
                  onClick={()=>{setEditProfile(true)}}
                >
                  <PencilSquare color="black" size={20}></PencilSquare>
                </Button>
              </Col>

                  {editProfile &&(

                    <EditProfileModal profilo={props.profilo} setEditProfile={setEditProfile} />

                  )}

            </Row>
            <Row>
              <Col xs={12} md={7}>
            <div>
              <Card.Title className=" fs-3 d-flex align-items-center">
                {`${props.profilo.name} ${props.profilo.surname}`}
                <ShieldCheck className="ms-2 fs-5"/>
                {/* <small className="btn btn-outline-primary custom-border py-0 rounded-pill ms-1 fw-medium">
                  Aggiungi Badge
                </small> */}
              </Card.Title>
              <Card.Text>{props.profilo.title}</Card.Text>
              <small className="text-secondary">{props.profilo.area}</small>
            </div>
              
              </Col>

              <Col xs={12} md={5} className="border border-1">
                  <Row>
                    <Col className="d-flex align-items-center" xs={12}>
                     <img src="https://placecats.com/50/50" alt="" className="rounded-circle"/> 
                    <a href="#company" className=" text-decoration-none custom-hover"><span className=" h6 ms-2 text-black">Company Name</span></a>
                    
                    </Col>
                    <Col className="d-flex" xs={12}>
                    
                    </Col>

                  </Row>
              </Col>
            </Row>
            <div className="mt-3">
              <Button
                variant="primary"
                className=" rounded-pill me-2 fw-medium"
              >
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
      )}
    </>
  );
};
export default ProfileHero;
