import { withStyles } from "@material-ui/core/styles";

export default withStyles((theme) => {
    const { colors } = theme.palette;
    return {
        jobTitle: {
            color: "#CCD5F6",
            marginRight: 5,
        },
        link: {
            textDecoration: "none",
            color: colors.secondary,
            marginLeft: 5,
            "&:hover": {
                textDecoration: "underline",
            },
        },
        date: {
            fontSize: "16px",
            color: colors.main50,
        },
        list: {
            listStyleImage: 'url("/static/right-arrow.svg")',
            fontSize: "16px",
            color: colors.main50,
            fontFamily: "Roboto",
        },
        listItem: {
            padding: 5,
        },
    };
});