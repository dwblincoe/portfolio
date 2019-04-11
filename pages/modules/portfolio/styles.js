import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const { colors } = theme.palette;

  return {
    container: {
      width: "75%",
      height: "75%"
    },
    socialLinkContainer: {
      position: "fixed",
      bottom: 0,
      left: 40
    },
    number: {
      color: colors.secondary
    },
    pageTitle: {
      color: colors.white,
      marginLeft: 10
    },
    workContainer: {
      marginTop: 20
    },
    link: {
      textDecoration: "none",
      color: colors.main50,
      "&:hover": {
        color: colors.secondary
      }
    }
  };
});
