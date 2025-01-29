import { Container } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
//import { HomeImage } from "../../public/assets/PlaceholderBackground.jpeg";

function HomeProfile() {
  return (
    <Container>
      <div>
        <div className="border border-1 rounded-4 mb-2 bg-white">
          <div className="border-bottom border-2" style={{ height: "50px" }}>
            back image
          </div>
          <div className="container pb-3">
            <Icons.PersonCircle className="display-3" />
            <h4>w.m.Sachidu</h4>
            <h6 className="text-secondary">Milano,Lombardia</h6>
            <button
              className="text-secondary border"
              style={{ border: "dotted" }}
            >
              <Icons.PlusLg />
              <span>Esperienza</span>
            </button>
          </div>
        </div>
        <div className="border border-1 rounded-4 container mb-2 bg-white">
          <p className="text-secondary">
            Raggiungi i tuoi obiettivi di carriera
          </p>
          <p>Prova Premium per 0 EUR</p>
        </div>
        <div className="border border-1 rounded-4 container mb-2 bg-white">
          <span>Collegamenti</span>
          <Icons.PersonPlusFill />
          <p>Espandi la tua rete</p>
        </div>
        <div className="border border-1 rounded-4 container bg-white">
          <div>
            <Icons.BookmarkFill />
            <span>Elementi</span>
          </div>
          <div>
            <Icons.PeopleFill />
            <span>Gruppi</span>
          </div>
          <div>
            <Icons.Newspaper />
            <span>NewsLetter</span>
          </div>
          <div>
            <Icons.CalendarEvent />
            <span>Eventi</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HomeProfile;
