import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];
  return (
    <View>
      <Text style={styles.headerText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl}) => (
            <View key={uid} style={styles.Ucard}>
                <Image 
                source={{
                    uri: imageUrl
                }}
                style={styles.uImg} />
                <View>
                <Text style={styles.Uname}>{name}</Text>
                <Text style={styles.Ustatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headerText : {
        fontSize: 25,
      fontWeight: 'bold',
      paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom:4
    },
    Ucard : {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius :10
    },
    uImg :{
        height:60,
        width:60,
        borderRadius:60/2,
        marginRight: 14
    },
    Uname:{
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    Ustatus:{

    },

})