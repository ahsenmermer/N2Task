import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
    checkContainer: {
        flexDirection: "row",
        alignItems:"center",
        marginBottom: 13
    },
    checkBox: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: colors.purple,
        marginRight: 8,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    checkedCheckBox: {
        backgroundColor: colors.purple,
    },
    title:{
        width:"90%",
        fontWeight:"400",
        color:colors.todoTitle
    }
});

export default styles;