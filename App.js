import React, {useState} from 'react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Dimensions,
} from 'react-native';
import {View} from 'react-native-ui-lib';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import hooks from './hooks';

import Header from './Components/Header.js';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';

export default function App() {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      item: 'cheese',
    },
    {
      id: uuidv4(),
      item: 'chips',
    },
    {
      id: uuidv4(),
      item: 'lemonade',
    },
  ]);
  const [textInput, setTextInput] = useState('');
  console.log('items =', items);

  const isDarkMode = useColorScheme() === 'dark';
  // const {deleteItem} = hooks();

  const deleteItem = id => {
    setItems(prev => {
      return prev.filter(item => item.id !== id);
    });
  };

  const onSubmit = item => {
    if (!textInput) {
      Alert.alert('Error', 'Please enter an item', [
        {
          text: 'Ok',
          style: 'default',
        },
      ]);
    } else {
      setItems(prev => {
        return [{id: uuidv4(), item}, ...prev];
      });

      clear();
    }
  };

  const clear = () => {
    setTextInput('');
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Header />
        {/* <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item} items={items} deleteItem={deleteItem} />
          )}
        /> */}
        <AddItem
          onSubmit={onSubmit}
          setItems={setItems}
          uuidv4={uuidv4}
          textInput={textInput}
          setTextInput={setTextInput}
        />
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            setItems={setItems}
            deleteItem={deleteItem}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(39, 39, 39, 0.95)',
    height: screenHeight,
  },
});
