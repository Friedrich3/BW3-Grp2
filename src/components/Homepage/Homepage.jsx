import { Container, Row, Col } from "react-bootstrap";
import HomeProfile from "./HomeProfile";

function Homepage() {
  return (
    <Container className="pt-4">
      <Row className="gx-5">
        <Col md={3}>
          <HomeProfile />
        </Col>
        <Col md={6}>
          <p>Colonna 2</p>
        </Col>
        <Col md={3}>
          <p>Colonna 3</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
