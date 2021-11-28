var pick = 0 // Change pick (0 rock, 1 paper, 2 scissor)
var enemy = parseInt(Math.random() * 3) // Random element for bot
var element

function checkIfWin(you, enemy) { // Checks if you win, lose or draw
  if (you - enemy == 1 || you - enemy == -2) return 'You win'
  else if (you == enemy) return 'Draw'
  else return 'You lose'
}

function convert(convert) { // Convert number to designated element
  switch (convert) {
    case 0:
      element = 'Rock'
      break
    case 1:
      element = 'Paper'
      break
    case 2:
      element = 'Scissor'
      break
  }

  return element
}

console.log('You chose ' + convert(pick) + ' against ' + convert(enemy))
console.log(checkIfWin(pick, enemy))
