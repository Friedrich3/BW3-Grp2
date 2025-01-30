import { Container, Row, Col } from "react-bootstrap";
import JobsSidebar from "./JobsSidebar";

function Jobs() {
  return (
    <Container className="pt-4">
      <Row>
        <Col md={3}>
          <JobsSidebar />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Jobs;
