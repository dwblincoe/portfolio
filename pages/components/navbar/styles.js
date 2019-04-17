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
    },
    buttonLink: {
      textDecoration: "none",
      color: colors.secondary
    },
    dropdown: {
      fill: colors.secondary,
      marginRight: 30,
      fontSize: 35,
      "&:hover": {
        cursor: "pointer",
        fill: colors.secondary
      }
    },
    drawerContainer: {
      background: colors.main,
      color: colors.main50,
      width: "50%"
    },
    listContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    listItemContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    },
    closeButton: {
      fontSize: 18,
      marginRight: 20,
      marginTop: 20
    }
  };
});
