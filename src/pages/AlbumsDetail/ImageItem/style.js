import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    image: {
        borderRadius: 8,
        width: "100%",
        height: 200,
        marginBottom: 20,
        borderWidth: 1,
        marginTop:5
    },
    deleteContainer:{
        backgroundColor:"red",
        height:200,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8
    },
    addContainer:{
        backgroundColor:colors.purple,
        height:200,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8
    },
    title:{
        fontSize:16,
        fontWeight:"500",
        color:colors.lightBlack,
    },
    photoContainer:{
        borderWidth:1,
        padding:20,
        marginBottom:20,
        borderColor:colors.borderColor,
        borderRadius:8
    }
});

export default styles