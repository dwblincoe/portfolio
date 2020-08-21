import React from "react";

import { Grid, Typography } from "@material-ui/core";

import withStyles from "./styles";

class AtlasInfo extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container direction="column">
                <Typography variant="h5" className={classes.title}>
                    Atlas.ctrlcenter.com
                </Typography>
                <Typography className={classes.text}>
                    Atlas is Sigma Equipments solution to equipment management.
                    As of now we are in version one which consists of adding
                    equipment into the database. The application uses many cool
                    features like customized themeing based on what application
                    is in use as well as the first implementation of the Sigma
                    Dev Team's new modern tech architecture.
                    <br />
                    <br />
                    Technologies that we use:
                    <Grid container direction="row">
                        <Grid item xs={6}>
                            <ul className={classes.list}>
                                <li>React</li>
                                <li>NodeJS</li>
                                <li>Express</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <ul className={classes.list}>
                                <li>GraphQL</li>
                                <li>SQL</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Typography>
            </Grid>
        );
    }
}

export default withStyles(AtlasInfo);
