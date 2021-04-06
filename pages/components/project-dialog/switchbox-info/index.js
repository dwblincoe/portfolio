import React from "react";

import { Grid, Typography } from "@material-ui/core";

import withStyles from "./styles";

class SwitchboxInfo extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container direction="column">
                <Typography variant="h5" className={classes.title}>
                    Switchboxinc.com
                </Typography>
                <Typography className={classes.text}>
                    Switchbox Inc. is a tech consulting company based out of
                    Columbus, OH. I am a fullstack Software Developer utilizing
                    React and .Net to build scalable cutting edge software for
                    many clients.
                    <br />
                    <br />
                    Technologies that we use:
                    <Grid container direction="row">
                        <Grid item xs={6}>
                            <ul className={classes.list}>
                                <li>React</li>
                                <li>Typescript</li>
                                <li>Ant Deisgn</li>
                                <li>.Net</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Typography>
            </Grid>
        );
    }
}

export default withStyles(SwitchboxInfo);
