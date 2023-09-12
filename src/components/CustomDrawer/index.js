import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import styles from './style';
import Icon from 'react-native-vector-icons/Octicons';
import colors from '../../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
    const navigation = useNavigation()
    const DATA = [
        {
            id: 1,
            title: "Ana Sayfa",
            icon: "home",
            navigationName:"Dashboard"
        },
        {
            id: 2,
            title: "Görevler",
            icon: "checklist",
            navigationName:"Todos"
        },
        {
            id: 3,
            title: "Gönderiler",
            icon: "note",
            navigationName:"Posts"
        },
        {
            id: 4,
            title: "Albüm",
            icon: "image",
            navigationName:"Albums"
        },
        {
            id: 5,
            title: "Kullanıcılar",
            icon: "image",
            navigationName:"Home"
        },

    ]
    const renderData = ({ item }) => {
        return <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate(item.navigationName)}>
            <View style={styles.itemInContainer}>
                <Icon name={item.icon} size={24} color={colors.purple} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <Icon name="chevron-right" size={24} color={colors.iconGray} />
        </TouchableOpacity>
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image style={styles.image} source={require("../../constants/assets/images/adam.png")} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.name}>{props?.user?.name}</Text>
                    <Text style={styles.email}>{props?.user?.email}</Text>
                </View>
            </View>
            <FlatList data={DATA} renderItem={renderData} />
        </View>
    )
}

export default CustomDrawer;