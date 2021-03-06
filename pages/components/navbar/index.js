import React from "react";
import Link from "next/link";

import Logo from "../../assets/dblogo";
import CloseButton from "../../assets/close";

import {
  Grid,
  Typography,
  Hidden,
  Drawer,
  List,
  ListItem,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import withStyles from "./styles";

class Navbar extends React.Component {
  state = {
    right: false
  };
  toggleDrawer = open => {
    this.setState({
      right: open
    });
  };
  renderSmallNavbar = () => {
    const { classes } = this.props;
    return (
      <Grid item xs={6} className={classes.siteLinks}>
        <MenuIcon
          className={classes.dropdown}
          onClick={() => this.toggleDrawer(true)}
        />
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={() => this.toggleDrawer(false)}
          classes={{ paper: classes.drawerContainer }}
        >
          <Grid container justify="flex-end">
            <CloseButton
              className={classes.closeButton}
              onClick={() => this.toggleDrawer(false)}
            />
          </Grid>

          <List className={classes.listContainer}>
            <Link href="/about">
              <ListItem className={classes.listItemContainer}>
                <Typography className={classes.number}>01.</Typography>
                <Typography className={classes.link}>about</Typography>
              </ListItem>
            </Link>
            <Link href="/experience">
              <ListItem className={classes.listItemContainer}>
                <Typography className={classes.number}>02.</Typography>
                <Typography className={classes.link}>experience</Typography>
              </ListItem>
            </Link>
            <Link href="/portfolio">
              <ListItem className={classes.listItemContainer}>
                <Typography className={classes.number}>03.</Typography>
                <Typography className={classes.link}>portfolio</Typography>
              </ListItem>
            </Link>
            <Link href="/contact" className={classes.link}>
              <ListItem className={classes.listItemContainer}>
                <Typography className={classes.number}>04.</Typography>
                <Typography className={classes.link}>contact</Typography>
              </ListItem>
            </Link>
            <ListItem className={classes.listItemContainer}>
              <Button
                color="primary"
                variant="outlined"
                className={classes.button}
              >
                <a
                  href="https://docs.google.com/document/d/11kVodIaAo3ObM_hWQN4GBPHwISr1q3fFOvZVeKDlZZg/edit?usp=sharing"
                  target="_blank"
                  className={classes.buttonLink}
                >
                  Resume
                </a>
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Grid>
    );
  };

  renderBigNavbar = () => {
    const { classes } = this.props;
    return (
      <Grid item xs={6} className={classes.siteLinks}>
        <Typography className={classes.number}>01.</Typography>
        <Link href="/about">
          <Typography className={classes.link}>about</Typography>
        </Link>
        <Typography className={classes.number}>02.</Typography>
        <Link href="/experience">
          <Typography className={classes.link}>experience</Typography>
        </Link>
        <Typography className={classes.number}>03.</Typography>
        <Link href="/portfolio">
          <Typography className={classes.link}>portfolio</Typography>
        </Link>
        <Typography className={classes.number}>04.</Typography>
        <Link href="/contact" className={classes.link}>
          <Typography className={classes.link}>contact</Typography>
        </Link>
        <Button color="primary" variant="outlined" className={classes.button}>
          <a
            href="https://docs.google.com/document/d/11kVodIaAo3ObM_hWQN4GBPHwISr1q3fFOvZVeKDlZZg/edit?usp=sharing"
            target="_blank"
            className={classes.buttonLink}
          >
            Resume
          </a>
        </Button>
      </Grid>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.logoContainer}>
          <Link href="/">
            <Logo className={classes.logo} />
          </Link>
        </Grid>
        <Hidden smDown>{this.renderBigNavbar()}</Hidden>
        <Hidden mdUp>{this.renderSmallNavbar()}</Hidden>
      </Grid>
    );
  }
}

export default withStyles(Navbar);
