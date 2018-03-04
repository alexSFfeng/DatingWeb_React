import React from "react";
import "./../../images/emptyProfile.png";
import "../../styles/styleClient.css";


class AddTarget extends React.Component{

    constructor(props){
        super(props);
        // default not showing the page
        this.state = {toShow:false};
        this.OpenPopUp = this.OpenPopUp.bind(this);
        this.togglePopUp = this.togglePopUp.bind(this);
    }

    OpenPopUp(){
        alert("button clicked");
        //TargetInformationPop.togglePopUp();
        this.setState({toShow:true});
    }

    togglePopUp(){
        //let toShow = !this.state.toShow;
        this.setState({toShow: !this.state.toShow});
    }




    render(){
        return (
            <div>
            <div className="addTarget">
                <h4 className="AddTarget">Add Target</h4>
                <button type="button" className= "addButton" id="addB" onClick={this.OpenPopUp} >+</button>
            </div>

            {this.state.toShow ? 
                <div className="popup_Info" id="popupPage">
                    <span type="button" className="closeButton" onClick={this.togglePopUp}>&times;</span>
                    <div className="targetPics">
                        <img id="targetPics" src={require('./../../images/emptyProfile.png')} alt="clientPic" />
                    </div>
                    <h5 id="Status">Status</h5>
                    <div className="status">
                        <button type="button" className="drop">DROP</button>
                        <button className="enroll">ENROLL</button>
                        <button className="waitlist">WAITLIST</button>
                    </div>
                    <button type="submit" className="submit" onClick={this.togglePopUp}>submit</button>
                </div>
                : null
            }
            </div>
        );
    }
}

export default AddTarget;