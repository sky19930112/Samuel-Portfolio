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
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
