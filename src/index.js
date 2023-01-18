
import Ball from './scripts/ball.js'
import Hoop from './scripts/hoop.js'
import Backboard from './scripts/backboard.js'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#canvas')
    const ctx = root.getContext('2d')
    
    


    //let timeToPlay = new Game(root) 
    //timeToPlay.play()

    // if timeToPlay.hoop.score 
    //timeToPlay.scoreboard.score += 1 

    // if timeToPlay.timer() === 0, return timeToPlay.gameOver
    function mouseMovement(ele) {
        let mouse = {x: 0, y: 0, event: null}
        let body_scrollLeft = document.body.scrollLeft
        let element_scrollLeft = document.documentElement.scrollLeft
        let body_scrollTop = document.body.scrollTop
        let element_scrollTop = document.documentElement.scrollTop
        let offsetLeft = ele.offsetLeft
        let offsetTop = ele.offsetTop
        
        ele.addEventListener('mousemove', function (event) {
          let x, y;
          
          if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
          } else {
            x = event.clientX + body_scrollLeft + element_scrollLeft;
            y = event.clientY + body_scrollTop + element_scrollTop;
          }
          x -= offsetLeft;
          y -= offsetTop;
          
          mouse.x = x;
          mouse.y = y;
          mouse.event = event;
        }, false);
        
        return mouse;
      };  

      function cursorInside(rect, x, y) {
        return !(x < rect.x ||
                 x > rect.x + rect.width ||
                 y < rect.y ||
                 y > rect.y + rect.height);
      };
          window.onload = function () {
            let canvas = document.getElementById('canvas')
            let context = canvas.getContext('2d')
            let mouse = mouseMovement(canvas)
            let ball = new Ball()
            let hooptest = new Hoop()
            let back = new Backboard()
            let vx = Math.random() * 10 - 5
            let vy = -10
            let bounce = -0.7
            let gravity = 0.2
            let isMouseDown = false
            let oldX
            let oldY
      
            ball.x = 0;
            ball.y = -50;
            
            canvas.addEventListener('mousedown', function () {
              if (cursorInside(ball.getBounds(), mouse.x, mouse.y)) {
                isMouseDown = true;
                oldX = ball.x;
                oldY = ball.y;
                canvas.addEventListener('mouseup', onMouseUp, false);
                canvas.addEventListener('mousemove', onMouseMove, false);
              }
            }, false);
            
            function onMouseUp () {
              isMouseDown = false;
              canvas.removeEventListener('mouseup', onMouseUp, false);
              canvas.removeEventListener('mousemove', onMouseMove, false);
            }
            
            function onMouseMove (event) {
              ball.x = mouse.x;
              ball.y = mouse.y;
            }
      
            function trackVelocity () {
              vx = ball.x - oldX;
              vy = ball.y - oldY;
              oldX = ball.x;
              oldY = ball.y;
            }
      
            function checkBoundaries () {
              let left = -200
              let right = 800
              let top = -400
              let bottom = 100;
              
              vy += gravity;
              ball.x += vx;
              ball.y += vy;
              //boundary detect and bounce
              if (ball.x + ball.radius > right) {
                ball.x = right - ball.radius;
                vx *= bounce;
              } else if (ball.x - ball.radius < left) {
                ball.x = left + ball.radius;
                vx *= bounce;
              }
              if (ball.y + ball.radius > bottom) {
                ball.y = bottom - ball.radius;
                vy *= bounce;
              } else if (ball.y - ball.radius < top) {
                ball.y = top + ball.radius;
                vy *= bounce;
              }
            }
      
            (function frames () {
              window.requestAnimationFrame(frames, canvas);
              context.clearRect(0, 0, canvas.width, canvas.height);
              
              if (isMouseDown) {
                trackVelocity();
              } else {
                checkBoundaries();
              }
              ball.drawBall(context);
              hooptest.drawHoop(ctx)
              back.drawBack(ctx)
            }());
          };
    
})
    


