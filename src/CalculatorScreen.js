import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import CalcResult from './components/CalcResult';
import CalcButton from './components/CalcButton';

const CalculatorScreen = () => {
  const [result, setResult] = useState('0');

  const onButtonPress = (label, type) => {
    setResult(label);
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <CalcResult text={result} />
      </View>
      <View>
        <View style={styles.row}>
          <CalcButton onPress={onButtonPress} label="AC" type="special" />
          <CalcButton onPress={onButtonPress} label="+/-" type="special" />
          <CalcButton onPress={onButtonPress} label="%" type="special" />
          <CalcButton onPress={onButtonPress} label="/" type="operator" />
        </View>
        <View style={styles.row}>
          <CalcButton onPress={onButtonPress} label="7" />
          <CalcButton onPress={onButtonPress} label="8" />
          <CalcButton onPress={onButtonPress} label="9" />
          <CalcButton onPress={onButtonPress} label="x" type="operator" />
        </View>
        <View style={styles.row}>
          <CalcButton onPress={onButtonPress} label="4" />
          <CalcButton onPress={onButtonPress} label="5" />
          <CalcButton onPress={onButtonPress} label="6" />
          <CalcButton onPress={onButtonPress} label="-" type="operator" />
        </View>
        <View style={styles.row}>
          <CalcButton onPress={onButtonPress} label="1" />
          <CalcButton onPress={onButtonPress} label="2" />
          <CalcButton onPress={onButtonPress} label="3" />
          <CalcButton onPress={onButtonPress} label="+" type="operator" />
        </View>
        <View style={styles.row}>
          <CalcButton onPress={onButtonPress} label="0" mode="expanded" />
          <CalcButton onPress={onButtonPress} label="." />
          <CalcButton onPress={onButtonPress} label="=" type="operator" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingBottom: 30,
  },
  result: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default CalculatorScreen;
