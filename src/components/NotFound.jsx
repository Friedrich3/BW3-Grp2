import { Alert, Col, Container, Row } from "react-bootstrap"
import FooterLinkedin from "./FooterLinkedin"

const NotFound = function(){

    return(
        <>
            <Container style={{height:'50vh'}}>
                <Row>
                    <Col>
                    <Alert variant="danger">
        <Alert.Heading className="text-center">⚠️404 - PAGE NOT FOUND⚠️</Alert.Heading>
        <p className="text-center">
          Come gli unicorni anche queste pagine <span className="fw-bold">NON</span> esistono! O almeno non le abbiamo ancora inventate! 🥲
        </p>
      </Alert>
                    </Col>
                </Row>
            </Container>  
            <FooterLinkedin /> 
        </>
    )

}
export default NotFound