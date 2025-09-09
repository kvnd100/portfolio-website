import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1 className="hero-intro">Hi, my name is</h1>
      </div>
      <div>
        <h1 className="hero-heading">Kavindu Ranasinghe.</h1>
      </div>
      <div>
        <h2 className="hero-heading"> I weave the digital realm.</h2>
      </div>
      <div>
        <p>
          I’m a postgraduate specializing in crafting impactful digital experiences with a
          user-centric approach. Fueled by dedication, I contribute to exceptional digital solutions
          while on my academic journey.
        </p>
      </div>
      <div>
        <a href="#work" className="hero-cta">
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;