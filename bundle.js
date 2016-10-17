/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	console.log('hello');
	//
	// var request = new XMLHttpRequest();
	// request.open('GET', 'http://localhost:8080/clusters', true);
	// request.onload = function() {
	//   console.log(request.status);
	//   console.log(request.responseText);
	// };
	//
	// request.onerror = function() {
	//   console.log('this did not fracking work');
	// };
	//
	// request.send();


	$.ajax({
	  type: 'GET',
	  dataType: 'JSON',
	  url: 'http://localhost:8080/admin/clusters',
	  success: function success(data) {
			console.log('success');
	    console.log(data);
	  },
	  error: function error(e) {
			console.log('error');
	    console.log(e);
	    console.log("this didn't work");
	  }
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
