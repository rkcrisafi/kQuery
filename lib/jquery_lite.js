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
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

const $l = function (arg) {
  const elementsArray = [];
  if (typeof arg === "string") {
    const nodesArray = Array.prototype.slice.call(document.querySelectorAll(arg));
    return new DOMNodeCollection(nodesArray);
  } else if (arg instanceof HTMLElement) {
    elementsArray.push(arg);
    return new DOMNodeCollection(elementsArray);
  }
};


window.$l = $l;


/***/ }),
/* 1 */
/***/ (function(module, exports) {



class DOMNodeCollection {
  constructor (elements) {


    this.elements = elements;
  }

  html (str = null) {
    if (str) {
      this.elements.forEach(element => {
        element.innerHTML = str;
      });
    } else {
      return this.elements[0].innerHTML;
    }
  }


  empty () {
    this.elements.forEach(element => {
      element.innerHTML = "";
    });
  }

  append (content) {
    this.elements.forEach(element => {
      element.innerHTML += content;
    });
  }


  attr (attribute, value = null) {
    if (typeof value === "string") {
      this.elements.forEach(element => {
        element.setAttribute(attribute, value);
      });
      return this.elements;
    } else {
      return this.elements[0].getAttribute(attribute);
    }
  }

  addClass (name) {
    this.elements.forEach(element => {
      element.classList.add("class", name);
    });
    return this.elements;
  }

  removeClass (name) {
    this.elements.forEach(element => {
      element.classList.remove(name);
    });
    return this.elements;
  }

  children () {
    let allChildren = [];
    this.elements.forEach(element => {
      allChildren = allChildren.concat(Array.from(element.children));
    });
    return new DOMNodeCollection(allChildren);
  }

  parent () {
    let parents = [];
    this.elements.forEach(element => {
      if (!parents.includes(element.parentNode)) {
        parents.push(element.parentNode);
      }
    });
    return new DOMNodeCollection(parents);
  }

  find (selector) {
    let result = [];
    this.elements.forEach(element => {
      result = result.concat(Array.from(element.querySelectorAll(selector)));
    });
    return new DOMNodeCollection(result);
  }

  remove () {
    this.elements.forEach(element => {
      element.parentNode.removeChild(element);
    });
    return this.elements;
  }

}


module.exports = DOMNodeCollection;


/***/ })
/******/ ]);
//# sourceMappingURL=jquery_lite.js.map