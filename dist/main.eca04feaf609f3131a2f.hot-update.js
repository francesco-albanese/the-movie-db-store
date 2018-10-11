webpackHotUpdateThe_movie_db_store("main",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-promise */ "./node_modules/redux-promise/lib/index.js");
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }







var initialState = {};

var middlewares = function middlewares() {
  var middlewares = [redux_promise__WEBPACK_IMPORTED_MODULE_3___default.a, redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"]];

  if (true) {
    middlewares.push(redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a);
  }

  return middlewares;
};

var enhancers = function enhancers() {
  var enhancers = [];
  var devToolExtension = window.devToolsExtension;

  if ("development" === 'development' && Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(devToolExtension)) {
    enhancers.push(devToolExtension());
  }

  return enhancers;
};

var composedEnhancers = redux__WEBPACK_IMPORTED_MODULE_1__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, _toConsumableArray(middlewares()))].concat(_toConsumableArray(enhancers())));

var Store = function Store(store) {
  var _this = this;

  _classCallCheck(this, Store);

  _defineProperty(this, "getState", function () {
    return _this.store.getState();
  });

  _defineProperty(this, "getStore", function () {
    return _this.store;
  });

  this.store = store;
};

var store = new Store(Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, composedEnhancers));
console.log(sessionStorage); // exporting one instance of the store only

/* harmony default export */ __webpack_exports__["default"] = (store.getStore());

/***/ })

})
//# sourceMappingURL=main.eca04feaf609f3131a2f.hot-update.js.map