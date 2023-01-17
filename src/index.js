import Example from './scripts/example.js';
import Ball from './scripts/ball.js'
import Hoop from './scripts/hoop.js'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#canvas')
    const ctx = root.getContext('2d')
    let basketball = new Ball()
    let hooptest = new Hoop()

    basketball.drawBall(ctx)
    hooptest.drawHoop(ctx)


    //let timeToPlay = new Game(root) 
    //timeToPlay.play()

    // if timeToPlay.hoop.score 
    //timeToPlay.scoreboard.score += 1 

    // if timeToPlay.timer() === 0, return timeToPlay.gameOver
    
    
})


