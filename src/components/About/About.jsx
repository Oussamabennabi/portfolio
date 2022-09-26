import { Bounce } from "react-reveal"
import CoolText from "../ui/CoolText";
import "./about.css"
import { BsMusicNoteList } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { SiYoutubegaming, SiMongodb } from "react-icons/si";
import { GiStoneBlock } from 'react-icons/gi'
import {FaReact,
FaNodeJs,
FaCss3} from "react-icons/fa"
const About = () => {
  return (
    <section id="about" className="container about">
      <Bounce bottom>
        <div className="content">
          <h2 className="section-header">
            <span className="link-number">01. </span>
            <CoolText text={"About Me."} />
          </h2>
          <p className="aboutMe-text">
            <span className="hello-world">Hello! </span>
            my name is oussama and Im passioant about creating new things that
            lives in the internet. I work very hard to achive my goals and ideas
            that comes into my mind.
            <br />
            Im also curios how tricky things work
            <br />
            <br />
            In my journey I have built a lot of websites that tough me a lot
            about web development, and now I feel comftobal working with
            JavaScript and its libararies and React framework. 
            {/* IM NOT LIMITED TO JUST THIS TECHNOLOGIES */}
            Im a self-though developer and college-though engineerer Im always
            motivated to learn new technologies
          </p>
          <div className="skills-container">
            <div className="skills">
              <h4>
                technologies I’ve been working with recently (Not Limited)
              </h4>
              <ul className="skills-list">
                <li >
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
      </Bounce>
    </section>
  );
}

export default About