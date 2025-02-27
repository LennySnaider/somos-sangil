/**
 * frontend/src/App.jsx
 * Componente principal que integra todas las secciones de la aplicación.
 * @version 1.0.0
 * @updated 2025-02-26
 */
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Announcements from "./components/Announcements";
import News from "./components/News";
import Committee from "./components/Committee";
import Strategies from "./components/Strategies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />
      <Announcements />
      <News />
      <Committee />
      <Strategies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
