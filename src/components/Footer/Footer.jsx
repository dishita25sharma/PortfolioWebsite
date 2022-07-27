import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>dishitasharma100@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/dishita_sharma_01/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/dishita-sharma-5a4b0119b/">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/dishita25sharma?tab=repositories">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
