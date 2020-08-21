import React from "react";

import { Grid, Typography } from "@material-ui/core";

import withStyles from "./styles";

class CollectaverseInfo extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container direction="column">
                <Typography variant="h5" className={classes.title}>
                    Collectaverse.com
                </Typography>
                <Typography className={classes.text}>
                    Collectaverse is a website for that nerdy guy or gal. You
                    can buy, sell, trade, or just simply show off your comics or
                    collectibles. It is a prime collective for all things
                    collectible. We are a go to marketplace and community for
                    serious collectors of all things collectible.
                    <br />
                    <br />
                    Technologies that we use:
                    <Grid container direction="row">
                        <Grid item xs={6}>
                            <ul className={classes.list}>
                                <li>Angular 9</li>
                                <li>NodeJS</li>
                                <li>Express</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <ul className={classes.list}>
                                <li>PostgreSQL</li>
                                <li>Stripe API</li>
                                <li>Google Auth0</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Typography>
            </Grid>
        );
    }
}

export default withStyles(CollectaverseInfo);
