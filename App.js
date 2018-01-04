import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import HomeScreen from './app/components/home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.appcontainer}>
          <Text style={styles.app}>Subreddits App</Text>
        </View>

        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  appcontainer: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#e74c3c',
    width: Dimensions.get('window').width,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  app: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22
  }
});
