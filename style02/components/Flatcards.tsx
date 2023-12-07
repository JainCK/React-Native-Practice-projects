import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View  style={[styles.card, styles.card1]}>
        <Text>Red</Text>
        </View>
        <View  style={[styles.card, styles.card2]}>
        <Text>Blue</Text>
        </View>
        <View  style={[styles.card, styles.card3]}>
        <Text>Green</Text>
        </View>
        <View  style={[styles.card, styles.card3]}>
        <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container : {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card : {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    card1 : {
        backgroundColor: 'red'
    },
    card2 : {
        backgroundColor: 'blue'
    },
    card3 : {
        backgroundColor: 'green'
    }
})