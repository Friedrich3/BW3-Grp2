import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile/Profile";
import NavbarLinkedin from "./components/NavbarLinkedin";
import NotFound from "./components/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCommentsAction, getDataAction, getExpAction, getPostAction } from "./redux/action";
import ModifyExperience from "./components/Experience/ModifyExperience";
import Homepage from "./components/Homepage/Homepage";
import Jobs from "./components/Jobs/Jobs";
import MessaggioLinkedin from "./components/MessaggioLinkedin";
import LoandingLinkeding from "./components/LoadingLinkedin";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const profilo = useSelector((state) => {
    return state.profile.data;
  });

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await dispatch(getDataAction());
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (profilo && profilo._id) {
      const fetchExpAndPost = async () => {
        await dispatch(getPostAction());
        await dispatch(getExpAction(profilo._id));
        await dispatch(getAllCommentsAction())
        setIsLoading(false);
      };
      fetchExpAndPost();
    }
  }, [profilo, dispatch]);

  return (
    <BrowserRouter>
      <NavbarLinkedin />
      {isLoading && <LoandingLinkeding />}
      <Routes>
        <Route path="/" element={!isLoading && <Homepage />} />
        <Route path="/profile" element={!isLoading && <Profile />} />

        <Route path="/lavoro" element={<Jobs />} />
        <Route path="/lavoro/:search" element={<Jobs />} />

        <Route
          path="/experience/modify"
          element={!isLoading && <ModifyExperience />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <MessaggioLinkedin />
    </BrowserRouter>
  );
}

export default App;
