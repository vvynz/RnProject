import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListItem({item, deleteItem}) {
  console.log(item.item);
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.item}</Text>
        <Icon
          name="close-circle-outline"
          size={18}
          color="red"
          onClick={() => deleteItem(item.id, item)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'rgba(39, 39, 39, 0.95)',
    padding: 12,
  },
  listItemView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    color: '#f8f8ff',
    fontSize: 20,
  },
  listItemIcon: {},
});
