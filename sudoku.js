/*
  > Écrire un programme qui résout des Sudokus.
  > L'entrée consiste en une matrice 9 × 9 contenant des nombres allant de 0 à 9, 
  où 0 représente une case vide devant être remplie.
  > Les règles du Sudoku sont simples : chaque chiffre doit apparaître une seule fois dans chaque ligne, 
  chaque colonne, ainsi que dans chaque sous-matrice de 3 × 3.
*/

/* 
  L’implémentation consiste à essayer de placer un chiffre valide dans une case vide, puis à passer à la case suivante. 
  Si une case n’est pas vide, on l’ignore et on continue avec la suivante.
*/
const sudoku = Array.from({ length: 9 }, () => Array(9).fill(0));

function isInRow(number,row) {
  for (let i = 0; i < 9; i++) {
    if (sudoku[row][i] === number) return true
  }
  return false
}


function isInColumn(number,col) {
  for (let i = 0; i < 9; i++) {
    if (sudoku[i][col] === number) return true
  }
  return false
}


function isInSubMatrix(number,row,col) {
  row = Math.floor(row / 3);
  col = Math.floor(col / 3);

  for (let i = 3*row; i < 3*(row+1)   ; i++) {
    for (let j = 3*col; j <3*(col+1) ; j++) {
      if (sudoku[i][j] === number) return true
    } 
  }
  return false;
}

function solveSudoku(position = 0) {
  let row = Math.floor(position / 9);
  let col = position % 9;
  if (row == 9) {
    printSudoku();
    return;
  }
  if (sudoku[row][col]!== 0) {
    solveSudoku(position + 1);
  } else {
    // Try all numbers from 1 to 9
    for (let i = 1; i <= 9; i++) {
      if (!isInRow(i, row) && !isInColumn(i, col) && !isInSubMatrix(i, row, col)) {
        sudoku[row][col] = i; // Place i in cell (row, col)
        solveSudoku(position + 1); // Move to the next cell
        sudoku[row][col] = 0; // Set as empty to reuse
      }
    }
  }
}

function printSudoku() {
  console.log("===== START =====\n") ;
  for (let i = 0; i < 9; i++) {
      console.log(sudoku[i].join(" ")) ;
  }
  console.log("===== END =====\n") ;
}

function main(number) {
  const input = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  for (let i = 0; i < 9; i++) {
    sudoku[i] = [...input[i]];
  }

  solveSudoku();
}

main();