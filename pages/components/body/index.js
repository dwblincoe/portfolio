import React from "react";
import Grid from "@material-ui/core/Grid";

import withStyles from "./styles";

class Body extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={this.props.spacing || 0}
        className={classes.gridContainer}
      >
        {this.props.children}
      </Grid>
    );
  }
}

export default withStyles(Body);
