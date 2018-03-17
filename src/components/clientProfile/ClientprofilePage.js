import React, {PropTypes}from 'react';
import {Link} from 'react-router';
import AddTarget from './AddTarget';
import Chatbox from '../common/Chatbox';
import "../../styles/styleClient.css";
import TargetEach from './TargetEach';
import TargetDisplay from './TargetDisplay';


class ClientprofilePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {targetNames:[]};
        this.updateTargets = this.updateTargets.bind(this);
    }

    updateTargets(e){
        const newTarget = e;
        //alert("we have" + newTarget);
        if( newTarget != ""){
          const allTargets = this.state.targetNames;
          allTargets.push(newTarget);
          //alert("the putin array is " + allTargets.length);
          this.setState({targetNames: allTargets});
          //alert("the array has length" + this.state.targetNames.length);
          this.forceUpdate(); 
        }
    }

    render(){
        //alert("we should see this twice");
        return(
            <div className="targets">
               <h1 className="headerTargets">Target</h1>
               <TargetDisplay targetNames={this.state.targetNames}/>
               <AddTarget func={this.updateTargets.bind(this)}/>
               <Chatbox isClient/>
            </div>
        );
    }
}

ClientprofilePage.propTypes = {
    targetName: PropTypes.string.isRequired
};

export default ClientprofilePage;