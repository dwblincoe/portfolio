import React from "react";

import { Grid, Typography } from "@material-ui/core";

import withStyles from "./styles";

class MaryGibsonPhotographyInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column">
        <Typography variant="h5" className={classes.title}>
          Marygibsonphotography.net
        </Typography>
        <Typography className={classes.text}>
          Mary Gibson Photography is a static frontend website that I designed and built for a local photographer. Logo design was also done by myself.
          <br />
          <br />
          Technologies that I used:
          <Grid container direction="row">
            <Grid item xs={6}>
              <ul className={classes.list}>
                <li>React</li>
                <li>Material UI</li>
              </ul>
            </Grid>
          </Grid>
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(MaryGibsonPhotographyInfo);