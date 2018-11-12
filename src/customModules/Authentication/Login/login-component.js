import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { Paper, Grid, Typography, Checkbox, Button } from '@material-ui/core';

import Form from '../../Common/components/Form';
import * as Settings from '../../Common/form-settings';

const flexProps = {
    directionRow: 'row',
    directionColumn: 'column',
    justify: 'center',
    justifyStart: 'flex-start',
    alignItems: 'center'
};

const buttonProps = {
    variant: 'contained',
    size: 'large',
    color: 'primary'
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkValue: false
        };
    }

    handleCheckBox = name => e => {
        this.setState({
            [name]: e.target.checked
        });
    };

    render() {
        const { directionRow, directionColumn, justify, justifyStart, alignItems } = flexProps;
        const { variant, size, color } = buttonProps;
        return (
            <Fragment>
                <Grid container className="loginContainer">
                    <Grid item lg={4} md={3} xs={1} />
                    <Grid item lg={4} md={6} xs={10}>
                        <Grid container className="container" direction={directionColumn} justify={justify}>
                            <Grid item className="containerItem">
                                <Paper className="paperContainer" square elevation={4}>
                                    <Grid container>
                                        <Grid item md={2} />
                                        <Grid item md={8} xs={12}>
                                            <Typography className="mBottom15" variant="h5" align="center">
                                                Log In
                                            </Typography>
                                            <Form {...Settings.Login} />
                                            <Typography>
                                                <Link to="#">Forgot Password?</Link>
                                            </Typography>
                                            <Grid container direction={directionRow} justify={justifyStart} alignItems={alignItems}>
                                                <Grid item>
                                                    <Checkbox
                                                        className="checkBox"
                                                        checked={this.state.checkValue}
                                                        onChange={this.handleCheckBox('checkValue')}
                                                        value="rememberMe"
                                                        color="primary"
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography>Remember Me</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={2} />
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item className="containerItem">
                                <Paper className="paperContainer" square elevation={4}>
                                    <Grid container direction={directionColumn} justify={justify} alignItems={alignItems}>
                                        <Grid item xs={12}>
                                            <Fragment>
                                                <Button variant={variant} size={size} color={color} className="button">
                                                    Login with Google
                                                </Button>
                                                <Button variant={variant} size={size} color={color} className="button">
                                                    Login with Facebook
                                                </Button>
                                                <Typography>
                                                    Do you have an account? <Link to="#"> Sing up</Link>
                                                </Typography>
                                            </Fragment>
                                        </Grid>
                                        <Grid item xs={12} />
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} md={3} xs={1} />
                </Grid>
            </Fragment>
        );
    }
}

export default Login;
