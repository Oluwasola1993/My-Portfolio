import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";

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
      </div>
    </div>
  );
};

export default App;
