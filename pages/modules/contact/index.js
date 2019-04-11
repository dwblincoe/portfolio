import React from "react";

import Navbar from "../../components/navbar";
import Body from "../../components/body";
import SocialLinks from "../../components/socialLinks";

import { Typography, Grid, TextField, Input, Button } from "@material-ui/core";

import withStyles from "./styles";

class Contact extends React.Component {
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
      <div>
        <Navbar />
        <Body>
          {this.renderSocialLinks()}
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
          >
            <div className={classes.container}>
              <Grid container>
                <Grid item xs={6} className={classes.paraContainer}>
                  <Typography
                    variant="h5"
                    inline={true}
                    className={classes.number}
                  >
                    04.
                  </Typography>
                  <Typography
                    variant="h4"
                    inline={true}
                    className={classes.pageTitle}
                  >
                    Contact Me
                  </Typography>
                </Grid>
              </Grid>
              <form
                action="https://formspree.io/drewblincoe7@gmail.com"
                method="POST"
                className={classes.form}
              >
                <Grid container className={classes.rootInputContainer}>
                  <Grid item xs={6} className={classes.nameInputContainer}>
                    <TextField
                      required
                      type="text"
                      name="name"
                      placeholder="Name"
                      className={classes.input}
                      InputProps={{
                        disableUnderline: true,
                        classes: { root: classes.test }
                      }}
                      color="primary"
                    />
                  </Grid>
                  <Grid item xs={6} className={classes.emailInputContainer}>
                    <TextField
                      required
                      type="email"
                      name="_replyto"
                      placeholder="Email"
                      className={classes.input}
                      InputProps={{
                        disableUnderline: true,
                        classes: { root: classes.test }
                      }}
                      color="primary"
                    />
                  </Grid>
                </Grid>
                <TextField
                  required
                  multiline={true}
                  rows={5}
                  name="message"
                  placeholder="Enter message here..."
                  color="primary"
                  className={classes.rootInputContainer}
                  InputProps={{
                    disableUnderline: true,
                    classes: { root: classes.test }
                  }}
                />
                <Button
                  color="primary"
                  variant="outlined"
                  type="submit"
                  value="Send"
                  classes={{ root: classes.button }}
                >
                  Send
                </Button>
              </form>
            </div>
          </Grid>
        </Body>
      </div>
    );
  }
}

export default withStyles(Contact);
