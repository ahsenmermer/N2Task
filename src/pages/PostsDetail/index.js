import { View, Text, Image, FlatList, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import axios from 'axios';
import Button from "../../components/Button"
import Input from "../../components/Input"
import colors from '../../constants/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const PostDetail = (props) => {
  const postDetail = props?.route?.params?.post

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [name, setName] = useState("")

  const fetchData = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/comments?postId=" + postDetail?.id)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openAddModal = () => {
    setVisible(true)
  }

  const newPostCompenent = () => {
    const post = {
      id: title.length * Math.random(),
      name,
      body,
      postDetail
    }
    let arr = data;
    arr.push(post);
    setData(arr)
    setVisible(false)
  }

  const renderComment = ({ item }) => {
    return (
      <View style={styles.inContainer}>
        <View style={styles.personContainer}>
          <Image style={styles.image} source={require("../../constants/assets/images/adam.png")} />
          <View style={{ width: "80%" }}>
            <Text numberOfLines={1} style={styles.name}>{item?.name}</Text>
            <Text numberOfLines={6}>{item?.body}</Text>
          </View>
        </View>
      </View>
    )
  }

  const renderAddModal = () => {
    return (
      <Modal visible={visible} transparent={true}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.transperant }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalInContainer}>
              <Text style={styles.name}>Yeni yorum ekle</Text>
              <TouchableOpacity onPress={() => setVisible(false)} >
                <MaterialIcon name='close' size={30} style={{ color: colors.lightBlack }} />
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Input
                label={"Yorum başlığı yazınız."}
                labelStyle={styles.label}
                inputStyle={styles.input}
                placeholder={"Başlık ekleyiniz."}
                onChangeText={setName}
              />
              <Input
                label={"Yorum içeriği yazınız."}
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
      <FlatList data={data} renderItem={renderComment}
        ListHeaderComponent={() => {
          return (
            <View>
              <Text style={styles.desc}>{postDetail?.body}</Text>
              <Text style={styles.commentsTitle}>Comments</Text>
            </View>
          )
        }
        } />
      <View style={styles.buttonContainer}>
        <Button style={styles.btn} text={"+"} textStyle={styles.added} onPress={openAddModal} />
      </View>
      {renderAddModal()}
    </View>
  )
}

export default PostDetail;