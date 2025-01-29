import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile/Profile";
import NavbarLinkedin from "./components/NavbarLinkedin";
import NotFound from "./components/NotFound";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDataAction } from "./redux/action";
import ModifyExperience from "./components/Experience/ModifyExperience";
import Homepage from "./components/Homepage/Homepage";



function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <BrowserRouter>
      <NavbarLinkedin />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience/modify" element={<ModifyExperience />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
