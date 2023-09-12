import { View, Text, TouchableOpacity, Image, FlatList, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {

  const [data, setData] = useState(true)
  const [selectedItem, setSelectedItem] = useState()
  const [loading, setLoading] = useState([])
  const navigation = useNavigation()
  const [openModal, setOpenModal] = React.useState(false);

  const fetchData = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users")
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

  const DATA = [
    {
      id: 1,
      title: "Konum",
      icon: "map-marker-outline",
      value: selectedItem?.address?.street + "/" + selectedItem?.address?.suite + "/" + selectedItem?.address?.city
    },
    {
      id: 2,
      title: "Firma",
      icon: "office-building-outline",
      value: selectedItem?.address?.street + "/" + selectedItem?.address?.suite + "/" + selectedItem?.address?.city
    },
    {
      id: 3,
      title: "Website",
      icon: "web",
      value: selectedItem?.website
    }
  ]

  const renderModalItem = ({ item }) => {
    return (
      <View style={{ borderBottomWidth: 1, borderBottomColor: colors.borderColor, paddingBottom: 10 }}>
        <View style={styles.location}>
          <MaterialCommunityIcons name={item.icon} size={22} color={"#26303E"} />
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#313E50", marginLeft: 10 }}>{item.title}</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{item.value}</Text>
        </View>
      </View>
    )
  }

  const renderModal = () => {
    return (
      <Modal visible={openModal} transparent={true} >
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.transperant }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalInContainer}>
              <Text style={styles.name}>{selectedItem?.name}</Text>
              <TouchableOpacity onPress={() => setOpenModal(false)} >
                <MaterialIcon name='close' size={30} style={{ color: colors.lightBlack }} />
              </TouchableOpacity>
            </View>
            <FlatList data={DATA} renderItem={renderModalItem} />
          </View>
        </View>
      </Modal>
    )
  }

  const onPressDots = (item) => {
    setOpenModal(true)
    setSelectedItem(item)
  }

  const renderUser = ({ item }) => {
    return (
      <TouchableOpacity style={styles.userContainer} onPress={() => navigation.navigate("Drawer", { user: item })}>
        <View style={styles.inContainer}>
          <View style={styles.leftContainer}>
            <Image style={styles.image} source={require("../../constants/assets/images/adam.png")} />
            <View style={styles.itemRightContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.number}>{item.phone}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => onPressDots(item)}>
            <MaterialCommunityIcons name='dots-vertical' size={24} />
          </TouchableOpacity>
          {renderModal()}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderUser} />
    </View>
  )
}

export default Home;