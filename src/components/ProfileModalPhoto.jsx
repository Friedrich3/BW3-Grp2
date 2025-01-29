/* eslint-disable react/prop-types */
import { useState } from "react";
import { Camera,Trash,} from "react-bootstrap-icons" 
import { Modal, Button } from "react-bootstrap";

const ProfileModalPhoto = (props) => {
    const handleClose = (e) => e(false);
    const handleShow = (e) => e(true);
    

    return (
        <>
           <Modal
                        show={props.profileEdit}
                        onHide={()=>{handleClose(props.setProfilePictureEdit)}}
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
        </>
    )
}

export default ProfileModalPhoto;