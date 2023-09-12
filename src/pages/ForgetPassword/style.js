import { StyleSheet , Dimensions} from "react-native";
import colors from "../../constants/colors";

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        padding:24
    },
    title:{
        fontSize:16
    },
    inTitle:{
        fontSize:16,
        fontWeight:"bold"
    },
    btnLogin:{
        backgroundColor: colors.buttonBlue,
        borderRadius: 100,
        width: width * .9,
        height: 50,
        marginTop: 44
    },
    inContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginTop:30
    }

});

export default styles;