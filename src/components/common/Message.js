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

/*class Message extends React.Component {
  render() {
    let imgPath = null;
    if(this.props.newText.sender == "Provider"){
      imgPath = require("../../images/lovebots.jpg");
    }
    else{
      imgPath = require("../../images/cat.jpg");
    }
    return (
      <div className={`container ${this.props.from == this.props.newText.sender ? "sender" : ""}`}>
        {this.props.from !== this.props.ewText.sender && <img src={imgPath} className="right" />}
        {this.props.newText.content}
      </div>
    );
  }
}*/

export default Message;