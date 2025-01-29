/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getDataAction } from "../redux/action";

const EditProfileModal = function (props) {
  const dispatch = useDispatch();
  const initialProfile = props.profilo;
  const [formProfile, setFormProfile] = useState(initialProfile);

  const handleClose = () => props.setEditProfile(false);

  useEffect(() => {
    formProfile;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formPut = async function () {
    const url = "https://striveschool-api.herokuapp.com/api/profile";
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NDU0YTE2ZjYzNTAwMTVmZWNiN2MiLCJpYXQiOjE3Mzc5NjY5MjIsImV4cCI6MTczOTE3NjUyMn0.APtaAFtP0PypOo5hfd4isz08vj_exXfml5SDPxQvOZ4";
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { Authorization: token, "Content-Type": "application/json" },
        body: JSON.stringify(formProfile),
      });

      if (response.ok) {
        handleClose();
        dispatch(getDataAction());
      } else {
        throw new Error("Errore PUT");

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-1 text-body-secondary">
                Nome*
              </Form.Label>
              <Form.Control
                type="email"
                value={formProfile.name}
                required
                className="mb-3"
                onChange={(e) => {
                  setFormProfile({
                    ...formProfile,
                    name: e.target.value,
                  });
                }}
              />
              <Form.Label className="mb-1 text-body-secondary">
                Cognome*
              </Form.Label>
              <Form.Control
                type="text"
                value={formProfile.surname}
                required
                className="mb-3"
                onChange={(e) => {
                  setFormProfile({
                    ...formProfile,
                    surname: e.target.value,
                  });
                }}
              />
              <Form.Label className="mb-1 text-body-secondary">
                In attivita&apos; presso:*
              </Form.Label>
              <Form.Control
                type="text"
                value={formProfile.title}
                required
                className="mb-3"
                onChange={(e) => {
                  setFormProfile({
                    ...formProfile,
                    title: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <h5>Localita&apos;</h5>

            <Form.Label className="mb-1 text-body-secondary">
              Citta&apos;, Paese, Area*
            </Form.Label>
            <Form.Control
              type="text"
              value={formProfile.area}
              required
              className="mb-3"
              onChange={(e) => {
                setFormProfile({
                  ...formProfile,
                  area: e.target.value,
                });
              }}
            />
            <small className="mb-1 text-body-secondary display-6 fs-6">
              *indica che è obbligatorio
            </small>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" justify-content-between">
          <Button
            variant="outline-secondary"
            onClick={() => {
              setFormProfile(initialProfile);
            }}
          >
            Reset
          </Button>
          <Button variant="primary" onClick={formPut}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditProfileModal;
