import React from 'react';
import {
  Button,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

export default function AddItem({listItemFormData, setListItemFormdata}) {
  const setFormChange = e => {
    e.preventDefault();

    const {name, value} = e.target;

    const newListItem = {...listItemFormData};

    newListItem[name] = value;

    setListItemFormdata(newListItem);
  };

  return (
    <TouchableOpacity style={styles.addItem}>
      <View style={styles.addItemView}>
        <TextInput
          onChange={e => setFormChange(e)}
          style={styles.addItemInput}
        />
        <Pressable style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add</Text>
        </Pressable>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addItem: {
    backgroundColor: 'rgba(39, 39, 39, 0.95)',
  },
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
    color: '#f8f8ff',
  },
  addBtn: {
    height: 40,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#a5a4a4',
  },
  addBtnText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#f8f8ff',
  },
});
