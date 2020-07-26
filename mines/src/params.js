import { Dimensions } from 'react-native'

const params = {
  blockSize: 30, // tamanho do bloco
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, //proporção do painel superior na tela (cabeçalho)
  difficultLevel: 0.1,
  getColumnsAmount(){ // numero de colunas no dispositivos
    const width = Dimensions.get('window').width
    return Math.floor(width / this.blockSize)
  },
  getRowsAmount(){ // numero de linhas no dispositivo
    const totalHeight = Dimensions.get('window').height
    const boardHeight = totalHeight * (1 - this.headerRatio)
    return Math.floor(boardHeight / this.blockSize)
  }
}

export default params;