import React, { useState } from 'react';
import Snackbar from 'react-native-snackbar';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  Pressable,
} from 'react-native';


import { currencyByRupee  } from './constants';
import CurBtn from './components/CurBtn';



function App(): React.JSX.Element {
  const [inputVal, setInputVal] = useState('')
  const [resultVal, setResultVal] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')
  
  const buttonPressed = (targetVal: Currency) =>{
    if (!inputVal) {
      return Snackbar.show({
        text: "Enter a Val to convert",
        backgroundColor: "#EA7773",
        textColor: "#FFFFFF"
      })
    } 

    const inputAmt = parseFloat(inputVal)
    if (!isNaN(inputAmt)){
      const convertedVal = inputAmt * targetVal.value
      const result = `${targetVal.symbol} ${convertedVal.toFixed(2)}`
      setResultVal(result)
      setTargetCurrency(targetVal.name)
    } else {
      return Snackbar.show({
        text: "ENot a valid number",
        backgroundColor: "#EA7773",
        textColor: "#FFFFFF"
      })
    }
  }
  
  return (
    <>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            maxLength={14}
            value={inputVal}
            clearButtonMode='always' //only for iOS
            onChangeText={setInputVal}
            keyboardType='number-pad'
            placeholder='Enter amount in Rupees'
            />
          </View>
          {resultVal && (
            <Text style={styles.resultTxt} >
              {resultVal}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
            style={[
              styles.button, 
              targetCurrency === item.name && styles.selected
            ]}
            onPress={() => buttonPressed(item)}
            >
              <CurBtn {...item} />
            </Pressable>
          )}
          />
        </View>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
