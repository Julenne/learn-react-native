import React from 'react'
import {View, StyleSheet} from 'react-native'

export default props => {
  return (
    <View style={StyleSheet.container}>
      <View style={styles.flagpole} />
      <View style={styles.flag} />
      <View style={styles.base1} />
      <View style={styles.base2} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  flagpole:{
    position: 'absolute',
    height: 13,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
    marginTop: 4,
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#F22',
    marginLeft: 3,
    marginTop: 4,
  },
  base1:{
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 13,
  },
  base2:{
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 15,
  },
})