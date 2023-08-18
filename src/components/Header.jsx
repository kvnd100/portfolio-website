import { Link } from "react-scroll";
import "../styles/header.css";
import myLogo from "../assets/K.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={myLogo} alt="SVG logo image" width="60" height="60" />
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
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <button className="btn-resume" target="_blank">
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
