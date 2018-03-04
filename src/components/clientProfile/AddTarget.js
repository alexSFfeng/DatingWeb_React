import React from "react";
//import TargetInformationPop from "./TargetInformationPop";

class AddTarget extends React.Component{

    constructor(props){
        super(props);
        // default not showing the page
        this.state = {toShow:false, targetName:"", targetBirthday:"", targetEmail:"", targetFacebook:"", targetInstgram:"", targetAddress:""};
        this.OpenPopUp = this.OpenPopUp.bind(this);
        this.togglePopUp = this.togglePopUp.bind(this);
        //this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]:value});
    }

    handleSubmit(event){
        alert('Saved' + this.state.targetName);
        event.preventDefault();
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
                        <img className="targetPics" src={require('./../../images/emptyProfile.png')} alt="clientPic" />
                    </div>
                    <h5 id="Status">Status</h5>
                    <div className="status">
                        <button type="button" className="drop">DROP</button>
                        <button className="enroll">ENROLL</button>
                        <button className="waitlist">WAITLIST</button>
                    </div>

                    <div className="info" id="info" onSubmit={this.handleSubmit}>
                        <label className="labelStyle">Name</label>
                        <label className="labelStyle">Birthday</label>

                        <input className="inputStyle" placeholder="Enter name" name="targetName" required onChange={this.handleInputChange}/>
                        <input className="inputStyle" placeholder="Enter birthday" name="targetBirthday" onChange={this.handleInputChange} required/>
                        <label className="labelStyle">Email</label>

                        <label className="labelStyle">Phone</label>
                        <input className="inputStyle" placeholder="Enter email" name="targetEmail" required onChange={this.handleInputChange} />
                        <input className="inputStyle" placeholder="format XXX-XXX-XXXX" name="targetNumber" onChange={this.handleInputChange} />
                        <label className="labelStyle">Facebook</label>

                        <label className="labelStyle">Instagram</label>
                        <input className="inputStyle" placeholder="Enter Facebook" name="targetFacebook" onChange={this.handleInputChange} />
                        <input className="inputStyle" placeholder="Enter Instagram" name="targetInstagram" onChange={this.handleInputChange} />
                        <label className="addressL">Address</label>
                        <input className="addressI" placeholder="Enter address" name="targetAddress" onChange={this.handleInputChange} />
                        <label className="hobbiesL">Hobbies</label>
                        <textarea className="hobbiesI" placeholder="List all hobbies that you know the target has" onChange={this.handleInputChange} ></textarea>
                    </div>

                    <h5 className="rankL">Rank</h5>
                    <select className="rank">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button type="submit" className="submit">submit</button>
                </div>
                : null
            }
            </div>
        );
    }
}

export default AddTarget;