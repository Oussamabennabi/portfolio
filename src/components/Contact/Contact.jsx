import "./contact.css"
import { SiFrontendmentor } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { ReactComponent as Spiner } from "../../assets/spiner.svg";
import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";
import { Bounce } from "react-reveal";
import CoolText from "../ui/CoolText";
const Contact = () => {
const [error, setError] = useState(false)
const [success, setSuccess] = useState(false);
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef()
  const messageRef = useRef();
const [loading,setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true);

    await emailjs
      .sendForm(
        "service_9thkw44",
        "template_myhfcde",
        formRef.current,
        "Ooc7cnKsf2t11YZQX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true)
          setTimeout(() => {
          setSuccess(false);
          },1000)
        },
        (error) => {
          setError(true)
          console.log(error.text);
        }
    );
          setLoading(false);
    

  } 
 
  return (
    <section id="contact" className="container contact">
      <Bounce bottom>
        <div className="content">
          <h2 className="section-header">
            <span className="link-number">04. </span>
            <CoolText text={"Lets Talk."} />
          </h2>
          <div className="form-container">
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="error">
                {error && "There is an Error. Please try again"}
              </div>
              <label>
                <h4>NAME</h4>
                <input type="text" name="user_name" id="name" ref={nameRef} />
              </label>
              <label>
                <h4>EMAIL</h4>
                <input
                  type="email"
                  required
                  name="user_email"
                  id="email"
                  ref={emailRef}
                />
              </label>

              <label>
                <h4>MESSAGE</h4>
                <textarea
                  required
                  name="message"
                  id="message"
                  ref={messageRef}
                />
              </label>

              <button type="submit" className="primary-button">
                <span className="button-text">
                  {loading ? (
                    <Spiner
                      style={{
                        backgroundColor: "transparent",
                        fontSize: "788px",
                      }}
                    />
                  ) : success ? (
                    "Done"
                  ) : (
                    "SHOOT"
                  )}
                </span>
                <div className="shiny-container">
                  <span className="shiny"></span>
                </div>
              </button>
            </form>

            <footer className="contact-footer">
              <div className="social-media-icons">
                <ul>
                  <li title="Github">
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href="https://github.com/Oussamabennabi"
                    >
                      <FaGithubAlt fill="#FFFFFF" />
                    </a>
                  </li>
                  <li title="Facebook">
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href="https://www.facebook.com/Oussama.Ben.Q/"
                    >
                      <FiFacebook fill="#FFFFFF" />
                    </a>
                  </li>

                  <li title="LinkedIn">
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/oussama-bennabi/"
                    >
                      <FiLinkedin fill="#FFFFFF" />
                    </a>
                  </li>
                  <li>
                    <a
                      target={"_blank"}
                      title="tor"
                      href="https://www.frontendmentor.io/profile/Oussamabennabi"
                      rel="noreferrer"
                    >
                      <SiFrontendmentor fill="#FFFFFF" />
                    </a>
                  </li>
                </ul>
              </div>
              <span className="email-link">
                <a href="mailto:oussama.bennabi.work@gmail.com">
                  oussama.bennabi.work@gmail.com
                </a>
              </span>

              <p>Designed & Built by Oussama Bennabi.</p>
            </footer>
          </div>
        </div>
      </Bounce>
    </section>
  );
}

export default Contact