import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        padding:20,
    },

    leftSwipe:{
        backgroundColor:colors.borderColor,
        height:100,
    },
    leftSwipeContainer:{
        width:100,
        height:100,
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center"
    },
    rightSwipeContainer:{
        width:100,
        height:100,
        backgroundColor:colors.purple,
        justifyContent:"center",
        alignItems:"center"
    }
});

export default styles;