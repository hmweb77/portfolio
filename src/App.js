import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./pages/Header";
import Home from "./pages/home/Home";
import Projects from "./pages/project/Projects";
import Skills from "./pages/Skills";

// const theme = createTheme({
//   palette :{
//     primary :{
//       main : "#950101"
//     },
//     secondary:"red"
//   }
// })

function App() {
  const personalDetails = {
    companyName: "HMweb",
    name: "Oussama",
    location: "Lisbon, Portugal",
    email: "hmwebs77@gmail.com",
    availability: "Open for work",
  };
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              name={personalDetails.name}
              tagline={personalDetails.tagline}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              name={personalDetails.name}
              location={personalDetails.location}
              email={personalDetails.email}
              availability={personalDetails.availability}
              brand={personalDetails.brand}
            />
          }
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/contact"
          element={
            <Contact
              name={personalDetails.name}
              location={personalDetails.location}
              email={personalDetails.email}
            />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
