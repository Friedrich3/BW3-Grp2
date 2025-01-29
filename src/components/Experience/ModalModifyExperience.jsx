/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

//URL MODIFICA   https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId

const ModalModifyExperience = function (props) {
  const handleClose = () => props.setmodifyExperience(false);

  const [formExp, setFormExp] = useState(props.exp);
  console.log(formExp)

  return (
    <>
      <>
        <Modal show={true} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi Esperienza</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={""}>
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
                  value={new Date(formExp.startDate)}
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
                  value={new Date(formExp.endDate)}
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
                    setFormExp({
                      ...formExp,
                      image: e.target.files[0],
                    });
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
    </>
  );
};
export default ModalModifyExperience;
