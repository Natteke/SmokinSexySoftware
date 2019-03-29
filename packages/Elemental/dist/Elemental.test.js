(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define("Elemental", [], factory);
    else if (typeof exports === 'object')
        exports["Elemental"] = factory();
    else
        root["Elemental"] = factory();
})(window, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/ 		// Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/            i: moduleId,
                /******/            l: false,
                /******/            exports: {}
                /******/
            };
            /******/
            /******/ 		// Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/
            return module.exports;
            /******/
        }

        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ 	// define getter function for harmony exports
        /******/
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/
            }
            /******/
        };
        /******/
        /******/ 	// define __esModule on exports
        /******/
        __webpack_require__.r = function(exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
        /******/ 	// create a fake namespace object
        /******/ 	// mode & 1: value is a module id, require it
        /******/ 	// mode & 2: merge all properties of value into the ns
        /******/ 	// mode & 4: return value when already ns object
        /******/ 	// mode & 8|1: behave like require
        /******/
        __webpack_require__.t = function(value, mode) {
            /******/
            if (mode & 1) value = __webpack_require__(value);
            /******/
            if (mode & 8) return value;
            /******/
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            /******/
            var ns = Object.create(null);
            /******/
            __webpack_require__.r(ns);
            /******/
            Object.defineProperty(ns, 'default', { enumerable: true, value: value });
            /******/
            if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            /******/
            return ns;
            /******/
        };
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ?
                /******/            function getDefault() {
                    return module['default'];
                } :
                /******/            function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ 	// __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/
        /******/ 	// Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = "./packages/Elemental/src/index.js");
        /******/
    })
    /************************************************************************/
    /******/({

        /***/ "./packages/Elemental/src/index.js":
        /*!*****************************************!*\
          !*** ./packages/Elemental/src/index.js ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\nvar Elemental = {};\n/* https://regex101.com/r/9kYy03/4 */\n\nElemental.regexp = function (string) {\n  return new RegExp(\"\\\\s?((?<!(\\\\w))\\\\s)?(?<!([-+$\\\\[\\\\]\\\\w]))\".concat(string, \"(?!([-+$\\\\[\\\\]\\\\w]))\"));\n};\n\nElemental.contains = function (string, substring) {\n  return Elemental.regexp(string).test(substring);\n};\n\nElemental.hasClass = function (element, string) {\n  return Elemental.contains(string, element.className);\n};\n\nElemental.addClass = function (element, string) {\n  var className = element.className;\n\n  if (!Elemental.hasClass(element, string)) {\n    var space = className.length > 0 ? ' ' : '';\n    className += \"\".concat(space).concat(string);\n  }\n\n  element.setAttribute('class', className);\n  return element;\n};\n\nElemental.removeClass = function (element, string) {\n  var className = element.className;\n\n  while (Elemental.contains(string, className)) {\n    className = className.replace(Elemental.regexp(string), '');\n  }\n\n  element.setAttribute('class', className);\n  return element;\n}; // patch Element.prototype with Elemental methods\n\n\nElemental.eject = function () {\n  // props we don't want to eject\n  var shouldEject = ['addClass', 'removeClass', 'hasClass'];\n  var methods = Object.getOwnPropertyNames(Elemental).filter(function (e) {\n    return shouldEject.indexOf(e) >= 0;\n  });\n  methods.forEach(function (methodName) {\n    Element.prototype[methodName] = function (className) {\n      return Elemental[methodName](this, className);\n    };\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Elemental);\n\n//# sourceURL=webpack://%5Bname%5D/./packages/Elemental/src/index.js?");

            /***/
        })

        /******/
    })["default"];
});