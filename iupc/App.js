import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';




TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title, backgroundColor, }) => (
  <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, { backgroundColor: backgroundColor, }]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>);

const Flex = () => {

  const [number, setNumber] = useState('0');
  return (
    <View style={[styles.container, { flex: 1 }]}>

      <View style={[styles.result, { flex: 1, backgroundColor: "#C0C0C0", justifyContent: 'flex-end', }]} >
      <Text style={styles.resultNumber}>{number}</Text>
      </View>

      <View style={[{ flex: 2, backgroundColor: "black", }]} >
        <View style={{ flexDirection: 'row', flex: 1 }} >
          <AppButton title="AC" size="sm" backgroundColor="#696969" onPress={() => setNumber('0')}/>
          <AppButton title="+/-" size="sm" backgroundColor="#696969" onPress={() => setNumber('+/-')}/>
          <AppButton title="%" size="sm" backgroundColor="#696969" onPress={() => setNumber('%')}/>
          <AppButton title="/" size="sm" backgroundColor="#FFA500" onPress={() => setNumber('/')}/>
        </View>

        <View style={{ flexDirection: 'row', flex: 1 }} >
          <AppButton title="7" size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber('7')} />
          <AppButton title="8" size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber('8')}/>
          <AppButton title="9" size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber('9')}/>
          <AppButton title="x" size="sm" backgroundColor="#FFA500" onPress={() => setNumber('x')}/>
        </View>

        <View style={{ flexDirection: 'row', flex: 1 }} >
          <AppButton title="4" size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber('4')}/>
          <AppButton title="5" size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber('5')}/>
          <AppButton title="6" size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber('6')}/>
          <AppButton title="+" size="sm" backgroundColor="#FFA500" onPress={() => setNumber('+')}/>
        </View>

        <View style={{ flexDirection: 'row', flex: 1 }} >
          <AppButton title="1" size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber('1')}/>
          <AppButton title="2" size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber('2')}/>
          <AppButton title="3" size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber('3')}/>
          <AppButton title="-" size="sm" backgroundColor="#FFA500" onPress={() => setNumber('-')}/>
        </View>

        <View style={{ flexDirection: 'row', flex: 1 }} >
          <View style={{ flexDirection: 'row', flex: 2 }} >
            <AppButton title="0" size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber('0')}/>
          </View>
          <View style={{ flexDirection: 'row', flex: 1 }} >
            <AppButton title="," size="sm" backgroundColor="#A9A9A9" onPress={() => setNumber(',')} />
          </View>
          <View style={{ flexDirection: 'row', flex: 1 }} >
            <AppButton title="=" size="sm" backgroundColor="#FFA500" onPress={() => setNumber('=')}/>
          </View>
        </View>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  appButtonContainer: {
    elevation: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    
  },

  resultNumber: {
    fontSize: 90,
    color: 'white',
    textAlign: 'right',
  }
});

export default Flex;
