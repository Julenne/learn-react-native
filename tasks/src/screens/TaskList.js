import React, {Component} from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'

import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task';
import AddTask from './AddTask';
export default class TaksList extends Component {
  state = {
    showDoneTasks: true,
    showAddTask: true,
    visibleTasks: [],
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
  
  componentDidMount = () => {
    this.filterTasks();
  }

  toggleFilter = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks) 
      //alternância falso fica verdadeiro e verdadeiro fica falso para o botão de ver ou não as tasks concluidas
  }

  filterTasks = () => {
    let visibleTasks = null;
    if(this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks]
    } else {
      const pending = task => task.doneAt === null
      visibleTasks = this.state.tasks.filter(pending)
    }

    this.setState({ visibleTasks })
  }

  toggleTask = taskId => {
    const tasks = [...this.state.tasks] // copia do array
    tasks.forEach(task => {
      if(task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date()
      }
    })

    this.setState({ tasks }, this.filterTasks)
  }
  render() {
    const today = moment().locale('pt-br').format('dddd, D [de] MMMM')
      //colocar a data no app
    return (
      <View style={styles.container}>
        <AddTask isVisible={this.state.showAddTask}
          onCancel={() => this.setState({showAddTask: false})}/>
        <ImageBackground style={styles.background} source={todayImage}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} 
              size={20} color={commonStyles.colors.secondary}/>
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList data={this.state.visibleTasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} />} />
            {/* "{...item}" : é uma forma de pegar todos os atributos do
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
  },
  iconBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 45 : 10
  }

})