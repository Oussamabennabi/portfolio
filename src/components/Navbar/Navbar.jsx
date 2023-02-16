import { useState } from "react";
import "./navbar.css"
const Navbar = () => {
  const [hidden, setHidden] = useState(true)
  return (
      <nav className={`${!hidden ? "open" : ""}`}>
          <div className={`${!hidden ? "open" : ""} nav-container`}>
              <a href="/">
                  <div className="logo">
                      <img src="Logo.svg"  alt="" />
                  </div>
              </a>

              <div className="hidden-div"></div>
              
                  <div
                      title="menu"
                      onClick={() => setHidden((prev) => !prev)}
                      className={`hamburger ${!hidden ? "active" : ""}`}
                  >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
              </div>
              
              {/* Desktop links */}
              <ul className="desktop-links">
                  <li className="link">
                      <a href="#about">
                          <span className={"link-number"}>01.</span> About
                      </a>
                  </li>

                  <li className="link">
                      <a href="#professionalProjects">
                          <span className={"link-number"}>02.</span>{" "}
                          Professional Projects
                      </a>
                  </li>
                  <li className="link">
                      <a href="#projects">
                          <span className={"link-number"}>03.</span> Projects
                      </a>
                  </li>
                  <li className="link">
                      <a href="#contact">
                          <span className={"link-number"}>04.</span> Contact
                      </a>
                  </li>
                  <a
                      className=""
                      href="../../files/Oussama_Bennabi_Resume.pdf"
                      download
                  >
                      <button className="primary-button ">
                          <span className="button-text">Resume</span>
                          <div className="shiny-container">
                              <span className="shiny"></span>
                          </div>
                      </button>
                  </a>
              </ul>

              {/* Mobile links */}
          </div>

          <div className={`${!hidden ? "open" : ""} nav-container-mobile`}>
              <ul className={`mobile-links ${!hidden ? "open" : ""}`}>
                  <li onClick={() => setHidden(true)} className="link">
                      <a href="#about">
                          <span className={"link-number"}>01.</span> About
                      </a>
                  </li>
                  <li onClick={() => setHidden(true)} className="link">
                      <a href="#professionalProjects">
                          <span className={"link-number"}>02.</span>{" "}
                          Professional Projects
                      </a>
                  </li>
                  <li onClick={() => setHidden(true)} className="link">
                      <a href="#projects">
                          <span className={"link-number"}>03.</span> Projects
                      </a>
                  </li>

                  <li onClick={() => setHidden(true)} className="link">
                      <a href="#contact">
                          <span className={"link-number"}>04.</span> Contact
                      </a>
                  </li>

                  <a
                      onClick={() => setHidden(true)}
                      className=""
                      href="../../files/Oussama_Bennabi_Resume.pdf"
                      download
                  >
                      <button className="primary-button ">
                          <span className="button-text">Resume</span>
                          <div className="shiny-container">
                              <span className="shiny"></span>
                          </div>
                      </button>
                  </a>
              </ul>
          </div>
      </nav>
  );
}

export default Navbar
