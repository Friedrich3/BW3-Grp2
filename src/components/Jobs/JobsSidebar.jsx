import { Card, Row, Col, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Icons from "react-bootstrap-icons";
import FooterMini from "../FooterMini";

function JobsSidebar() {
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
    <Container>
      <Card className="border border-1 rounded-4 mb-2 bg-white">
        <Card.Img
          className="border-bottom border-2"
          style={{ height: "50px" }}
          src="../assets/PlaceholderBackground.jpeg"
        ></Card.Img>
        <Card.Body className="container pb-3">
          <Row>
            <Col xs={2}>
              <div className="position-relative">
                <Card.Img
                  src={profilo.image}
                  style={{ width: "60px", bottom: "-10px" }}
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
      <div className="border border-1 rounded-4 container bg-white py-4 ps-4">
        <div className="mb-3">
          <Icons.ListUl className="fs-4 me-2" />
          <span className="fw-bold">Preferenze</span>
        </div>
        <div>
          <Icons.BookmarkFill className="fs-4 me-2" />
          <span className="fw-bold">Le mie offerte di lavoro</span>
        </div>
        <hr className="text-secondary" />
        <div className="text-primary fw-bold">
          <Icons.PencilSquare />
          <span>Pubblica offerta gratuita</span>
        </div>
      </div>
      <FooterMini />
    </Container>
  );
}

export default JobsSidebar;
