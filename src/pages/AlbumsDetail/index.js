import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import axios from 'axios';
import ImageItem from './ImageItem';

const AlbumsDetail = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)


  const fetchData = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/photos?albumId=3")
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

  const renderImage = ({ item, index }) =>
    <ImageItem
      item={item}
      index={index}
      onComponentOpen={(x) => {
        openComponent(x);
      }}
      onDelete={(id) => {
        console.log("delete" + id);
        let arr = data.filter((item) => {
          return item.id != id
        })
        setData(arr)
      }} />

  const openComponent = (ind) => {
    let tempData = data;
    tempData.map((item, index) => {
      if (index == ind) {
        item.opened = true;
      }
      else {
        item.opened = false;
      }
    })
    let temp = [];
    tempData.map(item => {
      temp.push(item)
    })
    setData(temp);
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderImage}
      />
    </View>
  )
}

export default AlbumsDetail;