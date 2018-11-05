import React from 'react';
import * as Pages from '../../../customPages/Pages';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        borderRadius: 0,
    },
    card: {
        maxWidth: 600,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(this);
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <Paper className={classes.card}>
                                <Grid container xs={12} spacing={16}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={16}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    Standard license
                                                </Typography>
                                                <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                                                <Typography color="textSecondary">ID: 1030114</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1">$19.00</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>


                        <Grid item xs={6}>
                            <Paper className={classes.card}>
                                <Grid container xs={12} spacing={16}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={16}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    Standard license
                                                </Typography>
                                                <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                                                <Typography color="textSecondary">ID: 1030114</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1">$19.00</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>

            </div>
        );
    }
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Body);
