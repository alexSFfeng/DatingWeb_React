import React, {PropTypes} from 'react';
import './../../styles/styletimelineProvider.css';
import './../../images/emptyProfile.png';
//import ToDoPopUp from './ToDoPopUp';
import DisplaySchedule from './displaySchedule';
import {connect} from 'react-redux';
import * as taskActions from './../../actions/taskActions';

class providerTimelinePage extends React.Component{

    constructor(props){
        super(props);
        // default not showing the page
        this.state = {
            tasks : props.tasks,
            newTask : "",
            date: "Monday",
            toShowAdd: false,
            toShowDelete: false,
            tasksinDay: props.tasks.Monday
        }

                                    
        this.OpenPopUp = this.OpenPopUp.bind(this);
        this.togglePopUp = this.togglePopUp.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.chooseDay = this.chooseDay.bind(this);
        providerTimelinePage.deleteTask = this.deleteTask.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        this.setState({newTask: value});
    }

    handleSubmit(event){
        const date = this.state.date;
        if(date == "Monday"){
            //const currentTasks = this.state.Monday;
            //currentTasks.push(this.state.newTask);
            //this.setState({Monday: currentTasks});
            //this.forceUpdate();
            this.props.dispatch(taskActions.createMonday(this.state.newTask));
        }else if(date == "Tuesday"){
            /*const currentTasks = this.state.Tuesday;
            currentTasks.push(this.state.newTask);
            this.setState({Tuesday: currentTasks});
            this.forceUpdate();*/
            this.props.dispatch(taskActions.createTuesday(this.state.newTask));
        }else if(date == "Wednesday"){
            /*
            const currentTasks = this.state.Wednesday;
            currentTasks.push(this.state.newTask);
            this.setState({Wednesday: currentTasks});
            this.forceUpdate();*/
            this.props.dispatch(taskActions.createWednesday(this.state.newTask));
        }else if(date == "Thursday"){
            /*
            const currentTasks = this.state.Thursday;
            currentTasks.push(this.state.newTask);
            this.setState({Thursday: currentTasks});
            this.forceUpdate();*/
            this.props.dispatch(taskActions.createThursday(this.state.newTask));
        }else if(date == "Friday"){
            /*
            const currentTasks = this.state.Friday;
            currentTasks.push(this.state.newTask);
            this.setState({Friday: currentTasks});
            this.forceUpdate();*/
            this.props.dispatch(taskActions.createFriday(this.state.newTask));
        }else{
            /*
            const currentTasks = this.state.Weekend;
            currentTasks.push(this.state.newTask);
            this.setState({Weekend: currentTasks});
            this.forceUpdate();*/
            this.props.dispatch(taskActions.createWeekend(this.state.newTask));
        }
        //alert('Saved' + this.state.targetName);
        this.togglePopUp();
        //{this.props.func(this.state.targetName)}
        event.preventDefault();
    }

    OpenPopUp(e){
        //alert("button clicked");
        //TargetInformationPop.togglePopUp();
        if( e == "Add"){
          this.setState({toShowAdd:true});
        }else if( e == "Delete"){
            this.setState({toShowDelete: true});
        }
    }

    togglePopUp(e){
        if( e == "Add"){
          this.setState({toShowAdd: !this.state.toShowAdd});
        }else if( e == "Delete"){
            this.setState({toShowDelete: !this.state.toShowDelete})
        }
    }

    chooseDay(e){
        alert("You have choosen " + e + " to be the date for this task");
        let tasksinDay = this.state.tasksinDay;
        if( e == "Monday"){
            tasksinDay = this.props.tasks.Monday;
        }else if(e == "Tuesday"){
            tasksinDay = this.props.tasks.Tuesday;
        }else if(e == "Wednesday"){
            tasksinDay = this.props.tasks.Wednesday;
        }else if(e == "Thursday"){
            tasksinDay = this.props.tasks.Thursday;
        }else if( e == "Friday"){
            tasksinDay = this.props.tasks.Friday;
        }else{
            tasksinDay = this.props.tasks.Weekend;
        }

        this.setState({tasksinDay: tasksinDay,
                       date:e});
        console.log(tasksinDay);
        
    }


    deleteTask(index){
        //e.preventDefault();
        console.log("what is going on" + index);
        const date = this.state.date;
        switch(date){
            case 'Monday':
              this.props.dispatch(taskActions.deleteMonday(index));
              break;

            case 'Tuesday':
              this.props.dispatch(taskActions.deleteTuesday(index));
              break;
            case 'Wednesday':
              this.props.dispatch(taskActions.deleteWednesday(index));
              break;
            case 'Thursday':
              this.props.dispatch(taskActions.deleteThursday(index));
              break;
            case 'Friday':
              this.props.dispatch(taskActions.deleteFriday(index));
              break;
            case 'Weekend':
              this.props.dispatch(taskActions.deleteWeekend(index));
              break;
            
        }
    }

    tasksinDay(task, index){
        return (<div  className="tasksomething">
                 <li key={index}>{task}</li>
                 <button type="button" onClick={()=> providerTimelinePage.deleteTask(index)}>Delete</button>
               </div>);
    }

    render(){
        const tasks = this.props.tasks;
        const taskinDay = this.state.tasksinDay;
        return(
            <div>
            <h3 id="headerTimeline">Timeline</h3>
                <div className="sameLine">
                    <div id="buttons" className="buttonclass">
                       
                    </div>
                     <div className="taskPic">
                        <img id="taskpic" src={require('./../../images/emptyProfile.png')} alt="plusSign" />
                    </div>
                </div>

    <div className="timeline">
        <ul className="schedule">
            <li><h5>Monday</h5>
            <DisplaySchedule Tasks={tasks.Monday} /></li>
            <li><h5>Tuesday</h5>
            <DisplaySchedule Tasks={tasks.Tuesday} /></li>
            <li><h5>Wednesday</h5>
            <DisplaySchedule Tasks={tasks.Wednesday} /></li>
            <li><h5>Thursday</h5>
            <DisplaySchedule Tasks={tasks.Thursday} /></li>
            <li><h5>Friday</h5>
            <DisplaySchedule Tasks={tasks.Friday} /></li>
            <li><h5>Weekend</h5>
            <DisplaySchedule Tasks={tasks.Weekend} /></li>
        
         <button id="addTask" onClick={() => this.togglePopUp("Add")}>Add</button>
         <button id="addTask" onClick={() => this.togglePopUp("Delete")}>Delete</button>
        </ul>

        {this.state.toShowAdd ?
            <form className="popupTodo" id="todoList" onSubmit={this.handleSubmit}>
                <h3 id="header">Add to do</h3>
                <span className="close" id="closeLabel" onClick={() => this.togglePopUp("Add")}>&times;</span>
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

        {this.state.toShowDelete ?
            <form className="popupTodo" id="todoList" onSubmit={this.handleDelete}>
                <h3 id="header">Delete to do</h3>
                <span className="close" id="closeLabel" onClick={() => this.togglePopUp("Delete")}>&times;</span>

                <ul className="chooseDate" id="dateofWeek" >
                    <li type="button" id="monday" className="dates" onClick={() => this.chooseDay("Monday")}>Monday</li>
                    <li id="tuesday" className="dates" onClick={() => this.chooseDay("Tuesday")}>Tuesday</li>
                    <li id="wednesday" className="dates" onClick={() => this.chooseDay("Wednesday")}>Wednesday</li>
                    <li id="thursday" className="dates" onClick={() => this.chooseDay("Thursday")}>Thursday</li>
                    <li id="friday" className="dates" onClick={() => this.chooseDay("Friday")}>Friday</li>
                    <li id="weekend" className="dates" onClick={() => this.chooseDay("Weekend")}>Weekend</li>
                </ul>

                <ul className = "chooseTask">
                  {taskinDay.map(this.tasksinDay)}
                </ul>

            </form>
                : null
            }

</div>
</div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        // The targets is followed by the reducer
        tasks: state.tasks

    };
}

export default connect(mapStateToProps)(providerTimelinePage);