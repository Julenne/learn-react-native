import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import params from './src/params';
import Field from './src/components/Field';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Iniciando o Mines</Text>
        <Text style={styles.sectionContainer}>Tamanho da Grade: 
          {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
        <Field opened/>
        <Field opened nearMines={4}/> 
        
        <Field mined opened exploded/>
        <Field flagged />
        <Field flagged opened/>
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//export default App;
