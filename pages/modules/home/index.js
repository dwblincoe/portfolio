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
          <div className={classes.container}>
            <div className={classes.introContainer}>
              <div>
                <Typography className={classes.intro}>
                  Hi, my name is
                </Typography>
              </div>
              <div>
                <Typography className={classes.name}>Drew Blincoe</Typography>
              </div>
              <div>
                <Typography className={classes.title}>
                  I build things with my computer
                </Typography>
              </div>
              <div>
                <Typography className={classes.description}>
                  I am a software developer, based in Evansville, IN. I
                  specialize in building exceptional web applications with
                  effecient code. Currently working at{" "}
                  <a
                    href="https://torchlite.com/"
                    target="_blank"
                    className={classes.link}
                  >
                    Torchlite
                  </a>{" "}
                  as a contracted fullstack developer. Looking for that next
                  opportunity!
                </Typography>
              </div>
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
            </div>
          </div>
        </Body>
      </Grid>
    );
  }
}

export default withStyles(Home);
