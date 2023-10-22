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
        <span>laxmankumawat4444@gmail.com</span>
        <div className="f-icons">
          <a target="_blank" href="https://instagram.com/laxmankumawat2988"><Insta color="white" size={"3rem"} /></a>
          <a target="_blank"
           href="https://github.com/laxmankumawat3"><Gitub color="white" size={"3rem"} /></a>
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
