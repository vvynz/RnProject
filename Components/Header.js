import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Colors} from 'react-native-ui-lib';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text text30 center style={{color: Colors.textColor}}>
        Shopping List
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 75,
    padding: 15,
    backgroundColor: '#272727',
  },
  text: {
    color: '#ddbbff',
    textAlign: 'center',
    fontSize: 18,
  },
});

Colors.loadColors({
  textColor: '#ddbbff',
});
