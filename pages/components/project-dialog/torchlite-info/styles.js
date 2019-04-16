import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => {
  const { colors } = theme.palette;

  return {
    title: {
      color: colors.white
    },
    text: {
      color: colors.main50
    },
    list: {
      listStyle: "none",
      listStyleImage: 'url("/static/right-arrow.svg")'
    }
  };
});
