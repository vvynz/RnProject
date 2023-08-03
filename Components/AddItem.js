import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

export default function AddItem({textInput, setTextInput, onSubmit}) {
  const setFormChange = textValue => {
    setTextInput(textValue);
  };

  return (
    <View style={styles.addItemView}>
      <TextInput
        onChangeText={setFormChange}
        name="item"
        value={textInput}
        style={styles.addItemInput}
      />

      <TouchableOpacity onPress={() => onSubmit(textInput)}>
        <Text style={styles.addBtnText}>Add item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addItemView: {
    display: 'flex',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(39, 39, 39, 0.95)',
  },
  addItemInput: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: '#a5a4a4',
    padding: 10,
    color: '#f8f8ff',
  },
  addBtnText: {
    height: 40,
    marginHorizontal: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#f8f8ff',
    borderWidth: 1,
    borderColor: '#a5a4a4',
  },
});
