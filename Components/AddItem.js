import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {create} from 'react-test-renderer';

export default function AddItem() {
  return (
    <TouchableOpacity>
      <View style={styles.addItemView}>
        <TextInput style={styles.addItemInput} />
        <Text>+</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addItemView: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  addItemInput: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: '#a5a4a4',
    padding: 10,
  },
});
