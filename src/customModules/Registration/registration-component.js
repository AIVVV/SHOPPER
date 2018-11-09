import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const flexProps = {
  directionRow: 'row',
  directionColumn: 'column',
  justify: 'center',
  justifyStart: 'flex-start',
  alignItems: 'center',
  alignItemsStart: 'flex-start'
};

const buttonProps = {
  variant: 'contained',
  size: 'large',
  color: 'primary'
};

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      directionRow,
      directionColumn,
      justify,
      justifyStart,
      alignItems,
      alignItemsStart
    } = flexProps;
    const { variant, size, color } = buttonProps;

    return (
      <Fragment>
        <Grid
          container
          className="registrationContainer"
          direction={directionRow}
          alignItems={alignItems}
        >
          <Grid item lg={2} md={2} xs={1} />
          <Grid item lg={8} md={8} xs={10}>
            <Grid
              container
              className="container"
              direction={directionRow}
              alignItems={alignItemsStart}
              justify={justify}
            >
              <Grid md={5} xs={12} item className="containerItem">
                <Paper className="userContainer" square elevation={4}>
                  <Typography className="mBottom15" variant="h5" align="center">
                    Sing up as a User
                  </Typography>
                  <form action="#" className="form singUpUserForm">
                    <TextField
                      id="username"
                      className="textField"
                      label="User Name"
                      placeholder="Enter User Name"
                      margin="normal"
                    />
                    <br />
                    <TextField
                      id="email"
                      className="textField"
                      label="Email"
                      placeholder="Enter E-mail"
                      margin="normal"
                    />
                    <br />
                    <TextField
                      id="password"
                      className="textField"
                      label="Password"
                      placeholder="Enter Password"
                      margin="normal"
                    />
                    <br />
                    <TextField
                      id="confirmPassword"
                      className="textField mBottom20"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      margin="normal"
                    />
                    <br />
                    <Button
                      variant={variant}
                      size={size}
                      color={color}
                      className="button mBottom20"
                    >
                      Create Account
                    </Button>
                    <Button
                      variant={variant}
                      size={size}
                      color={color}
                      className="button mBottom10"
                    >
                      Register with Google
                    </Button>
                    <Button
                      variant={variant}
                      size={size}
                      color={color}
                      className="button"
                    >
                      Register with Facebook
                    </Button>
                  </form>
                </Paper>
              </Grid>
              <Grid md={1} xs={0} />
              <Grid md={5} xs={12} item className="containerItem">
                <Paper className="partnerContainer" square elevation={4}>
                  <Typography className="mBottom15" variant="h5" align="center">
                    Sing up as Shoper with us
                  </Typography>
                  <form action="#" className="form singUpPartnerForm">
                    <TextField
                      id="partnername"
                      className="textField"
                      label="Partner/Shop Name"
                      placeholder="Enter Partner/Shop Name"
                      margin="normal"
                    />
                    <br />
                    <TextField
                      id="email"
                      className="textField"
                      label="Email"
                      placeholder="Enter E-mail"
                      margin="normal"
                    />
                    <br />
                    <TextField
                      id="password"
                      className="textField"
                      label="Password"
                      placeholder="Enter Password"
                      margin="normal"
                    />
                    <br />
                    <TextField
                      id="confirmPassword"
                      className="textField"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      margin="normal"
                    />
                    <br />
                    <TextField
                      multiline
                      rowsMax="3"
                      rows="3"
                      id="description"
                      className="textField mBottom20"
                      label="Short Description"
                      placeholder="Enter Short Description"
                      margin="normal"
                    />
                    <Button
                      variant={variant}
                      size={size}
                      color={color}
                      className="button"
                    >
                      Submit
                    </Button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2} md={2} xs={1} />
        </Grid>
      </Fragment>
    );
  }
}

export default Registration;
