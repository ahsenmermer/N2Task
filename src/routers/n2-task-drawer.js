import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Todos from "../pages/Todos"
import Posts from "../pages/Posts"
import Albums from "../pages/Albums"
import Dashboard from "../pages/Dashboard";
import { Dimensions, View, TouchableOpacity } from "react-native";
import CustomDrawer from "../components/CustomDrawer";
import Input from "../components/Input";
import Icon from 'react-native-vector-icons/AntDesign';
import colors from "../constants/colors";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text } from "react-native";
import Home from "../pages/Home";

const Drawer = createDrawerNavigator();
const { width } = Dimensions.get("screen")


export const N2TaskDrawer = (props) => {
    let user = props?.route?.params?.user

    return (
        <Drawer.Navigator
            drawerContent={(props) => { return <CustomDrawer user={user} {...props} /> }}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "transparent",
                    width: width * .8
                },
                drawerType: "front",
                header: ({ navigation, route }) => {
                    const onChangeText = route?.params?.onChangeText

                    return (
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 12, backgroundColor: colors.white, borderBottomWidth: 1, borderColor: colors.borderColor }}>
                            <TouchableOpacity onPress={() => navigation?.openDrawer()}>
                                <MaterialIcons name="menu" size={28} />
                            </TouchableOpacity>
                            <Input
                                onChangeText={onChangeText}
                                placeholder={"Ara..."} inputStyle={{ borderWidth: 0, }} style={{ width: "75%", backgroundColor: colors.lightGray, borderRadius: 10 }} />
                            <View style={{ width: "10%" }}>
                                <Icon name="user" size={24} color={colors.iconGray} />
                            </View>
                        </View>
                    )
                }
            }}>
            <Drawer.Screen name="Dashboard" component={Dashboard} initialParams={{ user }} options={{
                header: ({ navigation }) => {

                    return (
                        <View style={{ flexDirection: "row", alignItems: "center", padding: 12, backgroundColor: colors.white, borderBottomWidth: 1, borderColor: colors.borderColor }}>
                            <TouchableOpacity onPress={() => navigation?.openDrawer()}>
                                <MaterialIcons name="menu" size={28} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: "500", color: colors.lightBlack, marginLeft: 12 }}>İstatistikler</Text>
                        </View>
                    )
                }
            }} />
            <Drawer.Screen name="Todos" component={Todos} initialParams={{ user }} />
            <Drawer.Screen name="Posts" component={Posts} initialParams={{ user }} />
            <Drawer.Screen name="Albums" component={Albums} initialParams={{ user }} />
            
        </Drawer.Navigator>
    )

}