import { StyleSheet } from "react-native";
import colors from "../../constants/colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    text:{
        marginLeft:20,
        fontSize:16,
        fontWeight:"500",
        color:colors.lightBlack
    }
});

export default styles;