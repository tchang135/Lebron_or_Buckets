import Ball from './ball.js'
import Hoop from '.hoop.js'
export default Game

class Game {
    constructor(root) {
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
        if (timer === 0) {
            return false
        } else {
            return true 
        };
      }


    animate() {
        this.ball.animate(this.ctx)
        this.hoop.animate(this.ctx)
    }

    timer () {
        let startTime = 60
        setInterval(countdown(startTime), 1000)
    }


}