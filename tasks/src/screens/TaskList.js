import React, {Component} from 'react'
import {View, Text, ImageBackground, StyleSheet } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'


export default class TaksList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={todayImage}>

        </ImageBackground>
        <View style={styles.taskList}>
          <Text>TaskList</Text>
        </View>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  //o flex significa "crescer" na tela
  container:{
    flex: 1//flex ou fleGrow
  },
  background:{
    flex: 3
  },
  taskList: {
    flex: 7 
  }
})