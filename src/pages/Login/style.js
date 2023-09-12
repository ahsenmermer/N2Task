import { StyleSheet,Dimensions } from "react-native";
import colors from "../../constants/colors";

const {width,height} = Dimensions.get("screen")

const styles = StyleSheet.create({
    imageContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:48
    },
    image:{
        width:170,
        height:46,
    },
    innerContainer:{
        borderWidth: 1,
        width:width*.85,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        borderColor:colors.borderColor,
        paddingVertical:24
    },
    title:{
        fontWeight:"500",
        color:colors.dark,
        fontSize:16,
        marginTop:16,
        textAlign:"center"
    },
    inputContainer:{
    
        marginBottom:20
    },
    input:{
        fontWeight:"400",
        fontSize:16,
        color:colors.iconGray,
        borderRadius:8,
        width:width*.75
    },
    userTitle:{
        fontSize:18,
        fontWeight:"500",
        color:colors.gray,
        bottom:4
    },
    container:{
       flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.white,

    },
    btnLogin:{
        backgroundColor:colors.buttonBlue,
        borderRadius:100,
        width:width*.75,
        height:50,
        marginTop:16
    },
    loginContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    password:{
        color:colors.buttonBlue,
        fontWeight:"500",
        top:10
    }
});

export default styles;