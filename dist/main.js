/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ball.js */ \"./src/scripts/ball.js\");\n/* harmony import */ var _scripts_hoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/hoop.js */ \"./src/scripts/hoop.js\");\n/* harmony import */ var _scripts_backboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/backboard.js */ \"./src/scripts/backboard.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const root = document.querySelector('#canvas');\n  const ctx = root.getContext('2d');\n\n  //let timeToPlay = new Game(root) \n  //timeToPlay.play()\n\n  // if timeToPlay.hoop.score \n  //timeToPlay.scoreboard.score += 1 \n\n  // if timeToPlay.timer() === 0, return timeToPlay.gameOver\n  function mouseMovement(ele) {\n    let mouse = {\n      x: 0,\n      y: 0,\n      event: null\n    };\n    let body_scrollLeft = document.body.scrollLeft;\n    let element_scrollLeft = document.documentElement.scrollLeft;\n    let body_scrollTop = document.body.scrollTop;\n    let element_scrollTop = document.documentElement.scrollTop;\n    let offsetLeft = ele.offsetLeft;\n    let offsetTop = ele.offsetTop;\n    ele.addEventListener('mousemove', function (event) {\n      let x, y;\n      if (event.pageX || event.pageY) {\n        x = event.pageX;\n        y = event.pageY;\n      } else {\n        x = event.clientX + body_scrollLeft + element_scrollLeft;\n        y = event.clientY + body_scrollTop + element_scrollTop;\n      }\n      x -= offsetLeft;\n      y -= offsetTop;\n      mouse.x = x;\n      mouse.y = y;\n      mouse.event = event;\n    }, false);\n    return mouse;\n  }\n  ;\n  function cursorInside(rect, x, y) {\n    return !(x < rect.x || x > rect.x + rect.width || y < rect.y || y > rect.y + rect.height);\n  }\n  ;\n  window.onload = function () {\n    let canvas = document.getElementById('canvas');\n    let context = canvas.getContext('2d');\n    let mouse = mouseMovement(canvas);\n    let ball = new _scripts_ball_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    let hooptest = new _scripts_hoop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    let back = new _scripts_backboard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    let vx = Math.random() * 10 - 5;\n    let vy = -10;\n    let bounce = -0.7;\n    let gravity = 0.2;\n    let isMouseDown = false;\n    let oldX;\n    let oldY;\n    ball.x = 0;\n    ball.y = -50;\n    canvas.addEventListener('mousedown', function () {\n      if (cursorInside(ball.getBounds(), mouse.x, mouse.y)) {\n        isMouseDown = true;\n        oldX = ball.x;\n        oldY = ball.y;\n        canvas.addEventListener('mouseup', onMouseUp, false);\n        canvas.addEventListener('mousemove', onMouseMove, false);\n      }\n    }, false);\n    function onMouseUp() {\n      isMouseDown = false;\n      canvas.removeEventListener('mouseup', onMouseUp, false);\n      canvas.removeEventListener('mousemove', onMouseMove, false);\n    }\n    function onMouseMove(event) {\n      ball.x = mouse.x;\n      ball.y = mouse.y;\n    }\n    function trackVelocity() {\n      vx = ball.x - oldX;\n      vy = ball.y - oldY;\n      oldX = ball.x;\n      oldY = ball.y;\n    }\n    function checkBoundaries() {\n      let left = -200;\n      let right = 800;\n      let top = -400;\n      let bottom = 100;\n      vy += gravity;\n      ball.x += vx;\n      ball.y += vy;\n      //boundary detect and bounce\n      if (ball.x + ball.radius > right) {\n        ball.x = right - ball.radius;\n        vx *= bounce;\n      } else if (ball.x - ball.radius < left) {\n        ball.x = left + ball.radius;\n        vx *= bounce;\n      }\n      if (ball.y + ball.radius > bottom) {\n        ball.y = bottom - ball.radius;\n        vy *= bounce;\n      } else if (ball.y - ball.radius < top) {\n        ball.y = top + ball.radius;\n        vy *= bounce;\n      }\n    }\n    (function frames() {\n      window.requestAnimationFrame(frames, canvas);\n      context.clearRect(0, 0, canvas.width, canvas.height);\n      if (isMouseDown) {\n        trackVelocity();\n      } else {\n        checkBoundaries();\n      }\n      ball.drawBall(context);\n      hooptest.drawHoop(ctx);\n      back.drawBack(ctx);\n    })();\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUN6QixDQUFDLEdBQUc4QyxNQUFNLEdBQUdyQixJQUFJLENBQUNzQixNQUFNO1FBQzdCaEIsRUFBRSxJQUFJQyxNQUFNO01BQ2QsQ0FBQyxNQUFNLElBQUlQLElBQUksQ0FBQ3pCLENBQUMsR0FBR3lCLElBQUksQ0FBQ3NCLE1BQU0sR0FBR0YsR0FBRyxFQUFFO1FBQ3JDcEIsSUFBSSxDQUFDekIsQ0FBQyxHQUFHNkMsR0FBRyxHQUFHcEIsSUFBSSxDQUFDc0IsTUFBTTtRQUMxQmhCLEVBQUUsSUFBSUMsTUFBTTtNQUNkO0lBQ0Y7SUFFQyxVQUFTZ0IsTUFBTSxHQUFJO01BQ2xCNUIsTUFBTSxDQUFDNkIscUJBQXFCLENBQUNELE1BQU0sRUFBRTFCLE1BQU0sQ0FBQztNQUM1Q0UsT0FBTyxDQUFDMEIsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU1QixNQUFNLENBQUNKLEtBQUssRUFBRUksTUFBTSxDQUFDSCxNQUFNLENBQUM7TUFFcEQsSUFBSWUsV0FBVyxFQUFFO1FBQ2ZPLGFBQWEsRUFBRTtNQUNqQixDQUFDLE1BQU07UUFDTEMsZUFBZSxFQUFFO01BQ25CO01BQ0FqQixJQUFJLENBQUMwQixRQUFRLENBQUMzQixPQUFPLENBQUM7TUFDdEJFLFFBQVEsQ0FBQzBCLFFBQVEsQ0FBQzFELEdBQUcsQ0FBQztNQUN0QmlDLElBQUksQ0FBQzBCLFFBQVEsQ0FBQzNELEdBQUcsQ0FBQztJQUNwQixDQUFDLEdBQUU7RUFDTCxDQUFDO0FBRVgsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2V0dXBfd2Fsa3Rocm91Z2gvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBCYWxsIGZyb20gJy4vc2NyaXB0cy9iYWxsLmpzJ1xuaW1wb3J0IEhvb3AgZnJvbSAnLi9zY3JpcHRzL2hvb3AuanMnXG5pbXBvcnQgQmFja2JvYXJkIGZyb20gJy4vc2NyaXB0cy9iYWNrYm9hcmQuanMnXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpXG4gICAgY29uc3QgY3R4ID0gcm9vdC5nZXRDb250ZXh0KCcyZCcpXG4gICAgXG4gICAgXG5cblxuICAgIC8vbGV0IHRpbWVUb1BsYXkgPSBuZXcgR2FtZShyb290KSBcbiAgICAvL3RpbWVUb1BsYXkucGxheSgpXG5cbiAgICAvLyBpZiB0aW1lVG9QbGF5Lmhvb3Auc2NvcmUgXG4gICAgLy90aW1lVG9QbGF5LnNjb3JlYm9hcmQuc2NvcmUgKz0gMSBcblxuICAgIC8vIGlmIHRpbWVUb1BsYXkudGltZXIoKSA9PT0gMCwgcmV0dXJuIHRpbWVUb1BsYXkuZ2FtZU92ZXJcbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVtZW50KGVsZSkge1xuICAgICAgICBsZXQgbW91c2UgPSB7eDogMCwgeTogMCwgZXZlbnQ6IG51bGx9XG4gICAgICAgIGxldCBib2R5X3Njcm9sbExlZnQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRcbiAgICAgICAgbGV0IGVsZW1lbnRfc2Nyb2xsTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgIGxldCBib2R5X3Njcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICAgIGxldCBlbGVtZW50X3Njcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICAgbGV0IG9mZnNldExlZnQgPSBlbGUub2Zmc2V0TGVmdFxuICAgICAgICBsZXQgb2Zmc2V0VG9wID0gZWxlLm9mZnNldFRvcFxuICAgICAgICBcbiAgICAgICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGxldCB4LCB5O1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChldmVudC5wYWdlWCB8fCBldmVudC5wYWdlWSkge1xuICAgICAgICAgICAgeCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgeSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gZXZlbnQuY2xpZW50WCArIGJvZHlfc2Nyb2xsTGVmdCArIGVsZW1lbnRfc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIHkgPSBldmVudC5jbGllbnRZICsgYm9keV9zY3JvbGxUb3AgKyBlbGVtZW50X3Njcm9sbFRvcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgeCAtPSBvZmZzZXRMZWZ0O1xuICAgICAgICAgIHkgLT0gb2Zmc2V0VG9wO1xuICAgICAgICAgIFxuICAgICAgICAgIG1vdXNlLnggPSB4O1xuICAgICAgICAgIG1vdXNlLnkgPSB5O1xuICAgICAgICAgIG1vdXNlLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBtb3VzZTtcbiAgICAgIH07ICBcblxuICAgICAgZnVuY3Rpb24gY3Vyc29ySW5zaWRlKHJlY3QsIHgsIHkpIHtcbiAgICAgICAgcmV0dXJuICEoeCA8IHJlY3QueCB8fFxuICAgICAgICAgICAgICAgICB4ID4gcmVjdC54ICsgcmVjdC53aWR0aCB8fFxuICAgICAgICAgICAgICAgICB5IDwgcmVjdC55IHx8XG4gICAgICAgICAgICAgICAgIHkgPiByZWN0LnkgKyByZWN0LmhlaWdodCk7XG4gICAgICB9O1xuICAgICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpXG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgICAgICBsZXQgbW91c2UgPSBtb3VzZU1vdmVtZW50KGNhbnZhcylcbiAgICAgICAgICAgIGxldCBiYWxsID0gbmV3IEJhbGwoKVxuICAgICAgICAgICAgbGV0IGhvb3B0ZXN0ID0gbmV3IEhvb3AoKVxuICAgICAgICAgICAgbGV0IGJhY2sgPSBuZXcgQmFja2JvYXJkKClcbiAgICAgICAgICAgIGxldCB2eCA9IE1hdGgucmFuZG9tKCkgKiAxMCAtIDVcbiAgICAgICAgICAgIGxldCB2eSA9IC0xMFxuICAgICAgICAgICAgbGV0IGJvdW5jZSA9IC0wLjdcbiAgICAgICAgICAgIGxldCBncmF2aXR5ID0gMC4yXG4gICAgICAgICAgICBsZXQgaXNNb3VzZURvd24gPSBmYWxzZVxuICAgICAgICAgICAgbGV0IG9sZFhcbiAgICAgICAgICAgIGxldCBvbGRZXG4gICAgICBcbiAgICAgICAgICAgIGJhbGwueCA9IDA7XG4gICAgICAgICAgICBiYWxsLnkgPSAtNTA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChjdXJzb3JJbnNpZGUoYmFsbC5nZXRCb3VuZHMoKSwgbW91c2UueCwgbW91c2UueSkpIHtcbiAgICAgICAgICAgICAgICBpc01vdXNlRG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgb2xkWCA9IGJhbGwueDtcbiAgICAgICAgICAgICAgICBvbGRZID0gYmFsbC55O1xuICAgICAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gb25Nb3VzZVVwICgpIHtcbiAgICAgICAgICAgICAgaXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlIChldmVudCkge1xuICAgICAgICAgICAgICBiYWxsLnggPSBtb3VzZS54O1xuICAgICAgICAgICAgICBiYWxsLnkgPSBtb3VzZS55O1xuICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiB0cmFja1ZlbG9jaXR5ICgpIHtcbiAgICAgICAgICAgICAgdnggPSBiYWxsLnggLSBvbGRYO1xuICAgICAgICAgICAgICB2eSA9IGJhbGwueSAtIG9sZFk7XG4gICAgICAgICAgICAgIG9sZFggPSBiYWxsLng7XG4gICAgICAgICAgICAgIG9sZFkgPSBiYWxsLnk7XG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQm91bmRhcmllcyAoKSB7XG4gICAgICAgICAgICAgIGxldCBsZWZ0ID0gLTIwMFxuICAgICAgICAgICAgICBsZXQgcmlnaHQgPSA4MDBcbiAgICAgICAgICAgICAgbGV0IHRvcCA9IC00MDBcbiAgICAgICAgICAgICAgbGV0IGJvdHRvbSA9IDEwMDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHZ5ICs9IGdyYXZpdHk7XG4gICAgICAgICAgICAgIGJhbGwueCArPSB2eDtcbiAgICAgICAgICAgICAgYmFsbC55ICs9IHZ5O1xuICAgICAgICAgICAgICAvL2JvdW5kYXJ5IGRldGVjdCBhbmQgYm91bmNlXG4gICAgICAgICAgICAgIGlmIChiYWxsLnggKyBiYWxsLnJhZGl1cyA+IHJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgYmFsbC54ID0gcmlnaHQgLSBiYWxsLnJhZGl1cztcbiAgICAgICAgICAgICAgICB2eCAqPSBib3VuY2U7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFsbC54IC0gYmFsbC5yYWRpdXMgPCBsZWZ0KSB7XG4gICAgICAgICAgICAgICAgYmFsbC54ID0gbGVmdCArIGJhbGwucmFkaXVzO1xuICAgICAgICAgICAgICAgIHZ4ICo9IGJvdW5jZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoYmFsbC55ICsgYmFsbC5yYWRpdXMgPiBib3R0b20pIHtcbiAgICAgICAgICAgICAgICBiYWxsLnkgPSBib3R0b20gLSBiYWxsLnJhZGl1cztcbiAgICAgICAgICAgICAgICB2eSAqPSBib3VuY2U7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFsbC55IC0gYmFsbC5yYWRpdXMgPCB0b3ApIHtcbiAgICAgICAgICAgICAgICBiYWxsLnkgPSB0b3AgKyBiYWxsLnJhZGl1cztcbiAgICAgICAgICAgICAgICB2eSAqPSBib3VuY2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgKGZ1bmN0aW9uIGZyYW1lcyAoKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWVzLCBjYW52YXMpO1xuICAgICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKGlzTW91c2VEb3duKSB7XG4gICAgICAgICAgICAgICAgdHJhY2tWZWxvY2l0eSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoZWNrQm91bmRhcmllcygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJhbGwuZHJhd0JhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgIGhvb3B0ZXN0LmRyYXdIb29wKGN0eClcbiAgICAgICAgICAgICAgYmFjay5kcmF3QmFjayhjdHgpXG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICAgIH07XG4gICAgXG59KVxuICAgIFxuXG5cbiJdLCJuYW1lcyI6WyJCYWxsIiwiSG9vcCIsIkJhY2tib2FyZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsIm1vdXNlTW92ZW1lbnQiLCJlbGUiLCJtb3VzZSIsIngiLCJ5IiwiZXZlbnQiLCJib2R5X3Njcm9sbExlZnQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsImVsZW1lbnRfc2Nyb2xsTGVmdCIsImRvY3VtZW50RWxlbWVudCIsImJvZHlfc2Nyb2xsVG9wIiwic2Nyb2xsVG9wIiwiZWxlbWVudF9zY3JvbGxUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwicGFnZVgiLCJwYWdlWSIsImNsaWVudFgiLCJjbGllbnRZIiwiY3Vyc29ySW5zaWRlIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0Iiwid2luZG93Iiwib25sb2FkIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiYmFsbCIsImhvb3B0ZXN0IiwiYmFjayIsInZ4IiwiTWF0aCIsInJhbmRvbSIsInZ5IiwiYm91bmNlIiwiZ3Jhdml0eSIsImlzTW91c2VEb3duIiwib2xkWCIsIm9sZFkiLCJnZXRCb3VuZHMiLCJvbk1vdXNlVXAiLCJvbk1vdXNlTW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmFja1ZlbG9jaXR5IiwiY2hlY2tCb3VuZGFyaWVzIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwicmFkaXVzIiwiZnJhbWVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiZHJhd0JhbGwiLCJkcmF3SG9vcCIsImRyYXdCYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/backboard.js":
/*!**********************************!*\
  !*** ./src/scripts/backboard.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Backboard {\n  constructor() {\n    this.x = 910;\n    this.yBottom = 210;\n    this.yTop = 320;\n  }\n  drawBack(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = 'grey';\n    ctx.fillRect(this.x, this.yBottom, 10, 110);\n  }\n\n  // animate() {\n  //     this.drawBack(ctx)\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Backboard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWNrYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFNBQVMsQ0FBQztFQUNaQyxXQUFXLEdBQUc7SUFDZCxJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ2YsSUFBSSxDQUFDQyxPQUFPLEdBQUcsR0FBRztJQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHLEdBQUc7RUFDZjtFQUdBQyxRQUFRLENBQUNDLEdBQUcsRUFBRTtJQUNWQSxHQUFHLENBQUNDLFNBQVMsRUFBRTtJQUNmRCxHQUFHLENBQUNFLFNBQVMsR0FBRyxNQUFNO0lBQ3RCRixHQUFHLENBQUNHLFFBQVEsQ0FBQyxJQUFJLENBQUNQLENBQUMsRUFBRSxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0VBQy9DOztFQUVBO0VBQ0E7RUFDQTtBQUNKOztBQUdBLCtEQUFlSCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2V0dXBfd2Fsa3Rocm91Z2gvLi9zcmMvc2NyaXB0cy9iYWNrYm9hcmQuanM/ZmM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWNrYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueCA9IDkxMDtcblx0dGhpcy55Qm90dG9tID0gMjEwO1xuICAgIHRoaXMueVRvcCA9IDMyMFxuICAgIH1cblxuXG4gICAgZHJhd0JhY2soY3R4KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdncmV5J1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnlCb3R0b20sIDEwLCAxMTApXG4gICAgfVxuXG4gICAgLy8gYW5pbWF0ZSgpIHtcbiAgICAvLyAgICAgdGhpcy5kcmF3QmFjayhjdHgpXG4gICAgLy8gfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tib2FyZDsiXSwibmFtZXMiOlsiQmFja2JvYXJkIiwiY29uc3RydWN0b3IiLCJ4IiwieUJvdHRvbSIsInlUb3AiLCJkcmF3QmFjayIsImN0eCIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/backboard.js\n");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Ball {\n  constructor() {\n    this.radius = 25;\n    this.x = 0;\n    this.y = 0;\n    this.vx = 0;\n    this.vy = 0;\n    this.rotation = 0;\n    this.color = 'orange';\n    this.lineWidth = 1;\n  }\n  drawBall(ctx) {\n    ctx.save();\n    ctx.translate(this.x, this.y);\n    ctx.rotate(this.rotation);\n    ctx.lineWidth = this.lineWidth;\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(200, 400, this.radius, 0, Math.PI * 2, true);\n    ctx.closePath();\n    ctx.fill();\n    if (this.lineWidth > 0) {\n      ctx.stroke();\n    }\n    ctx.restore();\n  }\n  getBounds() {\n    return {\n      x: this.x - this.radius,\n      y: this.y - this.radius,\n      width: this.radius * 2,\n      height: this.radius * 2\n    };\n  }\n  animate() {\n    this.drawBall(ctx);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBVyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNDLENBQUMsR0FBRyxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztJQUNWLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUM7SUFDWCxJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDO0lBQ1gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQztJQUNqQixJQUFJLENBQUNDLEtBQUssR0FBRyxRQUFRO0lBQ3JCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLENBQUM7RUFDcEI7RUFFQUMsUUFBUSxDQUFDQyxHQUFHLEVBQUU7SUFDWkEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7SUFDVkQsR0FBRyxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDVixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLENBQUM7SUFDN0JPLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ1AsUUFBUSxDQUFDO0lBQ3pCSSxHQUFHLENBQUNGLFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVM7SUFDOUJFLEdBQUcsQ0FBQ0ksU0FBUyxHQUFHLElBQUksQ0FBQ1AsS0FBSztJQUMxQkcsR0FBRyxDQUFDSyxTQUFTLEVBQUU7SUFDZkwsR0FBRyxDQUFDTSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUNmLE1BQU0sRUFBRSxDQUFDLEVBQUVnQixJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ3BEUixHQUFHLENBQUNTLFNBQVMsRUFBRTtJQUNmVCxHQUFHLENBQUNVLElBQUksRUFBRTtJQUNWLElBQUksSUFBSSxDQUFDWixTQUFTLEdBQUcsQ0FBQyxFQUFFO01BQ3RCRSxHQUFHLENBQUNXLE1BQU0sRUFBRTtJQUNkO0lBQ0FYLEdBQUcsQ0FBQ1ksT0FBTyxFQUFFO0VBQ2Y7RUFFQUMsU0FBUyxHQUFHO0lBQ1IsT0FBTztNQUNMckIsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQ0QsTUFBTTtNQUN2QkUsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQ0YsTUFBTTtNQUN2QnVCLEtBQUssRUFBRSxJQUFJLENBQUN2QixNQUFNLEdBQUcsQ0FBQztNQUN0QndCLE1BQU0sRUFBRSxJQUFJLENBQUN4QixNQUFNLEdBQUc7SUFDeEIsQ0FBQztFQUNIO0VBRUZ5QixPQUFPLEdBQUc7SUFDTixJQUFJLENBQUNqQixRQUFRLENBQUNDLEdBQUcsQ0FBQztFQUN0QjtBQUdKO0FBR0EsK0RBQWVYLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1cF93YWxrdGhyb3VnaC8uL3NyYy9zY3JpcHRzL2JhbGwuanM/YTk1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYWxsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMucmFkaXVzID0gMjU7XG4gICAgICB0aGlzLnggPSAwO1xuICAgICAgdGhpcy55ID0gMDtcbiAgICAgIHRoaXMudnggPSAwO1xuICAgICAgdGhpcy52eSA9IDA7XG4gICAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICAgIHRoaXMuY29sb3IgPSAnb3JhbmdlJztcbiAgICAgIHRoaXMubGluZVdpZHRoID0gMTtcbiAgICB9XG4gIFxuICAgIGRyYXdCYWxsKGN0eCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYygyMDAsIDQwMCwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBpZiAodGhpcy5saW5lV2lkdGggPiAwKSB7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHRoaXMueCAtIHRoaXMucmFkaXVzLFxuICAgICAgICAgIHk6IHRoaXMueSAtIHRoaXMucmFkaXVzLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLnJhZGl1cyAqIDIsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnJhZGl1cyAqIDJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd0JhbGwoY3R4KVxuICAgIH1cblxuICAgIFxufVxuICAgIFxuXG5leHBvcnQgZGVmYXVsdCBCYWxsOyJdLCJuYW1lcyI6WyJCYWxsIiwiY29uc3RydWN0b3IiLCJyYWRpdXMiLCJ4IiwieSIsInZ4IiwidnkiLCJyb3RhdGlvbiIsImNvbG9yIiwibGluZVdpZHRoIiwiZHJhd0JhbGwiLCJjdHgiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInN0cm9rZSIsInJlc3RvcmUiLCJnZXRCb3VuZHMiLCJ3aWR0aCIsImhlaWdodCIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

/***/ }),

/***/ "./src/scripts/hoop.js":
/*!*****************************!*\
  !*** ./src/scripts/hoop.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Hoop {\n  constructor() {\n    this.xLeft = 790;\n    this.xRight = 910;\n    this.y = 300;\n    // this.endX = 200;\n    // this.endY = 400;\n  }\n\n  drawHoop(ctx) {\n    ctx.beginPath();\n    ctx.fillStyle = 'orange';\n    ctx.fillRect(this.xLeft, this.y, 120, 10);\n  }\n  hitRim() {\n\n    //check if the ball object hits the rim at either corner or on the backboard\n  }\n  score() {\n    //check if ball object completely passes through the hoop, then add point \n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hoop);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ob29wLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBVyxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO0lBQ3BCLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEdBQUc7SUFDWjtJQUNBO0VBQ0Q7O0VBRUlDLFFBQVEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ1ZBLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO0lBQ2ZELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHLFFBQVE7SUFDeEJGLEdBQUcsQ0FBQ0csUUFBUSxDQUFDLElBQUksQ0FBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQ0UsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7RUFFN0M7RUFFQU0sTUFBTSxHQUFHOztJQUVMO0VBQUE7RUFHSkMsS0FBSyxHQUFHO0lBQ0o7RUFBQTtBQUdSO0FBRUEsK0RBQWVYLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1cF93YWxrdGhyb3VnaC8uL3NyYy9zY3JpcHRzL2hvb3AuanM/YTY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIb29wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgdGhpcy54TGVmdCA9IDc5MDtcbiAgICB0aGlzLnhSaWdodCA9IDkxMFxuXHR0aGlzLnkgPSAzMDA7XG5cdC8vIHRoaXMuZW5kWCA9IDIwMDtcblx0Ly8gdGhpcy5lbmRZID0gNDAwO1xufTtcblxuICAgIGRyYXdIb29wKGN0eCkgeyBcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ29yYW5nZSdcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueExlZnQsIHRoaXMueSwgMTIwLCAxMClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGl0UmltKCkge1xuXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGJhbGwgb2JqZWN0IGhpdHMgdGhlIHJpbSBhdCBlaXRoZXIgY29ybmVyIG9yIG9uIHRoZSBiYWNrYm9hcmRcbiAgICB9XG5cbiAgICBzY29yZSgpIHtcbiAgICAgICAgLy9jaGVjayBpZiBiYWxsIG9iamVjdCBjb21wbGV0ZWx5IHBhc3NlcyB0aHJvdWdoIHRoZSBob29wLCB0aGVuIGFkZCBwb2ludCBcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9vcDtcbiJdLCJuYW1lcyI6WyJIb29wIiwiY29uc3RydWN0b3IiLCJ4TGVmdCIsInhSaWdodCIsInkiLCJkcmF3SG9vcCIsImN0eCIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiaGl0UmltIiwic2NvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/hoop.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1cF93YWxrdGhyb3VnaC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;