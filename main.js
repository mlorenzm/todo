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

/***/ "./src/assets/exclamation.svg":
/*!************************************!*\
  !*** ./src/assets/exclamation.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9cfa3937db3f478c3e224d0df2a92e4a.svg\");\n\n//# sourceURL=webpack://todo/./src/assets/exclamation.svg?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initApp\": () => (/* binding */ initApp)\n/* harmony export */ });\n/* harmony import */ var _appModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appModel.js */ \"./src/modules/appModel.js\");\n/* harmony import */ var _appView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appView.js */ \"./src/modules/appView.js\");\n\n\n\n// Initialize the app\nfunction initApp() {\n  (0,_appView_js__WEBPACK_IMPORTED_MODULE_1__.renderTodoList)('all')\n  ;(0,_appView_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectList)((0,_appModel_js__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)())\n}\n\n// Export any necessary functions\n\n\n\n//# sourceURL=webpack://todo/./src/modules/appController.js?");

/***/ }),

/***/ "./src/modules/appModel.js":
/*!*********************************!*\
  !*** ./src/modules/appModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"filterTasks\": () => (/* binding */ filterTasks),\n/* harmony export */   \"getAllProjects\": () => (/* binding */ getAllProjects),\n/* harmony export */   \"getAllTasks\": () => (/* binding */ getAllTasks),\n/* harmony export */   \"toggleImportant\": () => (/* binding */ toggleImportant)\n/* harmony export */ });\n// Model: it's the main logic for our app. It needs to store tasks and projects, also holds the blueprint to create a task\n\nlet tasks = []\nlet projects = []\nclass Task {\n  constructor(title, priority, project) {\n    this.title = title\n    this.priority = priority\n    this.project = project\n  }\n}\naddTask('a', true, 'ayy')\naddTask('b', false, 'lmao')\n\nfunction addTask(title, priority = false, project) {\n  const task = new Task(title, priority, project)\n  tasks.push(task)\n  if (project != 'All projects') {\n    projects.push(task.project)\n  }\n}\n\n// Delete a task from the tasks array\nfunction deleteTask(index) {\n  tasks.splice(index, 1)\n}\n\n// Mark task important on the array\nfunction toggleImportant(index) {\n  let priority = tasks[index].priority\n  console.log(priority)\n  if (priority) {\n    tasks[index].priority = false\n  } else {\n    tasks[index].priority = true\n  }\n}\n\n// Retrieve all tasks\nfunction getAllTasks() {\n  return tasks\n}\n\n// Retrieve all projects\nfunction getAllProjects() {\n  return projects\n}\n\nfunction filterTasks(selectedProject) {\n  if (selectedProject == 'all') {\n    // Return all tasks if \"All Projects\" is selected\n    return tasks\n  }\n\n  return tasks.filter((task) => task.project == selectedProject)\n}\n// Export the necessary functions or classes\n\n\n\n//# sourceURL=webpack://todo/./src/modules/appModel.js?");

/***/ }),

/***/ "./src/modules/appView.js":
/*!********************************!*\
  !*** ./src/modules/appView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjectList\": () => (/* binding */ renderProjectList),\n/* harmony export */   \"renderTodoList\": () => (/* binding */ renderTodoList)\n/* harmony export */ });\n/* harmony import */ var _assets_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/checkmark.svg */ \"./src/assets/checkmark.svg\");\n/* harmony import */ var _assets_exclamation_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/exclamation.svg */ \"./src/assets/exclamation.svg\");\n/* harmony import */ var _appModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appModel.js */ \"./src/modules/appModel.js\");\n\n\n\n\nfunction renderTodoList(selectedProject) {\n  const container = document.getElementById('tasks-container')\n  container.innerHTML = ''\n  const tasks = (0,_appModel_js__WEBPACK_IMPORTED_MODULE_2__.filterTasks)(selectedProject)\n\n  tasks.forEach((task, index) => {\n    if (selectedProject === 'all' || task.project === selectedProject) {\n      const taskElement = document.createElement('li')\n      taskElement.classList.add('task-item-container')\n      taskElement.textContent = task.title + ' - ' + task.project\n      if (task.priority) {\n        taskElement.style.backgroundColor = '#ffbb01'\n      }\n      const buttonsContainer = document.createElement('div')\n      buttonsContainer.classList.add('buttons-container')\n      const completeBtn = document.createElement('img')\n      completeBtn.classList.add('complete-btn')\n      completeBtn.src = _assets_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n      completeBtn.width = '26'\n      completeBtn.title = 'Mark complete'\n      completeBtn.textContent = 'Delete'\n      completeBtn.addEventListener('click', () => {\n        ;(0,_appModel_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(index)\n        renderTodoList(selectedProject)\n      })\n\n      const importantBtn = document.createElement('img')\n      importantBtn.classList.add('important-btn')\n      importantBtn.src = _assets_exclamation_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n      importantBtn.width = 26\n      importantBtn.title = 'Mark as important'\n      importantBtn.addEventListener('click', () => {\n        ;(0,_appModel_js__WEBPACK_IMPORTED_MODULE_2__.toggleImportant)(index)\n        console.log((0,_appModel_js__WEBPACK_IMPORTED_MODULE_2__.getAllProjects)())\n        renderTodoList(selectedProject)\n      })\n\n      buttonsContainer.append(importantBtn, completeBtn)\n      taskElement.appendChild(buttonsContainer)\n      container.appendChild(taskElement)\n    }\n  })\n}\n\nfunction handleFormSubmit(event) {\n  event.preventDefault()\n  // Task title\n  const titleInput = document.getElementById('input-container')\n  const title = titleInput.value\n\n  if (title) {\n    const projectRegex = /#(\\w+)/\n    const dateRegex = /(\\d{2}\\/\\d{2}\\/\\d{4})/\n    let taskName = ''\n    let project = ''\n    let date = ''\n\n    const taskMatch = title.match(/^([^#]+)/)\n    if (taskMatch) {\n      taskName = taskMatch[0].trim()\n    }\n\n    const projectMatch = title.match(projectRegex)\n    if (projectMatch) {\n      project = projectMatch[1]\n    } else {\n      project = 'All projects'\n    }\n\n    const dateMatch = title.match(dateRegex)\n    if (dateMatch) {\n      dueDate = dateMatch[1]\n    }\n\n    (0,_appModel_js__WEBPACK_IMPORTED_MODULE_2__.addTask)(taskName, false, project)\n    renderProjectList((0,_appModel_js__WEBPACK_IMPORTED_MODULE_2__.getAllProjects)())\n    titleInput.value = ''\n    renderTodoList('all')\n  }\n}\n\nconst formElement = document.getElementById('form')\nformElement.addEventListener('submit', handleFormSubmit)\n\n// Projects\n\nfunction renderProjectList(projects) {\n  const projectsContainer = document.getElementById('projects')\n  projectsContainer.innerHTML = ''\n\n  const filterSelect = document.createElement('select')\n  filterSelect.id = 'filter-select'\n  filterSelect.addEventListener('change', handleFilterChange)\n\n  const allOption = document.createElement('option')\n  allOption.value = 'all'\n  allOption.textContent = 'View All Projects'\n  filterSelect.appendChild(allOption)\n\n  projects.forEach((project) => {\n    const option = document.createElement('option')\n    option.value = project\n    option.textContent = project\n    filterSelect.appendChild(option)\n  })\n\n  projectsContainer.appendChild(filterSelect)\n}\n\nfunction handleFilterChange() {\n  const filterSelect = document.getElementById('filter-select')\n  const selectedProject = filterSelect.value\n\n  // Call a function to filter tasks based on the selected project\n  // Update the to-do list based on the filtered tasks\n  renderTodoList(selectedProject)\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/modules/appView.js?");

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