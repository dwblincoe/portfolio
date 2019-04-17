import React from "react";

import LinkedIn from "../../assets/linkedin";
import Github from "../../assets/github";
import Twitter from "../../assets/twitter";

import { Grid, Hidden } from "@material-ui/core";

import withStyles from "./styles";

class SocialLinks extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Hidden smDown>
        <Grid container className={classes.container}>
          <div className={classes.socialLinks}>
            <a
              href="https://www.linkedin.com/in/drew-blincoe-007b06b4/"
              target="_blank"
            >
              <LinkedIn className={classes.svgIcon} />
            </a>
            <a href="https://github.com/dwblincoe" target="_blank">
              <Github className={classes.svgIcon} />
            </a>
            <a href="https://twitter.com/BlincoeDrew?lang=en" target="_blank">
              <Twitter className={classes.svgIcon} />
            </a>
          </div>
          <div className={classes.line} />
        </Grid>
      </Hidden>
    );
  }
}

export default withStyles(SocialLinks);
