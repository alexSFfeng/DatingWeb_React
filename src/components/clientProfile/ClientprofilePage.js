import React, {PropTypes}from 'react';
import {Link} from 'react-router';
import AddTarget from './AddTarget';
import Chatbox from '../common/Chatbox';
import "../../styles/styleClient.css";
import TargetEach from './TargetEach';
import TargetDisplay from './TargetDisplay';
import {connect} from 'react-redux';
import * as targetActions from './../../actions/targetActions';


class ClientprofilePage extends React.Component{

    constructor(props){
        super(props);
        alert("constructor called");
        this.state = {
           targetNames: props.targets
        };

        this.updateTargets = this.updateTargets.bind(this);
    }

    updateTargets(e){

        const newTarget = e;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        //alert("we have" + newTarget);
        //if( newTarget != ""){
          //const allTargets = this.state.targetNames;
          //allTargets.push(newTarget);
          //alert("the putin array is " + allTargets.length);
          //targetNames.name = e;
          //this.setState({targetNames: allTargets});
          //alert("the array has length" + this.state.targetNames.length);
          //this.forceUpdate(); 
        //}

        this.props.dispatch(targetActions.createTarget(e));
        console.log(this.props.targets);
    }
//<TargetDisplay targetNames={this.state.targetNames}/>
    render(){
        //alert("we should see this twice");
        const targetsNames = this.props.targets;
        return(
            <div className="targets">
               <h1 className="headerTargets">Target</h1>
               <div className="allTargets">
                    {
                        targetsNames.map((targetName) =>
                            <TargetEach targetName={targetName} />
                        )
                    }
                </div>
               
               <AddTarget func={this.updateTargets.bind(this)}/>
               <Chatbox isClient/>
            </div>
        );
    }
}

//ClientprofilePage.propTypes = {
    //targetName: PropTypes.string.isRequired,
  //  dispatch: PropTypes.func.isRequired,
    //targets: PropTypes.array.isRequired
//};

function mapStateToProps(state, ownProps){
    return{
        // The targets is followed by the reducer
        targets: state.targets

    };
}


export default connect(mapStateToProps)(ClientprofilePage);