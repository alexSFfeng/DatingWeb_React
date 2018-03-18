import React, {PropTypes} from 'react';

class DisplayTask extends React.Component{

    constructor(props){
        super(props);
        this.state = {Tasks:this.props.Tasks};
        this.handleDBClick = this.handleDBClick.bind(this);
    }

    handleDBClick(event){
        console.log(event.target.className);
        event.target.className = "taskFinished";
    }

    render(){
        return(
            <li className="task" onDoubleClick={this.handleDBClick}>{this.props.task}</li>
        );
    }
}

DisplayTask.propTypes={
    task: PropTypes.string.isRequired
};

export default DisplayTask;