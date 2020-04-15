
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Button from './src/component/Button';
import Display from './src/component/Display';

export default class App extends Component {
  state = {
    displayValue: '0'
  }
  addDigit = n => { //numeros e o ponto
    this.setState({displayValue: n})
  }

  clearMemory = () => { // limpar(AC)
    this.setState({ displayValue: '0'})
  }

  setOperation = operation => { // simbolos que n são os numeros da calculadora

  }
  render() {
    return(
      <View style= {styles.container}>
        <Display value={this.state.displayValue} />
        <View style= {styles.buttons}>
          <Button label='AC'triple onClick={() => this.clearMemory} />
          <Button label='/' operation onClick ={() => this.setOperation('/')}/>
          <Button label='7' onClick={() => this.addDigit(7)}/>
          <Button label='8' onClick={() => this.addDigit(8)}/>
          <Button label='9' onClick={() => this.addDigit(9)}/>
          <Button label='*' operation onClick ={() => this.setOperation('*')}/>
          <Button label='4' onClick={() => this.addDigit(4)}/>
          <Button label='5' onClick={() => this.addDigit(5)}/>
          <Button label='6' onClick={() => this.addDigit(6)}/>
          <Button label='-' operation onClick ={() => this.setOperation('-')}/>
          <Button label='1' onClick={() => this.addDigit(1)}/>
          <Button label='2' onClick={() => this.addDigit(2)}/>
          <Button label='3' onClick={() => this.addDigit(3)}/>
          <Button label='+' operation onClick ={() => this.setOperation('+')}/>
          <Button label='0' double onClick={() => this.addDigit(0)}/>
          <Button label='.' onClick={() => this.addDigit('.')}/>
          <Button label='=' operation onClick ={() => this.setOperation('=')}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row', //linha
    flexWrap: 'wrap', //quebra a linha
  },
});

//export default App;
