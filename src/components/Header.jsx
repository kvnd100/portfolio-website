import { Link } from "react-scroll";
import "../styles/header.css";
import myLogo from "../assets/K.svg";
import { useState, useEffect } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerBtnHandlder = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const contentAndFooter = document.querySelectorAll(".content, .footer,.logo");

    if (isMenuOpen) {
      contentAndFooter.forEach((element) => {
        element.classList.add("blur-body");
      });
    } else {
      contentAndFooter.forEach((element) => {
        element.classList.remove("blur-body");
      });
    }
  }, [isMenuOpen]);

  return (
    <header className={`header ${isMenuOpen ? "blur-header" : ""}`}>
      <div className="logo">
        <a href="/">
          <img src={myLogo} alt="SVG logo image" width="60" height="60" />
        </a>
      </div>
      <nav className="navbar">
        <div className="nav-links">
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
        </div>
        <div className="ham">
          <button className="ham_button" onClick={hamburgerBtnHandlder}>
            <div className="ham_box">
              <div className={`ham_box_inner ${isMenuOpen ? "ham_box_inner-active" : ""}`}></div>
            </div>
          </button>
          <aside className={`ham_menu ${isMenuOpen ? "ham_menu-active" : ""}`}>
            <nav className="ham_menu_inner ">
              <ul>
                <li>
                  <Link to="about" onClick={closeMenu} smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="experience" onClick={closeMenu} smooth={true} duration={500}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="work" smooth={true} onClick={closeMenu} duration={500}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} onClick={closeMenu} duration={500}>
                    Contact
                  </Link>
                </li>
                <li className="ham_resume">
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
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Header;
