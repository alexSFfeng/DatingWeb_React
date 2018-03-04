import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import "../../styles/styleClient.css";

class MenuBar extends React.Component {

  constructor(props) {
    super(props);
    // set initial state to be client page
    this.state = { isClient: this.props.isClient };
  }


  render() {

    let ProfileNaming = null;
    let ProfileLink = null;
    let TimelineLink = null;
    let isClient = this.state.isClient;
    if (isClient == true) {
      ProfileNaming = "Profile";
      ProfileLink = "/clientProfile";
      TimelineLink = "/clientSchedule";
    } else {
      ProfileNaming = "Task Subjects";
      ProfileLink = "/providerProfile";
      TimelineLink = "/providerSchedule";
    }

    return (
      <nav className="clientMenu">
        <div className="menuElements">
          <IndexLink to="/" className="sectionName">HomePage</IndexLink>
          <Link to={ProfileLink} className="sectionName">{ProfileNaming}</Link>
          <Link to={TimelineLink} className="sectionName">Schedule</Link>
        </div>
      </nav>
    );
  }
}

MenuBar.propTypes = {
  isClient: PropTypes.bool.isRequired
};

export default MenuBar;