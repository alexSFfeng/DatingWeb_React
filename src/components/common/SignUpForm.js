import React from 'react';
import { Link ,browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/createUserAction';

// form 
class SignUpForm extends React.Component {

  constructor(props){
    super(props);
    this.signUpUser = this.signUpUser.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      name : "",
      email : "",
      password : "",
      rePassword : "",
      personality : "",
      type : ""
    };

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

  // sign up the user with inputted data
  signUpUser() {
    for(let key of Object.keys(this.state)){
      let dataValue = this.state[key];
      if(dataValue == ""){
        alert("Please fill out the " + key + " field.");
        return;
      }
    }

    if(this.state.password != this.state.rePassword){
      alert("Passwords need to match; please re-enter");
      this.setState({password : "", rePassword : ""});
      return;
    }

    let user = this.state;

    this.props.actions.createUser(user);
    console.log("hi store user is " + this.props.userState);

    browserHistory.push('/clientProfile');
  }

  // rendering the form itself
  render() {
    return (
      <div>
        <form id="signupForm">
          <label id="formTitle">-------- TEST SUBJECT INFO --------</label>
          <br /><br /><br />
          <label>NAME: </label>
          <input type="text" placeholder="Full Name" name="name" value={this.state.name} 
          onChange={this.handleInput} id="username" required></input>
          <label>EMAIL: </label>
          <input type="email" placeholder="Email" name="email" value={this.state.email} 
          onChange={this.handleInput} id="userEmail" required></input>

          <br /><br /><br />
          <label>Password: </label>
          <input type="password" placeholder="Password" name="password" value={this.state.password} 
          onChange={this.handleInput} id="password" required></input>
          <label>Re-enter Passord: </label>
          <input type="password" placeholder="Re-enter password" name="rePassword" value={this.state.rePassword} 
          onChange={this.handleInput} id="confirmPassword" required></input>

          <br /><br /><br />
          <label>Personality Result: </label>
          <input type="text" placeholder="Result (Example: I.S.T.J)" name="personality" value={this.state.personality} 
          onChange={this.handleInput} id="trait" required></input>
          <label>Character Type: </label>
          <input type="text" placeholder="Type (Example: Logistician)" name="type" value={this.state.type} 
          onChange={this.handleInput} id="characterType" required></input>

          <br /><br /><br />
          <label>By submitting this form, you are agreeing to our privacy policies.</label>

          <br /><br /><br />
          <input className="submitBttn" id="signupBttn" type="button" value="SIGN UP" 
          onClick={this.signUpUser}></input>

        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state.users);
  return{
    userState : state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);