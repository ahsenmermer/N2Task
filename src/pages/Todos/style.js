import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    sortContainer: {
        borderWidth: 1.5,
        flexDirection: "row",
        width: "50%",
        height: 36,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: colors.borderColor,
    },
    filterContainer: {
        borderWidth: 1.5,
        flexDirection: "row",
        width: "50%",
        height: 36,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: colors.borderColor
    },
    sortAndFilter: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    modalContainer: {
        width: width * .7,
        height: height * .3,
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 22,
        borderWidth: 1,
        borderColor: colors.borderColor,
    },
    modalInContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    name: {
        fontSize: 20,
        color: colors.lightBlack,
        fontWeight: "600"
    },
    sortTitle: {
        color: colors.lightBlack,
        fontWeight: "500",
    },
    todoSort: {
        borderBottomWidth:1,
        marginTop: 20,
        padding: 10,
        borderColor:colors.borderColor,
    },
    btn:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:colors.purple,
    },
    added:{
        fontSize:28,
        fontWeight:"300",
        position:"absolute"
    },
    buttonContainer:{
        width:60,
        height:60,
        position:"absolute",
        alignItems:"center",
        bottom:20,
        right:20,
    },
    label:{
        fontSize:12,
        marginTop:20
    },
    input:{
        marginTop:20,
        marginBottom:20
    },
    addButton:{
        width:"50%",
        height:40,
        backgroundColor:colors.purple
    },
});

export default styles;