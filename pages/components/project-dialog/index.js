import React from "react";
import classNames from "classnames";

import TorchliteInfo from "./torchlite-info";
import OvaziInfo from "./ovazi-info";
import CollectaverseInfo from "./collectaverse-info";
import AtlasInfo from "./atlas-info";
import MaryGibsonPhotographyInfo from './marygibsonphotography-info';
import SwitchboxInfo from "./switchbox-info";

import CloseButton from "../../assets/close";

import { Dialog, Grid, Button } from "@material-ui/core";

import withStyles from "./styles";
class ProjectDialog extends React.Component {
    renderProjectInfo = (project) => {
        if (project === "torchlite") {
            return <TorchliteInfo />;
        }

        if (project === "ovazi") {
            return <OvaziInfo />;
        }

        if (project === "collectaverse") {
            return <CollectaverseInfo />;
        }

        if (project === "atlas") {
            return <AtlasInfo />;
        }

        if(project === 'mary-gibson-photography'){
            return <MaryGibsonPhotographyInfo/>
        }

        if(project === "switchbox"){
            return <SwitchboxInfo/>
        }
    };

    render() {
        const { classes, project } = this.props;

        const target =
            project === "torchlite"
                ? "https://www.torchlite.com/"
                : project === "ovazi"
                ? "https://www.ovazi.tips/"
                : project === "collectaverse"
                ? "https://www.collectaverse.com/"
                : project === 'mary-gibson-photography' 
                ? "http://www.marygibsonphotography.net" 
                : project === 'switchbox'
                ? "https://www.switchboxinc.com/"
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
                            [classes.torchliteContainer]:
                                project === "torchlite",
                            [classes.ovaziContainer]: project === "ovazi",
                            [classes.collectaverseContainer]:
                                project === "collectaverse",
                            [classes.atlasContainer]: project === "atlas",
                            [classes.mgpContainer]: project === "mary-gibson-photography",
                            [classes.switchboxContainer]: project === "switchbox"
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
                    {target && (
                        <Grid item xs={12} className={classes.buttonContainer}>
                            <Button variant="outlined" color="primary">
                                <a
                                    href={target}
                                    target="_blank"
                                    className={classes.buttonText}
                                >
                                    Visit Site
                                </a>
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </Dialog>
        );
    }
}

export default withStyles(ProjectDialog);
