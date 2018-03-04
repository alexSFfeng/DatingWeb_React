import React, {PropTypes} from 'react';
import MenueBar from './share/MenuBar';

class Layout extends React.Component{
    render() {
        //const isClient = this.props.isClient;

        return(
            <div className="container-fluid">
              <MenueBar />
              {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.object.isRequired
    //isClient: PropTypes.boolean.isRequired
};

export default Layout;