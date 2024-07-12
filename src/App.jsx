import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Hero />
      <About />
    </div>
  );
};

export default App;
