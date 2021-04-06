import React from "react";

import Navbar from "../../components/navbar";
import SocialLinks from "../../components/socialLinks";
import Body from "../../components/body";
import Overlay from "../../components/overlay";
import ProjectDialog from "../../components/project-dialog";

import { Grid, Typography } from "@material-ui/core/";

import withStyles from "./styles";

class Portfolio extends React.Component {
    state = {
        openProjectDialog: false,
        project: null,
    };

    renderSocialLinks = () => {
        const { classes } = this.props;
        return (
            <div className={classes.socialLinkContainer}>
                <SocialLinks />
            </div>
        );
    };

    renderSite = (site) => {
        return (
            <Overlay
                project={site}
                handleOpenProjectDialog={this.handleOpenProjectDialog}
            />
        );
    };

    renderProjectDialog = () => {
        const { openProjectDialog, project } = this.state;
        return (
            <ProjectDialog
                open={openProjectDialog}
                project={project}
                handleCloseProjectDialog={this.handleCloseProjectDialog}
            />
        );
    };

    handleOpenProjectDialog = (evt) => {
        this.setState({
            project: evt.currentTarget.name,
            openProjectDialog: true,
        });
    };

    handleCloseProjectDialog = () => {
        this.setState({
            project: null,
            openProjectDialog: false,
        });
    };

    render() {
        const { classes } = this.props;
        const sites = ["switchbox", "mary-gibson-photography", "collectaverse", "atlas", "torchlite", "ovazi"];
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
                                <Grid
                                    item
                                    xs={6}
                                    className={classes.paraContainer}
                                >
                                    <Typography
                                        variant="h5"
                                        inline={true}
                                        className={classes.number}
                                    >
                                        03.
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        inline={true}
                                        className={classes.pageTitle}
                                    >
                                        Portfolio
                                    </Typography>
                                </Grid>
                                <Grid
                                    container
                                    wrap
                                    className={classes.workContainer}
                                >
                                    {sites.map((site) => this.renderSite(site))}
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    {this.renderProjectDialog()}
                </Body>
            </div>
        );
    }
}

export default withStyles(Portfolio);
