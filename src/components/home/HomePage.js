import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import SiteIcon from './SiteIcon';
import ServiceInfo from './ServiceInfo';
import PersonalityTest from './PersonalityTest';
import '../../styles/homepage.css'; //Webpack can import CSS files too!
import '../../images/parallax1.jpg';
import '../../images/parallax2.jpg';
import '../../images/parallax3.jpg';
import '../../images/parallax4.jpg';


// Basic hompage layout
class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div className="parallax" id="parallax1"></div>

                <SiteIcon />

                <div className="parallax" id="parallax2"></div>

                <ServiceInfo />

                <div className="parallax" id="parallax3"></div>

                <PersonalityTest />

                <div className="parallax" id="parallax4"></div>

            </div>

        );
    }
}

export default HomePage;