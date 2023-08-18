import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import "./App.css";

import Footer from "./components/Footer";

const App = () => {
  return (
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
  );
};

export default App;
