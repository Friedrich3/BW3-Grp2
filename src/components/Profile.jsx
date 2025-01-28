import { Col, Container, Row } from "react-bootstrap"
import ProfileSideBar from "./ProfileSideBar"
import ProfileMain from "./ProfileMain"
import ProfileInfo from "./ProfileInfo"
import ProfileExperience from "./ProfileExperience"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getExpAction } from "../redux/action"

const Profile = function(){
    const profilo = useSelector((store)=> {return store.profile.data})
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getExpAction(profilo._id))
    },[])

    return(
        <Container>
        <Row className="">
            <Col xs={12} md={8} className="border border-black">
                <ProfileMain />              {/*      QUI ANDRANNO TUTTI I COMPONENTI DELLA SEZIONE PRINCIPALE QUINDI: BANNERPROFILO , ATTIVITA, ESPERIENZE, FORMAZIONE , COMPETENZE ecc..      */}
                <ProfileInfo />
                <ProfileExperience />
            </Col>
            <Col xs={12} md={3} className="border border-black">
                <ProfileSideBar />              {/*      QUI ANDRANNO TUTTI I COMPONENTI DELLA SEZIONE SECONDARIA QUINDI: altre schifezze ,'PERSONE CHE VORRESTI CONOSCERE' ,     */}
            </Col>

        </Row>
        </Container>    
    )
}
export default Profile