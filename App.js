import React, {useState} from 'react';
import {uuid} from 'uuidv4';

import {
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
      id: uuid(),
      item: 'cheese',
    },
    {
      id: uuid(),
      item: 'chips',
    },
    {
      id: uuid(),
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
