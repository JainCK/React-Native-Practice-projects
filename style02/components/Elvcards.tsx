import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elvcards() {
  return (
    <View>
      <Text style={styles.headingText}>Elvated cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.Elv]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.Elv]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.Elv]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.Elv]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.Elv]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.Elv]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:100,
        height:100,
        margin: 4,
        borderRadius: 4,
    },
    Elv: {
        backgroundColor: 'purple',
        elevation: 8,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor:'white'
    }
})