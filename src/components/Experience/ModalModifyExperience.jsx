/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { getExpAction, token } from "../../redux/action";
import { useDispatch } from "react-redux";

//URL MODIFICA   https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId

const ModalModifyExperience = function (props) {
  const formCompleto = new FormData();
  const handleClose = () => props.setmodifyExperience(false);

  const [formExp, setFormExp] = useState(props.exp);
  const [formImg, setFormImg] = useState();

  const dispatch = useDispatch();

  const handleSubmit = function (event) {
    event.preventDefault();
    //const formCompleto = new FormData(event.target);
    if (formImg === undefined) {
      expPutfetch();
    } else {
      formCompleto.set("role", formExp.role);
      formCompleto.set("company", formExp.company);
      formCompleto.set("startDate", formExp.startDate);
      formCompleto.set("endDate", formExp.endDate);
      formCompleto.set("description", formExp.description);
      formCompleto.set("area", formExp.area);
      expPutfetch();
      expImgPost();
    }
  };

  const expPutfetch = async function () {
    const urlPUTexp = `https://striveschool-api.herokuapp.com/api/profile/${props.profilo._id}/experiences/${props.exp._id}`;

    try {
      const response = await fetch(urlPUTexp, {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formExp),
      });
      if (response.ok) {
        handleClose();
        dispatch(getExpAction(props.profilo._id));
      } else {
        throw new Error("ERRORE PUT EXP");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const expImgPost = async function () {
    formCompleto.set("experience", formImg);

    const urlPostImage = `https://striveschool-api.herokuapp.com/api/profile/${props.profilo._id}/experiences/${props.exp._id}/picture`;
    console.log(Object.fromEntries(formCompleto));
    try {
      const response = await fetch(urlPostImage, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formCompleto,
      });
      if (response.ok) {
        dispatch(getExpAction(props.profilo._id));
      } else {
        throw new Error("ERRORE MODIFICA IMMAGINE");
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  };

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="roleImput"
                className="form-label mb-1 text-body-secondary"
              >
                Ruolo*
              </label>
              <input
                id="roleImput"
                type="text"
                name="role"
                required
                className="form-control mb-3"
                value={formExp.role}
                onChange={(e) => {
                  setFormExp({
                    ...formExp,
                    role: e.target.value,
                  });
                }}
              />
              <label
                htmlFor="companyImput"
                className="form-label mb-1 text-body-secondary"
              >
                Azienda*
              </label>
              <input
                id="companyImput"
                type="text"
                name="company"
                required
                className="form-control mb-3"
                value={formExp.company}
                onChange={(e) => {
                  setFormExp({
                    ...formExp,
                    company: e.target.value,
                  });
                }}
              />
              <label
                htmlFor="startDateImput"
                className="form-label mb-1 text-body-secondary"
              >
                Data inizio:*
              </label>
              <input
                id="startDateImput"
                type="date"
                name="startDate"
                required
                className="form-control mb-3"
                value={formExp.startDate.slice(0, 10)}
                onChange={(e) => {
                  setFormExp({
                    ...formExp,
                    startDate: e.target.value,
                  });
                }}
              />
              <label
                htmlFor="endDateImput"
                className="form-label mb-1 text-body-secondary"
              >
                Data fine:*
              </label>
              <input
                id="endDateImput"
                type="date"
                name="endDate"
                required
                className="form-control mb-3"
                value={formExp.endDate.slice(0, 10)}
                onChange={(e) => {
                  setFormExp({
                    ...formExp,
                    endDate: e.target.value,
                  });
                }}
              />

              <label
                htmlFor="areaImput"
                className="form-label mb-1 text-body-secondary"
              >
                Citta&apos;, Paese, Area*
              </label>
              <input
                id="areaImput"
                type="text"
                name="area"
                required
                className="form-control mb-3"
                value={formExp.area}
                onChange={(e) => {
                  setFormExp({
                    ...formExp,
                    area: e.target.value,
                  });
                }}
              />
              <label
                htmlFor="descriptionImput"
                className="form-label mb-1 text-body-secondary"
              >
                Descrizione
              </label>
              <textarea
                id="descriptionImput"
                rows={3}
                name="description"
                className="form-control mb-3"
                value={formExp.description}
                onChange={(e) => {
                  setFormExp({
                    ...formExp,
                    description: e.target.value,
                  });
                }}
              />
              <label
                htmlFor="fileImput"
                className="form-label mb-1 text-body-secondary"
              >
                Scegli un immagine*
              </label>
              <input
                id="fileImput"
                type="file"
                name="experience"
                accept="image/*"
                className="form-control mb-3"
                onChange={(e) => {
                  //formExp.set('experience',e.target.files[0])
                  setFormImg(e.target.files[0]);
                }}
              />

              <small className="mb-1 text-body-secondary display-6 fs-6">
                *indica che è obbligatorio
              </small>
              <br />

              <div className="d-flex justify-content-between">
                <Button type="reset" variant="outline-secondary">
                  Reset
                </Button>
                <Button variant="primary" type="submit">
                  Salva
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalModifyExperience;
