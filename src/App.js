import React from 'react';
import { BrowserRouter as Router, 
  Route, Navigate , Routes,} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Skills from "./components/skills/skills.js";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";
import Resume from "./components/Resume/Resume.js";
import Contact from "./components/Contacts/Contact.js";


function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
      </Router>
    </>
  )
}

export default App;
