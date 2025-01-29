import {
    GearFill,
    QuestionCircleFill,
    ShieldShaded,
  } from "react-bootstrap-icons";
  
  const FooterLinkedin = function () {
    return (
      <>
        <footer>
          <div className="container py-5">
            <div className="row">
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
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Informativa sulla community professionale
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Privacy e condizioni
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Sales Solutions
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Centro sicurezza
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Accessibilità
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Carriera
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Opzioni per gli annunci pubblicitari
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Mobile
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Talent Solutions
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Soluzioni di marketing
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Pubblicità
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Piccole imprese
                    </a>
                  </li>
                  <li className="col fw-bold">
                    <a href="#" className="text-decoration-none text-secondary">
                      Centro sicurezza
                    </a>
                  </li>
                </ul>
              </div>
  
              <div className="col d-flex gap-3">
                <ul className="list-unstyled d-flex flex-column ms-3 gap-1">
                  <li>
                    <div className="d-flex gap-3">
                      <QuestionCircleFill className="text-dark fs-4" />
                      <div className="text-secondary">
                        <a
                          href="#"
                          className="text-decoration-none text-secondary"
                        >
                          <p className="m-0 fw-bold" style={{ fontSize: "14px" }}>
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
                          <p className="m-0 fw-bold" style={{ fontSize: "14px" }}>
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
                          <p className="m-0 fw-bold" style={{ fontSize: "14px" }}>
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
                <div className="m-0">
                  <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
                    Seleziona lingua
                  </p>
                  <div className="dropdown">
                    <select
                      className="form-select text-secondary fw-bold"
                      style={{ width: "190px", fontSize: "12px" }}
                      defaultValue={"it"}
                    >
                      <option value="it">
                        Italiano
                      </option>
                      <option value="en">Inglese</option>
                      <option value="es">Spagnolo</option>
                      <option value="fr">Francese</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 pt-2">
              <p className="mb-0 text-secondary" style={{ fontSize: "12px" }}>
                LinkedIn Corporation © 2025{" "}
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  };
  export default FooterLinkedin;
  