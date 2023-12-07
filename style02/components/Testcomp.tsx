import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Testcomp() {
  return (
    <View>
      <Text style={styles.headerText}>Testing components</Text>
      <Button
      title='Press me'
       onPress={() => Alert.alert('Button pressed')}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    headerText: {

    }
})