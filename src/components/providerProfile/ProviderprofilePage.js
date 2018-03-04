import React from 'react';
import { Link } from 'react-router';
import './../../images/add.png';
import './../../images/emptyProfile.png';
import './../../styles/styleProvider.css';

class ProviderprofilePage extends React.Component {
  render() {
    return (
      <div className="targetPage">
          <h3 className="headerTimeline">Tasks</h3>
          <div className="targets">
              <div className="dealingTargets">
                <h4 className="wanted">#1</h4>
                <img src={require('./../../images/emptyProfile.png')} alt="WheatlyPic"/>
                <h5 className="targetName">Subject 1</h5>
              </div>

              <div className="dealingTargets">
                <h4 className="PENDING">#2</h4>
                <img src={require('./../../images/emptyProfile.png')} alt="chellPic" />
                <h5 className = "targetName">Subject 2</h5>
              </div>

          </div>
      </div>
    );
  }
}

export default ProviderprofilePage;