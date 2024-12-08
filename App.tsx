/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from './app/utils/ColorUtils';
import { Provider, useSelector } from 'react-redux';
import Store from './app/state/stores/Store';
import ThemeManager from './app/state/ThemeManager';
import AppScreen from './app/AppScreen';

function App(): React.JSX.Element {
  return (
    <Provider store={Store}>
      <ThemeManager>
        <View style={styles.appContainer}>
          <AppScreen></AppScreen>
        </View>
      </ThemeManager>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  }
});

export default App;
