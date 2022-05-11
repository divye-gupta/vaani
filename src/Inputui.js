import React from "react";
import "./css/Inputui.css";
import Recorder from "./Recorder";
const Inputui = () => {
    const upload= ()=>{
        console.log('hello');
    }
  return (
    <div className="inputbox">
        <h1>Let's hear what you say</h1>
      <button onClick={upload}>Upload your Audio</button>
      <hr />
    <h1>OR</h1>
      <hr />
      <h1>Record an audio</h1>
      <Recorder/>
    </div>
  );
};
export default Inputui;
