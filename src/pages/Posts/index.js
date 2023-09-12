import { View, Text, FlatList, TouchableOpacity , Modal} from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../constants/colors';
import styles from './style';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Button from "../../components/Button"
import Input from "../../components/Input"

const Posts = (props) => {

  const userId = props?.route?.params?.user?.id

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const fetchData = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
      .then((res) => {
        setData(res.data);
        setFilteredData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const onChangeText = (value) => {
    let arr = []
    data?.map(item => {
      if (item?.title?.includes(value))
        arr.push(item)
    })
    setFilteredData(arr)
  }

  useEffect(() => {
    fetchData();
    navigation.setParams({
      onChangeText
    })
  }, []);

  const openAddModal = () => {
    setVisible(true)
  }

  const newPostCompenent = () => {
    const post = {
      id: title.length * Math.random(),
      title,
      body,
      userId
    }
    let arr = data;
    arr.push(post);
    setData(arr)
    setVisible(false)
  }

  const renderPost = ({ item }) => {
    return <TouchableOpacity style={styles.inContainer} onPress={() => navigation.navigate("PostsDetail", { post: item })}>
      <Text numberOfLines={1} style={styles.postTitle}>{item.title}</Text>
      <Text numberOfLines={4} style={styles.desc}>{item.body}</Text>
      <View style={styles.seeMoreContainer}>
        <Text style={styles.text}>See more</Text>
        <View style={styles.icon}>
          <MaterialCommunityIcons name='arrow-right' size={18} color={colors.purple} style={{ color: colors.purple }} />
        </View>
      </View>
    </TouchableOpacity>
  }

  const renderAddModal = () => {
    return (
      <Modal visible={visible} transparent={true}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.transperant }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalInContainer}>
              <Text style={styles.name}>Yeni gönderi ekle</Text>
              <TouchableOpacity onPress={() => setVisible(false)} >
                <MaterialIcon name='close' size={30} style={{ color: colors.lightBlack }} />
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Input
                label={"gönderinin başlığını yazınız."}
                labelStyle={styles.label}
                inputStyle={styles.input}
                placeholder={"Başlık ekleyiniz."}
                onChangeText={setTitle}
              />
              <Input
                label={"Gönderinin içeriğini yazınız."}
                labelStyle={styles.label}
                inputStyle={styles.input}
                placeholder={"İçerik ekleyiniz."}
                onChangeText={setBody}
              />
              <Button style={styles.addButton} text={"Ekle"} onPress={newPostCompenent} />
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList data={filteredData} renderItem={renderPost} />
      <View style={styles.buttonContainer}>
        <Button style={styles.btn} text={"+"} textStyle={styles.added} onPress={openAddModal} />
      </View>
      {renderAddModal()}
    </View>
  )
}

export default Posts;