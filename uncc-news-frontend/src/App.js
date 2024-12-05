import { Fragment } from "react";
import "./App.css";
import Login from "./components/login";
import { Route, Routes } from "react-router";
import NavBar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Research from "./components/research";
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
              path="/research/:id"
              element={
                <Research
                  image={window.localStorage.getItem("image")}
                  tagLine={window.localStorage.getItem("tagLine")}
                  title={window.localStorage.getItem("title")}
                  content={window.localStorage.getItem("content")}
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
