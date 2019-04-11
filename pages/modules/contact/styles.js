import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const { colors } = theme.palette;

  return {
    container: {
      width: "60%",
      height: "60%"
    },
    socialLinkContainer: {
      position: "absolute",
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
    form: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      margin: `30px auto 0 auto`
    },
    rootInputContainer: {
      marginTop: 20
    },
    nameInputContainer: {
      display: "flex",
      justifyContent: "flex-start"
    },
    emailInputContainer: {
      display: "flex",
      justifyContent: "flex-end"
    },
    input: {
      width: "90%"
    },
    test: {
      border: `thin solid ${colors.secondary}`,
      borderRadius: "7px",
      color: colors.secondary,
      padding: 10
    },
    button: {
      border: `thin solid ${colors.secondary}`,
      borderRadius: "7px",
      marginTop: 20
    }
  };
});
