import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const { colors } = theme.palette;

  return {
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignContent: "center"
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
      paddingRight: 20,
      fontSize: "16px",
      color: colors.main50,
      marginTop: 20,
      fontFamily: "Roboto"
    },
    smImg: {
      marginTop: 20
    },
    imgContainer: {
      display: "flex",
      alignItems: "center"
    },
    img: {
      display: "block",
      width: "100%",
      margin: "auto"
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
