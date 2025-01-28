import { useEffect } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import ExperienceListItem from "./ExperienceListItem";

const ProfileExperience = function () {
  const experiences = useSelector((store) => {
    return store.experiences.data;
  });


  //const [expList, setExpList] = useState(experiences)

  useEffect(() => {
  }, [experiences]);

  return (
    <>
      <Container fluid className="mt-2">
        <Row>
          <Col className="p-0">
            <Card>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <span>Esperienze</span>
                  <Button
                    variant="outline-secondary"
                    className="border-0 rounded-circle py-2 align-text-top"
                    onClick={() => {}}>
                    {/* TODO: AGGIUNGERE MODALE CON PUT PER CAMBIARNE IL CONTENUTO */}
                    <PencilSquare color="black" size={20}></PencilSquare>
                  </Button>
                </Card.Title>


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
                            <small>Quanto tempo</small>
                          </div>
                          <div className="mt-3">
                            <h6>{experiences[0].role}</h6>
                            <small className=" text-secondary">
                              Da quando - Presente - Per Quanto
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
                      
                            experiences.slice(0,-1).map((item)=>{
                              return(
                                <ExperienceListItem item={item} key={item._id} />
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
