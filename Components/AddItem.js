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

export default function AddItem({setItems, uuidv4}) {
  const [listItemFormData, setListItemFormData] = useState('');

  const onSubmit = () => {
    // e.preventDefault();

    // const newListItem = {
    //   id: uuidv4(),
    //   item: listItemFormData.item,
    // };

    // const newData = [newListItem, ...prevListItems];

    setItems(prev => {
      return [{id: uuidv4(), item: listItemFormData}, ...prev];
    });

    setListItemFormData('');
  };
  console.log(listItemFormData);

  const setFormChange = textValue => {
    setListItemFormData(textValue);
  };

  return (
    <View style={styles.addItemView}>
      <TextInput
        onChangeText={setFormChange}
        name="item"
        value={listItemFormData}
        style={styles.addItemInput}
      />
      <TouchableOpacity onPress={() => onSubmit()}>
        {/* <Pressable style={styles.addBtn}> */}
        <Text style={styles.addBtnText}>Add item</Text>
        {/* </Pressable> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addItem: {},
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
