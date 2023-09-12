import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../../constants/colors';

export default function TodoItem({ todo }) {

    const [checked, setChecked] = useState(todo.completed)
    const changeCheck = () => {
        setChecked(!checked)
    }

    return (
        <TouchableOpacity onPress={changeCheck} style={styles.checkContainer}>
            <View style={[styles.checkBox, checked && styles.checkedCheckBox]} >
                {checked && <MaterialIcon name='check' size={18} color={colors.white} />}
            </View>
            <Text style={styles.title}>{todo.title}</Text>
        </TouchableOpacity>
    )
}