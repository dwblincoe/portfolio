import React from "react";

import Navbar from "../../components/navbar";
import SocialLinks from "../../components/socialLinks";
import Body from "../../components/body";

import { Typography, Grid, Hidden } from "@material-ui/core";

import withStyles from "./styles";

class About extends React.Component {
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
            <Grid container justify="center" className={classes.container}>
              <Grid item xs={11} md={9}>
                <Grid container>
                  <Grid item xs={12} md={8}>
                    <Typography
                      variant="h5"
                      inline={true}
                      className={classes.number}
                    >
                      01.
                    </Typography>
                    <Typography
                      variant="h4"
                      inline={true}
                      className={classes.pageTitle}
                    >
                      About Me
                    </Typography>
                    <Hidden mdUp>
                      <Grid
                        item
                        xs={12}
                        className={[classes.imgContainer, classes.smImg]}
                      >
                        <img
                          src={"/static/professional.jpg"}
                          className={classes.img}
                        />
                      </Grid>
                    </Hidden>
                    <Typography className={classes.para}>
                      My name is Drew Blincoe and I am a Software Developer out
                      of Evansville, IN. I am very passionate about learning and
                      challenging myself which is why I am a Marine Veteran and
                      a Developer. I love to push myself to become better at
                      everything I do, and while I do not think I will ever be,
                      I certainly drive to be the best.
                      <br />
                      I love sports, mainly football (Let's go Baltimore
                      Ravens), as well as hockey (Let's go Blues). I love
                      working out and when summer rolls around I enjoy camping,
                      kayaking, and backpaking. But my favorite hobby is playing
                      video games, I have played ever since I could hold a
                      controller.
                      <br />
                      While all these hobbies are great to have, my number one
                      priority is to my family. I am currently engaged and we
                      have three dogs and one cat: Kylo (a German Shepard), Rey
                      (a Golden Retriever), Chance (a Beagle), and Loki (our
                      cat).
                      <br />
                      Here is a list of my qualifying skills:
                    </Typography>
                    <Grid container>
                      <Grid item xs={6}>
                        <ul className={classes.list}>
                          <li className={classes.listItem}>JavaScript</li>
                          <li className={classes.listItem}>HTML & CSS</li>
                          <li className={classes.listItem}>React</li>
                        </ul>
                      </Grid>
                      <Grid item xs={6}>
                        <ul className={classes.list}>
                          <li className={classes.listItem}>Node.js</li>
                          <li className={classes.listItem}>Express</li>
                          <li className={classes.listItem}>Angular</li>
                        </ul>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Hidden smDown>
                    <Grid item xs={4} className={classes.imgContainer}>
                      <img
                        src={"/static/professional.jpg"}
                        className={classes.img}
                      />
                    </Grid>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Body>
      </div>
    );
  }
}

export default withStyles(About);
