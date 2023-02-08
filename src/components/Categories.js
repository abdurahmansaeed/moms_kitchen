import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../globals/style'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Burger</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="food-turkey" size={28} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Chicken Roast</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="rice" size={24} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Rice Dishes</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="bowl" size={30} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Pulse Dishes</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="pizza-slice" size={24} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Pizza</Text>
        </View>
        <View style={styles.box}>
          <MaterialIcons name="local-dining" size={30} color="black" style={styles.myicon} />
          <Text style={styles.mytext}>Continental Food</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

  container: {

    backgroundColor: colors.col1,
    width: '100%',
    //height : 100,
    // alignItems: 'center',
    elevation: 20,
    borderRadius: 13,
    top:-10,
  },
  head: {
    color: colors.text1,
    fontSize: 29,
    fontWeight: '300',
    margin: 5,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
    top: -5,
  },
  box: {
    backgroundColor: 'white',
    elevation: 50,
    margin: 6,
    padding: 7,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  myicon: {
      marginRight : 10,
      color: colors.text3,
     // alignItems: 'center',
     // flexDirection: 'row',
      //paddingBottom: 5,
      //paddingTop : 0,
          color: colors.text1,



  },

  mytext: {
    color: colors.text3,
  },
})