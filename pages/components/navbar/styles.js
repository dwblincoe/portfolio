import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const colors = theme.palette.colors;

  return {
    container: {
      width: "100vw"
    },
    logoContainer: {
      display: "flex",
      flexDirection: "row",
      padding: 5
    },
    logo: {
      fontSize: "55px",
      "&:hover": {
        cursor: "pointer",
        color: colors.main50
      }
    },
    siteLinks: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    link: {
      color: colors.main50,
      textDecoration: "none",
      marginRight: 30,
      fontSize: "16px",
      "&:hover": {
        cursor: "pointer",
        color: colors.secondary
      }
    },
    number: {
      color: colors.secondary,
      fontSize: "14px",
      lineHeight: "0",
      marginRight: 10
    },
    button: {
      marginRight: 30
    }
  };
});
