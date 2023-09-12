import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 20
    },
    inContainer: {
        borderWidth: 1,
        marginTop: 21,
        borderColor: colors.borderColor,
        borderRadius: 10,
        height: 170,
        width: "100%",
        marginBottom:30
    },
    album: {
        flexDirection: "row",
        padding: 13,
        alignItems: "center",
        marginBottom: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#172554"
    },
    text: {
        fontWeight: "500",
        color: "#172554",
        marginLeft: 12
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 8
    },
    imageContainer: {
        alignSelf: "center"
    },
    pieContainer: {
        borderWidth: 1,
        marginTop: 21,
        borderColor: colors.borderColor,
        borderRadius: 10,
        height: 170,
        width: "100%",
        padding:15,
        flexDirection:"row"
    },
    box:{
        width:20,
        height:20,
        backgroundColor:"#90C",
        marginRight:10
    },
    boxContainer:{
        flexDirection:"row",
        marginBottom:20
    },
    inBox:{
        width:20,
        height:20,
        backgroundColor:"#600080",
        marginRight:10,
    },
    titleTodo:{
        fontSize: 18,
        fontWeight: "500",
        color: "#172554"
    }
});

export default styles;