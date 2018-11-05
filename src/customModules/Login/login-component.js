import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100vh'
    },

    container: {
        width: '100%',
        height: '100%'
    },

    item: {
        width: '100%'
    },

    leftMargin: {
        marginLeft: 10
    },

    rightMargin: {
        marginRight: 10
    },

    paper: {
        padding: 25,
        marginBottom: 25
    },

    formElement: {
        marginTop: 0,
        marginBottom: 25,
        width: '100%'
    },

    checkBox: {
        paddingLeft: 0
    }
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkBox: false
        };
    }

    handleCheckBox = name => e => {
        this.setState({
            [name]: e.target.checked
        });
    };

    render() {
        const { classes } = this.props;
        const { directionRow, directionColumn, justify, justifyStart, alignItems } = flexProps;
        const { variant, size, color } = buttonProps;
        return (
            <Fragment>
                <Grid container className={classes.root}>
                    <Grid item lg={1} xs={0} />
                    <Grid item lg={12} xs={12}>
                        <Grid container className={classes.container}>
                            <Grid item className={classes.item}>
                                <Paper className={classes.paper} square elevation={4}>
                                    <Grid container>
                                        <Grid item xs={10}>
                                            <Typography variant="h5">Log In To Explore mode</Typography>
                                            <form action="#">
                                                <TextField
                                                    id="email"
                                                    className={classes.formElement}
                                                    label="E-mail"
                                                    placeholder="Enter your E-mail"
                                                    margin="normal"
                                                />
                                                <br />
                                                <TextField
                                                    id="Password"
                                                    className={[classes.formElement, classes.mBottom].join(' ')}
                                                    label="Password"
                                                    placeholder="Enter your Password"
                                                    margin="normal"
                                                />
                                                <Button variant={variant} size={size} color={color} className={classes.formElement}>
                                                    Login
                                                </Button>
                                            </form>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography>
                                                <Link to="#">Forgot Password?</Link>
                                            </Typography>
                                            <Grid container direction={directionRow} justify={justifyStart} alignItems={alignItems}>
                                                <Grid item>
                                                    <Checkbox
                                                        className={classes.checkBox}
                                                        checked={this.state.checkBox}
                                                        onChange={this.handleCheckBox('checkBox')}
                                                        value="rememberMe"
                                                        color="primary"
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography>Remember Me</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item className={classes.item}>
                                <Paper className={classes.paper} square elevation={4}>
                                    <Grid container direction={directionColumn} justify={justify} alignItems={alignItems}>
                                        <Grid item xs={12}>
                                            <Button variant={variant} size={size} color={color} className={classes.formElement}>
                                                Login with Google
                                            </Button>
                                            <Button variant={variant} size={size} color={color} className={classes.formElement}>
                                                Login with Facebook
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} />
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={1} xs={0} />
                </Grid>
            </Fragment>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
