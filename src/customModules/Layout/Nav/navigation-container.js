
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from './navigation-component';

import { RoutingActions } from '../../Common/client-routes';

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

// const mapStateToProps = state => {
//     return {
//
//     };
// };

export default connect(null, mapDispatchToProps)(Navigation);
