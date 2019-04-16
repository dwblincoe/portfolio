import React from "react";
import classNames from "classnames";

import TorchliteInfo from "./torchlite-info";
import OvaziInfo from "./ovazi-info";

import CloseButton from "../../assets/close";

import { Dialog, Grid, Button } from "@material-ui/core";

import withStyles from "./styles";
class ProjectDialog extends React.Component {
  renderProjectInfo = project => {
    if (project === "torchlite") {
      return <TorchliteInfo />;
    }

    if (project === "ovazi") {
      return <OvaziInfo />;
    }
  };

  render() {
    const { classes, project } = this.props;

    const target =
      project === "torchlite"
        ? "https://www.torchlite.com/"
        : project === "ovazi"
        ? "https://www.ovazi.tips/"
        : null;

    return (
      <Dialog
        fullWidth={true}
        classes={{ paper: classes.root }}
        open={this.props.open}
        onClose={this.props.handleCloseProjectDialog}
      >
        <Grid container direction="row" className={classes.container}>
          <Grid
            item
            xs={12}
            className={classNames({
              [classes.torchliteContainer]: project === "torchlite",
              [classes.ovaziContainer]: project === "ovazi"
            })}
          >
            <CloseButton
              className={classes.closeButton}
              onClick={this.props.handleCloseProjectDialog}
            />
          </Grid>
          <Grid item xs={12} className={classes.infoContainer}>
            {this.renderProjectInfo(project)}
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <Button variant="outlined" color="primary">
              <a href={target} target="_blank" className={classes.buttonText}>
                Visit Site
              </a>
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    );
  }
}

export default withStyles(ProjectDialog);
