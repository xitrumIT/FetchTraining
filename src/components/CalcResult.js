import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CalcResult = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingEnd: 30,
    paddingVertical: 20,
  },
  display: {
    fontSize: 70,
    color: 'white',
    textAlign: 'right',
  },
});
export default CalcResult;
