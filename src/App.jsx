import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div id="Hero">
          <Hero />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
