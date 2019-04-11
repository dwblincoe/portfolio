import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const { colors } = theme.palette;
  return {
    container: {
      display: "flex",
      flexDirection: "column"
    },
    svgIcon: {
      fill: colors.main50,
      marginBottom: 20,
      fontSize: "25px",
      "&:hover": {
        fill: colors.secondary,
        cursor: "pointer"
      }
    },
    socialLinks: {
      display: "flex",
      flexDirection: "column"
    },
    line: {
      height: "150px",
      borderLeft: `thin solid ${colors.main50}`,
      marginLeft: 10,
      width: "5px"
    }
  };
});
