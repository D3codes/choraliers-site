(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(7);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(36)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(6);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(35);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(37);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(12);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(11);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(7);

var _helpers = __webpack_require__(38);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(34)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(19);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: /Users/davidfreeman/Developer/choraliers-site/src/images/choralierslogo.png
var choralierslogo = __webpack_require__(20);
var choralierslogo_default = /*#__PURE__*/__webpack_require__.n(choralierslogo);

// CONCATENATED MODULE: /Users/davidfreeman/Developer/choraliers-site/src/components/navbar.js





var useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      color: '#E7ECEF',
      backgroundColor: '#12212B'
    },
    leftButtons: {
      flexGrow: 1
    },
    centerButton: {
      flexGrow: 1
    },
    logo: {
      height: '40px',
      marginRight: theme.spacing(2)
    },
    title: {
      color: '#E7ECEF'
    },
    rightButtons: {},
    menuIcon: {
      color: '#E7ECEF'
    }
  };
});
var TABS = [{
  title: 'About',
  id: 1
}, {
  title: 'Join Us',
  id: 2
}, {
  title: 'Shows',
  id: 3
}, {
  title: 'Media',
  id: 4
}];
function Navbar(_ref) {
  var _mql;

  var onTabSelect = _ref.onTabSelect;
  var classes = useStyles();
  var mql;

  if (typeof window !== 'undefined') {
    mql = window.matchMedia('(max-width: 650px)');
  }

  var isMobile = (_mql = mql) === null || _mql === void 0 ? void 0 : _mql.matches;

  var _useState = Object(external_react_["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var open = Boolean(anchorEl);

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(core_["AppBar"], {
    position: "fixed",
    className: classes.root
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Toolbar"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.centerButton
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
    onClick: function onClick() {
      return onTabSelect(0);
    },
    style: {
      textTransform: 'none'
    }
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: choralierslogo_default.a,
    className: classes.logo,
    alt: "Choraliers logo"
  }), !isMobile && /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h5",
    className: classes.title
  }, "The Cody Choraliers"))), !isMobile && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.rightButtons
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
    onClick: function onClick() {
      return onTabSelect(1);
    },
    color: "inherit"
  }, "About"), /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
    onClick: function onClick() {
      return onTabSelect(2);
    },
    color: "inherit"
  }, "Join Us"), /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
    onClick: function onClick() {
      return onTabSelect(3);
    },
    color: "inherit"
  }, "Shows"), /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
    onClick: function onClick() {
      return onTabSelect(4);
    },
    color: "inherit"
  }, "Media")), isMobile && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.menu
  }, /*#__PURE__*/external_react_default.a.createElement(core_["IconButton"], {
    onClick: handleClick
  }, /*#__PURE__*/external_react_default.a.createElement(Menu_default.a, {
    className: classes.menuIcon
  })), /*#__PURE__*/external_react_default.a.createElement(core_["Menu"], {
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose
  }, TABS.map(function (tab) {
    return /*#__PURE__*/external_react_default.a.createElement(core_["MenuItem"], {
      key: "".concat(tab.title, "-").concat(tab.id),
      onClick: function onClick() {
        onTabSelect(tab.id);
        handleClose();
      }
    }, tab.title);
  }))))), /*#__PURE__*/external_react_default.a.createElement(core_["Toolbar"], null));
}
// EXTERNAL MODULE: /Users/davidfreeman/Developer/choraliers-site/src/images/logotext.png
var logotext = __webpack_require__(21);
var logotext_default = /*#__PURE__*/__webpack_require__.n(logotext);

// EXTERNAL MODULE: /Users/davidfreeman/Developer/choraliers-site/src/images/choraliers1.jpg
var choraliers1 = __webpack_require__(22);
var choraliers1_default = /*#__PURE__*/__webpack_require__.n(choraliers1);

// CONCATENATED MODULE: /Users/davidfreeman/Developer/choraliers-site/src/components/pages/home.js




var home_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    root: {
      margin: theme.spacing(),
      textAlign: 'center',
      paddingBottom: theme.spacing(10)
    },
    logotext: {
      width: '50%',
      maxWidth: '670px'
    },
    image: {
      width: '90%',
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(),
      maxWidth: '1200px'
    }
  };
});

var home_Home = function Home() {
  var classes = home_useStyles();
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: logotext_default.a,
    alt: "Choraliers logo",
    className: classes.logotext
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: choraliers1_default.a,
    alt: "The Cody Choraliers",
    className: classes.image
  }), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h5"
  }, "Two Time CSD Small Chorus Champions!"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "Under the direction of Jerry Garrard, The Cody Choraliers are a small but growing group of men from the Leavenworth area who enjoy performing a cappella music."));
};

/* harmony default export */ var home = (home_Home);
// EXTERNAL MODULE: /Users/davidfreeman/Developer/choraliers-site/src/images/bhs.png
var bhs = __webpack_require__(23);
var bhs_default = /*#__PURE__*/__webpack_require__.n(bhs);

// EXTERNAL MODULE: /Users/davidfreeman/Developer/choraliers-site/src/images/jerry.png
var jerry = __webpack_require__(24);
var jerry_default = /*#__PURE__*/__webpack_require__.n(jerry);

// EXTERNAL MODULE: /Users/davidfreeman/Developer/choraliers-site/src/images/choraliers4.png
var choraliers4 = __webpack_require__(25);
var choraliers4_default = /*#__PURE__*/__webpack_require__.n(choraliers4);

// CONCATENATED MODULE: /Users/davidfreeman/Developer/choraliers-site/src/components/pages/about.js





var about_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    root: {
      margin: theme.spacing(),
      paddingBottom: theme.spacing(10)
    },
    who: {
      marginBottom: theme.spacing(3)
    },
    chorus: {
      width: '90%',
      maxWidth: '550px'
    },
    director: {},
    jerry: {
      height: '216px'
    },
    bhs: {
      marginTop: theme.spacing(3),
      textAlign: 'center'
    },
    bhsLogo: {
      width: '150px',
      marginTop: theme.spacing()
    }
  };
});

var about_About = function About() {
  var classes = about_useStyles();
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.who
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h4"
  }, "Who are the Cody Choraliers?"), /*#__PURE__*/external_react_default.a.createElement("img", {
    className: classes.chorus,
    src: choraliers4_default.a,
    alt: "The Cody Choraliers"
  }), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "The Leavenworth chapter of the Barbershop Harmony Society is to be an ever growing body of sociable, fun-loving, acapella barbershop style singers who promote and encourage vocal music through social activities, contests, performances (both public & private), and educational opportunities within our local schools.")), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h4"
  }, "Our Director"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.director
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: classes.jerry,
    src: jerry_default.a,
    alt: "Jerry"
  }), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "Jerry Garrard is a native of the Kansas City metro area.  His love affair with Barbershop began as a junior high school student at a Youth In Harmony event \u2014 known today as Harmony Explosion \u2014 sponsored by the Heart of America Chorus.  That quartet, 'The Overtones' won first place solidifying his passion for barbershop harmony.  Jerry\u2019s lifelong love of music brought him through college as a Music Education major and has allowed opportunities to sing with the Kansas City Chorale and Kansas City Symphony Chorus for several years. Interest in Barbershop takes many different shapes and sizes with Jerry. He\u2019s given back to the hobby by serving as current director for the RiverSong Chorus of St. Joseph, MO and the previous director of the Heart of America Chorus of Kansas City, MO. Top that off with an impressive list of CSD competing quartets including his current foursome, Priorities."), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "Throughout his musical career, Jerry has performed with various ensembles as well as a soloist on the world's leading performing arts center stages\u2014such as Lincoln Center's Avery Fischer Hall and Carnegie Hall directing the Heart of America Chorus and the Barbershop Festival Chorus during his most recent visit to New York City."), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "Unbelievable as it may seem, Jerry still has time outside Barbershop for a rewarding IT profession as a Cloud Architect.  Purely personal pursuits include his continued ambition of proficiency as a private pilot and enjoying his grandchildren.")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.bhs
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h5"
  }, "The Cody Choraliers are proud members of the Barbershop Harmony Society"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://barbershop.org"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: classes.bhsLogo,
    src: bhs_default.a,
    alt: "Barbershop Harmony Society"
  }))));
};

/* harmony default export */ var about = (about_About);
// EXTERNAL MODULE: /Users/davidfreeman/Developer/choraliers-site/src/images/choraliers2.jpg
var choraliers2 = __webpack_require__(26);
var choraliers2_default = /*#__PURE__*/__webpack_require__.n(choraliers2);

// CONCATENATED MODULE: /Users/davidfreeman/Developer/choraliers-site/src/components/pages/joinUs.js



var joinUs_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    root: {
      margin: theme.spacing(),
      paddingBottom: theme.spacing(10)
    },
    covid: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    image: {
      width: '90%',
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(),
      maxWidth: '800px'
    },
    map: {
      width: '600px',
      height: '500px',
      maxWidth: '90%',
      maxHeight: 'calc((90vw - 40px) / (6/5))'
    }
  };
});

var joinUs_JoinUs = function JoinUs() {
  var classes = joinUs_useStyles();
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h4"
  }, "Join the Choraliers"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.covid
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h5"
  }, "We have resumed in-person rehearsals!")), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: choraliers2_default.a,
    alt: "The Cody Choraliers",
    className: classes.image
  }), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "The Cody Choraliers are always looking for men to join our ranks. If you enjoy singing and want to be a part of a brotherhood like no other, please consider visiting us during any rehearsal."), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.infoContainer
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h6"
  }, "When"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "Monday Evenings"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "7 - 9:30 pm")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h6"
  }, "Where"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "The First Presbyterian Church"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "407 Walnut St, Leavenworth, KS")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    title: "Choraliers Location",
    className: classes.map,
    src: "https://maps.google.com/maps?q=407%20Walnut%20St%20Leavenworth,%20KS%2066048&t=&z=15&ie=UTF8&iwloc=&output=embed",
    frameborder: "0",
    scrolling: "no",
    marginHeight: "0",
    marginWidth: "0"
  })), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "Call 913-651-SING (7464) with questions or to get directions to our rehearsal venue.")));
};

/* harmony default export */ var joinUs = (joinUs_JoinUs);
// EXTERNAL MODULE: /Users/davidfreeman/Developer/choraliers-site/src/images/xmastree.png
var xmastree = __webpack_require__(27);
var xmastree_default = /*#__PURE__*/__webpack_require__.n(xmastree);

// EXTERNAL MODULE: /Users/davidfreeman/Developer/choraliers-site/src/images/riversong.png
var riversong = __webpack_require__(28);
var riversong_default = /*#__PURE__*/__webpack_require__.n(riversong);

// CONCATENATED MODULE: /Users/davidfreeman/Developer/choraliers-site/src/components/pages/shows.js




var shows_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    root: {
      margin: theme.spacing(),
      paddingBottom: theme.spacing(10)
    },
    container: {
      textAlign: 'center'
    },
    infoContainer: {
      textAlign: 'center',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    image: {
      width: '90%',
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(),
      maxWidth: '700px'
    },
    imageNarrow: {
      width: '90%',
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(),
      maxWidth: '200px'
    }
  };
});

var shows_Shows = function Shows() {
  var classes = shows_useStyles();
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h4"
  }, "Upcoming Appearances"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.infoContainer
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h4"
  }, "The Cody Choraliers Present:"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h4"
  }, "2021 Holiday Dinner and Show"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h5"
  }, "with the St. Joseph RiverSong Chorus"), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: xmastree_default.a,
    alt: "Christmas Tree",
    className: classes.imageNarrow
  }), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h6"
  }, "When"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "December 10 @ 6:30pm")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h6"
  }, "Where"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "The Heritage Center"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "109 Delaware, Leavenworth, KS")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h6"
  }, "Tickets"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "Adults $20 | Children $10"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "Call 913-682-2122 or 913-651-7464"))), /*#__PURE__*/external_react_default.a.createElement(core_["Divider"], null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.infoContainer
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h4"
  }, "RiverSong Chorus Holiday Show"), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: riversong_default.a,
    alt: "The RiverSong Chorus",
    className: classes.image
  }), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h6"
  }, "When"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "December 12 @ 4:30pm")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h6"
  }, "Where"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "Wyatt Park Christian Church"), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "2623 Mitchell Ave, St. Joseph, MO"))), /*#__PURE__*/external_react_default.a.createElement(core_["Divider"], null), /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], null, "Check back later for more info!")));
};

/* harmony default export */ var shows = (shows_Shows);
// CONCATENATED MODULE: /Users/davidfreeman/Developer/choraliers-site/src/components/pages/media.js


var media_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    root: {
      margin: theme.spacing(),
      textAlign: 'center',
      paddingBottom: theme.spacing(10)
    },
    videoContainer: {
      marginBottom: theme.spacing(2)
    },
    title: {},
    video1: {
      width: '1200px',
      maxWidth: '90%',
      height: '675px',
      maxHeight: 'calc((90vw - 40px) / (16/9))'
    },
    video2: {
      width: '1000px',
      maxWidth: '90%',
      height: '800px',
      maxHeight: 'calc((90vw - 40px) / (10/8))'
    }
  };
});

var media_Media = function Media() {
  var classes = media_useStyles();
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.videoContainer
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h6",
    className: classes.title
  }, "2018 CSD Competition"), /*#__PURE__*/external_react_default.a.createElement("iframe", {
    className: classes.video1,
    src: "https://www.youtube.com/embed/uG8zzAzZCL8",
    title: "2018 CSD Competition",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.videoContainer
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Typography"], {
    variant: "h6",
    className: classes.title
  }, "2010 CSD Competition"), /*#__PURE__*/external_react_default.a.createElement("iframe", {
    className: classes.video2,
    src: "https://www.youtube.com/embed/yvFqM6tsBDs",
    title: "2010 CSD Competition",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  })));
};

/* harmony default export */ var media = (media_Media);
// CONCATENATED MODULE: /Users/davidfreeman/Developer/choraliers-site/src/App.js









var App_useStyles = Object(core_["makeStyles"])(function (theme) {
  return {
    root: {},
    snackbar: {
      backgroundColor: '#681160',
      color: '#E7ECEF'
    }
  };
});
var PAGES = {
  HOME: 0,
  ABOUT: 1,
  JOIN_US: 2,
  SHOWS: 3,
  MEDIA: 4
};

var App_Site = function Site() {
  var classes = App_useStyles();

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/external_react_default.a.createElement(Navbar, {
    onTabSelect: setPage
  }), page === PAGES.HOME && /*#__PURE__*/external_react_default.a.createElement(home, null), page === PAGES.ABOUT && /*#__PURE__*/external_react_default.a.createElement(about, null), page === PAGES.JOIN_US && /*#__PURE__*/external_react_default.a.createElement(joinUs, null), page === PAGES.SHOWS && /*#__PURE__*/external_react_default.a.createElement(shows, null), page === PAGES.MEDIA && /*#__PURE__*/external_react_default.a.createElement(media, null), /*#__PURE__*/external_react_default.a.createElement(core_["Snackbar"], {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: page !== PAGES.SHOWS,
    onClose: function onClose() {},
    TransitionComponent: core_["Slide"]
  }, /*#__PURE__*/external_react_default.a.createElement(core_["SnackbarContent"], {
    classes: {
      root: classes.snackbar
    },
    message: "Holiday Dinner Show!",
    action: /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
      variant: "contained",
      size: "small",
      onClick: function onClick() {
        setPage(PAGES.SHOWS);
      }
    }, "Info")
  })));
};

/* harmony default export */ var App = __webpack_exports__["a"] = (App_Site);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(6);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(2);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("/Users/davidfreeman/Developer/choraliers-site/node_modules/react-static/lib/browser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("/Users/davidfreeman/Developer/choraliers-site/artifacts/__react_static_root__/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/choralierslogo.91a40e37.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logotext.a6978225.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/choraliers1.12347ef9.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bhs.4266bdbc.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jerry.7b8121af.png";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/choraliers4.9010839d.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/choraliers2.9ba60004.jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/xmastree.4f8b4343.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/riversong.80601b3b.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(32);
module.exports = __webpack_require__(39);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(31)["default"];

var _require = __webpack_require__(9),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins = [{
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(9),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(33),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);




Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 15, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/node_modules/react-static/lib/browser/components/Default404'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/node_modules/react-static/lib/browser/components/Default404': t_0
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(7);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 2,
	"./": 2,
	"./index": 2,
	"./index.js": 2
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 36;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(6);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(11);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(12);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(13);

var _interopRequireWildcard = __webpack_require__(14);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(40);

var _Suspense = _interopRequireDefault(__webpack_require__(41));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(44)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("/Users/davidfreeman/Developer/choraliers-site/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(14);

var _interopRequireDefault = __webpack_require__(13);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(42));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(43));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  document.body.style.backgroundColor = "#E7ECEF";
  document.body.style.margin = 0;
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })
/******/ ]);
});