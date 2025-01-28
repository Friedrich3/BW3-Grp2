import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const ProfileExperience = function () {
  return (
    <>
      <Container fluid className="mt-2">
        <Row>
          <Col className="p-0">
            <Card>
              <Card.Body>
                <Card.Title>Esperienza</Card.Title>
                <ListGroup>
                  {/* IL PRIMO LIST ITEM */}
                  <ListGroup.Item className="border-0 border-bottom container-fluid">
                    <Row>
                      <Col xs={1}>
                        <img
                          src="https://placecats.com/50/50"
                          alt=""
                          className="rounded-circle"
                        />
                      </Col>
                      <Col xs={10} className="ms-2">
                        <div>
                          <h6 className="m-0">Company</h6>
                          <small>Quanto tempo</small>
                        </div>
                        <div className="mt-3">
                          <h6>Ruolo interno</h6>
                          <small className=" text-secondary">
                            Da quando - Presente - Per Quanto
                          </small>
                          {/* TODO INSERIRE FUNZIONE CHE PRENDA SOLO MESE E ANNO , A QUANDO SE NULL RESTITUISCE PRESENTE - Per quanto usa o la data presente nell api oppure la data di oggi se null*/}
                          <br />
                          <small className=" text-secondary">Area</small>
                          <p className="mt-2">
                            Descrizione : Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Perferendis molestiae
                            laborum, ipsa nihil cum illo ullam tenetur officia
                            consequatur aliquam dolor nobis similique quia
                            sapiente, minus ipsum earum optio quae!
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {/* TUTTI GLI ALTRI */}
                  <ListGroup.Item className="border-0 border-bottom container-fluid">
                    <Row>
                      <Col xs={1}>
                        <img
                          src="https://placecats.com/50/50"
                          alt=""
                          className="rounded-circle"
                        />
                      </Col>
                      <Col xs={10} className="ms-2">
                        <div className="d-flex flex-column">
                          <h6>Ruolo interno</h6>
                          <span>Company name</span>
                          <small className="text-secondary">
                            Da quando - A quando - Per quanto{" "}
                          </small>
                          <small className="text-secondary">Area</small>
                          <p className="mt-2">
                            Descrizione : Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Perferendis molestiae
                            laborum, ipsa nihil cum illo ullam tenetur officia
                            consequatur aliquam dolor nobis similique quia
                            sapiente, minus ipsum earum optio quae!
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>


                  
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileExperience;
