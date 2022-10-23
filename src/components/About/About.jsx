import { Fade } from "react-reveal"
import CoolText from "../ui/CoolText";
import "./about.css"
import { BsMusicNoteList } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import {BiHappyBeaming} from 'react-icons/bi'
import { SiYoutubegaming, SiMongodb } from "react-icons/si";
import { GiStoneBlock } from 'react-icons/gi'
import {FaReact,
FaNodeJs,
FaCss3} from "react-icons/fa"
const About = () => {
  return (
    <section id="about" className="container about">
      <Fade bottom>
        <div className="content">
          <h2 className="section-header">
            <span className="link-number">01. </span>
            <CoolText text={"About Me."} />
          </h2>
          {/* <div className="image">
            <img src="me.jpg" alt="" />
          </div> */}
          {/* About Me Text */}
          <p className="aboutMe-text">
            <span className="hello-world">Hello! </span>
            My name is oussama, and I'm passionate about creating new things
            that live on the internet. I work very hard to achieve the goals and
            ideas that come to my mind, and also curious about how tricky things
            work.
            <br />
            <br />
            In my journey, I have built many websites that taught me a lot about
            web development, and now I feel comftable working with JavaScript
            and its libraries and React framework.
            <br /> <br />
            <span className="motivation">
              <BiHappyBeaming className="smily-face" />
              motivation keeps me going forward.
            </span>
          </p>
          {/* SKILLS */}
          <div className="skills-container">
            <div className="skills">
              <h4>
                technologies I’ve been working with recently (Not Limited)
              </h4>
              <ul className="skills-list">
                <li>
                  <IoLogoJavascript />
                  JavaScript (ES6+)
                </li>
                <li>
                  <FaReact />
                  React
                </li>
                <li>
                  <FaNodeJs />
                  Nodejs
                </li>
                <li>
                  <FaCss3 />
                  Scss
                </li>
                <li>
                  <SiMongodb />
                  MongoDB
                </li>
              </ul>
            </div>
            <div className="intrest">
              <h4>These are my intrest</h4>
              <ul className="intrest-list">
                <li>
                  <GiStoneBlock />
                  Blockchain
                </li>
                <li>
                  <SiYoutubegaming />
                  Gaming
                </li>
                <li>
                  <BsMusicNoteList />
                  Music
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About