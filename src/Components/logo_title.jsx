import React from "react";
import logo from "../assets/group_48095635.png";
export default function Logo_title() {
  return (
    <div id="title_logo_div">
      <span id="back_but">&lt; </span>
      <img src={logo} alt="Logo" id= "logo"/>
      <span id="title">SuperBrain</span>
    </div>
  );
}
