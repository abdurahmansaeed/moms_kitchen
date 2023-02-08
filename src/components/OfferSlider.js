import { StyleSheet, Text, View, Image,StatusBar } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors } from '../globals/style'
import { Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const win = Dimensions.get('window');



const OfferSlider = () => {
  return (

    <View>
      <View style={styles.offerSlider}>
        <Swiper autoplay={true} autoplayTimeout = {3} showsButtons = {true}
         dotColor = {colors.text2} activeDotColor={colors.text1}
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
         >
          <View style={styles.slide}>
           <Image source={require('../../assets/OfferSliderImages/1.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
           <Image source={require('../../assets/OfferSliderImages/2.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
           <Image source={require('../../assets/OfferSliderImages/3.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
           <Image source={require('../../assets/OfferSliderImages/4.png')} style={styles.image} />
          </View>
          <View style={styles.slide}>
           <Image source={require('../../assets/OfferSliderImages/5.png')} style={styles.image} />
          </View>
        </Swiper>

      </View>
    </View>

  )
}

export default OfferSlider

const styles = StyleSheet.create({

  offerSlider: {
      width: '100%',
      height: 240,
      backgroundColor: colors.col1,
     paddingHorizontal: 7,
      justifyContent: 'center',
      alignItems: 'center',
    marginVertical: -8,
  // marginHorizontal: 10,
      

  },
  slide: {
      width: '100%',
      height: 240,
      backgroundColor: colors.col1,
      justifyContent: 'center',
      alignItems: 'center',
     //marginVertical: 10,
      
    },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    elevation: 20,
    //resizeMode: 'contain',
  },
buttonText:{

  color:colors.text1,
  fontSize: 45,
  fontWeight: '500',
  backgroundColor: 'white',
  borderRadius: 20,
  width: 40,
  height: 40,
  textAlign: 'center',
  lineHeight: 40,
}
})