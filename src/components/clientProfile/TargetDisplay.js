import React, { PropTypes } from 'react';
import './../../images/emptyProfile.png';
import TargetEach from './TargetEach';

class TargetDisplay extends React.Component{

    constructor(props){
        super(props);
        this.state = {targetNames: this.props.targetNames};
        this.updateCurrent = this.updateCurrent.bind(this);
    }

    updateCurrent(props){
        if(this.props.targetNames.length != this.state.targetNames.length){
            this.setState({targetNames:this.props.targetNames});
        }
    }

    render(){
        this.updateCurrent(this.props);
        const targetsNames  = this.state.targetNames;
        //if( targetNames.length == 0){
          //  alert("TargetDisplay got an array with lenth" + targetNames.length);
            //return null;
        //}else{
            return(
                <div className="allTargets">
                    {
                        targetsNames.map((targetName) =>
                            <TargetEach targetName={targetName} />
                        )
                    }
                </div>
            );
        }
    }

    


TargetDisplay.propTypes = {
    targetNames: PropTypes.array.isRequired
};

export default TargetDisplay;