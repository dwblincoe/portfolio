import React from "react";

import withStyles from "./styles";
import { Typography, Grid } from "@material-ui/core";

class TorchliteInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column">
        <Typography variant="h5" className={classes.title}>
          Torchlite.com
        </Typography>
        <Typography className={classes.text}>
          Torchlite is a Marketing software company whose purpose is to connect
          marketing teams with the expert help they need. Allowing for the
          capablility of project management and purchasing and selling of
          projects.
          <br />
          <br />
          Technologies that we use:
          <Grid container direction="row">
            <Grid item xs={6}>
              <ul className={classes.list}>
                <li>React</li>
                <li>NodeJS/Express</li>
                <li>SQL</li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <ul className={classes.list}>
                <li>PostgreSQL</li>
                <li>PostgREST</li>
              </ul>
            </Grid>
          </Grid>
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(TorchliteInfo);
