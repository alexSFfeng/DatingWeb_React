import React, {PropTypes} from 'react';

class DisplayTask extends React.Component{

    render(){
        return(
            <li className="task">{this.props.task}</li>
        );
    }
}

DisplayTask.propTypes={
    task: PropTypes.string.isRequired
};

export default DisplayTask;