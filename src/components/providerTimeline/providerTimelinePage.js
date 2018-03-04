import React, {PropTypes} from 'react';
import './../../styles/styletimelineProvider.css';
import './../../images/emptyProfile.png';
//import ToDoPopUp from './ToDoPopUp';
import DisplaySchedule from './displaySchedule';

class providerTimelinePage extends React.Component{

    constructor(props){
        super(props);
        // default not showing the page
        this.state = {date: "Monday",toShow: false, Monday: ["10:30 Catch her at PC Starbucks", "12:10 Follow her to lunch from her class at CENTER 101", "20:50 Text her about the homework assignment"],Tuesday:[],
                     Wednesday:["10:30 Catch her at PC Starbucks","11:10 Sit next to her in class"],Thursday:[], Friday:["10:30 Walk your dog in front of her"], Weekend:["All day Stay with her in the party and have your friends leave you guys alone."]};
                                    
        this.OpenPopUp = this.OpenPopUp.bind(this);
        this.togglePopUp = this.togglePopUp.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.chooseDay = this.chooseDay.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        this.setState({newTask: value});
    }

    handleSubmit(event){
        const date = this.state.date;
        if(date == "Monday"){
            const currentTasks = this.state.Monday;
            currentTasks.push(this.state.newTask);
            this.setState({Monday: currentTasks});
            this.forceUpdate();
        }else if(date == "Tuesday"){
            const currentTasks = this.state.Tuesday;
            currentTasks.push(this.state.newTask);
            this.setState({Tuesday: currentTasks});
            this.forceUpdate();
        }else if(date == "Wednesday"){
            const currentTasks = this.state.Wednesday;
            currentTasks.push(this.state.newTask);
            this.setState({Wednesday: currentTasks});
            this.forceUpdate();
        }else if(date == "Thursday"){
            const currentTasks = this.state.Thursday;
            currentTasks.push(this.state.newTask);
            this.setState({Thursday: currentTasks});
            this.forceUpdate();
        }else if(date == "Friday"){
            const currentTasks = this.state.Friday;
            currentTasks.push(this.state.newTask);
            this.setState({Friday: currentTasks});
            this.forceUpdate();
        }else{
            const currentTasks = this.state.Weekend;
            currentTasks.push(this.state.newTask);
            this.setState({Weekend: currentTasks});
            this.forceUpdate();
        }
        //alert('Saved' + this.state.targetName);
        this.togglePopUp();
        //{this.props.func(this.state.targetName)}
        event.preventDefault();
    }

    OpenPopUp(){
        //alert("button clicked");
        //TargetInformationPop.togglePopUp();
        this.setState({toShow:true});
    }

    togglePopUp(){
        this.setState({toShow: !this.state.toShow});
    }

    chooseDay(e){
        alert("You have choosen " + e + " to be the date for this task");
        this.setState({date:e});
    }


    render(){
        return(
            <div>
            <h3 id="headerTimeline">Timeline</h3>
                <div className="sameLine">
                    <div id="buttons" className="buttonclass">
                        <button id="addTask" onClick={this.togglePopUp}>Add</button>
                    </div>
                     <div className="taskPic">
                        <img id="taskpic" src={require('./../../images/emptyProfile.png')} alt="plusSign" />
                    </div>
                </div>

    <div className="timeline">
        <ul className="schedule">
            <li><h5>Monday</h5>
            <DisplaySchedule Tasks={this.state.Monday} /></li>
            <li><h5>Tuesday</h5>
            <DisplaySchedule Tasks={this.state.Tuesday} /></li>
            <li><h5>Wednesday</h5>
            <DisplaySchedule Tasks={this.state.Wednesday} /></li>
            <li><h5>Thursday</h5>
            <DisplaySchedule Tasks={this.state.Thursday} /></li>
            <li><h5>Friday</h5>
            <DisplaySchedule Tasks={this.state.Friday} /></li>
            <li><h5>Weekend</h5>
            <DisplaySchedule Tasks={this.state.Weekend} /></li>
        
        <button type="submit" id="submit">submit</button>
        </ul>
        {this.state.toShow ?
            <form className="popupTodo" id="todoList" onSubmit={this.handleSubmit}>
                <h3 id="header">Add to do</h3>
                <span className="close" id="closeLabel" onClick={this.togglePopUp}>&times;</span>
                <ul className="chooseDate" id="dateofWeek" >
                    <li type="button" id="monday" className="dates" onClick={() => this.chooseDay("Monday")}>Monday</li>
                    <li id="tuesday" className="dates" onClick={() => this.chooseDay("Tuesday")}>Tuesday</li>
                    <li id="wednesday" className="dates" onClick={() => this.chooseDay("Wednesday")}>Wednesday</li>
                    <li id="thursday" className="dates" onClick={() => this.chooseDay("Thursday")}>Thursday</li>
                    <li id="friday" className="dates" onClick={() => this.chooseDay("Friday")}>Friday</li>
                    <li id="weekend" className="dates" onClick={() => this.chooseDay("Weekend")}>Weekend</li>
                </ul>
                <input type="text" id="providerInput" placeholder="new task" onChange = {this.handleInputChange}/>
                <button type="submit" id="addTaskButton" value="Submit">Add task</button>
            </form>
                : null
            }

</div>
</div>
        );
    }
}

export default providerTimelinePage;