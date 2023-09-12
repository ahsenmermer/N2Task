import { View, Text , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import styles from "./style"
import Input from "../../components/Input/index"
import Button from "../../components/Button"
import { useNavigation } from '@react-navigation/native'

const ResetPassword = () => {

  const [userName, setUserName] = useState()
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifrenizi sıfırlamak için lütfen sisteme kayıtlı olan kullanıcı adınızı ve kayıtlı e-posta adresinizi girin.</Text>
      <View style={styles.inputContainer}>
        <Input label={"E-posta Adresi:"} labelStyle={styles.userTitle} inputStyle={styles.input} placeholder={"test.user@crm.n2.com"}
          onChangeText={setUserName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inTitle}>NOT:<Text style={styles.title}> Şifre sıfırlama işlemi hakkında daha fazla yardım veya destek için müşteri hizmetleriyle
           iletişime geçebilirsiniz.</Text></Text>
      </View>
      <View style={styles.loginContainer}>
      <Button style={styles.btnLogin} text={"Onayla"} onPress={() => navigation.navigate("ForgetPassword")} />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={styles.password}>Vazgeç</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default ResetPassword;