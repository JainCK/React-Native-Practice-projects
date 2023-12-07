import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWeb(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.Elv]}>
        <View style= {styles.headingContainer}>
            <Text style={styles.headerText}>
                Whats Happening with progress
            </Text>
        </View>
        <Image
        source={{
            uri:'https://picsum.photos/200/300',
        }} style={styles.cardImg} />
        <View style={styles.cardBody}>
            <Text numberOfLines={3}>
            React Native is a JavaScript framework for building cross-platform mobile apps. 
            It uses a declarative programming paradigm and a component-based architecture,
            which makes it easy to learn and use. With React Native, you can write code once and deploy it to both iOS and Android platforms. 
            </Text>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => openWeb('https://reactnative.dev/')}>
                <Text style={styles.footerHead}>Read More...</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
      fontWeight: 'bold',
      paddingHorizontal: 8,
    },
    card : {
     width: 370,
      height: 360,
      borderRadius: 6,
      marginHorizontal:16,
      marginVertical:12
    },
    Elv : {
        backgroundColor: 'grey',
        elevation: 5,
        shadowOffset: {
          width: 1,
          height:1 
        }
    },
    headingContainer : {
        height: 40,
        justifyContent:'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight:'bold'
    },
    cardImg : {
        margin: 5,
        width: 360,
        height:210,
        borderRadius: 6,
    },
    cardBody:{
        paddingHorizontal: 8,
        fontSize: 18,
        fontStyle: 'italic',
        color: '#000000'
    },
    footer: {
        paddingVertical:5,
        paddingHorizontal: 8
    },
    footerHead: {
        fontSize :20,
        color:'blue',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
        borderRadius:5,
        paddingHorizontal:6,
        paddingVertical: 5
    }
})