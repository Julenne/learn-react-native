//matriz ('array de arrays')
const createBoard = (rows, colums) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(colums).fill(0).map((_,column) => {
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

  while(minesPlanted < minesAmount){
    //escolhe o lugar onde a mina será plantada a partir da aleatoridade da 
    //coluna e da linha, até a quantidade de minas plantadas for igual a 
    //quantidade do total de minas disponiveis para serem plantadas
    const rowSel = parseInt(Math.random() * rows, 10)
    const columnSel = parseInt(Math.random() * colums, 10)

    if(!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true
      minesPlanted++
    }
  }
}

//cria um tabuleiro com as minas plantadas
const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns)
  spreadMines(board,minesAmount)
  return board

}

export { createMinedBoard }