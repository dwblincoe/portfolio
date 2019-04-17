import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const { colors } = theme.palette;

  return {
    outer: {
      position: "relative",
      padding: 5
    },
    overlay: {
      background: colors.main,
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      top: 0,
      height: "100%",
      width: "100%",
      opacity: 0
    },
    visible: {
      opacity: 0.9
    },
    img: {
      width: "100%",
      height: "100%"
    },
    title: {
      textAlign: "center",
      color: colors.secondary
    },
    button: {
      alignSelf: "center",
      width: "45%"
    }
  };
});
