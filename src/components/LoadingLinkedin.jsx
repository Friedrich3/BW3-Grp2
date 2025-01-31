import { Col, Container, Row, Spinner } from "react-bootstrap";


function LoandingLinkeding() {
    return (
        <Container >
            <Row>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <Col className="d-flex flex-column align-items-center text-center">
                        <div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
                                alt="logo Linkedin"
                                width={250}
                            />
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <Spinner animation="grow" variant="primary" size="sm" className="mx-2" />
                            <Spinner animation="grow" variant="primary" size="sm" className="mx-2" />
                            <Spinner animation="grow" variant="primary" size="sm" className="mx-2" />
                            <Spinner animation="grow" variant="primary" size="sm" className="mx-2" />
                        </div>
                    </Col>
                </div>

            </Row>

        </Container>

    );
}

export default LoandingLinkeding;