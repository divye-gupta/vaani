import React from "react";
import "./css/Inputui.css";
import RecorderJS from "./Recorder";
const Inputui = () => {
    const upload= ()=>{
        console.log('hello');
    }
  return (
    <div className="inputbox">
        <h1>There is a button below</h1>
      <button onClick={upload}>Upload your Audio</button>
      <hr />
      <p>OR</p>
      <h1>Record here</h1>
      <p>*API endpoint here*</p>
      <RecorderJS/>
    </div>
  );
};
export default Inputui;
