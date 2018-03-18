import React from 'react';
import { Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/createUserAction';


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

    // get the array of stored users
    // logging in as user
    if(this.state.type == "User"){
      let UserArr = this.props.userState;
      const userIndex = UserArr.findIndex(user => user.email == this.state.loginName);

      // found the correct user
      if( userIndex != -1 && UserArr[userIndex].password == this.state.password){
        browserHistory.push('/clientProfile');
      }
      else{
        alert("Invalid email/password");
        this.setState({password:""});
      }
    }
    // logging in as provider
    else{
      let AgentArr = this.props.agentState;
      const agentIndex = AgentArr.findIndex(agent => agent.employeeId == this.state.loginName);

      // found the valid agent
      if(agentIndex != -1 && AgentArr[agentIndex].password == this.state.password){
        browserHistory.push('/providerProfile');
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

function mapStateToProps(state){
  console.log(state.users);
  console.log(state.agents);
  return {
    userState : state.users,
    agentState : state.agents
  };
}


export default connect(mapStateToProps)(LoginPopup);