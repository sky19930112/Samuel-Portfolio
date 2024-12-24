import React from 'react';
import { BrowserRouter as Router, 
  Route, Navigate , Routes,} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
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
