import { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { Camera, PencilSquare, Trash } from "react-bootstrap-icons";
// import { useDispatch } from "react-redux";
import { getDataAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";


const ProfileHero = function () {

const dispatch = useDispatch()
const profilo = useSelector((state)=>{ return state.profile.data})


    
    // HANDLE MODALE ICONA PROFILO
  const [profileEdit, setProfileEdit] = useState(false);
  const handleClose = () => setProfileEdit(false);
  const handleShow = () => setProfileEdit(true);


    


    useEffect(()=>{
            dispatch(getDataAction()) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])




  return (
    <>
    {profilo  &&
   
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
              {`${profilo.name} ${profilo.surname}` }
              <small className="btn btn-outline-primary custom-border py-0 rounded-pill">
                Aggiungi Badge
              </small>
            </Card.Title>
            <Card.Text>{profilo.title}</Card.Text>
            <small className="text-secondary">{profilo.area}</small>
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
