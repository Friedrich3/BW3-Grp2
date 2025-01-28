import { Col, Row } from "react-bootstrap";
import {
  GearFill,
  QuestionCircleFill,
  ShieldShaded,
} from "react-bootstrap-icons";

const FooterLinkedin = function () {
  return (

    <footer className="container py-5">
      <Row >
        <Col md={12} lg={6}>

          <div className="row">
            {/* prima colonna con lista di link vuoti */}
            <div className="col">
              <ul
                className="list-unstyled row row-cols-2 row-cols-md-4 g-2"
                style={{ fontSize: "12px" }}
              >
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Informazioni
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Informativa sulla community professionale
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Privacy e condizioni
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Sales Solutions
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Centro sicurezza
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Accessibilità
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Carriera
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Opzioni per gli annunci pubblicitari
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Mobile
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Talent Solutions
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Soluzioni di marketing
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Pubblicità
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Piccole imprese
                  </a>
                </li>
                <li className="col fw-bold custom-hover">
                  <a href="#" className="text-decoration-none text-secondary">
                    Centro sicurezza
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </Col>

        <Col md={12} lg={6}>
          {/* seconda colonna con icone e option */}
          <div className="col d-flex flex-column flex-md-row gap-3">
            <ul className="list-unstyled d-flex flex-column gap-1 w-100">
              <li>
                <div className="d-flex gap-3">
                  <QuestionCircleFill className="text-dark fs-4" />
                  <div className="text-secondary">
                    <a
                      href="#"
                      className="text-decoration-none text-secondary"
                    >
                      <p
                        className="m-0 fw-bold custom-hover"
                        style={{ fontSize: "14px" }}
                      >
                        Domande?
                      </p>
                    </a>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      Visita il nostro Centro assistenza.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex gap-3">
                  <GearFill className="text-dark fs-4" />
                  <div className="text-secondary">
                    <a
                      href="#"
                      className="text-decoration-none text-secondary"
                    >
                      <p
                        className="m-0 fw-bold custom-hover"
                        style={{ fontSize: "14px" }}
                      >
                        Gestisci il tuo account e la tua privacy
                      </p>
                    </a>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      Vai alle impostazioni
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex gap-3">
                  <ShieldShaded className="text-dark fs-4" />
                  <div className="text-secondary">
                    <a
                      href="#"
                      className="text-decoration-none text-secondary"
                    >
                      <p
                        className="m-0 fw-bold custom-hover"
                        style={{ fontSize: "14px" }}
                      >
                        Trasparenza sui contenuti consigliati
                      </p>
                    </a>
                    <p className="text-muted" style={{ fontSize: "12px" }}>
                      Scopri di più sui contenuti consigliati.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="dropdown w-100 d-flex justify-content-start justify-content-md-start align-items-start">
              <div>
                <p
                  className="m-0 text-secondary"
                  style={{ fontSize: "12px" }}
                >
                  Seleziona lingua
                </p>
                <select
                  className="form-select text-secondary fw-bold"
                  style={{ fontSize: "12px", width: "200px" }}
                  defaultValue={"it"}
                >
                  <option value="it">Italiano</option>
                  <option value="en">Inglese</option>
                  <option value="es">Spagnolo</option>
                  <option value="fr">Francese</option>
                </select>
              </div>
            </div>
          </div>


        </Col>

      </Row>
      {/* copyright */}
      <div className="row mt-3 pt-2">
        <p className="mb-0 text-secondary" style={{ fontSize: "12px" }}>
          LinkedIn Corporation &copy; 2025{" "}
        </p>
      </div>
    </footer >

  );
};

export default FooterLinkedin;
