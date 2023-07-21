import React from 'react';
import {
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AddItem() {
  return (
    <TouchableOpacity>
      <View style={styles.addItemView}>
        <TextInput style={styles.addItemInput} />
        <Button title="Add" color="#a5a4a4" style={styles.addItemBtn} />
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
  addItemBtn: {
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#a5a4a4',
  },
});
