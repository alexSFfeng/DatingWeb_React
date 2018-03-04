import React from 'react';
import {Link} from 'react-router';
import AddTarget from './AddTarget';
import Chatbox from '../common/Chatbox';
import "../../styles/styleClient.css";


class ClientprofilePage extends React.Component{
    render(){
        return(
            <div className="targets">
               <h1 className="headerTargets">Target</h1>
               <AddTarget />
               <Chatbox isClient/>
            </div>
        );
    }
}

export default ClientprofilePage;