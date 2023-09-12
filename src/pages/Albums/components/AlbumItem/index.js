import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';

const AlbumItem = ({ item }) => {
    const [active, setActive] = useState(0);
    const navigation = useNavigation()
    

    const DATA = [
        require("../../../../constants/assets/images/beach1.png"),
        require("../../../../constants/assets/images/beach2.png"),
        require("../../../../constants/assets/images/beach3.png"),
        require("../../../../constants/assets/images/paris.png")
    ]

    const onMomentumScrollEnd = (e) => {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.round(contentOffset.x / viewSize.width);
        setActive(pageNum)
    }

    const renderDot = ({ item, index }) => <View style={[styles.box, active == index && styles.activeBox]} />

    const renderImage = ({ item }) => <Image style={styles.image} source={item} />

    return (
        <TouchableOpacity style={styles.inContainer} onPress={() => navigation.navigate("AlbumsDetail", { detail: item })}>
            <Text style={styles.text}>{DATA.length} adet fotoğraf bulundu.</Text>
            <View>
                <FlatList
                    onMomentumScrollEnd={onMomentumScrollEnd}
                    data={DATA}
                    renderItem={renderImage}
                    horizontal
                    pagingEnabled
                    nestedScrollEnabled
                    showsHorizontalScrollIndicator={false} />
            </View>
            <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
            <FlatList
                data={DATA}
                renderItem={renderDot}
                horizontal style={styles.flatList}
            />
            
        </TouchableOpacity>
    )
}
export default AlbumItem