import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';
import Message from './Message.js';


// fake client data
const clientStart = {
  content: <div className="container">
    <img src={require("../../images/cat.jpg")} alt="client avatar" className="right" />
    <p className="response">I think we need a new plan... She's not responding to my texts</p></div>
};

const clientMessages = ["......", "That sounds interesting!", "I guess...",
  "I'll give it a try; any other suggestions?"];

// fake provider data
const providerStart = {
  content: <div className="container">
    <img src={require("../../images/lovebots.jpg")} alt="agent avatar" className="right" />
    <p className="response">How can I help you?</p></div>
};

const providerMessages = ["Thinking...", "From my previous experiences..", "Analyzing results...",
  "You are too needy; humans don't like what is easy to get..."];

let counter = 0;

class Chatbox extends React.Component {

  constructor(props) {
    super(props);
    // set initial state to be client page

    this.chatToggle = this.chatToggle.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    this.state = {
      isClient: this.props.isClient,
      showUp: false,
      messages: [],
      mode: ""
    };

  }

  componentDidMount(){
    if(this.state.isClient){
      this.setState({
        messages: this.state.messages.concat([{
          sender: "Provider",
          content: <p className="response">How can I help you</p>,
          avatar: "../../images/lovebots.jpg"
        }]),
        mode:"Client"
      });
    }
    else{
      this.setState({
        messages: this.state.messages.concat([{
          sender: "Client",
          content: <p className="response">I think we need a new plan... She's not responding to my texts</p>,
          avatar: "../../images/cat.jpg"
        }]),
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

    if (this.state.isClient) {
      let fakeProviderdata = {
        sender: "Provider",
        content: <p className="response">{providerMessages[counter]}</p>,
        avatar: "../../images/lovebots.jpg"
      };
      this.setState({
        messages: this.state.messages.concat([
          {
          sender: "Client",
          content: <p className="response">{ReactDOM.findDOMNode(this.refs.message).value}</p>,
          avatar: "../../images/cat.jpg"
          },
          fakeProviderdata
        ])
      }, () => {
        ReactDOM.findDOMNode(this.refs.message).value = "";
      });
      counter=counter+1;
    }
    else {
      let fakeClientdata = {
        sender: "Client",
        content: <p className="response">{clientMessages[counter]}</p>,
        avatar: "../../images/lovebots.jpg"
      };
      this.setState({
        messages: this.state.messages.concat([
          {
          sender: "Provider",
          content: <p className="response">{ReactDOM.findDOMNode(this.refs.message).value}</p>,
          avatar: "../../images/lovebots.jpg"
        },
        fakeClientdata
      ])
      },() => {
        ReactDOM.findDOMNode(this.refs.message).value = "";
      });
      counter=counter+1;
    }
  }

  render() {

    let displayBool = this.state.showUp;
    const user = this.state.mode;
    
    return (
      <div className={displayBool ? 'chatBox' : 'chatBox noChat'} id="chatBox" >
        <span className="chatTitle" onClick={this.chatToggle}>Need Advice?</span>
        <span className={displayBool ? "open noDisplay" : "open"} id="openS" onClick={this.chatToggle}>&#43;</span>
        <span className={displayBool ? "close" : "close noDisplay"} id="closeS" onClick={this.chatToggle}>&minus;</span>
        <div id="chatLog">
          <div id="chat" ref="chat">
            {
              (this.state.messages).map(function(newText,i){
                return <Message key={i} newText={newText} from={user} />;
              })
            }
          </div>
          <div id="sendMessage">
            <textarea placeholder="Leave a command for your test subjects." id="message" ref="message"
              rows="5" wrap="soft" spellCheck="true"></textarea>
            <button id="sendBttn" onClick={this.sendMessage}>&larr;</button>
          </div>
        </div>
      </div>
    );
  }

}

Chatbox.propTypes = {
  isClient: PropTypes.bool.isRequired
};

export default Chatbox;