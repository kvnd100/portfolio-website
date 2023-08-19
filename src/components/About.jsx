import "./../styles/about.css";
import Avatar from "../assets/girl.jpg";
const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <div>
            <p>
              Greetings! I’m Kavindu Ranasinghe—an aspiring tech enthusiast who finds immense joy in
              crafting digital creations that thrive on the internet. My fascination with web
              development traces back to my school days, where I first delved into the captivating
              world of algorithmic problem-solving. I am driven by the art of transforming lines of
              code into seamless, user-centric experiences that leave a mark.
            </p>

            <p>
              As I journey through the tech landscape, Here are a few technologies I’ve been working
              with recently:
            </p>
            <ul className="custom-list">
              <li>JavaScript (ES6+)</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Mongodb</li>
            </ul>
            <p>
              When I’m not immersed in the digital realm, I thrive on the adrenaline of competitive
              sports. Whether it’s on the court, field, or track, I embrace the challenges and
              teamwork that come with pushing my limits. I believe in the power of the online world
              to shape the future and invite innovation. Let’s connect and embark on this
              exhilarating exploration together!
            </p>
          </div>
        </div>
        <div className="about-img-container">
          <div className="image-wrapper">
            <img className="about-img" src={Avatar} alt="person" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
