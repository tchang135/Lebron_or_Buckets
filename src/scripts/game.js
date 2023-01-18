import Ball from './ball.js'
import Hoop from './hoop.js'
import Backboard from './backboard.js'


class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.registerEvents();
        this.restart();
    }

    play() {
        this.running = true;
        this.animate();
    }
    
    restart() {
        this.running = false;
        this.score = 0;
        this.ball = new Ball();
        this.hoop = new Hoop();
        this.animate();
    }
    
    registerEvents() {
        
    }
    
    
    gameOver() {
        //some kind of error message, try again
    };
      


    animate() {
        this.ball.animate(this.ctx)
        this.hoop.animate(this.ctx)
        // this.backboard.animate(this.ctx)
    }

    timer() {
        let startTime = 60
        while (startTime > 0) {
        setInterval(function() {
            startTime -= 1
        }, 1000)
        return startTime
        }
        // somehow display timer
    }

    scoreboard() {
        //have set score that player needs to beat on display 
        //have current score as 0, and increment everytime the ball passing through the hoop is detected
    }

    
}




export default Game


