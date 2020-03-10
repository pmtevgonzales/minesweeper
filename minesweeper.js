//document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}

function startBoard (num) {
  board.cells = []
  for (var i = 0; i < num; i++) {
    for (var j = 0; j< num; j++) {
      board.cells.push ({ 
        row: i, 
        col: j, 
        isMine: Math.random() <= 0.3, 
        hidden: true
      })
    }
  }
  startGame();
}

function hideIntro() {
  const intro = document.getElementById("intro");
  intro.classList.add("hide");
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  hideIntro();
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}


