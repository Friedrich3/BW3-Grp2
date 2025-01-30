import { Card, Container, Row } from "react-bootstrap"

const JobsMain = function (){

    return(
        <>
           <Container fluid >
                <Row>
                    <Card>
                        <h2>Principali offerte di lavoro per te</h2>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <h2>Risultati Ricerca</h2>
                    </Card>
                </Row>
            </Container> 
        </>
    )
}
export default JobsMain