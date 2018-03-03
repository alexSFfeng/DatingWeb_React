import React from 'react';
import { Link } from 'react-router';

// service descriptions
const ServiceInfo = () => {
    return(
        <div id="service" className="bigDiv">

        <div className="sectionContainer">
          <div className="divWrapper">
            <h1 className="descriptionService">Our service 🤖:</h1>
    
            <br />
    
            <dl className="ads">
              <dt>Streamline Workflow</dt>
              <dd>------- well-tailored timeline to get your most wanted romantice love story</dd>
              <dt>Multithreading Process</dt>
              <dd>------- optimized efficiency and multitasking capabilities for maximizing your chances</dd>
              <dt>Holistic Calculations</dt>
              <dd>------- thoroughly calculated love advising based on your target's personality and preferences</dd>
            </dl>
          </div>
        </div>
      </div>
    );
};

export default ServiceInfo;