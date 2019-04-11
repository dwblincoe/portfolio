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
      alignItems: "center"
    },
    introContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start"
    },
    intro: {
      color: colors.secondary,
      fontFamily: "Roboto",
      fontSize: "20px",
      lineHeight: "1.25"
    },
    name: {
      color: colors.white,
      fontSize: "80px",
      lineHeight: "1.25"
    },
    title: {
      color: colors.main50,
      fontSize: "60px",
      lineHeight: "1.25"
    },
    description: {
      width: "500px",
      marginTop: 20,
      color: colors.main50,
      fontSize: "18px"
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
