import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Message from './Message.js';
import * as chatActions from '../../actions/chatAction';
import {connect} from 'react-redux';
//import '../../styles/styleClient.css';
import '../../styles/chatBox.css';
const chatStyle = require('../../styles/chatBox.css');

class Chatbox extends React.Component {

  constructor(props) {
    super(props);
    // set initial state to be client page

    this.chatToggle = this.chatToggle.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    this.state = {
      isClient: this.props.isClient,
      showUp: false,
      mode: ""
    };

  }

  componentDidMount(){
    if(this.state.isClient){
      this.setState({
        mode:"Client"
      });
    }
    else{
      this.setState({
        mode:"Provider"
      });
    }
  }

  // render when component update
  componentDidUpdate() {
    this.toBot();
  }

  toBot() {
    ReactDOM.findDOMNode(this.refs.chat).scrollTop = ReactDOM.findDOMNode(this.refs.chat).scrollHeight;
  }
  chatToggle() {
    this.setState({
      showUp: !this.state.showUp
    });
  }

  sendMessage() {
    let newMessage = null;
    if (this.state.isClient) {
      newMessage = {
        sender: "Client",
        content: <p className="response">{ReactDOM.findDOMNode(this.refs.message).value}</p>,
        avatar: "../../images/cat.jpg"
      };
      this.props.sendMessage(newMessage);
      ReactDOM.findDOMNode(this.refs.message).value = "";
    }
    else {
      newMessage ={
        sender: "Provider",
        content: <p className="response">{ReactDOM.findDOMNode(this.refs.message).value}</p>,
        avatar: "../../images/lovebots.jpg"
      };
      this.props.sendMessage(newMessage);
      ReactDOM.findDOMNode(this.refs.message).value = "";
    }
  }

  render() {

    let displayBool = this.state.showUp;
    const user = this.state.mode;
    
    return (
      <div className={displayBool ? 'chatBox' : 'chatBox noChat'} id="chatBox" >
        <span className={chatStyle.chatTitle} onClick={this.chatToggle}>Need Advice?</span>
        <span className={displayBool ? "open noDisplay" : "open"} id="openS" onClick={this.chatToggle}>&#43;</span>
        <span className={displayBool ? "close" : "close noDisplay"} id="closeS" onClick={this.chatToggle}>&minus;</span>
        <div className={chatStyle.chatLog} id="chatLog">
          <div className={chatStyle.chat} id="chat" ref="chat">
            {
              (this.props.messageHistory).map(function(newText,i){
                return <Message key={i} newText={newText} from={user} />;
              })
            }
          </div>
          <div className={chatStyle.sendMessage} id="sendMessage">
            <textarea placeholder="Leave a command for your test subjects." id="message" ref="message"
              className={chatStyle.message} rows="5" wrap="soft" spellCheck="true"></textarea>
            <button className={chatStyle.sendBttn} id="sendBttn" onClick={this.sendMessage}>&larr;</button>
          </div>
        </div>
      </div>
    );
  }

}

Chatbox.propTypes = {
  isClient: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return {
    messageHistory : state.messages
  };
}

function mapDispatchToProps(dispatch){
  return {
    sendMessage : (message) => {
      dispatch(chatActions.saveMessage(message));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Chatbox);