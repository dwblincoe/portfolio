import Typography from "@material-ui/core/Typography";
import withStyles from "./styles";

const ElevenFifty = ({ classes }) => {
  return (
    <div>
      <Typography className={classes.jobTitle} variant="h6" inline={true}>
        Student
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
          Eleven Fifty Academy
        </a>
      </Typography>
      <Typography className={classes.date}>Aug - Nov 2018</Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          Attended the 12-week JavaScript immersive course.
        </li>
        <li className={classes.listItem}>
          With over 500 hours of hands on coding I learned the basics of
          JavaScript, HTML, and CSS.
        </li>
        <li className={classes.listItem}>
          I built two fullstack applications, both using NodeJS on the back-end,
          one using ReactJS on the front-end and Angular on the other.
        </li>
        <li className={classes.listItem}>
          Was awarded the Eleven Fifty Core Value "Leadership" for being voted
          as the leader of my cohort by my peers.
        </li>
      </ul>
    </div>
  );
};

export default withStyles(ElevenFifty);
