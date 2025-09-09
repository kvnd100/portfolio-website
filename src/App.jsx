import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";

import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (!isLoading) {
      const sections = document.querySelectorAll('section, .hero, .about, .experience, .projects, .contact');
      sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
      });
    }

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className="app">
        <Header />
        <div className="content">
          <div className="main-content">
            <Hero />
            <About />
            <Experience />
            <Work />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
