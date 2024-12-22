import React from 'react';
import { BrowserRouter as Router, 
  Route, Navigate , Routes,} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Skills from "./components/skills/skills.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contacts/Contact.js";
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoute.js';



function App() {
  return (
    <>
      <Router>
          <Navbar />
          <AnimatedRoutes />
      </Router>
    </>
  )
}

export default App;
