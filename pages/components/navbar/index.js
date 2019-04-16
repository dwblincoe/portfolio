import React from "react";
import Link from "next/link";

import Logo from "../../assets/dblogo";

import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import withStyles from "./styles";

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.logoContainer}>
          <Link href="/">
            <Logo className={classes.logo} />
          </Link>
        </Grid>
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
      </Grid>
    );
  }
}

export default withStyles(Navbar);
