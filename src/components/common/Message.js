import React from 'react';

const Message = function ({ newText, from }) {
  
  let imgPath = null;
  if(newText.sender == "Provider"){
    imgPath = require("../../images/lovebots.jpg");
  }
  else{
    imgPath = require("../../images/cat.jpg");
  }
  return(<div className={`container ${from == newText.sender ? "sender" : ""}`}>{<img src={imgPath} className="right" />}
{newText.content}</div>);
};


export default Message;