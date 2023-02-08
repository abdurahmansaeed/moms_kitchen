import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../globals/style';
const HomeHeadNav = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Fontisto name="nav-icon" size={22} color="black" style={styles.myicon} />
            <View style={styles.containerin}>
                <Text style={styles.mytext}>Mom's Kitchen</Text>
                <MaterialIcons name="ramen-dining" size={32} color="back" style={styles.myicon} />

            </View>
            <TouchableOpacity onPress={() => navigation.navigate ('userprofile')}>
            <FontAwesome name="user-circle" size={30} color="black" style={styles.myicon} />

            </TouchableOpacity>

        </View>
    )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.col1,
        elevation: 60,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,


    },
    containerin: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    myicon: {
        color: colors.text1,
    },

    mytext: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',

    },
})