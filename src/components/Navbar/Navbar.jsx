import { useState } from "react";
import "./navbar.css"
import Hamburger from "./Hamburger";
const Navbar = () => {
  const [hidden, setHidden] = useState(true)
  
  return (
    <nav className={`${!hidden&&"open"}`}>
      <div className= {`${!hidden&&"open"} nav-container`}>
        <div className="logo">O</div>
        <ul className="desktop-links">
          <li className="link">
            <a href="#about">
              <span className="link-number">01.</span> About
            </a>
          </li>

          <li className="link">
            <a href="#projects">
              <span className="link-number">02.</span> Projects
            </a>
          </li>

          <li className="link">
            <a href="#work">
              <span className="link-number">03.</span> Work
            </a>
          </li>

          <li className="link">
            <a href="#contact">
              <span className="link-number">04.</span> Contact
            </a>
          </li>
          <a className="" href="../../files/Oussama_Bennabi_Resume_24-09-2022-11-19-59.pdf" download>

          <button className="primary-button ">
            <span className="button-text">Resume</span>
            <div className="shiny-container">
              <span className="shiny"></span>
            </div>
          </button>
          </a>
        </ul>
        <Hamburger setHidden={setHidden} hidden={hidden} />
        <ul className={`mobile-links ${!hidden && "open"}`}>
          <li className="link">
            <a href="#about">
              <span className="link-number">01.</span> About
            </a>
          </li>

          <li className="link">
            <a href="#projects">
              <span className="link-number">02.</span> Projects
            </a>
          </li>

          <li className="link">
            <a href="#work">
              <span className="link-number">03.</span> Work
            </a>
          </li>
            <li className="link">
              <a href="#contact">
                <span className="link-number">04.</span> Contact
              </a>
          </li>
          
          <a className="" href="../../files/Oussama_Bennabi_Resume_24-09-2022-11-19-59.pdf" download>
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