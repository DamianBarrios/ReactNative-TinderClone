import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
