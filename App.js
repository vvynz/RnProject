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

import Header from './Components/Header.js';

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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <View>
          <Header />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
