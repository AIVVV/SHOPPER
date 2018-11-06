import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
                    <Grid item lg={3} md={2} xs={1} />
                    <Grid item lg={6} md={8} xs={10}>
                        <Grid container className="container" direction={directionColumn} justify={justify}>
                            <Grid item className="containerItem">
                                <Paper className="paperContainer" square elevation={4}>
                                    <Grid container>
                                        <Grid item md={2} xs={0}/>
                                        <Grid item md={8} xs={12}>
                                            <Typography className="mBottom15" variant="h5">Log In To Explore mode</Typography>
                                            <form action="#" className="loginForm">
                                                <TextField
                                                    id="email"
                                                    className="textField"
                                                    label="E-mail"
                                                    placeholder="Enter your E-mail"
                                                    margin="normal"
                                                />
                                                <br />
                                                <TextField
                                                    id="Password"
                                                    className="textField"
                                                    label="Password"
                                                    placeholder="Enter your Password"
                                                    margin="normal"
                                                />
                                                <Button variant={variant} size={size} color={color} className="button">
                                                    Login
                                                </Button>
                                            </form>
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
                                        <Grid item md={2} xs={0}/>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item className="containerItem">
                                <Paper className="paperContainer" square elevation={4}>
                                    <Grid container direction={directionColumn} justify={justify} alignItems={alignItems}>
                                        <Grid item xs={12}>
                                            <Button variant={variant} size={size} color={color} className="button">
                                                Login with Google
                                            </Button>
                                            <Button variant={variant} size={size} color={color} className="button">
                                                Login with Facebook
                                            </Button>
                                            <Typography>
                                                Do you have an account? <Link to="#"> Sing up</Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} />
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} md={2} xs={1} />
                </Grid>
            </Fragment>
        );
    }
}

export default Login;


