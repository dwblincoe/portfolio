import React from "react";
import classNames from "classnames";

import { Grid, Typography, Button, Hidden } from "@material-ui/core";

import withStyles from "./styles";

class Overlay extends React.Component {
    state = {
        hover: false,
        src: "",
        title: "",
        loading: true,
    };

    componentDidMount() {
        const { project } = this.props;
        const title = project.charAt(0).toUpperCase() + project.slice(1);
        this.setState({
            src: `/static/${this.props.project}.png`,
            title,
        });

        return this.setState({
            loading: false,
        });
    }

    handleMouseEnter = () => {
        this.setState({
            hover: true,
        });
    };

    handleMouseLeave = () => {
        this.setState({
            hover: false,
        });
    };

    render() {
        const { classes, project } = this.props;
        const { src, hover, title, loading } = this.state;
        return (
            <Grid item sm={12} md={6} className={classes.outer}>
                {loading ? null : <img src={src} className={classes.img} />}
                <div
                    className={classNames({
                        [classes.overlay]: true,
                        [classes.visible]: hover,
                    })}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <Typography variant="h4" className={classes.title}>
                        {title}
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.props.handleOpenProjectDialog}
                        className={classes.button}
                        name={project}
                    >
                        More Info
                    </Button>
                </div>
                <Hidden mdUp>
                    <div
                        className={classNames({
                            [classes.overlay]: true,
                            [classes.visible]: true,
                        })}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    >
                        <Typography variant="h4" className={classes.title}>
                            {title}
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={this.props.handleOpenProjectDialog}
                            className={classes.button}
                            name={project}
                        >
                            More Info
                        </Button>
                    </div>
                </Hidden>
            </Grid>
        );
    }
}

export default withStyles(Overlay);
