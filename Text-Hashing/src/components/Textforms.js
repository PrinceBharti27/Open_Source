import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';

export default function Textforms(props) {
  const handleMD5Click = () => {
    // console.log("md5 was clicked");
    var CryptoJS = require("crypto-js");
    var md5Hash = CryptoJS.MD5(string);
    setString(md5Hash);
    props.showAlert("Hashed into MD5","success")
  };

  const handleBcryptClick = () => {
    const bcrypt = require("bcryptjs");
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) {
        throw err;
      } else {
        bcrypt.hash(string, salt, function (err, hash) {
          if (err) {
            throw err;
          } else {
            // console.log(hash);
            setString(hash);
            props.showAlert("Hashed into BCrypt","success")
          }
        });
      }
    });
  };

  const handleBase64Click = ()=>{
    var encodedStringBtoA = btoa(string);
    setString(encodedStringBtoA)
    props.showAlert("Encrypted to Base64","success")
  }

  const handleCopyClick = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,99999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard","success")
  }

  const handleClearClick = () => {
    let clearText = "";
    setString(clearText);
    props.showAlert("TextArea Cleared","danger")
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange clicked");
    setString(event.target.value);
  };

  const [string, setString] = useState("");

  return (
    <>
      <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            value={string}
            placeholder="Enter the String"
            style={{backgroundColor : props.mode==='dark'?'#303030':'white',
                    color : props.mode==='dark'?'white':'black'}}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-1" onClick={handleMD5Click}>
          MD5
        </button>
        <button className="btn btn-secondary mx-3 my-1" onClick={handleBcryptClick}>
          BCrypt
        </button>
        <button className="btn btn-warning mx-3 my-1" onClick={handleBase64Click}>
          Base64
        </button>
        <button className="btn btn-success mx-3 my-1" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="btn btn-danger mx-3" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Input Summary</h2>
        <p>{string.length} characters</p>
        </div>
        <div className="my-5 conatiner" style={{color : props.mode==='dark'?'white':'black'}}>
        <h4>About the Developer</h4>
        <p className="px-5">Dellucifer is a quick learner and fond of learning about Cybersecurity and Cloud. He is a Tech enthusiast seeking for more opportunies to showcase his talents and skills, achieved a Global ranking of 6k out of around 10L users on the platform TryHackMe. Along with all this, he is also a developer and had made various projects regarding Web and Cybersecurity. You can contact him on LinkedIN and GitHub.</p>
        <SocialIcon url="https://www.linkedin.com/in/priyanshu-choudhary-cybersec/" className="mx-2"/>
        <SocialIcon url="https://github.com/dellucifer" className="mx-2"/>
        <SocialIcon url="https://twitter.com/dellucifer_07?t=8e-pFGfsC4-Sj4PBVoTjXA&s=08" className="mx-2"/>
        <img src="https://tryhackme-badges.s3.amazonaws.com/priyanshu99285.png" alt="TryHackMe" className="mx-2" />
        </div>
        
    </>
  );
}
