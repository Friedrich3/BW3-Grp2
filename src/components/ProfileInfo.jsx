import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ProfileInfo = function () {
  const info = useSelector((state) => {
    return state.profile.data;
  });

  return (
    <>
      <Container fluid className="mt-2">
        <Row>
          <Col className="p-0">
            <Card>
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <span>Informazioni</span>
                  <Button
                    variant="outline-secondary"
                    className="border-0 rounded-circle py-2 align-text-top"
                    onClick={() => {}}
                  >
                    {/* TODO: AGGIUNGERE MODALE CON PUT PER CAMBIARNE IL CONTENUTO */}
                    <PencilSquare color="black" size={20}></PencilSquare>
                  </Button>
                </Card.Title>
                <Card.Text>{info.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileInfo;
