import React from 'react';
import type { PropsWithChildren } from 'react';
import {

  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imgUrl: ImageSourcePropType
}>

const Dice = ({imgUrl}: DiceProps): JSX.Element => {
   return (
    <View>
      <Image  style={styles.diceImage} source={imgUrl}/>
    </View>
   )
}

function App(): JSX.Element {

  return (
    <View>
      <Text>Text</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});


export default App;
