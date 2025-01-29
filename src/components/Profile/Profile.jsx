import { Col, Container, Row } from "react-bootstrap";
import ProfileSideBar from "./ProfileSideBar";
import ProfileMain from "./ProfileMain";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, getExpAction } from "../../redux/action";
import FooterLinkedin from "../FooterLinkedin";

const Profile = function () {
  const profilo = useSelector((store) => {
    return store.profile.data;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction())
    dispatch(getExpAction(profilo._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <Container>
      <Row className="">
        <Col xs={12} md={8} className="">
          <ProfileMain />
        </Col>
        <Col xs={12} md={3} className="">
          <ProfileSideBar />
          </Col>
      </Row>
    </Container>
    <FooterLinkedin />
    </>
  );
};
export default Profile;
