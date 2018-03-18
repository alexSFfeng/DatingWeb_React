import React, {PropTypes} from 'react';
import DisplaySchedule from './../providerTimeline/displaySchedule';
import './../../styles/styleTimelineClient.css';
import {connect} from 'react-redux';

class ClientTImelinePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
                    classNameArr:['task','task','task','taskFinished','task','task','task','task','task']};

                    //this.updateTargets = this.updateTargets.bind(this);
    }

    /*handleDBClick(e){
        const classNameArr=this.state.classNameArr;
        classNameArr[e] = 'taskFinished';
        this.setState({classNameArr: classNameArr});
    }
*/
    /*
      <ul className="schedule">
            <li><h5>Monday</h5>
            <ul className="dailyTasks" id="mondayTask">
                <li className={classNameArr[0]} onDoubleClick={()=> this.handleDBClick(0)}>10:30 Catch her at PC Starbucks</li>
                <li className={classNameArr[1]} onDoubleClick={()=> this.handleDBClick(1)}>12:10 Follow her to lunch from her className at CENTER 101</li>
                <li className={classNameArr[2]} onDoubleClick={()=> this.handleDBClick(2)}>20:50 Text her about the homework assignment</li>
            </ul></li>
            <li><h5>Tuesday</h5>
            <ul className="dailyTasks" id="tuesdayTask"></ul></li>
            <li><h5>Wednesday</h5>
            <ul className="dailyTasks" id="wednesdayTask">
                    <li className={classNameArr[3]} onDoubleClick={()=> this.handleDBClick(3)}>10:30 Catch her at PC Starbucks</li>
                    <li className={classNameArr[4]}  onDoubleClick={()=> this.handleDBClick(4)}>11:10 Sit next to her in class</li>
                </ul></li>
            <li><h5>Thursday</h5>
            <ul className="dailyTasks" id="thursdayTask"></ul></li>
            <li><h5>Friday</h5>
                <ul className="dailyTasks" id="fridayTask">
                        <li className={classNameArr[5]}  onDoubleClick={()=> this.handleDBClick(5)}>10:30 Walk your dog in front of her</li>
                        <li className={classNameArr[6]}  onDoubleClick={()=> this.handleDBClick(6)}>11:10 Say hi to her in className but do not sit with her, find a female friend to sit with.</li>
                        <li className={classNameArr[7]}  onDoubleClick={()=> this.handleDBClick(7)}>23:45 Ask her if she want to come to your party tomorrow. If she refuse, say its your birthday party.</li>
                    </ul></li>
            <li><h5>Weekend</h5>
                <ul className="dailyTasks" id = "weekendTask">
                        <li className={classNameArr[8]}  onDoubleClick={()=> this.handleDBClick(8)}>All day Stay with her in the party and have your friends leave you guys alone.</li>
                    </ul></li>
        </ul>

        */

    render(){
        const tasks = this.props.tasks;
        const classNameArr=this.state.classNameArr;
        return(
            <div>
            <h3 id="headerTimeline">Timeline</h3>
    <div className="taskPic">
        <img id="taskpic" src="./../../images/emptyProfile.png" alt="emptyProfile" />
        <select className="targetstoPick">
            <option value="Target1">Target1</option>
            <option value="Target2">Target2</option>
        </select>
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
    </ul>


        
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

export default connect(mapStateToProps)(ClientTImelinePage);