import React, {useState} from 'react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

  const isDarkMode = useColorScheme() === 'dark';
  // const {deleteItem} = hooks();

  const deleteItem = id => {
    setItems(prev => {
      return prev.filter(item => item.id !== id);
    });
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
      <View>
        <Header />
        {/* <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item} items={items} deleteItem={deleteItem} />
          )}
        /> */}
        <AddItem />
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            items={items}
            deleteItem={deleteItem}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
