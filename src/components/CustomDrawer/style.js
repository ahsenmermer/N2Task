import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,

    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,

    },
    itemInContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        color: colors.purple,
        marginLeft: 20,
        fontSize: 16
    },
    image: {
        width: 68,
        height: 68,
        borderRadius: 100
    },
    userContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: colors.borderColor,
        width:"70%",
        paddingVertical: 20,
        alignItems: "center",
        marginBottom:30,
        marginTop:25,
        marginLeft:20
        
    },
    name: {
        fontSize: 22,
        fontWeight: "500",
        color: colors.lightBlack
    },
    email: {
        color: colors.title
    }
});

export default styles;