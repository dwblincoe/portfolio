import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const colors = theme.palette.colors;

  return {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignContent: "center"
    },
    descriptionContainer: {
      display: "flex",
      justifyContent: "center"
    },
    introContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: 10
    },
    intro: {
      color: colors.secondary,
      fontFamily: "Roboto",
      fontSize: 20,
      lineHeight: "1.25"
    },
    name: {
      color: colors.white,
      fontSize: 80,
      lineHeight: "1.25"
    },
    title: {
      color: colors.main50,
      fontSize: 60,
      lineHeight: "1.25"
    },
    description: {
      marginTop: 20,
      color: colors.main50,
      fontSize: 18
    },
    link: {
      color: colors.secondary,
      textDecoration: "none"
    },
    button: {
      marginTop: "50px",
      width: "150px"
    },
    socialLinkContainer: {
      position: "absolute",
      bottom: 0,
      left: 40
    }
  };
});
