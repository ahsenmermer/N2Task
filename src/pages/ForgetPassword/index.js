import { View, Text } from 'react-native'
import React from 'react'
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Button from "../../components/Button"

 const ForgetPassword = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifre sıfırlama linki <Text style={styles.inTitle}> test.user@crm.n2.com</Text> e-posta adresinize gönderilmiştir.
      Linke tıklayarak şifrenizi sıfırlayabilirsiniz.</Text>
      <View style={styles.inContainer}>
      <Button style={styles.btnLogin} text={"Giriş Yap"} onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  )
}

export default ForgetPassword;