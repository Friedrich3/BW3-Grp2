/* eslint-disable react/prop-types */

import { Button, Modal } from "react-bootstrap";
import { getExpAction, token } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const initialExperience = {
  role: "",
  company: "",
  startDate: "",
  endDate: "", // può essere null
  description: "",
  area: "",
  image:""
};
// const backupImage =
//   "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png";

const ModalAddExperience = function (props) {
  const formCompleto = new FormData() //DOPOD A QUI


  const profilo = useSelector((state) => {
    return state.profile.data;
  });

  const[formExp,setFormExp] = useState(initialExperience)

  const dispatch = useDispatch();
  const handleClose = () => props.setAddExperience(false);

  const handleSubmit = function (event){
        event.preventDefault();
        //const formCompleto = new FormData(event.target);
        formCompleto.set('role',formExp.role)
        formCompleto.set('company',formExp.company)
        formCompleto.set('startDate',formExp.startDate)
        formCompleto.set('endDate',formExp.endDate)
        formCompleto.set('description',formExp.description)
        formCompleto.set('area',formExp.area)
        formPost(formCompleto);
  }


  const formPost = async function (element) {
    const endpointPOST = `https://striveschool-api.herokuapp.com/api/profile/${profilo._id}/experiences`;
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
        const data = await response.json()
        handleClose();
        expPostImage(profilo._id, data._id ,element)
      } else {
        throw new Error("Errore fetch POST experience");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  const expPostImage = async function(userId, expId){
      formCompleto.set('experience', formExp.image)

    const urlPostImage =  `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`
    console.log(Object.fromEntries(formCompleto))
    try {
      const response = await fetch(urlPostImage,{
        method: "POST",
        headers:{
          Authorization: token,
        },
        body: formCompleto
      })
      if(response.ok){
        dispatch(getExpAction(profilo._id));
      }else{
        throw new Error ('ERRORE MODIFICA IMMAGINE')
      }
    } catch (error) {
      console.log('ERRORE',error)
    }
    
   }

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
                  value={formExp.role}
                  onChange={(e)=>{setFormExp({
                      ...formExp,
                      role: e.target.value
                  }
                  )}}

                  
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
                  value={formExp.company}
                  onChange={(e)=>{setFormExp({
                    ...formExp,
                    company: e.target.value
                }
                )}}
                  
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
                  value={formExp.startDate}
                  onChange={(e)=>{setFormExp({
                    ...formExp,
                    startDate: e.target.value
                }
                )}}
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
                  value={formExp.endDate}
                  onChange={(e)=>{setFormExp({
                    ...formExp,
                    endDate: e.target.value
                }
                )}}
                  
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
                  value={formExp.area}
                  onChange={(e)=>{setFormExp({
                    ...formExp,
                    area: e.target.value
                }
                )}}
                  
                />
                <label htmlFor="descriptionImput" className="form-label mb-1 text-body-secondary">
                  Descrizione
                </label>
                <textarea
                id="descriptionImput"
                  rows={3}
                  name="description"
                  className="form-control mb-3"
                  value={formExp.description}
                  onChange={(e)=>{setFormExp({
                    ...formExp,
                    description: e.target.value
                }
                )}}
                  
                />
                <label htmlFor="fileImput" className="form-label mb-1 text-body-secondary">
                  Scegli un immagine*
                </label>
                <input
                id="fileImput"
                required
                  type="file"
                  name="experience"
                  accept="image/*"
                  className="form-control mb-3"
                  onChange={(e)=>{
                    //formExp.set('experience',e.target.files[0])
                    setFormExp({
                      ...formExp,
                      image: e.target.files[0]
                    })
                  }}
                />
              

                <small className="mb-1 text-body-secondary display-6 fs-6">
                  *indica che è obbligatorio
                </small>
                <br />
                
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
