import Example from './scripts/example.js';
import Ball from './scripts/ball.js'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#canvas')
    const ctx = root.getContext('2d')
    let basketball = new Ball()

    basketball.drawBall(ctx)
    
    
})


