import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListItem({item}) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View>
        <Text style={styles.listItemText}>{item.item}</Text>
        <Icon name="close-circle-outline" size={12} color="red" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'rgba(39, 39, 39, 0.95)',
    padding: 12,
  },
  listItemText: {
    color: '#f8f8ff',
    fontSize: 20,
  },
});
