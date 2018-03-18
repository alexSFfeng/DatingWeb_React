import React, {PropTypes} from 'react';
import DisplayTask from './displayTask';

class DisplaySchedule extends React.Component{

    constructor(props){
        super(props);
        this.state = {Tasks:this.props.Tasks};
    }

    render(){
        const Tasks = this.state.Tasks;
        return(
            <ul className="dailyTasks">

            {
                Tasks.map((task) =>
                    <DisplayTask task={task}/>
                )
            }
            </ul>

        );
    }
}

DisplaySchedule.propTypes={
    Tasks: PropTypes.array.isRequired
};

export default DisplaySchedule;