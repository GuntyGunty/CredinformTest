/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_css__);
﻿


console.log(`Hey.`);
console.log(`Say my name!`);
console.log(`You're God damn right.`);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: SyntaxError: Unexpected token -\n    at exports.runInThisContext (vm.js:53:16)\n    at Module._compile (module.js:373:25)\n    at requireFromString (C:\\Users\\a.beliaeva\\Documents\\GitHub\\CredinformTest\\CredinformTest\\node_modules\\require-from-string\\index.js:27:4)\n    at C:\\Users\\a.beliaeva\\Documents\\GitHub\\CredinformTest\\CredinformTest\\node_modules\\cosmiconfig\\lib\\loadJs.js:11:15\n    at C:\\Users\\a.beliaeva\\AppData\\Roaming\\npm\\node_modules\\webpack\\lib\\NormalModule.js:194:19\n    at C:\\Users\\a.beliaeva\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\Users\\a.beliaeva\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (C:\\Users\\a.beliaeva\\AppData\\Roaming\\npm\\node_modules\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\a.beliaeva\\Documents\\GitHub\\CredinformTest\\CredinformTest\\node_modules\\postcss-loader\\lib\\index.js:176:71");

/***/ })
/******/ ]);