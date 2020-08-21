import React from "react";
import classNames from "classnames";

import Navbar from "../../components/navbar";
import Body from "../../components/body";
import SocialLinks from "../../components/socialLinks";
import Torchlite from "./torchlite";
import ElevenFifty from "./eleven-fifty";
import Ovazi from "./ovazi";
import SigmaEquipment from "./sigma-equipment";

import { Grid, Typography, Hidden } from "@material-ui/core";

import withStyles from "./styles";

class Experience extends React.Component {
    state = {
        selectedIndex: 3,
    };

    renderSocialLinks = () => {
        const { classes } = this.props;
        return (
            <div className={classes.socialLinkContainer}>
                <SocialLinks />
            </div>
        );
    };

    renderBigNav = () => {
        const { selectedIndex } = this.state;
        const { classes } = this.props;
        return (
            <Grid item xs={3}>
                <Typography
                    className={classNames({
                        [classes.text]: true,
                        [classes.selected]: selectedIndex === 0,
                    })}
                    onClick={(event) => this.handleChangeSelected(event, 0)}
                >
                    Eleven Fifty Academy
                </Typography>
                <Typography
                    className={classNames({
                        [classes.text]: true,
                        [classes.selected]: selectedIndex === 1,
                    })}
                    onClick={(event) => this.handleChangeSelected(event, 1)}
                >
                    Torchlite
                </Typography>
                <Typography
                    className={classNames({
                        [classes.text]: true,
                        [classes.selected]: selectedIndex === 2,
                    })}
                    onClick={(event) => this.handleChangeSelected(event, 2)}
                >
                    Ovazi
                </Typography>
                <Typography
                    className={classNames({
                        [classes.text]: true,
                        [classes.selected]: selectedIndex === 3,
                    })}
                    onClick={(event) => this.handleChangeSelected(event, 3)}
                >
                    Sigma Equipment
                </Typography>
            </Grid>
        );
    };

    renderSmallNav = () => {
        const { selectedIndex } = this.state;
        const { classes } = this.props;
        return (
            <Grid item xs={12} className={classes.smNavContainer}>
                <Grid container direction="row">
                    <Grid item xs={6} sm={4}>
                        <Typography
                            className={classNames({
                                [classes.text2]: true,
                                [classes.selected2]: selectedIndex === 0,
                                [classes.opposite]: selectedIndex === 1,
                            })}
                            onClick={(event) =>
                                this.handleChangeSelected(event, 0)
                            }
                        >
                            Eleven Fifty Academy
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                        <Typography
                            className={classNames({
                                [classes.text2]: true,
                                [classes.selected2]: selectedIndex === 1,
                            })}
                            onClick={(event) =>
                                this.handleChangeSelected(event, 1)
                            }
                        >
                            Torchlite
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                        <Typography
                            className={classNames({
                                [classes.text2]: true,
                                [classes.selected2]: selectedIndex === 2,
                            })}
                            onClick={(event) =>
                                this.handleChangeSelected(event, 2)
                            }
                        >
                            Ovazi
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                        <Typography
                            className={classNames({
                                [classes.text2]: true,
                                [classes.selected2]: selectedIndex === 3,
                            })}
                            onClick={(event) =>
                                this.handleChangeSelected(event, 3)
                            }
                        >
                            Sigma Equipment
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
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

        if (selectedIndex === 3) {
            return <SigmaEquipment />;
        }
    };

    handleChangeSelected = (event, index) => {
        this.setState({
            selectedIndex: index,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Navbar />
                <Body>
                    {this.renderSocialLinks()}
                    <Grid container justify="center" alignContent="center">
                        <Grid item xs={11} md={9}>
                            <Typography
                                variant="h5"
                                inline={true}
                                className={classes.number}
                            >
                                02.
                            </Typography>
                            <Typography
                                variant="h4"
                                inline={true}
                                className={classes.pageTitle}
                            >
                                Experience
                            </Typography>
                            <Grid
                                container
                                className={classes.experienceContainer}
                            >
                                <Hidden smDown>{this.renderBigNav()}</Hidden>
                                <Hidden mdUp>{this.renderSmallNav()}</Hidden>
                                <Grid
                                    item
                                    xs={12}
                                    md={9}
                                    className={classes.summaryContainer}
                                >
                                    {this.renderExperienceSummary()}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Body>
            </div>
        );
    }
}

export default withStyles(Experience);
