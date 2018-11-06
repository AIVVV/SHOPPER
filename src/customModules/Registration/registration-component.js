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
    alignItems: 'center'
};

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { directionRow, directionColumn, justify, justifyStart, alignItems } = flexProps;
        return (
            <Fragment>
                <Grid container className="registrationContainer">
                    <Grid item lg={3} md={2} xs={1} />
                    <Grid item lg={6} md={8} xs={10}>
                    </Grid>
                    <Grid item lg={3} md={2} xs={1} />
                </Grid>
            </Fragment>
        );
    }
}

export default Registration;
