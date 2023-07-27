import React, {useState} from 'react';
import {
  Button,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AddItem({onSubmit, setItems, uuidv4}) {
  const [listItemFormData, setListItemFormData] = useState('');

  console.log(listItemFormData);

  const setFormChange = textValue => {
    setListItemFormData(textValue);
  };

  const clear = () => {
    setListItemFormData('');
  };

  return (
    <View style={styles.addItemView}>
      {listItemFormData.length === 0 ? (
        <TextInput
          onChangeText={setFormChange}
          name="item"
          value={listItemFormData}
          style={styles.addItemInput}
        />
      ) : (
        <TextInput
          onChangeText={setFormChange}
          name="item"
          value={listItemFormData}
          style={styles.addItemInput}>
          <Icon
            style={styles.deleteBtn}
            name="close-thick"
            size={20}
            color="red"
            onPress={() => clear}
          />
        </TextInput>
      )}
      <TouchableOpacity onPress={() => onSubmit(listItemFormData)}>
        {/* <Pressable style={styles.addBtn}> */}
        <Text style={styles.addBtnText}>Add item</Text>
        {/* </Pressable> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addItemView: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(39, 39, 39, 0.95)',
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
