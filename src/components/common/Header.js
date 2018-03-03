import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    jumpToSignUp(){
        window.location.href = "#signupPrompt";
    }
    render() {
        return (
            <nav id="menuBar" className="navigation">
                <ul>
                    <li><a className="active" href="#home">HOME</a></li>
                    <li><a href="#service">SERVICE DESCRIPTION</a></li>
                    <li><a href="#personalityTest">TAKE A TEST</a></li>
                    <li id="rightRegistration">
                        <div className="LScontainer">
                            <button type="button" className="LSbuttons" > 
                            LOGIN</button>
                            <button type="button" className="LSbuttons" onClick={this.jumpToSignUp}> 
                            SIGN UP</button>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}


export default Header;