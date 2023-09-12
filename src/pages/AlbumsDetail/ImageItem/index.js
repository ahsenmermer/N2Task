import { Image, View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles from './style'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../../../constants/colors'



const ImageItem = ({ item, index, onComponentOpen, onDelete }) => {

    const ref = useRef()

    const leftSwipe = () => {
        return <View style={styles.deleteContainer}>
            <TouchableOpacity onPress={() => {
                ref.current.close();
                onDelete(item.id)
            }}>
                <AntDesign name='delete' size={35} style={{ color: colors.white }} />
            </TouchableOpacity>
        </View>
    }

    useEffect(() => {
        if (item?.opened == false) {
            ref.current.close();
        }
    })
    return (
        <GestureHandlerRootView>
            <View style={styles.photoContainer}>
                <Swipeable
                    ref={ref}
                    renderRightActions={leftSwipe}
                    onSwipeableOpen={() => {
                        onComponentOpen(index);
                    }}>
                    <Image source={{ uri: item.url }} style={styles.image} />
                </Swipeable>
                <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
            </View>
        </GestureHandlerRootView>
    )
}
export default ImageItem