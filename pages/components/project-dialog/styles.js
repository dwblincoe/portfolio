import { withStyles } from "@material-ui/core/styles";

export default withStyles((theme) => {
    const { colors } = theme.palette;

    return {
        root: {
            minHeight: 500,
            background: colors.main,
        },
        container: {
            height: "100%",
            width: "100%",
        },
        torchliteContainer: {
            height: 200,
            background: `#FFFFFF url("/static/torchlite-banner.jpg") no-repeat center center`,
            backgroundSize: "75%",
        },
        ovaziContainer: {
            height: 200,
            background:
                'black url("/static/ovazi-banner.png") no-repeat center center',
            backgroundSize: "75%",
        },
        collectaverseContainer: {
            height: 200,
            background:
                'black url("/static/collectaverse-banner.png") no-repeat center center',
            backgroundSize: "cover",
        },
        atlasContainer: {
            height: 200,
            background:
                'black url("/static/atlas-banner.png") no-repeat center center',
            backgroundSize: "75%",
        },
        closeButton: {
            float: "right",
            fontSize: 30,
            fill: colors.main50,
            paddingRight: 10,
            paddingTop: 10,
            "&:hover": {
                cursor: "pointer",
            },
        },
        infoContainer: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        buttonContainer: {
            paddingLeft: 20,
        },
        buttonText: {
            color: colors.secondary,
            textDecoration: "none",
        },
    };
});
