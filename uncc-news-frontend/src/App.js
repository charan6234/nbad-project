import { Fragment } from "react";
import "./App.css";
import Login from "./components/login";
import { Route, Routes } from "react-router";
import NavBar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Researches from "./components/research";
import Summary from "./components/summary";
import Reports from "./components/reports";

const App = () => {
  const renderRoutes = () => {
    if (window.localStorage.getItem("token")) {
      return (
        <Fragment>
          <NavBar />
          <Routes>
            <Route index={true} path="/" element={<Dashboard />} />
            <Route
              path="/research/chemistry"
              element={
                <Researches.ChemistryResearch
                />
              }
            />
            <Route
              path="/research/cyber-security"
              element={
                <Researches.CyberResearch
                />
              }
            />
            <Route
              path="/research/artificial-intelligence"
              element={
                <Researches.AIResearch
                />
              }
            />
            <Route
              path="/research/construction"
              element={
                <Researches.ConstructionResearch
                />
              }
            />
            <Route
              path="/research/electric-electronics"
              element={
                <Researches.EEResearch
                />
              }
            />
            <Route
              path="/research/physics"
              element={
                <Researches.PhysicsResearch
                />
              }
            />
            <Route
              path="/research/internet-of-things"
              element={
                <Researches.IOTResearch
                />
              }
            />
            <Route
              path="/research/aerospace"
              element={
                <Researches.AerospaceResearch
                />
              }
            />
            <Route path="/summary" element={<Summary />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
          <Footer />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="d-flex justify-content-center">
            <Routes>
              <Route index={true} path="/" element={<Login />} />
            </Routes>
          </div>
        </Fragment>
      );
    }
  };
  return renderRoutes();
};

export default App;
