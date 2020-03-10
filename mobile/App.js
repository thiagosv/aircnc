import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return <SafeAreaView style={styles.container}><Routes /></SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 150
  }
});