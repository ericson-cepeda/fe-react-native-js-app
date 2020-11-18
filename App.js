/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import CircularIndeterminate from './src/app-mobile'


library.add(fas, fab)

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <CircularIndeterminate/>
    </>
  );
};

export default App;
