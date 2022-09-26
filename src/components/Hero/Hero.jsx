import { Bounce } from "react-reveal";
import CoolText from "../ui/CoolText";
import "./hero.css";
const Hero = () => {
  return (
    <section id="hero" className="container hero">
      <Bounce bottom>
        <div className="content">
          <h5 className="code-font small-text">Hi, my name is</h5>
          <h1>
            <CoolText text={"Oussama Bennabi."} />
          </h1>
          <h1 className="sub-title">I build things for the web.</h1>
          <p>
            I’m a software engineer specializing in Front-end Development who writes clean,elegant and efficient code.
          </p>
          <a href="#professionalProjects">
            <button className="primary-button">
              <span className="button-text">Projects</span>
              <div className="shiny-container">
                <span className="shiny"></span>
              </div>
            </button>
          </a>
        </div>
      </Bounce>
    </section>
  );
};

export default Hero;
