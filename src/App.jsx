import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";
import NavbarLinkedin from "./components/NavbarLinkedin";
import NotFound from "./components/NotFound";
import FooterMini from "./components/FooterMini"
import FooterLinkedin from "./components/FooterLinkedin";

function App() {
  return (
    <BrowserRouter>
      <NavbarLinkedin />
      <Routes>
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterMini />
      <FooterLinkedin />
    </BrowserRouter>
  );
}

export default App;