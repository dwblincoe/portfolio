import React from "react";

import withStyles from "./styles";

class Loading extends React.Component {
  render() {
    const { classes } = this.props;

    if (!this.props.loading) {
      return <React.Fragment />;
    }

    return <div className={classes.loading} />;
  }
}

export default withStyles(Loading);
