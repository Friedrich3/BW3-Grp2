/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { PencilSquare, ShieldCheck} from "react-bootstrap-icons";
import EditProfileModal from "./EditProfileModal";
import { useSelector } from "react-redux";
import ProfileModalPhoto from "./ProfileModalPhoto";

const ProfileHero = function (props) {
  // HANDLE MODALE ICONA PROFILO
  const [profilePictureEdit, setProfilePictureEdit] = useState(false);
  const handleClose = (e) => e(false);
  const handleShow = (e) => e(true);

  //Modale Modifica profilo
  const[editProfile,setEditProfile] = useState(false)

  //Redux STore delle esperienze
  const lastExp = useSelector((store) => {
    return store.experiences.data[store.experiences.data.length -1];
  });

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
                    style={{ width: "150px" }}
                    className=" rounded-circle border border-3 border-white custom-position"
                    onClick={()=>{handleShow(setProfilePictureEdit)}}
                  />
                  {/* MODALE MODICA ICONA PROFILO */}
                  {profilePictureEdit && <ProfileModalPhoto profileEdit={setEditProfile}  profilePictureEdit={setProfilePictureEdit} />}
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

                            <ProfileModalPhoto 
                            profileEdit={profileEdit} 
                            setProfilePictureEdit={setProfileEdit} 
                            profilo={userProfile} 
                            userId={userId} 
                            />

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
