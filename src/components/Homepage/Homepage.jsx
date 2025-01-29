import { Container, Row, Col } from "react-bootstrap";
import HomeProfile from "./HomeProfile";
import HomeNews from "./HomeNews";
import HomeMain from "./HomeMain";

function Homepage() {
  return (
    <Container className="pt-4">
      <Row className="gx-5">
        <Col md={3}>
          <HomeProfile />
        </Col>
        <Col md={6} className="p-0">
          <HomeMain />
        </Col>
        <Col md={3}>
          <HomeNews />
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
