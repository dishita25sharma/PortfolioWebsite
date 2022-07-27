import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Apple from "../../img/apple.png";
import Spark from "../../img/spark.jpeg";
import netzwert from "../../img/netzwart-logo1 (1).jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            At Netzwert Texhnologies, I Worked on a website,
            <br />
            used by the Apple Company employees.
            <br />
            For Sparks Foundation, I built a Donation Website
            <br />
            from Scratch and Integrated a payment gateway to it.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 360 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 10, type: "spring" }}
          className="w-mainCircle"
        >
          <div>
            <img src="" alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Spark} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={netzwert} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Apple} alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
