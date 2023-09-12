import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        flex:1,
        padding:18,
    },
    desc:{
        fontSize:16,
        fontWeight:"500",
    },
    image:{
        width:40,
        height:40,
        borderRadius:100,
        marginRight:16,
    },
    inContainer:{
        borderWidth:1,
        marginTop:20,
        padding:10,
        borderColor:colors.borderColor,
        borderRadius:10,
        height:150
    },
    commentsTitle:{
        fontSize:20,
        fontWeight:"600",
        color:colors.lightBlack,
        marginVertical:20
    },
    name:{
        fontWeight:"500",
        color:colors.lightBlack,
        fontSize:16,
    },
    personContainer:{
        flexDirection:"row",
    },
    buttonContainer:{
        width:60,
        height:60,
        position:"absolute",
        alignItems:"center",
        bottom:20,
        right:20,
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