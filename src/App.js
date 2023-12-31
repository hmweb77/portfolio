import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./pages/Header";
import Home from "./pages/home/Home";
import Projects from "./pages/project/Projects";
import Skills from "./pages/Skills";

export const ThemeContext = createContext(null);

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

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <ToastContainer />
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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
