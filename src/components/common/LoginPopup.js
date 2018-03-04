import React from 'react';
import { Link } from 'react-router';

// fake data
const user = [
  {
    name: "Alex Feng",
    email: "alex134B@ucsd.edu",
    password: "shishangzuishuai"
  }
];

const provider = [
  {
    name: "Ada Qu",
    employeeId: "14194052",
    password: "Haohaoxuexi24"
  }
];

class LoginPopup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      type : "Agent",
      loginName : "",
      password : ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  // update input values and watch for change
  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value
    });
  }

  loginUser(){
    for(let key of Object.keys(this.state)){
      let dataValue = this.state[key];
      if(dataValue == ""){
        alert("Please fill out the " + key + " field.");
        return;
      }
    }

    // logging in as user
    if(this.state.type == "User"){
      var reqUser = user[0];
      if(reqUser.email == this.state.loginName && reqUser.password == this.state.password){
        alert("logged in");
      }
      else{
        alert("Invalid email/password");
        this.setState({password:""});
      }
    }
    // logging in as provider
    else{
      var reqAgent = provider[0];
      if(reqAgent.email == this.state.loginName && reqAgent.password == this.state.password){
        alert("logged in");
      }
      else{
        alert("Invalid ID/password");
        this.setState({password:""});
      }
    }
  }

  render() {
    return (
      <div className="popupLogin" id="modal">
        <div className="loginContent">
          <span className="closeIcon" onClick={this.props.closePopup}>&times;</span>
          <br /><br />
          <p className="instructions">Employee 🤖 / User 👨‍💼👩‍💼:</p>
          <br />
          <form id="loginForm">

            <br /><br />
            <label>Change Login Option: </label>
            <select className="loginOptions" value={this.state.type} name="type"
            onChange={this.handleInput} id="logOptions">
              <option value="Agent">Agent</option>
              <option value="User">User</option>
            </select>

            <br /><br /><br />
            <label>Email / Employee ID: </label>
            <input type="text" placeholder="Email/Employee ID" id="emailID" name="loginName" value={this.state.loginName}
            onChange={this.handleInput} required></input>
            <label>Password: </label> <input type="password" placeholder="Password" name="password" value={this.state.password}
            onChange={this.handleInput} id="pass" required></input>

            <br /><br /><br />
            <label><a href="#">Forgot Password ?</a></label>

            <br /><br /><br />
            <input className="submitBttn" id="loginBttn" type="button" value="LOGIN" 
            onClick={this.loginUser}></input>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPopup;