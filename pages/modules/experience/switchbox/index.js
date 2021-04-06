import Typography from "@material-ui/core/Typography";
import withStyles from "./styles";

const Switchbox = ({ classes }) => {
    return (
        <div>
            <Typography className={classes.jobTitle} variant="h6" inline={true}>
                Fullstack Software Developer
            </Typography>
            <Typography variant="h6" inline={true} color="primary">
                @
            </Typography>
            <Typography variant="h6" inline={true}>
                <a
                    href="https://switchboxinc.com/"
                    target="_blank"
                    className={classes.link}
                >
                    Switchbox Inc.
                </a>
            </Typography>
            <Typography className={classes.date}>Oct 2020 - Present</Typography>
            <ul className={classes.list}>
                <li className={classes.listItem}>
                    Built features and maintained applications in React and
                    .Net.
                </li>
                <li className={classes.listItem}>
                    Used Redux, Ant Design, and Typescript alongside React to
                    build scalable frontend applications.
                </li>
                <li className={classes.listItem}>
                    Helped create and maintain scalable, cutting edge software
                    that gave clients peace of mind.
                </li>
            </ul>
        </div>
    );
};

export default withStyles(Switchbox);
