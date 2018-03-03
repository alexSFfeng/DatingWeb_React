import React from 'react';
import { Link } from 'react-router';
import SignUpForm from '../common/SignUpForm';

// Test + sign up 
class PersonalityTest extends React.Component {
  render() {
    return (
      <div id="personalityTest" className="bigDiv">
        <div className="sectionContainer">
          <div className="divWrapper">
            <h1 className="descriptionService">To Get Started . . .</h1>

            <br />
            <p className="instructions"> Take this personality test to see who you resemble 🤔🤔
            <br />*REMEMBER YOUR RESULTS!</p>
            <br />
            <a href="https://www.16personalities.com/free-personality-test" target="_blank">
              <img id="testPreview" src={require('../../images/test.png')} alt="16personalities" /></a>

            <br /> <hr /> <br />

            <p id="signupPrompt" className="instructions"> Enter your information ℹ️: </p>
            <br />
            <SignUpForm />

          </div>
        </div>
      </div>
    );
  }
}

export default PersonalityTest;