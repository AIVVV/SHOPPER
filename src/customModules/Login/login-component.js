import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

      const { classes } = this.props;
    return (
      <Fragment>
        <Paper square={true} className={classes.root}>In Paper</Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Login);
