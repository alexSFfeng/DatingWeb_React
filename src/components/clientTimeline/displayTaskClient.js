import React, {PropTypes} from 'react';

class DisplayTaskClient extends React.Component{
    render(){
        const isClicked = this.props.isClicked;
        const className ='task';
        if( isClicked == false){
            const className='task';
        }else{
            const className='taskFinished';
        }

        return(
            className
        );
    }
}

DisplayTaskClient.propTypes={
    isClicked: PropTypes.bool.isRequired
};

export default DisplayTaskClient;