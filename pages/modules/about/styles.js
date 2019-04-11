import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const { colors } = theme.palette;

  return {
    container: {
      width: "75%",
      height: "75%"
    },
    socialLinkContainer: {
      position: "absolute",
      bottom: 0,
      left: 40
    },
    number: {
      color: colors.secondary
    },
    pageTitle: {
      color: colors.white,
      marginLeft: 10
    },
    para: {
      fontSize: "16px",
      color: colors.main50,
      marginTop: 20,
      fontFamily: "Roboto"
    },
    imgContainer: {
      display: "flex",
      justifyContent: "center"
    },
    img: {
      width: "70%",
      height: "100%"
    },
    list: {
      listStyleImage: 'url("/static/right-arrow.svg")',
      fontSize: "14px",
      color: colors.main50,
      fontFamily: "Roboto"
    },
    listItem: {
      padding: 5
    }
  };
});
