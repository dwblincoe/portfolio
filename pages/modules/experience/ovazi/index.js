import Typography from "@material-ui/core/Typography";
import withStyles from "./styles";

const Ovazi = ({ classes }) => {
  return (
    <div>
      <Typography className={classes.jobTitle} variant="h6" inline={true}>
        Software Devloper
      </Typography>
      <Typography variant="h6" inline={true} color="primary">
        @
      </Typography>
      <Typography variant="h6" inline={true}>
        <a
          href="https://www.ovazi.tips/"
          target="_blank"
          className={classes.link}
        >
          Ovazi
        </a>
      </Typography>
      <Typography className={classes.date}>Nov 2018 - Present</Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          Built an application, with one other developer, from the ground up.
        </li>
        <li className={classes.listItem}>
          The application uses Firebase for the backend and database. On the
          front-end we utilized React with NextJS.
        </li>
        <li>
          I was in charge of a lot of the front end work and hooking up Google
          Maps API and geolocation.
        </li>
      </ul>
    </div>
  );
};

export default withStyles(Ovazi);
