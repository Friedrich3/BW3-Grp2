import { Card, Container } from "react-bootstrap";
import { InfoSquareFill, ChevronCompactDown } from "react-bootstrap-icons";
import { ArrowBarRight } from "react-bootstrap-icons";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import FooterMini from "../FooterMini";
const HomeNews = () => {
  return (
    <Container className="px-0 ms-lg-1 px-lg-2">
      <Card style={{ marginBottom: "20px" }}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span>In primo piano</span>
            <InfoSquareFill className="text-dark fs-6" />
          </Card.Title>

          <Card.Subtitle className="my-3 text-muted">
            a cura di LinkedIn Notizie
          </Card.Subtitle>
          <div className="news-item mb-2">
            <span className="d-block fw-medium small">
              L&apos;AI cinese Deepseek spaventa le Borse
            </span>
            <span className="text-muted small">
              2 ore fa<span className="mx-1">•</span>1.733 lettori
            </span>
          </div>
          <div className="news-item mb-2">
            <strong className="d-block fw-medium small">
              Mps vuole acquisire Mediobanca
            </strong>
            <span className="text-muted small">
              3 ore fa<span className="mx-1">•</span>906 lettori
            </span>
          </div>
          <div className="news-item mb-2">
            <strong className="d-block fw-medium small">
              Prove di settimana corta nella PA
            </strong>
            <span className="text-muted small">
              19 ore fa<span className="mx-1">•</span>229 lettori
            </span>
          </div>
          <div className="news-item mb-2">
            <strong className="d-block fw-medium small">
              Roccaraso: l&apos;overtourism è un problema
            </strong>
            <span className="text-muted small">
              18 ore fa<span className="mx-1">•</span>171 lettori
            </span>
          </div>
          <div className="news-item mb-2">
            <strong className="d-block fw-medium small">
              Obiettivi e traguardi dell&apos;Agenda Digitale...
            </strong>
            <span className="text-muted small">17 ore fa</span>
          </div>
          <button className="btn btn-outline-secondary border-0 rounded">
            Vedi altro <ChevronCompactDown />
          </button>
        </Card.Body>
        <div className="bg-white mb-2 ms-3 ">
          <h5>I giochi di oggi</h5>
          <Link
            to="https://www.linkedin.com/games/tango/"
            className="text-black text-decoration-none"
          >
            <div className="content">
              <Image
                src="https://static.licdn.com/aero-v1/sc/h/gqavqd9gk6ja1s27lr1p2zz2"
                width={30}
              />
              <div className="text-container">
                <p className="fw-bold fs-img pt-3">Tango</p>
                <p>
                  Incorona ogni regione
                  <ArrowBarRight className="ArrowBarRight" />
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="https://www.linkedin.com/games/tango/"
            className="text-black text-decoration-none"
          >
            <div className="content">
              <Image
                src="https://static.licdn.com/aero-v1/sc/h/6uvsjtqx2j32uh1a803qygh5y"
                width={30}
              />
              <div className="text-container">
                <p className="fw-bold fs-img pt-3">Queens</p>
                <p>
                  Incorona ogni regione
                  <ArrowBarRight className="ArrowBarRight" />
                </p>
              </div>
            </div>
          </Link>

          {/* <button className='rounded borde-1 border-secondary p-3 bg-light BtnSeggerimenti'>
                <button className='rounded p-1'>SUGGERIMENTI</button>
                <p className='fs-4'>
                    Prova Linkedin sull&apos;app <br />per Windows
                </p>

            </button> */}
        </div>
      </Card>
      <FooterMini />
    </Container>
  );
};

export default HomeNews;
