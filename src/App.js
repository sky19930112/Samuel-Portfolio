import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";
import Resume from "./components/Resume/Resume.js";


function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
  )
}

export default App;
