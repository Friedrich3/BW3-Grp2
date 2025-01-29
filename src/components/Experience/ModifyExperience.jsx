import { Alert, Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ExperienceListItem from "./ExperienceListItem";
import { Plus } from "react-bootstrap-icons";
import ModalAddExperience from "./ModalAddExperience";
import { useState } from "react";


const ModifyExperience = function () {

  const experiences = useSelector((state) => {
    return state.experiences.data;
  });

  const [addExperience, setAddExperience] = useState(false)

  const calcoloDate = function (dataInizio, dataFine) {
    const inizio = new Date(dataInizio);
    const fine = new Date(dataFine);
    let anno = fine.getFullYear() - inizio.getFullYear();

    if (
      fine.getMonth() < inizio.getMonth() ||
      (fine.getMonth() === inizio.getMonth() &&
        fine.getDate() < inizio.getDate())
    ) {
      anno--;
    }
    let mesi = fine.getMonth() - inizio.getMonth();
    if (mesi < 0) {
      mesi += 12;
    }

    return `${anno} Anni - ${mesi} Mesi`;
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={12}>
            <Alert variant="light">
            <Alert.Heading>Sezione Gestione Esperienze </Alert.Heading>
            <hr></hr>
            <p>In questa sezione potrai aggiungere , modificare, eliminare le tue esperienze lavorative</p>
            </Alert>
          </Col>
        </Row>
        <Row className="">
          <Col xs={8}></Col>
          <Col xs={4} className="text-end">
          <Button
                  variant="outline-primary"
                  className=" align-text-top opacity-75"
                  onClick={() => {setAddExperience(true)}}
                >
                  {/* TODO: AGGIUNGERE MODALE CON PUT PER CAMBIARNE IL CONTENUTO */}
                  <Plus color="black" size={30}></Plus>AGGIUNGI UN&apos;ESPERIENZA
                </Button></Col>
                {
                addExperience &&(
          <ModalAddExperience setAddExperience={setAddExperience} />)
                }
        </Row>
        <Row className="mt-3">
          <Col>
            <ListGroup>
                {
                experiences.toReversed().map((item) => {
                  return (
                    <ExperienceListItem
                      item={item}
                      key={item._id}
                      calcoloDate={calcoloDate}
                      modificable={true}
                    />
                  );
                })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ModifyExperience;
