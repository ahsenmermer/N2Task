import { View, Text, FlatList, TouchableOpacity, Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather'
import TodoItem from './components/TodoItem';
import { useNavigation } from '@react-navigation/native';
import Button from "../../components/Button"
import Input from "../../components/Input"

const Todos = (props) => {
  const userId = props?.route?.params?.user?.id

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(false)

  const [openModal, setOpenModal] = React.useState(false);
  const [openModalSort, setOpenModalSort] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('')
  const navigation = useNavigation()

  const fetchData = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/todos?userId=" + userId)
      .then((res) => {
        setData(res?.data);
        setFilteredData(res?.data)
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

  const renderItem = ({ item }) => {
    return (
      <TodoItem todo={item} />
    )
  }

  const openSort = () => {
    setOpenModal(true)
  }

  const openFilter = () => {
    setOpenModalSort(true)
  }

  const openAddModal = () => {
    setVisible(true)
  }

  const newTodoCompenent = () => {
    const todo = {
      id: title.length * Math.random(),
      title,
      complated: false,
      userId
    }
    let arr = data;
    arr.push(todo);
    setData(arr)
    setVisible(false)
  }

  const renderModal = () => {
    return (
      <Modal visible={openModal} transparent={true} >
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.transperant }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalInContainer}>
              <Text style={styles.name}>Sırala</Text>
              <TouchableOpacity onPress={() => setOpenModal(false)} >
                <MaterialIcon name='close' size={30} style={{ color: colors.lightBlack }} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.todoSort} onPress={() => {
              let tempList = data.sort((a, b) => a.title > b.title ? 1 : -1);
              setFilteredData(tempList)
              setOpenModal(false)
            }} >
              <Text style={styles.sortTitle}>A'dan Z' ye sıralama </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.todoSort} onPress={() => {
              let tempList = data.sort((b, a) => b.title > a.title ? -1 : 1);
              setFilteredData(tempList)
              setOpenModal(false)
            }} >
              <Text style={styles.sortTitle}>Z'den A'ya sıralama</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }

  const renderAddModal = () => {
    return (
      <Modal visible={visible} transparent={true}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.transperant }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalInContainer}>
              <Text style={styles.name}>Yeni görev ekle</Text>
              <TouchableOpacity onPress={() => setVisible(false)} >
                <MaterialIcon name='close' size={30} style={{ color: colors.lightBlack }} />
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Input
                label={"Eklemek istediğiniz görevi yazınız."}
                labelStyle={styles.label}
                inputStyle={styles.input}
                placeholder={"Yeni görev ekle."}
                onChangeText={setTitle}
              />
              <Button style={styles.addButton} text={"Ekle"} onPress={newTodoCompenent} />
            </View>
          </View>
        </View>
      </Modal>
    )
  }


  const renderItemModal = () => {
    return (
      <Modal visible={openModalSort} transparent={true} >
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.transperant }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalInContainer}>
              <Text style={styles.name}>Filtrele</Text>
              <TouchableOpacity onPress={() => setOpenModalSort(false)} >
                <MaterialIcon name='close' size={30} style={{ color: colors.lightBlack }} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.todoSort} onPress={filterCompleted} >
              <Text style={styles.sortTitle}>Tamamlanan işe göre sırala </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.todoSort} onPress={filterUnCompleted}>
              <Text style={styles.sortTitle}>Tamamlanacak işe öre sırala</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }

  const filterUnCompleted = () => {
    let arr = data.filter((x) => {
      return x.completed == false
    })
    setFilteredData(arr)
    setOpenModalSort(false)
  }

  const filterCompleted = () => {
    let arr = data.filter((x) => {
      return x.completed == true
    })
    setFilteredData(arr)
    setOpenModalSort(false)
  }


  return (
    <View style={styles.container}>
      <View style={styles.sortAndFilter}>
        <TouchableOpacity style={styles.sortContainer} onPress={openSort}>
          <MaterialIcon name="sort" size={24} color={colors.iconGray} />
          <Text >Sırala</Text>
        </TouchableOpacity>
        {renderModal()}
        <TouchableOpacity style={styles.filterContainer} onPress={openFilter}>
          <Feather name="filter" size={22} color={colors.iconGray} />
          <Text>Filtrele</Text>
        </TouchableOpacity>
        {renderItemModal()}
      </View>
      <FlatList data={filteredData} renderItem={renderItem} />
      <View style={styles.buttonContainer}>
        <Button style={styles.btn} text={"+"} textStyle={styles.added} onPress={openAddModal} />
      </View>
      {renderAddModal()}
    </View>
  )
}

export default Todos;