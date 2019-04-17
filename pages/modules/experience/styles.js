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
    smNavContainer: {
      marginBottom: 20
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
    opposite: {
      borderColor: colors.secondary
    },
    text2: {
      padding: 15,
      borderTop: `1px solid ${colors.main50}`,
      borderRight: `1px solid ${colors.main50}`,
      borderBottom: `1px solid ${colors.secondary}`,
      color: colors.main50,
      "&:hover": {
        background: "rgba(99, 255, 218, 0.05)",
        color: colors.secondary,
        borderColor: colors.secondary,
        cursor: "pointer"
      }
    },
    selected2: {
      background: "rgba(99, 255, 218, 0.05)",
      color: colors.secondary,
      borderBottom: "none",
      borderColor: colors.secondary,
      borderSize: "2px"
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
