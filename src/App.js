import React from 'react';
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Routes,} from "react-router-dom";

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Skills" component={Skills} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
            <Redirect to="/" />
            </Switch>
      </Router>
    </>
  )
}

export default App;
