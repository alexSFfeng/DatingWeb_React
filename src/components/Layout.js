import React, { PropTypes } from 'react';
import MenuBar from './common/MenuBar';
import ClientprofilePage from './clientProfile/ClientprofilePage';
import ProviderprofilePage from './providerProfile/ProviderprofilePage';
import "../styles/styleClient.css";


class Layout extends React.Component {

  render() {
    let entity = null;
    console.log(this.props);
    if(this.props.route.isClient){
      entity = <ClientprofilePage />;
    }
    else{
      entity = <ProviderprofilePage />;
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