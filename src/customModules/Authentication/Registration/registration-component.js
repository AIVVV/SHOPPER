import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Form from '../../Common/components/Form';
import * as Settings from '../../Common/form-settings';

const flexProps = {
  directionRow: 'row',
  justify: 'center',
  alignItems: 'center',
};

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { directionRow, justify, alignItems } = flexProps;
    return (
      <Fragment>
        <Grid
          container
          className="registrationContainer"
          direction={directionRow}
        >
          <Grid item lg={2} xs={1} />
          <Grid item lg={8} xs={10}>
            <Grid
              container
              className="container"
              direction={directionRow}
              alignItems={alignItems}
              justify={justify}
            >
              <Grid item md={5} xs={12} item className="containerItem">
                <Paper className="userContainer" square elevation={4}>
                  <Typography className="mBottom15" variant="h5" align="center">
                    Sing up as a User
                  </Typography>
                  <Form {...Settings.User} />
                </Paper>
              </Grid>
              <Grid item md={1}/>
              <Grid item md={5} xs={12} item className="containerItem">
                <Paper className="partnerContainer" square elevation={4}>
                  <Typography className="mBottom15" variant="h5" align="center">
                    Sing up as Shoper with us
                  </Typography>
                  <Form {...Settings.Shoper}/>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2} xs={1} />
        </Grid>
      </Fragment>
    );
  }
}

export default Registration;
