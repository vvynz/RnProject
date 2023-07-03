import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    padding: 15,
    backgroundColor: '#272727',
  },
  text: {
    color: '#ddbbff',
    textAlign: 'center',
    fontSize: 18,
  },
});
