/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import First from './First';
import Sec from './Sec';
import JdScrollPage from './JdScrollPage';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="First" component={First} />
          <Stack.Screen name="Sec" component={Sec} />
          <Stack.Screen name="JdScrollPage" component={JdScrollPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
