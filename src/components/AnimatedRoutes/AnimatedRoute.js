import React from 'react'
import { BrowserRouter as Router, Switch, 
    Route, Navigate , Routes, useLocation} from "react-router-dom";

import Home from "../Home/Home.js";
import About from "../About/About.js";
import Skills from "../skills/skills.js";
import Projects from "../Projects/Projects.js";
import Contact from "../Contacts/Contact.js";
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes (){
    const location = useLocation();
    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Skills" component={Skills} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
            <Navigate  to="/" />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;