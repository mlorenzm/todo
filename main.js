/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/checkmark.svg":
/*!**********************************!*\
  !*** ./src/assets/checkmark.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d5ad0dfb75b9c2ab97f130a7486c0e5f.svg\");\n\n//# sourceURL=webpack://todo/./src/assets/checkmark.svg?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_itemfactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/itemfactory.js */ \"./src/modules/itemfactory.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\n\n\n\nconst item = (0,_modules_itemfactory_js__WEBPACK_IMPORTED_MODULE_1__.CreateItem)('Start with this todo app', '1', '0', 'odin')\nconst item2 = (0,_modules_itemfactory_js__WEBPACK_IMPORTED_MODULE_1__.CreateItem)('Continue with this app', '1', '0', 'odin')\n\n_modules_dom__WEBPACK_IMPORTED_MODULE_2__.form.addEventListener('submit', function (e) {\n  console.log('a')\n  console.dir(e.currentTarget)\n  e.preventDefault()\n})\nconst taskArray = [\n  item2,\n  item2,\n  item2,\n  item2,\n  item2,\n  item2,\n  item2,\n  item2,\n  item2,\n  item2,\n  item2,\n  item2,\n]\n\nfor (let a of taskArray) {\n  ;(0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.renderTask)(a)\n}\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calendarBtn\": () => (/* binding */ calendarBtn),\n/* harmony export */   \"cancelBtn\": () => (/* binding */ cancelBtn),\n/* harmony export */   \"createTaskItemContainer\": () => (/* binding */ createTaskItemContainer),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"importantBtn\": () => (/* binding */ importantBtn),\n/* harmony export */   \"input\": () => (/* binding */ input),\n/* harmony export */   \"projectBtn\": () => (/* binding */ projectBtn),\n/* harmony export */   \"renderTask\": () => (/* binding */ renderTask)\n/* harmony export */ });\n/* harmony import */ var _assets_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/checkmark.svg */ \"./src/assets/checkmark.svg\");\n\n\nconst createTaskItemContainer = (item) => {\n  const container = document.createElement('div')\n  container.classList.add('task-item-container')\n  container.title = 'Show details'\n  const title = document.createElement('div')\n  title.textContent = item.getName()\n  title.classList.add('item-title')\n  const completeBtn = document.createElement('img')\n  completeBtn.classList.add('complete-btn')\n  completeBtn.src = _assets_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  completeBtn.width = '26'\n  completeBtn.title = 'Mark complete'\n\n  completeBtn.addEventListener('click', () => {\n    console.log(item)\n  })\n\n  container.append(title, completeBtn)\n\n  return container\n}\nconst renderTask = (item) => {\n  const mainContainer = document.getElementById('tasks-container')\n  const taskContainer = createTaskItemContainer(item)\n\n  mainContainer.append(taskContainer)\n}\nconst markComplete = () => {}\n// General buttons\nconst input = document.getElementById('input-container')\nconst cancelBtn = document.getElementById('cancel-btn')\nconst projectBtn = document.getElementById('project-btn')\nconst calendarBtn = document.getElementById('calendar-btn')\nconst importantBtn = document.getElementById('important-btn')\nconst form = document.getElementById('form')\n\n\n\n//# sourceURL=webpack://todo/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/itemfactory.js":
/*!************************************!*\
  !*** ./src/modules/itemfactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateItem\": () => (/* binding */ CreateItem)\n/* harmony export */ });\nfunction CreateItem(name, dueDate, isImportant, project) {\n  const getName = () => name\n\n  const getDueDate = () => dueDate\n  const getImportance = () => isImportant\n  const getProject = () => project\n  return {\n    getName,\n    getDueDate,\n    getImportance,\n    getProject,\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/modules/itemfactory.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;