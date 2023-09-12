import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    inContainer: {
        height: 300,
        width: '90%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.borderColor,
        marginVertical: 10,
        alignSelf :'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    image: {
        width: width * .79,
        height: 200,
        marginBottom: 20,
        borderRadius: 4,
        marginTop:10
    },
    title: {
        fontWeight: "500",
        color: colors.lightBlack
    },
    box: {
        width: 17,
        height: 17,
        borderRadius: 10,
        backgroundColor: colors.lightGray,
        marginHorizontal: 3,
        borderWidth: 1,
        borderColor: colors.borderColor
    },
    activeBox:{
        backgroundColor: colors.purple,
    },
    flatList:{
        position :'absolute',
        alignSelf :'center',
        bottom: 80
    },
    text:{
        fontWeight:"500",
        color:colors.lightBlack,
        marginTop:-10
    }
});

export default styles