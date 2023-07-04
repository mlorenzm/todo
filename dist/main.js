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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_appController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/appController */ \"./src/modules/appController.js\");\n/* harmony import */ var _modules_appModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/appModel */ \"./src/modules/appModel.js\");\n\n\n(0,_modules_appController__WEBPACK_IMPORTED_MODULE_0__.initApp)()\n;(0,_modules_appModel__WEBPACK_IMPORTED_MODULE_1__.getAllTasks)()\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/appController.js":
/*!**************************************!*\
  !*** ./src/modules/appController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initApp\": () => (/* binding */ initApp)\n/* harmony export */ });\n/* harmony import */ var _appView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appView.js */ \"./src/modules/appView.js\");\n\n\n// Initialize the app\nfunction initApp() {\n  (0,_appView_js__WEBPACK_IMPORTED_MODULE_0__.renderTodoList)()\n}\n\n// Export any necessary functions\n\n\n\n//# sourceURL=webpack://todo/./src/modules/appController.js?");

/***/ }),

/***/ "./src/modules/appModel.js":
/*!*********************************!*\
  !*** ./src/modules/appModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"getAllTasks\": () => (/* binding */ getAllTasks)\n/* harmony export */ });\n// Model: it's the main logic for our app. It needs to store tasks and projects, also holds the blueprint to create a task\n\nlet tasks = []\n\nclass Task {\n  constructor(title, priority) {\n    this.title = title\n    this.priority = priority\n  }\n}\naddTask('a', true)\naddTask('b', false)\n\nfunction addTask(title, priority = false) {\n  const task = new Task(title, priority)\n  tasks.push(task)\n}\n\n// Delete a task from the tasks array\nfunction deleteTask(index) {\n  tasks.splice(index, 1)\n}\n\n// Retrieve all tasks\nfunction getAllTasks() {\n  return tasks\n}\n\n// Retrieve all projects\n\n// Export the necessary functions or classes\n\n\n\n//# sourceURL=webpack://todo/./src/modules/appModel.js?");

/***/ }),

/***/ "./src/modules/appView.js":
/*!********************************!*\
  !*** ./src/modules/appView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTodoList\": () => (/* binding */ renderTodoList)\n/* harmony export */ });\n/* harmony import */ var _assets_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/checkmark.svg */ \"./src/assets/checkmark.svg\");\n/* harmony import */ var _appModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appModel.js */ \"./src/modules/appModel.js\");\n\n\n\nfunction renderTodoList() {\n  const container = document.getElementById('tasks-container')\n  container.innerHTML = ''\n\n  const tasks = (0,_appModel_js__WEBPACK_IMPORTED_MODULE_1__.getAllTasks)()\n\n  tasks.forEach((task, index) => {\n    const taskElement = document.createElement('li')\n    taskElement.classList.add('task-item-container')\n    taskElement.textContent = task.title\n    console.log(task)\n    if (task.priority) {\n      taskElement.style.backgroundColor = '#ffbb01'\n    }\n\n    const completeBtn = document.createElement('img')\n    completeBtn.classList.add('complete-btn')\n    completeBtn.src = _assets_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    completeBtn.width = '26'\n    completeBtn.title = 'Mark complete'\n    completeBtn.textContent = 'Delete'\n    completeBtn.addEventListener('click', () => {\n      ;(0,_appModel_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(index)\n      renderTodoList()\n    })\n\n    taskElement.appendChild(completeBtn)\n    container.appendChild(taskElement)\n  })\n}\n\nfunction handleFormSubmit(event) {\n  event.preventDefault()\n  // Task title\n  const titleInput = document.getElementById('input-container')\n  const title = titleInput.value\n\n  if (title) {\n    (0,_appModel_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(title, priority)\n    titleInput.value = ''\n    priority = false\n    renderTodoList()\n  }\n}\nfunction handlePriority() {\n  const priorityBtn = document.getElementById('important-btn')\n  let priority = false\n  priorityBtn.addEventListener('click', () => {\n    priority = !priority\n    if (priority) {\n      priorityBtn.classList.add('important-clicked')\n      priority = true\n      console.log(priority)\n    } else {\n      priorityBtn.classList.remove('important-clicked')\n      priority = false\n      console.log(priority)\n    }\n    return priority\n  })\n}\n\nconst formElement = document.getElementById('form')\nformElement.addEventListener('submit', handleFormSubmit)\nhandlePriority()\n\n\n\n//# sourceURL=webpack://todo/./src/modules/appView.js?");

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