/* eslint-disable react/prop-types */

import { Button, Modal } from "react-bootstrap";
import { getExpAction, token } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

// const initialExperience = {
//   role: "",
//   company: "",
//   startDate: "",
//   endDate: "", // può essere null
//   description: "",
//   area: "",
//   image: "",
// };
const backupImage =
  "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png";

const ModalAddExperience = function (props) {
  const profilo = useSelector((state) => {
    return state.profile.data;
  });

  const dispatch = useDispatch();
  const handleClose = () => props.setAddExperience(false);

  const handleSubmit = function (event){
        event.preventDefault();
        const formCompleto = new FormData(event.target);
        //console.log(Object.fromEntries(formCompleto))
        formPost(formCompleto);
  }


  const formPost = async function (element) {
    const endpointPOST = `https://striveschool-api.herokuapp.com/api/profile/${profilo._id}/experiences`;

    element.append('image', backupImage)
    // element.set
    // console.log(img.name)
    const data = JSON.stringify(Object.fromEntries(element))
    
    try {
      const response = await fetch(endpointPOST, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: data
      });
      if (response.ok) {
        handleClose();
        dispatch(getExpAction(profilo._id));
      } else {
        throw new Error("Errore fetch POST experience");
      }
    } catch (error) {
      console.log(error);
    }
   };

  return (
    <>
      <>
        <Modal show={true} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi Esperienza</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={handleSubmit}
            >
              <div
                className="mb-3"
              >
                <label htmlFor="roleImput" className="form-label mb-1 text-body-secondary" >
                  Ruolo*
                </label>
                <input
                id="roleImput"
                  type="text"
                  name="role"
                  required
                  className="form-control mb-3"
                  
                />
                <label htmlFor="companyImput" className="form-label mb-1 text-body-secondary">
                  Azienda*
                </label>
                <input
                id="companyImput"
                  type="text"
                  name="company"
                  required
                  className="form-control mb-3"
                  
                />
                <label htmlFor="startDateImput" className="form-label mb-1 text-body-secondary">
                  Data inizio:*
                </label>
                <input
                id="startDateImput"
                  type="date"
                  name="startDate"
                  required
                  className="form-control mb-3"
                />
                <label htmlFor="endDateImput" className="form-label mb-1 text-body-secondary">
                  Data fine:*
                </label>
                <input
                id="endDateImput"
                  type="date"
                  name="endDate"
                  required
                  className="form-control mb-3"
                  
                />

                <label htmlFor="areaImput" className="form-label mb-1 text-body-secondary">
                  Citta&apos;, Paese, Area*
                </label>
                <input
                id="areaImput"
                  type="text"
                  name="area"
                  required
                  className="form-control mb-3"
                  
                />
                <label htmlFor="descriptionImput" className="form-label mb-1 text-body-secondary">
                  Descrizione
                </label>
                <textarea
                id="descriptionImput"
                  rows={3}
                  name="description"
                  className="form-control mb-3"
                  
                />
                {/* <label htmlFor="fileImput" className="form-label mb-1 text-body-secondary">
                  Scegli un immagine
                </label>
                <input
                id="fileImput"
                  type="file"
                  name="experience"
                  accept="image/*"
                  className="form-control mb-3"
                /> */}
              

                <small className="mb-1 text-body-secondary display-6 fs-6">
                  *indica che è obbligatorio
                </small>
                <br />
                <small className="mb-1 text-body-secondary display-6 fs-6">
                  Potrai cambiare l&apos;immagine nella sezione modifica 
                </small>
                
                <div className="d-flex justify-content-between">
                  <Button
                    type="reset"
                    variant="outline-secondary"
                  >
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
export default ModalAddExperience;
