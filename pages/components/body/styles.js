import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const { colors } = theme.palette;

  return {
    gridContainer: {
      minHeight: "calc(100vh - 65px)",
      width: "100vw",
      margin: "0 auto"
    }
  };
});
