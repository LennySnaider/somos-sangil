/**
 * frontend/src/App.jsx
 * Componente principal que integra todas las secciones de la aplicación.
 * @version 1.0.0
 * @updated 2025-02-27
 */
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Announcements from "./components/Announcements";
import News from "./components/News";
import Committee from "./components/Committee";
import Strategies from "./components/Strategies";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import WelcomeModal from "./components/WelcomeModal";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />
      <Announcements />
      <News />
      <Committee />
      <Strategies />
      <Achievements />
      <Contact />
      <Footer />
      <FloatingButtons />
      <WelcomeModal />
    </div>
  );
}

export default App;
