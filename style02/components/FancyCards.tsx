import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style= {styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.Elv]}>
      <Image 
      source={{
        uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6rPd9hx_fUGzorshx1fG5kzUM5FGCSYmm2YBuLU3uSFFI5BviIWd6hrHbw&s'
      }} 
      style = {styles.cardImg}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Fish</Text>
        <Text style={styles.cardLabel}>Tank</Text>
        <Text style={styles.cardDesc}>This is just a fish who is every livid and uninterested with everything, Thank you</Text>
        <Text style={styles.cardFooter}>one catch away</Text>
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
    card: {
      width: 370,
      height: 360,
      borderRadius: 6,
      marginHorizontal:16,
      marginVertical:12
    },
    Elv: {
      backgroundColor: 'grey',
      elevation: 5,
      shadowOffset: {
        width: 1,
        height:1 
      }
    },
    cardImg: {
      height: 180,
      marginBottom: 8,
      borderTopLeftRadius:6,
      borderTopRightRadius: 6
    },
    cardBody: {
      flex:1,
      flexGrow: 1,
      paddingHorizontal: 12
    },
    cardTitle: {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 6
    },
    cardLabel : {
      color: '#000000',
      fontSize: 15,
      marginBottom: 4
    },
    cardDesc : {
      color: '#000000',
      marginBottom: 6,
      fontSize: 13,
    },
    cardFooter: {
      color: '#000000'
    }
})