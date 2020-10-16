import React, {Component} from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task';

export default class TaksList extends Component {
  state ={
    tasks: [{
      id: Math.random(),
      desc: 'Comprar Livro de React Native',
      estimateAt: new Date(),
      doneAt: new Date(),
    }, {
      id: Math.random(),
      desc: 'Ler Livro de React Native',
      estimateAt: new Date(),
      doneAt: null,
    }]
  }
  
  
  render() {
    const today = moment().locale('pt-br').format('dddd, D [de] MMMM')
      //colocar a data no app
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={todayImage}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList data={this.state.tasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <Task {...item} />} />
            {/* "<Task {...item} />" : é uma forma de pegar todos os atributos do
             item e passar como props para "Task" */}
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
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom:20,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom:30,
  }

})