import { Col, Container, Row } from "react-bootstrap"
import HomeNewPost from "./HomeNewPost"
import HomePostList from "./HomePostList"

const HomeMain = function (){

    return(
        <>
        <Container>
            <Row>
                <Col className="p-0">
                    <HomeNewPost />
                
                </Col>
            </Row>
            <hr color="black"/>
            <Row>
                <Col  className="p-0">
                <HomePostList />
                </Col>
            </Row>
        </Container>
        
        </>
    )
}
export default HomeMain