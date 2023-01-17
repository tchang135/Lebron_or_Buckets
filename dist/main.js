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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example.js */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ball.js */ \"./src/scripts/ball.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const root = document.querySelector('#actual-game');\n  const ctx = root.getContext('2d');\n  let basketball = new _scripts_ball_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  basketball.draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTJDO0FBQ1A7QUFHcENFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUNuRCxNQUFNQyxHQUFHLEdBQUdGLElBQUksQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUNqQyxJQUFJQyxVQUFVLEdBQUcsSUFBSVAsd0RBQUksRUFBRTtFQUMzQk8sVUFBVSxDQUFDQyxJQUFJLENBQUNILEdBQUcsQ0FBQztBQUd4QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1cF93YWxrdGhyb3VnaC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gJy4vc2NyaXB0cy9leGFtcGxlLmpzJztcbmltcG9ydCBCYWxsIGZyb20gJy4vc2NyaXB0cy9iYWxsLmpzJ1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3R1YWwtZ2FtZScpXG4gICAgY29uc3QgY3R4ID0gcm9vdC5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IGJhc2tldGJhbGwgPSBuZXcgQmFsbCgpXG4gICAgYmFza2V0YmFsbC5kcmF3KGN0eClcbiAgICBcbiAgICBcbn0pXG5cblxuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJCYWxsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmFza2V0YmFsbCIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Ball {\n  constructor() {\n    this.radius = 20;\n    this.x = 0;\n    this.y = 0;\n    this.vx = 0;\n    this.vy = 0;\n    this.rotation = 0;\n    this.color = 'orange';\n    this.lineWidth = 1;\n  }\n  draw(ctx) {\n    ctx.save();\n    ctx.translate(this.x, this.y);\n    ctx.rotate(this.rotation);\n    ctx.lineWidth = this.lineWidth;\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(200, 100, this.radius, 0, Math.PI * 2, true);\n    ctx.closePath();\n    ctx.fill();\n    if (this.lineWidth > 0) {\n      ctx.stroke();\n    }\n    ctx.restore();\n  }\n\n  // getBounds() {\n  //   return {\n  //     x: this.x - this.radius,\n  //     y: this.y - this.radius,\n  //     width: this.radius * 2,\n  //     height: this.radius * 2\n  //   };\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBVyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNDLENBQUMsR0FBRyxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztJQUNWLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUM7SUFDWCxJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDO0lBQ1gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQztJQUNqQixJQUFJLENBQUNDLEtBQUssR0FBRyxRQUFRO0lBQ3JCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLENBQUM7RUFDcEI7RUFFQUMsSUFBSSxDQUFDQyxHQUFHLEVBQUU7SUFDUkEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7SUFDVkQsR0FBRyxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDVixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLENBQUM7SUFDN0JPLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ1AsUUFBUSxDQUFDO0lBQ3pCSSxHQUFHLENBQUNGLFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVM7SUFDOUJFLEdBQUcsQ0FBQ0ksU0FBUyxHQUFHLElBQUksQ0FBQ1AsS0FBSztJQUMxQkcsR0FBRyxDQUFDSyxTQUFTLEVBQUU7SUFDZkwsR0FBRyxDQUFDTSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUNmLE1BQU0sRUFBRSxDQUFDLEVBQUVnQixJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ3BEUixHQUFHLENBQUNTLFNBQVMsRUFBRTtJQUNmVCxHQUFHLENBQUNVLElBQUksRUFBRTtJQUNWLElBQUksSUFBSSxDQUFDWixTQUFTLEdBQUcsQ0FBQyxFQUFFO01BQ3RCRSxHQUFHLENBQUNXLE1BQU0sRUFBRTtJQUNkO0lBQ0FYLEdBQUcsQ0FBQ1ksT0FBTyxFQUFFO0VBQ2Y7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGOztBQUVGLCtEQUFldkIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwX3dhbGt0aHJvdWdoLy4vc3JjL3NjcmlwdHMvYmFsbC5qcz9hOTVlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhbGwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5yYWRpdXMgPSAyMDtcbiAgICAgIHRoaXMueCA9IDA7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgICAgdGhpcy52eCA9IDA7XG4gICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgICAgdGhpcy5jb2xvciA9ICdvcmFuZ2UnO1xuICAgICAgdGhpcy5saW5lV2lkdGggPSAxO1xuICAgIH1cbiAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGN0eC5yb3RhdGUodGhpcy5yb3RhdGlvbik7XG4gICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMoMjAwLCAxMDAsIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgaWYgKHRoaXMubGluZVdpZHRoID4gMCkge1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgXG4gICAgLy8gZ2V0Qm91bmRzKCkge1xuICAgIC8vICAgcmV0dXJuIHtcbiAgICAvLyAgICAgeDogdGhpcy54IC0gdGhpcy5yYWRpdXMsXG4gICAgLy8gICAgIHk6IHRoaXMueSAtIHRoaXMucmFkaXVzLFxuICAgIC8vICAgICB3aWR0aDogdGhpcy5yYWRpdXMgKiAyLFxuICAgIC8vICAgICBoZWlnaHQ6IHRoaXMucmFkaXVzICogMlxuICAgIC8vICAgfTtcbiAgICAvLyB9XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFsbDsiXSwibmFtZXMiOlsiQmFsbCIsImNvbnN0cnVjdG9yIiwicmFkaXVzIiwieCIsInkiLCJ2eCIsInZ5Iiwicm90YXRpb24iLCJjb2xvciIsImxpbmVXaWR0aCIsImRyYXciLCJjdHgiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInN0cm9rZSIsInJlc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    // let newEle = document.createElement('h1')\n    // newEle.innerText = 'hello4'\n    // ele.append(newEle)\n    this.ele.innerHTML = \"<h1>Does this work?</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener('click', this.handleClick);\n  }\n  handleClick(ev) {\n    // ev.preventDefault();\n    this.ele.children[0].innerText = 'Ouch!';\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBVyxDQUFDQyxHQUFHLEVBQUU7SUFDYixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxTQUFTLEdBQUcsMEJBQTBCO0lBQy9DLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRixXQUFXLENBQUM7RUFDeEQ7RUFFQUEsV0FBVyxDQUFDRyxFQUFFLEVBQUU7SUFDWjtJQUNBLElBQUksQ0FBQ0wsR0FBRyxDQUFDTSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxPQUFPO0VBQzVDO0FBQ0o7QUFFQSwrREFBZVQsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwX3dhbGt0aHJvdWdoLy4vc3JjL3NjcmlwdHMvZXhhbXBsZS5qcz9mY2VlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgLy8gbGV0IG5ld0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgLy8gbmV3RWxlLmlubmVyVGV4dCA9ICdoZWxsbzQnXG4gICAgICAgIC8vIGVsZS5hcHBlbmQobmV3RWxlKVxuICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMT5Eb2VzIHRoaXMgd29yaz88L2gxPlwiXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGV2KSB7XG4gICAgICAgIC8vIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9ICdPdWNoISdcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImlubmVySFRNTCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

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