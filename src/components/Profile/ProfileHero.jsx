/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import {
  FileEarmarkPlus,
  PencilSquare,
  ShieldCheck,
  
} from "react-bootstrap-icons";
import EditProfileModal from "./EditProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, token } from "../../redux/action";

const ProfileHero = function (props) {
  // HANDLE MODALE ICONA PROFILO
  const [profilePictureEdit, setProfilePictureEdit] = useState(false);
  const handleClose = (e) => e(false);
  const handleShow = (e) => e(true);
  const dispatch = useDispatch()

  //Modale Modifica profilo
  const[editProfile,setEditProfile] = useState(false)

  //modifica Foto Profilo
  const[profileImage, setProfileImage] = useState(props.profilo.image)

  //Redux STore delle esperienze
  const lastExp = useSelector((store) => {
    return store.experiences.data[store.experiences.data.length -1];
  });


  const handleSubmit = (e)=>{
    e.preventDefault()
    changeProfilePicture()
    setEditProfile(false)

  }

  const changeProfilePicture = async () =>{
    const form = new FormData()
    const urlPicture = `https://striveschool-api.herokuapp.com/api/profile/${props.profilo._id}/picture`
    form.set("profile", profileImage)
    try {
      const response = await fetch(urlPicture,{
        method:'POST',
        headers:{
          Authorization: token
        },
        body : form
      })
      if(response.ok){
        dispatch(getDataAction())
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {props && (
        <Card className="">
          <Card.Img
            variant="top"
            src="../assets/PlaceholderBackground.jpeg"
          />

          <Card.Body className="">
            <Row className="">
              <Col xs={2}>
                <div className="position-relative">
                  <Card.Img
                    src={props.profilo.image}
                    style={{ width: "150px", height:'150px' }}
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
                            style={{ width: "150px", height:'150px' }}
                            className=" rounded-circle border border-3 border-white"
                            onClick={handleShow}
                          />
                        </Modal.Body>
                        <Modal.Footer className=" bg-dark border-secondary justify-content-between">
                          {/* <Button variant="dark">
                            <Camera />
                            <br />
                            Modifica
                          </Button> */}
                          <Form className="d-flex w-100 justify-content-between" onSubmit={handleSubmit}>
                          <Form.Group>
                            <input
                id="fileImput"
                type="file"
                name="profile"
                accept="image/*"
                className="form-control mb-3"
                onChange={(e) => {
                  //formExp.set('experience',e.target.files[0])
                  setProfileImage(e.target.files[0]);
                }}
              />
                          </Form.Group>
                          <Button variant="dark" type="submit" className="">
                            <FileEarmarkPlus />
                            Salva
                           
                          </Button>
                          </Form>
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

              <Col xs={12} md={5} className="">
              {lastExp &&(<Row>
                <Col className="d-flex align-items-center custom-hover-card rounded-4" xs={12}>
                  <img src={lastExp.image} alt="" className="rounded-circle" style={{'width':'60px'}}/> 
                <a href="#company" className=" text-decoration-none custom-hover"><span className=" h6 ms-2 text-black">{lastExp.company}</span></a>
                
                </Col>
                <Col className="d-flex" xs={12}>
                
                </Col>

              </Row>)}
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
