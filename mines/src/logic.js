//matriz ('array de arrays')
const createBoard = (rows, colums) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(colums).fill(0).map((_, column) => {
      return {
        row,
        column,
        opened: false,
        flagged: false,
        mined: false,
        exploded: false,
        nearMines: 0
      }
    })
  })
}

//espalha de forma aleatória as minas pelo tabuleiro
const spreadMines = (board, minesAmount) => {
  const rows = board.length
  const colums = board[0].length
  let minesPlanted = 0

  while (minesPlanted < minesAmount) {
    //escolhe o lugar onde a mina será plantada a partir da aleatoridade da 
    //coluna e da linha, até a quantidade de minas plantadas for igual a 
    //quantidade do total de minas disponiveis para serem plantadas
    const rowSel = parseInt(Math.random() * rows, 10)
    const columnSel = parseInt(Math.random() * colums, 10)

    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true
      minesPlanted++
    }
  }
}

//cria um tabuleiro com as minas plantadas
const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns)
  spreadMines(board, minesAmount)
  return board

}

const cloneBoard = board => {
  return board.map(rows => {
    return rows.map(field => {
      return { ...field }
    })
  })
}

//vizinhos
const getNeighbors = (board, row, column) => {
  const neighbors = []
  const rows = [row - 1, row, row + 1]
  const columns = [column - 1, column, column + 1]
  rows.forEach(r => {
    columns.forEach(c => {
      const different = r !== row || c !== column
      const validRow = r >= 0 && r < board.length
      const validColumn = c >= 0 && c < board[0].length
      if (different && validRow && validColumn) {
        neighbors.push(board[r][c])
      }
    })
  })
  return neighbors
}

//se a vizinhança tem bomba ou não
const safeNeidhborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined
  return getNeighbors(board, row, column).reduce(safes, true)
}

//abre um campo
const openField = (board, row, column) => {
  const field = board[row][column]
  if (!field.opened) {
    field.opened = true
    if (field.mined) {
      field.exploded = true
    } else if (safeNeidhborhood(board, row, column)) {
      getNeighbors(board, row, column) //se for segura vai abrindo os campos ao redor 
        .forEach(n => openField(board, n.row, n.column))
    } else { //se nao for segura vai mostrar a quantidade de minas ao redor
      const neighbors = getNeighbors(board, row, column)
      field.nearMines = neighbors.filter(n => n.mined).length
    }
  }
}

const fields = board => [].concat(...board)
const hadExplosion = board => fields(board) //vê se o jogo acabou(mina explodadida)
  .filter(field => field.exploded).length > 0
const pending = field => (field.mined && !field.flagged)
  || (!field.mined && !field.opened)
const wonGame = board => fields(board).filter(pending).length === 0
const showMines = board => fields(board).filter(field => field.mined)
  .forEach(field => field.opened = true)

const invertFlag = (board,row,column) => {
  const field = board[row][column]
  field.flagged = !field.flagged
}

const flagsUsed = board => fields(board)
  .filter(field => field.flagged).length
export {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
}