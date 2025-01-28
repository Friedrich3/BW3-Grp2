import { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { PencilSquare, Plus } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import ExperienceListItem from "./ExperienceListItem";
import ModalAddExperience from "./ModalAddExperience";

const ProfileExperience = function () {
  const experiences = useSelector((store) => {
    return store.experiences.data;
  });

//CONTROLL SULLA MODALE DI AGGIUNTA DI UN EXPERIENCE
  const [addExperience, setAddExperience] = useState(false)

  useEffect(() => {
  }, [experiences]);


  const calcoloDate = function(dataInizio, dataFine){
    const inizio = new Date(dataInizio)
    const fine = new Date(dataFine)
    let anno = fine.getFullYear() - inizio.getFullYear()
    
    if (fine.getMonth() < inizio.getMonth() || (fine.getMonth() === inizio.getMonth() && fine.getDate() < inizio.getDate())) {
      anno--;
  }
  let mesi = fine.getMonth() - inizio.getMonth();
    if (mesi < 0) {mesi += 12};

     return `${anno} Anni - ${mesi} Mesi`
  }

  return (
    <>
      <Container fluid className="mt-2">
        <Row>
          <Col className="p-0">
            <Card>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <span>Esperienze</span>
                  <div>
                  <Button
                    variant="outline-light"
                    className="border-0 rounded-circle align-text-top opacity-75"
                    onClick={() => {setAddExperience(true)}}>
                    {/* TODO: AGGIUNGERE MODALE CON PUT PER CAMBIARNE IL CONTENUTO */}
                  <Plus color="black" size={30}></Plus>
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="border-0 rounded-circle py-2 align-text-top opacity-75"
                    onClick={() => {}}>
                    {/* TODO: AGGIUNGERE MODALE CON PUT PER CAMBIARNE IL CONTENUTO */}
                    <PencilSquare color="black" size={20}></PencilSquare>
                  </Button>
                      </div>
                </Card.Title>

                {
                addExperience &&(
          <ModalAddExperience setAddExperience={setAddExperience} />)
                }      


                {experiences.length > 0 && (
                  <ListGroup>
                    {/* IL PRIMO LIST ITEM */}
                    {

                    }
                    <ListGroup.Item className="border-0 border-bottom container-fluid">
                      <Row>
                        <Col xs={1}>
                          <img
                            src={experiences[experiences.length -1].image}
                            alt="Logo Azienda"
                            className="rounded-circle"
                            style={{'width':'50px'}}
                          />
                        </Col>
                        <Col xs={10} className="ms-2">
                          <div id="company">
                            <h6 className="m-0">{experiences[experiences.length -1].company}</h6>
                            <small>{calcoloDate(experiences[experiences.length -1].startDate, experiences[experiences.length -1].endDate)}</small>
                          </div>
                          <div className="mt-3">
                            <h6>{experiences[0].role}</h6>
                            <small className=" text-secondary">
                              {`${experiences[experiences.length -1].startDate.slice(0,7)} - Presente - ${calcoloDate(experiences[experiences.length -1].startDate, experiences[experiences.length -1].endDate)}`}
                            </small>
                            {/* TODO INSERIRE FUNZIONE CHE PRENDA SOLO MESE E ANNO , A QUANDO SE NULL RESTITUISCE PRESENTE - Per quanto usa o la data presente nell api oppure la data di oggi se null*/}
                            <br />
                            <small className=" text-secondary">{experiences[experiences.length -1].area}</small>
                            <p className="mt-2">
                              {experiences[experiences.length -1].description}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {
                      experiences.length > 1 &&
                      
                            experiences.slice(0,-1).reverse().map((item)=>{
                              return(
                                <ExperienceListItem item={item} key={item._id} calcoloDate={calcoloDate}/>
                              )
                            })
                      


                    
                    }


                  </ListGroup>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileExperience;
