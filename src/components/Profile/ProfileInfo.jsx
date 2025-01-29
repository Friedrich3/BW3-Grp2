import { Card, Col, Container, Row } from "react-bootstrap";

import { useSelector } from "react-redux";

const ProfileInfo = function () {
  const profilo = useSelector((store) => {
    return store.profile.data;
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
                </Card.Title>
                <Card.Text>{profilo.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileInfo;
