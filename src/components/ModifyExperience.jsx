import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ExperienceListItem from "./ExperienceListItem";


const ModifyExperience = function () {

  const experiences = useSelector((state) => {
    return state.experiences.data;
  });

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
