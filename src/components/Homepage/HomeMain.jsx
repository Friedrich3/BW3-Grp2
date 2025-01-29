import { Card, Col, Container, Row } from "react-bootstrap"
import HomeNewPost from "./HomeNewPost"
import HomePostList from "./HomePostList"

const HomeMain = function (){

    return(
        <>
        <Container>
            <Row>
                <Col className="p-0">
                <Card>
                    <h5>sezione aggiunta post</h5>
                    <HomeNewPost />
                </Card>
                </Col>
            </Row>
            <hr color="black"/>
            <Row>
                <Col  className="p-0">
                <Card>
                <h5>sezione tutti  post</h5>
                <HomePostList />
                </Card>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}
export default HomeMain