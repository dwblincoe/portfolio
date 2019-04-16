import React from "react";

import { Grid, Typography } from "@material-ui/core";

import withStyles from "./styles";

class OvaziInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column">
        <Typography variant="h5" className={classes.title}>
          Ovazi.tips
        </Typography>
        <Typography className={classes.text}>
          Ovazi is a software application that allows for users to locate local
          events near them as well as create local events. The application is
          directed towards musicians and the ability to locate gigs in the
          immediate area as well as allowing the user to accept or give tips to
          an event.
          <br />
          <br />
          Technologies that we use:
          <Grid container direction="row">
            <Grid item xs={6}>
              <ul className={classes.list}>
                <li>React</li>
                <li>Firebase</li>
                <li>Google API</li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <ul className={classes.list}>
                <li>Stripe API</li>
                <li>Geolocation</li>
              </ul>
            </Grid>
          </Grid>
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(OvaziInfo);
