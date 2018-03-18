import React, { PropTypes } from 'react';
import MenuBar from './common/MenuBar';
import ClientprofilePage from './clientProfile/ClientprofilePage';
import ProviderprofilePage from './providerProfile/ProviderprofilePage';
import ProviderTimelinePage from './providerTimeline/providerTimelinePage';
import ClientTimelinePage from './clientTimeline/clientTimelinePage';
import "../styles/styleClient.css";


class Layout extends React.Component {

  render() {
    let entity = null;
    const isClient = this.props.route.isClient;
    const isProfile = this.props.route.isProfile;
    if(isClient && isProfile ){
      entity = <ClientprofilePage targetName={""}/>;
    }
    else if( isProfile && !isClient ){
      entity = <ProviderprofilePage />;
    }else if( !isProfile && !isClient ){
      entity = <ProviderTimelinePage />;
    }else{
      entity = <ClientTimelinePage />;
    }

    return (
      <div className="clientBody">
        <MenuBar isClient={this.props.route.isClient}/>
        {entity}
      </div>
    );
  }
}

Layout.propTypes = {
  route: PropTypes.object.isRequired
};

export default Layout;