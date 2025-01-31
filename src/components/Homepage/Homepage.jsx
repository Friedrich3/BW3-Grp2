import { Container, Row, Col } from "react-bootstrap";
import HomeProfile from "./HomeProfile";
import HomeNews from "./HomeNews";
import HomeMain from "./HomeMain";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Homepage() {
  const postList = useSelector((store) => {
    return store.post.data;
  });

  useEffect(() => {}, [postList]);

  return (
    <Container className="pt-4">
      <Row className="gx-5">
        <Col lg={3} className="p-0">
          <HomeProfile />
        </Col>
        <Col lg={6} className="p-0">
          <HomeMain />
        </Col>
        <Col lg={3}>
          <HomeNews />
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
