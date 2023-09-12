import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        padding:20,
        
    },
    inContainer:{
        borderWidth:1,
        padding:16,
        borderColor:colors.borderColor,
        borderRadius:8,
        marginBottom:20
    },
    postTitle:{
        fontSize:18,
        color:colors.lightBlack,
        marginBottom:16,
        fontWeight:"600"
    },
    desc:{
        fontSize:16,
        fontWeight:"400",
        color:"rgba(0, 0, 0, 0.70)",
        marginBottom:30
    },
    seeMoreContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"40%",
        alignSelf:"flex-end",
        alignItems:"center"
    },
    text:{
        fontWeight:"500",
        color:colors.lightBlack
    },
    icon:{
        borderWidth:3,
        borderColor:colors.purple,
        borderRadius:8,
        width:25,
        height:25
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
    modalContainer: {
        width: width * .7,
        height: height * .43,
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
    label:{
        fontSize:12,
        marginTop:20
    },
    input:{
        marginTop:15,
        marginBottom:10,
        width:width*.6
    },
    addButton:{
        width:"50%",
        height:40,
        backgroundColor:colors.purple
    },
});

export default styles;