import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import logo from '../../../assets/logo.png';
import { colors, hr80 } from '../../globals/style';
import { useState, useEffect } from 'react';

import { firebase } from '../../../Firebase/FirebaseConfig';
const WelcomeScreen = ({ navigation }) => {

    const [userlogged, setUserlogged] = useState(null);
    useEffect(() => {
        const checklogin = () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // console.log(user);
                    setUserlogged(user);
                } else {
                    setUserlogged(null)
                    console.log('No user logged in')
                }
            })
        }
        checklogin()
    }, [])


   //  console.log(userlogged);   koshish krain details waghera na print krwaen, for testing purpose only

    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setUserlogged(null);
            console.log('User logged out');
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Welcome To Mom's Kitchen </Text>
            <View style={styles.logoout}>
                <Image source={logo} style={styles.logo} />
            </View>
            < View style={hr80} />
            <Text style={styles.text} >
                The best food delivery in town!
            </Text>
            < View style={hr80} />

            {userlogged == null ?
                <View style={styles.btnout}>
                    <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                        <Text style={styles.btn}> Sign Up </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={styles.btn}>Log In
                        </Text>
                    </TouchableOpacity>
                </View>

                :
                <View style={styles.logged}>
                    <Text style={styles.txtlog}>Signed in as &nbsp;
                    <Text style={styles.txtlogin}>{userlogged.email}
                    </Text></Text>
                    
                    <View style={styles.btnout}>
                        <TouchableOpacity onPress={() => navigation.navigate('home')}>
                            <Text style={styles.btn}>Go to Home </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleLogout() }>
                            <Text style={styles.btn}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',  //#C21807'
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    title: {
        fontSize: 47,
        color: colors.col1,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '200',

    },
    logoout: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        //fbackgroundColor: '#fff',
        //justifyContent: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',

    },
    text: {
        fontSize: 19,
        width: '80%',
        color: colors.col1,
        textAlign: 'center',
    },

    btnout: {

        flexDirection: 'row',
    },
    btn: {
        fontSize: 20,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 60,
        marginHorizontal: 10,
        fontWeight: '700',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 11,
        paddingHorizontal: 20,
        bottom: -9,
    },

    logged: {
        alignItems: 'center',

    },
    txtlog: {
        fontSize: 16,
        color: colors.col1,
    },
    txtlogin: {
        fontSize: 16,
        color: colors.col1,
        fontWeight: '700',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
    },


})

export default WelcomeScreen