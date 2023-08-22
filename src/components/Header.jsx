import { Link } from "react-scroll";
import "../styles/header.css";
import myLogo from "../assets/K.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={myLogo} alt="SVG logo image" width="60" height="60" />
        </a>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <a
              className="btn-resume"
              target="_blank"
              href="https://drive.google.com/file/d/1UQmZBPAo17c5bZ-3o9YBGpxGRqFhtcRK/view?usp=drive_link"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
