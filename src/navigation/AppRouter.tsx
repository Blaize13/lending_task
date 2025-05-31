import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutCardPage from "../pages/AboutCardPage/AboutCardPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/card" element={<AboutCardPage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

export default AppRouter;
