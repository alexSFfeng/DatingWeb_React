import React, { PropTypes } from 'react';
import './../../images/emptyProfile.png';

class TargetEach extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const targetName = this.props.targetName;
        //alert("the name I got is" + targetName);
        return(
          <div className="pendingTargets" id="pendingTarget" >
            <h4 className="PENDING">PENDING</h4>
            <img src={require('./../../images/emptyProfile.png')} alt="TargetPic"/>
            <h6 className="singleOrNot">Single or Not</h6>
            <h5 className = "targetName">{targetName}</h5>
          </div>
        );
    }

    
}

TargetEach.propTypes = {
    targetName: PropTypes.string.isRequired
};

export default TargetEach;