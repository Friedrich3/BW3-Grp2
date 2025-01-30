import { Container, Row, Col } from "react-bootstrap";
import JobsSidebar from "./JobsSidebar";
import JobsMain from "./JobsMain";

function Jobs() {
  return (
    <Container className="pt-4">
      <Row>
        <Col lg={3}>
          <JobsSidebar />
        </Col>
        <Col lg={9}>
          <JobsMain />
        </Col>
      </Row>
    </Container>
  );
}

export default Jobs;
