import React from "react";
import classNames from "classnames";

import Navbar from "../../components/navbar";
import Body from "../../components/body";
import SocialLinks from "../../components/socialLinks";
import Torchlite from "./torchlite";
import ElevenFifty from "./eleven-fifty";
import Ovazi from "./ovazi";

import { Grid, Typography, List, ListItem } from "@material-ui/core";

import withStyles from "./styles";

class Experience extends React.Component {
  state = {
    selectedIndex: 0
  };

  renderSocialLinks = () => {
    const { classes } = this.props;
    return (
      <div className={classes.socialLinkContainer}>
        <SocialLinks />
      </div>
    );
  };

  renderExperienceSummary = () => {
    const { selectedIndex } = this.state;

    if (selectedIndex === 0) {
      return <ElevenFifty />;
    }

    if (selectedIndex === 1) {
      return <Torchlite />;
    }

    if (selectedIndex === 2) {
      return <Ovazi />;
    }
  };

  handleChangeSelected = (event, index) => {
    this.setState({
      selectedIndex: index
    });
  };

  render() {
    const { classes } = this.props;
    const { selectedIndex } = this.state;
    return (
      <div>
        <Navbar />
        <Body>
          {this.renderSocialLinks()}
          <Grid container justify="center" alignContent="center">
            <div className={classes.container}>
              <Typography variant="h5" inline={true} className={classes.number}>
                02.
              </Typography>
              <Typography
                variant="h4"
                inline={true}
                className={classes.pageTitle}
              >
                Experience
              </Typography>
              <Grid container className={classes.experienceContainer}>
                <Grid item xs={3}>
                  <Typography
                    className={classNames({
                      [classes.text]: true,
                      [classes.selected]: selectedIndex === 0
                    })}
                    onClick={event => this.handleChangeSelected(event, 0)}
                  >
                    Eleven Fifty Academy
                  </Typography>
                  <Typography
                    className={classNames({
                      [classes.text]: true,
                      [classes.selected]: selectedIndex === 1
                    })}
                    onClick={event => this.handleChangeSelected(event, 1)}
                  >
                    Torchlite
                  </Typography>
                  <Typography
                    className={classNames({
                      [classes.text]: true,
                      [classes.selected]: selectedIndex === 2
                    })}
                    onClick={event => this.handleChangeSelected(event, 2)}
                  >
                    Ovazi
                  </Typography>
                </Grid>
                <Grid item xs={9} className={classes.summaryContainer}>
                  {this.renderExperienceSummary()}
                </Grid>
              </Grid>
              <Grid container />
            </div>
          </Grid>
        </Body>
      </div>
    );
  }
}

export default withStyles(Experience);
