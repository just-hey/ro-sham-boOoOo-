const argv = require('yargs').argv

const moves = ['rock', 'paper', 'scissors']

function randomMove() {
  let num = Math.floor(Math.random() * 3)
  return moves[num]
}

class Player {
  constructor (move) {
    this.move = move || randomMove()
  }
}

class Game {
  constructor () {
    this.result = ''
  }

  playGame () {
    if (player1.move == player2.move) {
      this.result = '~Tie!~'
      return
    } else if (player1.move == 'rock' && player2.move == 'scissors' || player1.move == 'scissors' && player2.move == 'paper' || player1.move == 'paper' && player2.move == 'rock') {
                this.result = '~Player wins!~'
      return
    } else {
      this.result = '~Computer wins!~'
      return
    }
  }

  results () {
    console.log('Playing a game of Roshambo against the computer.')
    console.log(`Player plays ${player1.move}!`)
    console.log(`Computer plays ${player2.move}!`)
    console.log(`${this.result}`)
  }

}
const player1 = new Player(argv.move)
const player2 = new Player()
const final = new Game()
final.playGame()
final.results()
