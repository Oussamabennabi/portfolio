import MyName from "../ui/MyName";
import "./hero.css";
const Hero = () => {
  return (
    <section id="hero" className="container hero">
      <div className="content">
        <h5 className="code-font small-text">Hi, my name is</h5>
        <MyName />
        <h1 className="sub-title">I build things for the web.</h1>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
        <a href="#projects">
        <button className="primary-button">
          <span className="button-text">Projects</span>
          <div  className="shiny-container">
            <span className="shiny"></span>
          </div>
        </button>
        </a>
</div>
    </section>
  );
};

export default Hero;
