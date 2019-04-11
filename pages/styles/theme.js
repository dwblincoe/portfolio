import { createMuiTheme } from "@material-ui/core/styles";

const colors = require("./colors");

export default createMuiTheme({
  mixins: {
    clearfix: {
      "&:after": {
        content: "",
        display: "table",
        clear: "both"
      }
    }
  },
  typography: {
    fontFamily: "Roboto Condensed",
    useNextVariants: true
  },
  palette: {
    colors,
    background: {
      default: colors.main
    },
    primary: {
      main: colors.secondary
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "0"
      },
      textPrimary: {
        color: colors.secondary
      }
    },
    MuiInput: {
      root: {
        borderRadius: "0px",
        color: "red"
      },
      textPrimary: {
        color: "red"
      }
    }
  }
});
