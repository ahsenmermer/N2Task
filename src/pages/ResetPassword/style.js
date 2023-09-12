import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors"

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: colors.white,
        flex: 1,
    },
    title: {
        fontWeight: "400",
        fontSize: 16,
        color: colors.iconGray
    },
    userTitle: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.gray,
        bottom: 4
    },
    input: {
        fontWeight: "400",
        fontSize: 16,
        color: colors.iconGray,
        borderRadius: 8,
    },
    inputContainer: {
        marginTop: 44
    },
    inTitle: {
        color: colors.iconGray,
        fontWeight: "bold",
        fontSize: 16
    },
    btnLogin: {
        backgroundColor: colors.buttonBlue,
        borderRadius: 100,
        width: width * .9,
        height: 50,
        marginTop: 44
    },
    loginContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    password: {
        color: colors.buttonBlue,
        fontWeight: "500",
        marginTop: 16
    }
});

export default styles;