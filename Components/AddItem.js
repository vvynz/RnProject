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
  const [listItemFormData, setListItemFormData] = useState([
    {
      id: uuidv4(),
      item: '',
    },
  ]);

  const onSubmit = e => {
    e.preventDefault();

    // const newListItem = {
    //   id: uuidv4(),
    //   item: listItemFormData.item,
    // };

    // const newData = [newListItem, ...prevListItems];

    setItems(prev => {
      return [{id: uuidv4(), item: listItemFormData.item}, ...prev];
    });
  };
  console.log(listItemFormData);

  const setFormChange = e => {
    e.preventDefault();

    const {name, value} = e.target;

    const newListItem = {...listItemFormData};

    newListItem[name] = value;

    setListItemFormData(newListItem);
  };

  return (
    <View style={styles.addItemView}>
      <TextInput
        onChange={e => setFormChange(e)}
        keyboardType="default"
        value={listItemFormData.item}
        name="item"
        style={styles.addItemInput}
      />
      <TouchableOpacity onPress={e => onSubmit(e)}>
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
