import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const { colors } = theme.palette;

  return {
    root: {
      height: 500,
      background: colors.main
    },
    container: {
      height: "100%",
      width: "100%"
    },
    torchliteContainer: {
      height: "40%",
      background: 'url("/static/torchlite-banner.jpg") no-repeat center center'
    },
    ovaziContainer: {
      height: "40%",
      background:
        'black url("/static/ovazi-banner.png") no-repeat center center',
      backgroundSize: "75%"
    },
    closeButton: {
      float: "right",
      height: 35,
      width: 35,
      fill: colors.main50,
      paddingRight: 10,
      paddingTop: 10,
      "&:hover": {
        cursor: "pointer"
      }
    },
    infoContainer: {
      paddingLeft: 20,
      paddingRight: 20
    },
    buttonContainer: {
      paddingLeft: 20
    },
    buttonText: {
      color: colors.secondary,
      textDecoration: "none"
    }
  };
});
