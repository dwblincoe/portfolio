import Typography from "@material-ui/core/Typography";
import withStyles from "./styles";

const Torchlite = ({ classes }) => {
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
          href="https://torchlite.com/"
          target="_blank"
          className={classes.link}
        >
          Torchlite
        </a>
      </Typography>
      <Typography className={classes.date}>Jan 2019 - Present</Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          Maintain and build new features for Torchlite's website and software.
        </li>
        <li className={classes.listItem}>
          The application is built using a custom made API using Nodejs as well
          as PostgREST. The front end uses React. The database is PostgreSQL and
          we build out our own tables and permissions using SQL.
        </li>
        <li className={classes.listItem}>
          With only a handful of Devlopers, we all dealt with the full
          application. So I hand my hands in all parts of the application,
          learning SQL as I went.
        </li>
      </ul>
    </div>
  );
};

export default withStyles(Torchlite);
