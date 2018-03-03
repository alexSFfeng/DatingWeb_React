import React from 'react';
import { Link } from 'react-router';

// site icon and slogan
const SiteIcon = () => {
    return(
        <div id="home" className="homeIcon bigDiv">

        <div className="sectionContainer">
          <div id="iconDiv">
            <img id="sitePic" src={require('../../images/portalDating.jpg')} alt="site symbol of love"/>
            <p id="slogan"> ...We... <br />....only find.... <br /> ...REAL love...
              <br /> -------- <br /> Agents at your service. <br /> --------?????
              <br /> ❤️❤️❤️❤️</p>
    
          </div>
        </div>
    
      </div>
    );
};

export default SiteIcon;