/* eslint-disable react/prop-types */
import { Col, ListGroup, Row } from "react-bootstrap";

const ExperienceListItem = function ({ item }) {
  return (
    <>
      <ListGroup.Item className="border-0 border-bottom container-fluid">
        <Row>
          <Col xs={1}>
            <img
              src={item.image}
              alt=""
              className="rounded-circle"
              style={{'width':'50px'}}
            />
          </Col>
          <Col xs={10} className="ms-2">
            <div className="d-flex flex-column">
              <h6>{item.role}</h6>
              <span>{item.company}</span>
              <small className="text-secondary">
                Da quando - A quando - Per quanto
              </small>
              <small className="text-secondary">{item.area}</small>
              <p className="mt-2">
                {item.description}
              </p>
            </div>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};
export default ExperienceListItem;
