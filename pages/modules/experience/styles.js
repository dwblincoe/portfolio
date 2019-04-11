import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const { colors } = theme.palette;

  return {
    container: {
      width: "60%",
      height: "60%"
    },
    number: {
      color: colors.secondary
    },
    pageTitle: {
      color: colors.white,
      marginLeft: 10
    },
    socialLinkContainer: {
      position: "absolute",
      bottom: 0,
      left: 40
    },
    experienceContainer: {
      marginTop: 20
    },
    text: {
      padding: 15,
      borderLeft: `1px solid ${colors.main50}`,
      color: colors.main50,
      "&:hover": {
        background: "rgba(99, 255, 218, 0.05)",
        color: colors.secondary,
        borderColor: colors.secondary,
        cursor: "pointer"
      }
    },
    selected: {
      background: "rgba(99, 255, 218, 0.05)",
      color: colors.secondary,
      borderColor: colors.secondary,
      borderSize: "2px"
    },
    summaryContainer: {
      paddingLeft: 15
    }
  };
});
