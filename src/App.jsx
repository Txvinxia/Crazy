import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Features from "./components/Features.jsx";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
