import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, veg, nonveg } from '../globals/style'

const Cardslider = ({ title, data, navigation }) => {
    //console.log(title);
    //console.log(data);
    const openProductpage = (item) => {
        // for items data console.log(item);
        navigation.navigate('productpage', item)


    }
    return (
        <View style={styles.container}>
            <Text style={styles.cardouthead}>
                {title}
            </Text>
            <FlatList style={styles.cardsout}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.index} onPress={() => {
                        openProductpage(item)
                    }} >
                        <View style={styles.card}>
                            <View style={styles.s1}>
                                <Image source={{ uri: item.foodImageUrl }} style={styles.cardimgin} />
                            </View>
                            <View style={styles.s2}>
                                <Text style={styles.txt1}>{item.foodName}</Text>
                                <View style={styles.s2in}>

                                    <Text style={styles.txt2}>Rs.{item.foodPrice}/-</Text>
                                    {/* */}
                                    {item.foodType == 'veg' ? <Text style={veg}></Text> : <Text style={nonveg}></Text>}
                                </View>
                            </View>
                            <View style={styles.s3}>
                                <Text style={styles.buybtn}>Buy</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Cardslider

const styles = StyleSheet.create({

    container: {
        marginVertical: 15,
    },

    cardouthead: {
        color: colors.text3,
        width: '90%',
        fontSize: 29,
        fontWeight: '300',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    cardsout: {
        width: '100%',

    },
    card: {

        width: 350,
        height: 290,
        margin: 2,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        backgroundColor: colors.col1,
    },
    cardimgin: {
        width: '100%',
        height: 200,
        borderRadius: 15,


    },

    s2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txt1: {
        fontSize: 18,
        color: 'red',
        marginHorizonatal: 5,
        width: 150,
        marginLeft: 5,
        marginTop: 4,
        fontWeight: '450',
    },

    txt2: {
        fontSize: 20,
        color: colors.text2,
        marginRight: 4,
        marginTop: 4,
    },

    s2in: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 7,

    },
    s3: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 8,
        width: '100%',
    },

    buybtn: {
        backgroundColor: 'orange',
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: '500',
        borderRadius: 25,
        width: '80%',
        textAlign: 'center',
        elevation: 10,
    },












})