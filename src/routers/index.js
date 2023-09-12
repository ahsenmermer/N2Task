import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../pages/Home"
import PostsDetail from "../pages/PostsDetail"
import AlbumsDetail from "../pages/AlbumsDetail"
import { N2TaskDrawer } from './n2-task-drawer'
import Login from "../pages/Login"
import ResetPassword from "../pages/ResetPassword"
import ForgetPassword from "../pages/ForgetPassword"


const Stack = createNativeStackNavigator();

const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Drawer' component={N2TaskDrawer} />
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: true,
                    title:"Ana Sayfa",
                    headerBackVisible:false,
                    headerTitleAlign:'center'
                }} />
                <Stack.Screen name="PostsDetail" component={PostsDetail} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="AlbumsDetail" component={AlbumsDetail} options={{
                    headerShown: true,
                    title:"Detail"
                }} />
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
                    headerShown: true,
                    title: "Şifremi Unuttum"
                }} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{
                    headerShown: true,
                    title: "Şifremi Unuttum"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;