import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//import { HomeImage } from "../../public/assets/PlaceholderBackground.jpeg";

function HomeProfile() {
  const profilo = useSelector((store) => {
    return store.profile.data;
  });
  const experiences = useSelector((store) => {
    return store.experiences.data;
  });
  const lastExperience = useSelector((store) => {
    return store.experiences.data[store.experiences.data.length - 1];
  });
  const navigate = useNavigate();
  const [lastExp] = useState(lastExperience);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (experiences.length > 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastExp]);

  return (
    <Container fluid>
      <div>
        <Card className="border border-1 rounded-4 mb-2 bg-white">
          <Card.Img
            className="border-bottom border-2"
            style={{ height: "75px" }}
            src="../assets/PlaceholderBackground.jpeg"
          ></Card.Img>
          <Card.Body className="container pb-3">
            <Row>
              <Col xs={2}>
                <div className="position-relative">
                  <Card.Img
                    src={profilo.image}
                    style={{ width: "50px", bottom: "-10px" }}
                    className=" rounded-circle border border-3 border-white custom-position"
                    onClick={() => {
                      navigate("/profile");
                    }}
                  />
                </div>
              </Col>
              <Col xs={10} className="pb-3"></Col>
            </Row>

            {/* <Icons.PersonCircle className="display-3" /> */}
            <h4>
              <Link to={"/profile"} className="text-black text-decoration-none">
                {profilo.name} {profilo.surname}
              </Link>
            </h4>
            <small className="text-secondary">{profilo.title}</small>
            <br />
            <small className="text-secondary">{profilo.area}</small>
            <div>
              {!isEmpty && (
                <button
                  className="text-secondary text-start border-2 w-100"
                  style={{ border: "dotted" }}
                  type="submit"
                  onClick={() => {
                    navigate("/experience/modify");
                  }}
                >
                  <Icons.PlusLg />
                  <span>Esperienza</span>
                </button>
              )}

              {isEmpty && (
                <div className="row align-items-center rounded-4 mt-2">
                  <Col xs={2} md={12} lg={4} xl={3}>
                    <img
                      src={lastExp.image}
                      alt=""
                      className="rounded-circle"
                      style={{ width: "50px" }}
                    />
                  </Col>
                  <Col xs={10} md={12} lg={8} xl={9}>
                    <p
                      className=" h6 ms-2 text-black custom-hover pointer"
                      onClick={() => {
                        navigate("/experience/modify");
                      }}
                    >
                      {lastExp.company}
                    </p>
                  </Col>
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
        <div className="d-flex d-md-block">

        <div className="border border-1 rounded-4 container mb-2 bg-white">
          <p className="text-secondary">
            Raggiungi i tuoi obiettivi di carriera
          </p>
          <p>Prova Premium per 0 EUR</p>
        </div>
        <div className="border border-1 rounded-4 container mb-2 bg-white">
          <div className="p-3">
            <div className="d-flex align-items-center" > 
          <span className="fw-medium">Collegamenti</span>

          <Icons.PersonPlusFill className="ms-auto "/><br/>

            </div>
          <span className="text-secondary fw-medium" style={{fontSize: '0.8em'}}>Espandi la tua rete</span>

          </div>
        </div>
        <div className="border border-1 rounded-4 container mb-2 bg-white">
          <div className="p-3 row justify-content-between row-cols-md-4 row-cols-lg-1">

          <div className=" text-md-center btn custom-hover-card custom-hover">
            <Icons.BookmarkFill/>
            <span>Elementi</span>
          </div>
          <div className=" text-md-center btn custom-hover-card custom-hover">
            <Icons.PeopleFill />
            <span>Gruppi</span>
          </div>
          <div className=" text-md-center btn custom-hover-card custom-hover">
            <Icons.Newspaper />
            <span>NewsLetter</span>
          </div>
          <div className=" text-md-center btn custom-hover-card custom-hover">
            <Icons.CalendarEvent />
            <span>Eventi</span>
          </div>
        </div>
          </div>

        </div>
      </div>
    </Container>
  );
}

export default HomeProfile;
