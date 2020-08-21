import Typography from "@material-ui/core/Typography";
import withStyles from "./styles";

const SigmaEquipment = ({ classes }) => {
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
                    href="https://elevenfifty.org/"
                    target="_blank"
                    className={classes.link}
                >
                    Sigma Equipment
                </a>
            </Typography>
            <Typography className={classes.date}>May 2019 - Present</Typography>
            <ul className={classes.list}>
                <li className={classes.listItem}>
                    Built features and maintained applications in React, .Net
                    Core, and NodeJS.
                </li>
                <li className={classes.listItem}>
                    Built Stored Procedures and implemented new tables in MSSQL
                    using SQL.
                </li>
                <li className={classes.listItem}>
                    Implementer of Redux in our React applications.
                </li>
                <li className={classes.listItem}>
                    Helped implement new architecture for applications. Switched
                    company from a .Net Core backend to a full NodeJS backend.
                    As well as adding Redux to our React frontend for better
                    state management.
                </li>
            </ul>
        </div>
    );
};

export default withStyles(SigmaEquipment);
