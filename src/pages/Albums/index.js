import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AlbumItem from './components/AlbumItem';

const Albums = (props) => {

  const userId = props?.route?.params?.user?.id
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()
  const [albumData, setAlbumData] = useState([])

  const fetchData = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/albums?userId=" + userId)
      .then((res) => {
        setData(res?.data)
        setAlbumData(res.data)

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

  const renderItem = ({ item }) => <AlbumItem item={item} />

  return (
    <View style={styles.container} >
      <Text style={styles.text}>{albumData.length} adet albüm bulundu.</Text>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}

export default Albums;