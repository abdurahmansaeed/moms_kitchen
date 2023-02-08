import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../globals/style';
import { FontAwesome5 } from '@expo/vector-icons';
const BottomNav = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Text>BottomNav</Text> */}
            <View style={styles.btncon1}>
                <AntDesign name="home" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('home') }} />

            </View>
            <View style={styles.btncon2} >
                <Ionicons name="search" size={31} color="black" style={styles.icon2} onPress={() => { navigation.navigate('home') }} />
            </View>
            <View style={styles.btncon1} >
                <AntDesign name="shoppingcart" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('cart') }} />

            </View>
            <View style={styles.btncon1} >
                <FontAwesome5 name="map-marked-alt" size={30} color="black" style={styles.icon1} onPress={() => { navigation.navigate('trackorders') }} />
            </View>
        </View>
    )
}

export default BottomNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        elevation: 30,
        borderTopColor: '#C21807',
        borderTopWidth: 2,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        elevation: 40,
        
    },
    btncon1: {

        // backgroundColor: 'white',
        // elevation: 30,
        // width: 100,
        // height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 10,
        // top: 5,

    },
    btncon2: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -6,
        backgroundColor: colors.text1,
        width: 50,
        height: 50,
        borderRadius: 60,
        elevation: 30,
    },
    icon2: {
        color: 'white',

    },
    icon1: {
        color: colors.text1,
        elevation: 30,

    }
})