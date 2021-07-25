import React from "react";
import './index.css';
import Hero from './components/Hero'
import Work from './components/Work'
import Contact from "./components/Contact";

function HomePage() {
  return (
    <section>
      <Hero />
      <Work />
      <Contact />
    </section>
  );
}

export default HomePage;
