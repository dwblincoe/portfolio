import React from "react";
import Link from "next/link";

import Navbar from "../../components/navbar";
import Body from "../../components/body";
import SocialLinks from "../../components/socialLinks";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import withStyles from "./styles";

class Home extends React.Component {
  renderSocialLinks = () => {
    const { classes } = this.props;
    return (
      <div className={classes.socialLinkContainer}>
        <SocialLinks />
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Navbar />
        <Body>
          {this.renderSocialLinks()}
          <Grid container className={classes.container}>
            <div className={classes.descriptionContainer}>
              <Grid item xs={11} md={9} className={classes.introContainer}>
                <Typography className={classes.intro}>
                  Hi, my name is
                </Typography>
                <Typography className={classes.name}>Drew Blincoe</Typography>
                <Typography className={classes.title}>
                  I build things with my computer
                </Typography>
                <Grid item xs={11} md={6}>
                  <Typography className={classes.description}>
                    I am a software developer, based out of Evansville, IN. I
                    specialize in building exceptional web applications with
                    effecient code. Currently working at{" "}
                    <a
                      href="https://switchboxinc.com/"
                      target="_blank"
                      className={classes.link}
                    >
                      Switchbox Inc.
                    </a>{" "}
                    as a fullstack developer.
                  </Typography>
                  <Link href="/contact">
                    <Button
                      color="primary"
                      variant="outlined"
                      size="large"
                      className={classes.button}
                    >
                      Let's Talk
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Body>
      </Grid>
    );
  }
}

export default withStyles(Home);
