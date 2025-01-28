import { Col, Container, Row } from "react-bootstrap"
import ProfileSideBar from "./ProfileSideBar"
import ProfileMain from "./ProfileMain"

const Profile = function(){

    return(
        <Container>
        <Row className=" g-md-3">
            <Col xs={12} md={9} className="border border-black">
                <ProfileMain />              {/*      QUI ANDRANNO TUTTI I COMPONENTI DELLA SEZIONE PRINCIPALE QUINDI: BANNERPROFILO , ATTIVITA, ESPERIENZE, FORMAZIONE , COMPETENZE ecc..      */}
            </Col>
            <Col xs={12} md={3} className="border border-black">
                <ProfileSideBar />              {/*      QUI ANDRANNO TUTTI I COMPONENTI DELLA SEZIONE SECONDARIA QUINDI: altre schifezze ,'PERSONE CHE VORRESTI CONOSCERE' ,     */}
            </Col>

        </Row>
        </Container>    
    )
}
export default Profile