import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './navbar-component';

import { RoutingActions } from '../Common/client-routes';

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            toHome: RoutingActions.toHome,
            toAboutUs: RoutingActions.toAboutUs,
            toSupport: RoutingActions.toSupport,
            toHelp: RoutingActions.toHelp,
            toContactUs: RoutingActions.toContactUs
        }, dispatch
    );

export default connect(null, mapDispatchToProps)(NavBar);