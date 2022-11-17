import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CalcButton = ({ type = 'digit', mode = 'small', label, onPress }) => {
  let buttonType = buttonColor.digitButton;
  if (type === 'special') {
    buttonType = buttonColor.specialButton;
  } else if (type === 'operator') {
    buttonType = buttonColor.operatorButton;
  }
  const buttonStyle = [
    mode === 'small' ? styles.button_small : styles.button_expanded,
    {
      backgroundColor: buttonType.bgColor,
    },
    styles.container,
  ];
  const textStyle = [
    styles.text,
    {
      color: buttonType.textColor,
    },
  ];
  return (
    <TouchableOpacity
      delayPressIn={0}
      delayLongPress={0}
      delayPressOut={0}
      style={StyleSheet.flatten(buttonStyle)}
      onPress={() => onPress(label, type)}>
      <Text style={StyleSheet.flatten(textStyle)}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: '650',
  },
  button_small: {
    borderRadius: 45,
    height: 90,
    width: 90,
  },
  button_expanded: {
    borderRadius: 45,
    height: 90,
    width: 200,
  },
});

const buttonColor = {
  digitButton: {
    bgColor: '#313131',
    textColor: '#f4f6f4',
  },
  specialButton: {
    bgColor: '#9e9f9e',
    textColor: '#000',
  },
  operatorButton: {
    bgColor: '#f69906',
    textColor: '#fff',
  },
};

export default CalcButton;
