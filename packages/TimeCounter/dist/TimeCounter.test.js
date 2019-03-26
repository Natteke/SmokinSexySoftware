(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TimeCounter", [], factory);
	else if(typeof exports === 'object')
		exports["TimeCounter"] = factory();
	else
		root["TimeCounter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/TimeCounter/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/TimeCounter/src/index.js":
/*!*******************************************!*\
  !*** ./packages/TimeCounter/src/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar TimeCounter = function TimeCounter(callback) {\n  var _this = this;\n\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  _classCallCheck(this, TimeCounter);\n\n  _defineProperty(this, \"interval\", null);\n\n  _defineProperty(this, \"breakpoints\", {\n    ms: 1,\n    sec: 1000,\n    min: 60000,\n    hours: 3600000,\n    days: 86400000\n  });\n\n  _defineProperty(this, \"date\", {\n    ms: 0,\n    sec: 0,\n    min: 0,\n    hours: 0,\n    days: 0\n  });\n\n  _defineProperty(this, \"start\", function () {\n    var interval = Math.abs(_this.tick); // вызываем первый коллбек синхронно\n\n    _this.iterate(); // запускаем итерацию по интервалу\n\n\n    _this.interval = setInterval(function () {\n      _this.time += _this.tick;\n\n      _this.iterate();\n\n      if (_this.time <= 0) _this.stop();\n    }, interval);\n  });\n\n  _defineProperty(this, \"iterate\", function () {\n    _this.date = _this.parseTime();\n\n    _this.response();\n  });\n\n  _defineProperty(this, \"parseTime\", function () {\n    var rest = _this.time + 0;\n    var bp = _this.breakpoints;\n    var newDate = {\n      days: 0,\n      hours: 0,\n      min: 0,\n      sec: 0,\n      ms: 0\n    };\n\n    for (var prop in newDate) {\n      if (rest >= bp[prop] && bp[prop] <= bp[_this.endBreakpoint]) {\n        newDate[prop] = ~~(rest / bp[prop]);\n        rest -= bp[prop] * newDate[prop];\n      }\n    }\n\n    return newDate;\n  });\n\n  _defineProperty(this, \"addZeros\", function (date) {\n    var newDate = _objectSpread({}, date);\n\n    Object.keys(newDate).forEach(function (e) {\n      newDate[e] = newDate[e] < 10 ? \"0\".concat(newDate[e]) : \"\".concat(newDate[e]);\n    });\n    return newDate;\n  });\n\n  _defineProperty(this, \"response\", function () {\n    var date = _this.date,\n        addZeros = _this.addZeros;\n    var newDate = _this.addLeadingZeros ? addZeros(date) : _objectSpread({}, date);\n\n    _this.onTick(newDate, _this);\n  });\n\n  _defineProperty(this, \"stop\", function () {\n    return clearInterval(_this.interval);\n  });\n\n  this.onTick = callback || function () {\n    throw Error('1st argument callback required');\n  };\n\n  this.time = params.time || 0;\n  this.tick = params.tick || 1000;\n  this.endBreakpoint = params.endBreakpoint || 'days';\n  this.addLeadingZeros = params.addLeadingZeros || false;\n  this.start();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeCounter);\n\n//# sourceURL=webpack://%5Bname%5D/./packages/TimeCounter/src/index.js?");

/***/ })

/******/ })["default"];
});