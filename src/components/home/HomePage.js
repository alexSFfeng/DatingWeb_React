import React from 'react';
import { Link } from 'react-router';
import Header from '../common/Header';
import SiteIcon from './SiteIcon';
import ServiceInfo from './ServiceInfo';
import PersonalityTest from './PersonalityTest';
import LoginPopup from '../common/LoginPopup';
import '../../styles/homepage.css'; //Webpack can import CSS files too!
import '../../images/parallax1.jpg';
import '../../images/parallax2.jpg';
import '../../images/parallax3.jpg';
import '../../images/parallax4.jpg';


// Basic hompage layout
class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      showLogin : false
    };
  }

  toggleLogin(){
    this.setState({
      showLogin : !this.state.showLogin
    });
  }

  render() {

    let popup = null;
    if(this.state.showLogin){
      popup = <LoginPopup closePopup={this.toggleLogin.bind(this)}/>;
    }

    return (
      <div>
        <Header toggleFuc={this.toggleLogin.bind(this)}/>

        <div className="parallax" id="parallax1"></div>

        <SiteIcon />

        <div className="parallax" id="parallax2"></div>

        <ServiceInfo />

        <div className="parallax" id="parallax3"></div>

        <PersonalityTest />

        <div className="parallax" id="parallax4"></div>

        {popup}

      </div>

    );
  }
}

export default HomePage;