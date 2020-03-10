//document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
function play(audioId) {
  var audioFile = document.getElementById(audioId);
  audioFile.play();
}

var board = {}

function startBoard (num) {
  board = {}
  board.cells = []
  for (var i = 0; i < num; i++) {
    for (var j = 0; j< num; j++) {
      var cell= { 
        row: i, 
        col: j, 
        isMine: Math.random() <= 0.3,
        hidden: true,
      };
      board.cells.push (cell)
    }
  }

  for (var i = 0; i < board.cells; i++) {
    var cell= board.cells[i];
    cell.surroundingMines = countSurroundingMines (cell)
  }

  startGame();
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);

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
  var mineCount = 0;
  var markedCount = 0;
  var hiddenCount = 0;
  for (var i = 0; i < board.cells.length; i++) {
    var cell= board.cells[i];
    if (cell.isMine) {
      mineCount++;
    }
    if (cell.isMarked) {
      markedCount++;
    }
    if (cell.hidden && !cell.isMarked) {
      hiddenCount++;
    }
  }

  if (mineCount == markedCount && hiddenCount == 0) {
    play("winGame");
    lib.displayMessage('You win!')
    
  }

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
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var mineCount = 0;
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      mineCount++
    }
  }
  return mineCount;
}

