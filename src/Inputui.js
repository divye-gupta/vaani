import React from "react";
import "./css/Inputui.css";
import Recorder from "./Recorder";
import UploadAudio from './UploadAudio';
import logo from "./images/logo.png";
const Inputui = () => {
  const upload = () => {
    console.log("hello");
  };
  return (
    
    <div className="inputbox">
      <img className="logo" src={logo} alt="" />
      <h1 className="head1">Let's hear what you say</h1>
      <div className="upload">
        <UploadAudio />
      </div>
      <hr />
      <h1 className="diff">OR</h1>
      <hr />
      <h1 className="head2">Record an audio</h1>
      <div className="recorder">
        <Recorder />
      </div>
    </div>
  );
};
export default Inputui;
