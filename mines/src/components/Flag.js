import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
  return (
    <View style={StyleSheet.container}>
      <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]} />
      <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
      <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]} />
      <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  flagpole: {
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
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 14,
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 16,
  },
  flagpoleBigger: {
    height: 28,
    width: 4,
    marginLeft: 16,
  },
  flagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3,
  },
  base1Bigger: {
    height: 4,
    width: 12,
    marginTop: 25,
    marginLeft: 12,
  },
  base2Bigger: {
    height: 4,
    width: 20,
    marginLeft: 8,
    marginTop: 28,
  }
})