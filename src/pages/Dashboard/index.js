import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Feather from 'react-native-vector-icons/Feather'
import styles from './style';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { PieChart } from 'react-native-svg-charts';

const Dashboard = (props) => {
  const userId = props?.route?.params?.user?.id

  const [todoData, setTodoData] = useState([])
  const [doneTodoCount, setDoneTodoCount] = useState(0);
  const [openTodoCount, setOpenTodoCount] = useState(0);
  const [albumData, setAlbumData] = useState([])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  const fetchTodoData = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/todos?userId=" + userId)
      .then((res) => {
        setTodoData(res.data);
        let opencount = 0;
        let donecount = 0
        res?.data?.map((todo) => {
          if (todo?.completed) {
            opencount += 1
          }
          else {
            donecount += 1
          }
        })
        setDoneTodoCount(donecount);
        setOpenTodoCount(opencount)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  useEffect(() => {
    fetchTodoData();
    userId && fetchAlbumData();
  }, []);

  const fetchAlbumData = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/albums?userId=" + userId)
      .then((res) => {
        setAlbumData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  };
  const DATA = [
    require("../../constants/assets/images/beach1.png"),
    require("../../constants/assets/images/beach2.png"),
    require("../../constants/assets/images/beach3.png"),
    require("../../constants/assets/images/paris.png"),

  ]

  const renderImage = ({ item }) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, }}>
        <Image style={styles.image} source={item} />
      </TouchableOpacity>

    )
  }

  const PIE_DATA = [
    {
      key: 1,
      value: doneTodoCount,
      svg: { fill: '#600080' },
      arc: { outerRadius: '120%', cornerRadius: 10, }
    },
    {
      key: 2,
      value: openTodoCount,
      svg: { fill: '#9900cc' }
    },

  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Albüm İstatistikleri</Text>
      <View style={styles.inContainer}>
        <View style={styles.album}>
          <Feather name='image' size={35} color={"#172554"} />
          <Text style={styles.text}>{albumData.length} adet albüm bulundu.</Text>
        </View>
        <FlatList data={DATA} renderItem={renderImage} numColumns={4} style={styles.imageContainer} />
      </View>
      <Text style={styles.titleTodo}>Görev İstatistikleri</Text>
      <View style={styles.pieContainer}>
        <PieChart
          style={{ height: 150, width: 150 }}
          outerRadius={'70%'}
          innerRadius={20}
          data={PIE_DATA}
        />
        <View style={{ justifyContent: "center", padding: 10, marginTop: 10 }}>
          <View style={styles.boxContainer}>
            <View style={styles.box}></View>
            <Text style={{ fontWeight: "400", color: "#90C", fontSize: 15 }}>Yapılacak görevler</Text>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.inBox}></View>
            <Text style={{ fontWeight: "400", color: "#600080", fontSize: 15 }}>Yapılan görevler</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Dashboard;