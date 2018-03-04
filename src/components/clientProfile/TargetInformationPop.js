import React from 'react';
//import targetPic from './../../images/emptyProfile.png';

class TargetInformationPop extends React.Component{

    constructor(props){
        super(props);
        // default not showing the page
        this.state = {toShow:false};
    }


    togglePopUp(){
        let toShow = !this.state.toShow;
        this.setState({toShow: toShow});
    }


    render(){
        let toShow = this.state.toShow;

        if (toShow == true) {
            return(
                <div className="popup_Info" id="popupPage">
                    <span className="close" id="closeLabel" onClick={this.togglePopUp}>&times;</span>
                    <button type="submit" id="submit" onClick={this.togglePopUp}>submit</button>
                </div>
            );
        }
    }
}

//TargetInformationPop.propTypes = {
  //  update : PropTypes.object.isRequired
//};

export default TargetInformationPop;