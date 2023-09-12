import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from "./style"
import Input from "../../components/Input/index"
import Button from "../../components/Button"
import { useNavigation } from '@react-navigation/native'

const Login = () => {

  const [userName, setUserName] = useState()
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image source={require("../../constants/assets/images/n2Logo.png")} style={styles.image} />
          <Text style={styles.title}>N2Mobil CRM'e Hoş Geldiniz</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input label={"Kullanıcı Adı:"} labelStyle={styles.userTitle} inputStyle={styles.input} placeholder={"test.user@crm.n2.com"}  onChangeText={setUserName} />
        </View>
        <View style={styles.inputContainer}>
          <Input label={"Parola:"} labelStyle={styles.userTitle} inputStyle={styles.input} placeholder={"**************"}
            onChangeText={setUserName} />
        </View>
        <View style={styles.loginContainer}>
          <Button style={styles.btnLogin} text={"Giriş Yap"} onPress={() => navigation.navigate("Home")} />
          <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}><Text style={styles.password}>Şifremi Unuttum</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login;