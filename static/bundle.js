webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _reactRedux = __webpack_require__(1);

	var _reactRouter = __webpack_require__(176);

	var _history = __webpack_require__(225);

	var _reduxSimpleRouter = __webpack_require__(230);

	var _reactDom = __webpack_require__(234);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(235);

	var _App2 = _interopRequireDefault(_App);

	var _store = __webpack_require__(323);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();
	var history = (0, _history.createHistory)();

	(0, _reduxSimpleRouter.syncReduxAndRouter)(history, store);

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default })
	  )
	), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _componentsCreateAll = __webpack_require__(158);

	var _componentsCreateAll2 = _interopRequireDefault(_componentsCreateAll);

	var _createAll = _componentsCreateAll2['default'](_react2['default']);

	var Provider = _createAll.Provider;
	var connect = _createAll.connect;
	exports.Provider = Provider;
	exports.connect = connect;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createAll;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createProvider = __webpack_require__(159);

	var _createProvider2 = _interopRequireDefault(_createProvider);

	var _createConnect = __webpack_require__(161);

	var _createConnect2 = _interopRequireDefault(_createConnect);

	function createAll(React) {
	  var Provider = _createProvider2['default'](React);
	  var connect = _createConnect2['default'](React);

	  return { Provider: Provider, connect: connect };
	}

	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createProvider;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsCreateStoreShape = __webpack_require__(160);

	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

	function isUsingOwnerContext(React) {
	  var version = React.version;

	  if (typeof version !== 'string') {
	    return true;
	  }

	  var sections = version.split('.');
	  var major = parseInt(sections[0], 10);
	  var minor = parseInt(sections[1], 10);

	  return major === 0 && minor === 13;
	}

	function createProvider(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;
	  var Children = React.Children;

	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);
	  var requireFunctionChild = isUsingOwnerContext(React);

	  var didWarnAboutChild = false;
	  function warnAboutFunctionChild() {
	    if (didWarnAboutChild || requireFunctionChild) {
	      return;
	    }

	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.14 and later versions, you no longer need to ' + 'wrap <Provider> child into a function.');
	  }
	  function warnAboutElementChild() {
	    if (didWarnAboutChild || !requireFunctionChild) {
	      return;
	    }

	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.13, you need to ' + 'wrap <Provider> child into a function. ' + 'This restriction will be removed with React 0.14.');
	  }

	  var didWarnAboutReceivingStore = false;
	  function warnAboutReceivingStore() {
	    if (didWarnAboutReceivingStore) {
	      return;
	    }

	    didWarnAboutReceivingStore = true;
	    console.error( // eslint-disable-line no-console
	    '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	  }

	  var Provider = (function (_Component) {
	    _inherits(Provider, _Component);

	    Provider.prototype.getChildContext = function getChildContext() {
	      return { store: this.store };
	    };

	    function Provider(props, context) {
	      _classCallCheck(this, Provider);

	      _Component.call(this, props, context);
	      this.store = props.store;
	    }

	    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var store = this.store;
	      var nextStore = nextProps.store;

	      if (store !== nextStore) {
	        warnAboutReceivingStore();
	      }
	    };

	    Provider.prototype.render = function render() {
	      var children = this.props.children;

	      if (typeof children === 'function') {
	        warnAboutFunctionChild();
	        children = children();
	      } else {
	        warnAboutElementChild();
	      }

	      return Children.only(children);
	    };

	    return Provider;
	  })(Component);

	  Provider.childContextTypes = {
	    store: storeShape.isRequired
	  };
	  Provider.propTypes = {
	    store: storeShape.isRequired,
	    children: (requireFunctionChild ? PropTypes.func : PropTypes.element).isRequired
	  };

	  return Provider;
	}

	module.exports = exports['default'];

/***/ },
/* 160 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = createStoreShape;

	function createStoreShape(PropTypes) {
	  return PropTypes.shape({
	    subscribe: PropTypes.func.isRequired,
	    dispatch: PropTypes.func.isRequired,
	    getState: PropTypes.func.isRequired
	  });
	}

	module.exports = exports["default"];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createConnect;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsCreateStoreShape = __webpack_require__(160);

	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

	var _utilsShallowEqual = __webpack_require__(162);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsIsPlainObject = __webpack_require__(163);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsWrapActionCreators = __webpack_require__(164);

	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);

	var _hoistNonReactStatics = __webpack_require__(174);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(175);

	var _invariant2 = _interopRequireDefault(_invariant);

	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function createConnect(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;

	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	    var shouldSubscribe = Boolean(mapStateToProps);
	    var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	    var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	    var finalMergeProps = mergeProps || defaultMergeProps;
	    var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	    var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	    var _options$pure = options.pure;
	    var pure = _options$pure === undefined ? true : _options$pure;

	    // Helps track hot reloading.
	    var version = nextVersion++;

	    function computeStateProps(store, props) {
	      var state = store.getState();
	      var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);

	      _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	      return stateProps;
	    }

	    function computeDispatchProps(store, props) {
	      var dispatch = store.dispatch;

	      var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);

	      _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	      return dispatchProps;
	    }

	    function _computeNextState(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	      return mergedProps;
	    }

	    return function wrapWithConnect(WrappedComponent) {
	      var Connect = (function (_Component) {
	        _inherits(Connect, _Component);

	        Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	          if (!pure) {
	            this.updateStateProps(nextProps);
	            this.updateDispatchProps(nextProps);
	            this.updateState(nextProps);
	            return true;
	          }

	          var storeChanged = nextState.storeState !== this.state.storeState;
	          var propsChanged = !_utilsShallowEqual2['default'](nextProps, this.props);
	          var mapStateProducedChange = false;
	          var dispatchPropsChanged = false;

	          if (storeChanged || propsChanged && shouldUpdateStateProps) {
	            mapStateProducedChange = this.updateStateProps(nextProps);
	          }

	          if (propsChanged && shouldUpdateDispatchProps) {
	            dispatchPropsChanged = this.updateDispatchProps(nextProps);
	          }

	          if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
	            this.updateState(nextProps);
	            return true;
	          }

	          return false;
	        };

	        function Connect(props, context) {
	          _classCallCheck(this, Connect);

	          _Component.call(this, props, context);
	          this.version = version;
	          this.store = props.store || context.store;

	          _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));

	          this.stateProps = computeStateProps(this.store, props);
	          this.dispatchProps = computeDispatchProps(this.store, props);
	          this.state = { storeState: null };
	          this.updateState();
	        }

	        Connect.prototype.computeNextState = function computeNextState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          return _computeNextState(this.stateProps, this.dispatchProps, props);
	        };

	        Connect.prototype.updateStateProps = function updateStateProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          var nextStateProps = computeStateProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
	            return false;
	          }

	          this.stateProps = nextStateProps;
	          return true;
	        };

	        Connect.prototype.updateDispatchProps = function updateDispatchProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          var nextDispatchProps = computeDispatchProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
	            return false;
	          }

	          this.dispatchProps = nextDispatchProps;
	          return true;
	        };

	        Connect.prototype.updateState = function updateState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          this.nextState = this.computeNextState(props);
	        };

	        Connect.prototype.isSubscribed = function isSubscribed() {
	          return typeof this.unsubscribe === 'function';
	        };

	        Connect.prototype.trySubscribe = function trySubscribe() {
	          if (shouldSubscribe && !this.unsubscribe) {
	            this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	            this.handleChange();
	          }
	        };

	        Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	          if (this.unsubscribe) {
	            this.unsubscribe();
	            this.unsubscribe = null;
	          }
	        };

	        Connect.prototype.componentDidMount = function componentDidMount() {
	          this.trySubscribe();
	        };

	        Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	          this.tryUnsubscribe();
	        };

	        Connect.prototype.handleChange = function handleChange() {
	          if (!this.unsubscribe) {
	            return;
	          }

	          this.setState({
	            storeState: this.store.getState()
	          });
	        };

	        Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	          return this.refs.wrappedInstance;
	        };

	        Connect.prototype.render = function render() {
	          return React.createElement(WrappedComponent, _extends({ ref: 'wrappedInstance'
	          }, this.nextState));
	        };

	        return Connect;
	      })(Component);

	      Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	      Connect.WrappedComponent = WrappedComponent;
	      Connect.contextTypes = {
	        store: storeShape
	      };
	      Connect.propTypes = {
	        store: storeShape
	      };

	      if (true) {
	        Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	          if (this.version === version) {
	            return;
	          }

	          // We are hot reloading!
	          this.version = version;

	          // Update the state and bindings.
	          this.trySubscribe();
	          this.updateStateProps();
	          this.updateDispatchProps();
	          this.updateState();
	        };
	      }

	      return _hoistNonReactStatics2['default'](Connect, WrappedComponent);
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapActionCreators;

	var _redux = __webpack_require__(165);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(166);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _utilsCombineReducers = __webpack_require__(168);

	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);

	var _utilsBindActionCreators = __webpack_require__(171);

	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);

	var _utilsApplyMiddleware = __webpack_require__(172);

	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);

	var _utilsCompose = __webpack_require__(173);

	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsIsPlainObject = __webpack_require__(167);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);
	    var isSubscribed = true;

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	var objStringValue = fnToString(Object);

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === objStringValue;
	}

	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(166);

	var _isPlainObject = __webpack_require__(167);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _mapValues = __webpack_require__(169);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _pick = __webpack_require__(170);

	var _pick2 = _interopRequireDefault(_pick);

	/* eslint-disable no-console */

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!_isPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */

	function combineReducers(reducers) {
	  var finalReducers = _pick2['default'](reducers, function (val) {
	    return typeof val === 'function';
	  });
	  var sanityError;

	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  var defaultState = _mapValues2['default'](finalReducers, function () {
	    return undefined;
	  });

	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;

	    if (sanityError) {
	      throw sanityError;
	    }

	    var hasChanged = false;
	    var finalState = _mapValues2['default'](finalReducers, function (reducer, key) {
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	      return nextStateForKey;
	    });

	    if (true) {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }

	    return hasChanged ? finalState : state;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 169 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = mapValues;

	function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 170 */
/***/ function(module, exports) {

	/**
	 * Picks key-value pairs from an object where values satisfy a predicate.
	 *
	 * @param {Object} obj The object to pick from.
	 * @param {Function} fn The predicate the values must satisfy to be copied.
	 * @returns {Object} The object with the values that satisfied the predicate.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = pick;

	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key];
	    }
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapValues = __webpack_require__(169);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */

	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null || actionCreators === undefined) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  return _mapValues2['default'](actionCreators, function (actionCreator) {
	    return bindActionCreator(actionCreator, dispatch);
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _compose = __webpack_require__(173);

	var _compose2 = _interopRequireDefault(_compose);

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 174 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            targetComponent[keys[i]] = sourceComponent[keys[i]];
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(177);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(213);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	var _IndexLink2 = __webpack_require__(214);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	exports.IndexLink = _IndexLink3['default'];

	/* components (configuration) */

	var _IndexRedirect2 = __webpack_require__(215);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	exports.IndexRedirect = _IndexRedirect3['default'];

	var _IndexRoute2 = __webpack_require__(217);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	exports.IndexRoute = _IndexRoute3['default'];

	var _Redirect2 = __webpack_require__(216);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(218);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _History2 = __webpack_require__(219);

	var _History3 = _interopRequireDefault(_History2);

	exports.History = _History3['default'];

	var _Lifecycle2 = __webpack_require__(220);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	exports.Lifecycle = _Lifecycle3['default'];

	var _RouteContext2 = __webpack_require__(221);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	exports.RouteContext = _RouteContext3['default'];

	/* utils */

	var _useRoutes2 = __webpack_require__(202);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	exports.useRoutes = _useRoutes3['default'];

	var _RouteUtils = __webpack_require__(197);

	exports.createRoutes = _RouteUtils.createRoutes;

	var _RoutingContext2 = __webpack_require__(198);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	exports.RoutingContext = _RoutingContext3['default'];

	var _PropTypes2 = __webpack_require__(212);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _match2 = __webpack_require__(222);

	var _match3 = _interopRequireDefault(_match2);

	exports.match = _match3['default'];

	var _Router4 = _interopRequireDefault(_Router2);

	exports['default'] = _Router4['default'];

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(178);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _historyLibCreateHashHistory = __webpack_require__(179);

	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

	var _RouteUtils = __webpack_require__(197);

	var _RoutingContext = __webpack_require__(198);

	var _RoutingContext2 = _interopRequireDefault(_RoutingContext);

	var _useRoutes = __webpack_require__(202);

	var _useRoutes2 = _interopRequireDefault(_useRoutes);

	var _PropTypes = __webpack_require__(212);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RoutingContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = (function (_Component) {
	  _inherits(Router, _Component);

	  function Router(props, context) {
	    _classCallCheck(this, Router);

	    _Component.call(this, props, context);

	    this.state = {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  }

	  Router.prototype.handleError = function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  };

	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var history = _props.history;
	    var children = _props.children;
	    var routes = _props.routes;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    var createHistory = history ? function () {
	      return history;
	    } : _historyLibCreateHashHistory2['default'];

	    this.history = _useRoutes2['default'](createHistory)({
	      routes: _RouteUtils.createRoutes(routes || children),
	      parseQueryString: parseQueryString,
	      stringifyQuery: stringifyQuery
	    });

	    this._unlisten = this.history.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  };

	  /* istanbul ignore next: sanity check */

	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	     true ? _warning2['default'](nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : undefined;

	     true ? _warning2['default']((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : undefined;
	  };

	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  };

	  Router.prototype.render = function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props2 = this.props;
	    var RoutingContext = _props2.RoutingContext;
	    var createElement = _props2.createElement;

	    var props = _objectWithoutProperties(_props2, ['RoutingContext', 'createElement']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return _react2['default'].createElement(RoutingContext, _extends({}, props, {
	      history: this.history,
	      createElement: createElement,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components
	    }));
	  };

	  return Router;
	})(_react.Component);

	Router.propTypes = {
	  history: object,
	  children: _PropTypes.routes,
	  routes: _PropTypes.routes, // alias for children
	  RoutingContext: func.isRequired,
	  createElement: func,
	  onError: func,
	  onUpdate: func,
	  parseQueryString: func,
	  stringifyQuery: func
	};

	Router.defaultProps = {
	  RoutingContext: _RoutingContext2['default']
	};

	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (true) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(180);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(182);

	var _ExecutionEnvironment = __webpack_require__(183);

	var _DOMUtils = __webpack_require__(184);

	var _DOMStateStorage = __webpack_require__(185);

	var _createDOMHistory = __webpack_require__(186);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	var _parsePath = __webpack_require__(193);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  true ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	         true ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	     true ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	     true ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	     true ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	     true ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	     true ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (true) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 182 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 184 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  // FIXME: Work around our browser history not working correctly on Chrome
	  // iOS: https://github.com/rackt/react-router/issues/2565
	  if (ua.indexOf('CriOS') !== -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(180);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededError = 'QuotaExceededError';
	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       true ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	       true ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       true ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(183);

	var _DOMUtils = __webpack_require__(184);

	var _createHistory = __webpack_require__(187);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ?  true ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	//import warning from 'warning'
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(188);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _AsyncUtils = __webpack_require__(191);

	var _Actions = __webpack_require__(182);

	var _createLocation2 = __webpack_require__(192);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(195);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _parsePath = __webpack_require__(193);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(196);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var keyLength = options.keyLength;
	  var getUserConfirmation = options.getUserConfirmation;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	      //warning(
	      //  false,
	      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
	      //  'location descriptor instead'
	      //)

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _parsePath2['default'](path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _parsePath2['default'](path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(189);
	var isArguments = __webpack_require__(190);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 189 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 190 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 191 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	//import warning from 'warning'
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Actions = __webpack_require__(182);

	var _parsePath = __webpack_require__(193);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _parsePath2['default'](location);

	  if (typeof action === 'object') {
	    //warning(
	    //  false,
	    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
	    //  'location descriptor instead'
	    //)

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(180);

	var _warning2 = _interopRequireDefault(_warning);

	var _extractPath = __webpack_require__(194);

	var _extractPath2 = _interopRequireDefault(_extractPath);

	function parsePath(path) {
	  var pathname = _extractPath2['default'](path);
	  var search = '';
	  var hash = '';

	   true ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}

	exports['default'] = parsePath;
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	exports["default"] = extractPath;
	module.exports = exports["default"];

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(180);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	     true ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];

/***/ },
/* 196 */
/***/ function(module, exports) {

	//import warning from 'warning'

	"use strict";

	exports.__esModule = true;
	function deprecate(fn) {
	  return fn;
	  //return function () {
	  //  warning(false, '[history] ' + message)
	  //  return fn.apply(this, arguments)
	  //}
	}

	exports["default"] = deprecate;
	module.exports = exports["default"];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(178);

	var _warning2 = _interopRequireDefault(_warning);

	function isValidChild(object) {
	  return object == null || _react2['default'].isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      /* istanbul ignore if: error logging */
	      if (error instanceof Error)  true ? _warning2['default'](false, error.message) : undefined;
	    }
	  }
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *   
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */

	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2['default'].Children.forEach(children, function (element) {
	    if (_react2['default'].isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */

	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(199);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(197);

	var _getRouteParams = __webpack_require__(200);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _React$PropTypes = _react2['default'].PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RoutingContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RoutingContext = (function (_Component) {
	  _inherits(RoutingContext, _Component);

	  function RoutingContext() {
	    _classCallCheck(this, RoutingContext);

	    _Component.apply(this, arguments);
	  }

	  RoutingContext.prototype.getChildContext = function getChildContext() {
	    var _props = this.props;
	    var history = _props.history;
	    var location = _props.location;

	    return { history: history, location: location };
	  };

	  RoutingContext.prototype.createElement = function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  };

	  RoutingContext.prototype.render = function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = _getRouteParams2['default'](route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if (_RouteUtils.isReactChildren(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (element.hasOwnProperty(prop)) props[prop] = element[prop];
	          }
	        }

	        if (typeof components === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (components.hasOwnProperty(key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2['default'].isValidElement(element)) ?  true ? _invariant2['default'](false, 'The root route must render a single element') : _invariant2['default'](false) : undefined;

	    return element;
	  };

	  return RoutingContext;
	})(_react.Component);

	RoutingContext.propTypes = {
	  history: object.isRequired,
	  createElement: func.isRequired,
	  location: object.isRequired,
	  routes: array.isRequired,
	  params: object.isRequired,
	  components: array.isRequired
	};

	RoutingContext.defaultProps = {
	  createElement: _react2['default'].createElement
	};

	RoutingContext.childContextTypes = {
	  history: object.isRequired,
	  location: object.isRequired
	};

	exports['default'] = RoutingContext;
	module.exports = exports['default'];

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(201);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  for (var p in params) {
	    if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];
	  }return routeParams;
	}

	exports['default'] = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(199);

	var _invariant2 = _interopRequireDefault(_invariant);

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = undefined,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '([\\s\\S]*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */

	function matchPattern(pattern, pathname) {
	  // Make leading slashes consistent between pattern and pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  regexpSource += '/*'; // Capture path separators

	  // Special-case patterns like '*' for catch-all routes.
	  var captureRemaining = tokens[tokens.length - 1] !== '*';

	  if (captureRemaining) {
	    // This will match newlines in the remaining path.
	    regexpSource += '([\\s\\S]*?)';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

	  var remainingPathname = undefined,
	      paramValues = undefined;
	  if (match != null) {
	    if (captureRemaining) {
	      remainingPathname = match.pop();
	      var matchedPath = match[0].substr(0, match[0].length - remainingPathname.length);

	      // If we didn't match the entire pathname, then make sure that the match
	      // we did get ends at a path separator (potentially the one we added
	      // above at the beginning of the path, if the actual match was empty).
	      if (remainingPathname && matchedPath.charAt(matchedPath.length - 1) !== '/') {
	        return {
	          remainingPathname: null,
	          paramNames: paramNames,
	          paramValues: null
	        };
	      }
	    } else {
	      // If this matched at all, then the match was the entire pathname.
	      remainingPathname = '';
	    }

	    paramValues = match.slice(1).map(function (v) {
	      return v != null ? decodeURIComponent(v) : v;
	    });
	  } else {
	    remainingPathname = paramValues = null;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, pathname);

	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }

	  return null;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */

	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = undefined,
	      paramName = undefined,
	      paramValue = undefined;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ?  true ? _invariant2['default'](false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : _invariant2['default'](false) : undefined;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ?  true ? _invariant2['default'](false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : _invariant2['default'](false) : undefined;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _warning = __webpack_require__(178);

	var _warning2 = _interopRequireDefault(_warning);

	var _historyLibActions = __webpack_require__(182);

	var _historyLibUseQueries = __webpack_require__(203);

	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

	var _computeChangedRoutes2 = __webpack_require__(206);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(207);

	var _isActive2 = __webpack_require__(209);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(210);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(211);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var routes = options.routes;

	    var historyOptions = _objectWithoutProperties(options, ['routes']);

	    var history = _historyLibUseQueries2['default'](createHistory)(historyOptions);
	    var state = {};

	    function isActive(pathname, query) {
	      var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	      return _isActive3['default'](pathname, query, indexOnly, state.location, state.routes, state.params);
	    }

	    function createLocationFromRedirectInfo(_ref) {
	      var pathname = _ref.pathname;
	      var query = _ref.query;
	      var state = _ref.state;

	      return history.createLocation(history.createPath(pathname, query), state, _historyLibActions.REPLACE);
	    }

	    var partialNextState = undefined;

	    function match(location, callback) {
	      if (partialNextState && partialNextState.location === location) {
	        // Continue from where we left off.
	        finishMatch(partialNextState, callback);
	      } else {
	        _matchRoutes2['default'](routes, location, function (error, nextState) {
	          if (error) {
	            callback(error);
	          } else if (nextState) {
	            finishMatch(_extends({}, nextState, { location: location }), callback);
	          } else {
	            callback();
	          }
	        });
	      }
	    }

	    function finishMatch(nextState, callback) {
	      var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);

	      var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	      var enterRoutes = _computeChangedRoutes.enterRoutes;

	      _TransitionUtils.runLeaveHooks(leaveRoutes);

	      _TransitionUtils.runEnterHooks(enterRoutes, nextState, function (error, redirectInfo) {
	        if (error) {
	          callback(error);
	        } else if (redirectInfo) {
	          callback(null, createLocationFromRedirectInfo(redirectInfo));
	        } else {
	          // TODO: Fetch components after state is updated.
	          _getComponents2['default'](nextState, function (error, components) {
	            if (error) {
	              callback(error);
	            } else {
	              // TODO: Make match a pure function and have some other API
	              // for "match and update state".
	              callback(null, null, state = _extends({}, nextState, { components: components }));
	            }
	          });
	        }
	      });
	    }

	    var RouteGuid = 1;

	    function getRouteID(route) {
	      return route.__id__ || (route.__id__ = RouteGuid++);
	    }

	    var RouteHooks = {};

	    function getRouteHooksForRoutes(routes) {
	      return routes.reduce(function (hooks, route) {
	        hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	        return hooks;
	      }, []);
	    }

	    function transitionHook(location, callback) {
	      _matchRoutes2['default'](routes, location, function (error, nextState) {
	        if (nextState == null) {
	          // TODO: We didn't actually match anything, but hang
	          // onto error/nextState so we don't have to matchRoutes
	          // again in the listen callback.
	          callback();
	          return;
	        }

	        // Cache some state here so we don't have to
	        // matchRoutes() again in the listen callback.
	        partialNextState = _extends({}, nextState, { location: location });

	        var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, partialNextState).leaveRoutes);

	        var result = undefined;
	        for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	          // Passing the location arg here indicates to
	          // the user that this is a transition hook.
	          result = hooks[i](location);
	        }

	        callback(result);
	      });
	    }

	    function beforeUnloadHook() {
	      // Synchronously check to see if any route hooks want
	      // to prevent the current window/tab from closing.
	      if (state.routes) {
	        var hooks = getRouteHooksForRoutes(state.routes);

	        var message = undefined;
	        for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	          // Passing no args indicates to the user that this is a
	          // beforeunload hook. We don't know the next location.
	          message = hooks[i]();
	        }

	        return message;
	      }
	    }

	    var unlistenBefore = undefined,
	        unlistenBeforeUnload = undefined;

	    /**
	     * Registers the given hook function to run before leaving the given route.
	     *
	     * During a normal transition, the hook function receives the next location
	     * as its only argument and must return either a) a prompt message to show
	     * the user, to make sure they want to leave the page or b) false, to prevent
	     * the transition.
	     *
	     * During the beforeunload event (in browsers) the hook receives no arguments.
	     * In this case it must return a prompt message to prevent the transition.
	     *
	     * Returns a function that may be used to unbind the listener.
	     */
	    function listenBeforeLeavingRoute(route, hook) {
	      // TODO: Warn if they register for a route that isn't currently
	      // active. They're probably doing something wrong, like re-creating
	      // route objects on every location change.
	      var routeID = getRouteID(route);
	      var hooks = RouteHooks[routeID];

	      if (hooks == null) {
	        var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	        hooks = RouteHooks[routeID] = [hook];

	        if (thereWereNoRouteHooks) {
	          // setup transition & beforeunload hooks
	          unlistenBefore = history.listenBefore(transitionHook);

	          if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	        }
	      } else if (hooks.indexOf(hook) === -1) {
	        hooks.push(hook);
	      }

	      return function () {
	        var hooks = RouteHooks[routeID];

	        if (hooks != null) {
	          var newHooks = hooks.filter(function (item) {
	            return item !== hook;
	          });

	          if (newHooks.length === 0) {
	            delete RouteHooks[routeID];

	            if (!hasAnyProperties(RouteHooks)) {
	              // teardown transition & beforeunload hooks
	              if (unlistenBefore) {
	                unlistenBefore();
	                unlistenBefore = null;
	              }

	              if (unlistenBeforeUnload) {
	                unlistenBeforeUnload();
	                unlistenBeforeUnload = null;
	              }
	            }
	          } else {
	            RouteHooks[routeID] = newHooks;
	          }
	        }
	      };
	    }

	    /**
	     * This is the API for stateful environments. As the location
	     * changes, we update state and call the listener. We can also
	     * gracefully handle errors and redirects.
	     */
	    function listen(listener) {
	      // TODO: Only use a single history listener. Otherwise we'll
	      // end up with multiple concurrent calls to match.
	      return history.listen(function (location) {
	        if (state.location === location) {
	          listener(null, state);
	        } else {
	          match(location, function (error, redirectLocation, nextState) {
	            if (error) {
	              listener(error);
	            } else if (redirectLocation) {
	              history.transitionTo(redirectLocation);
	            } else if (nextState) {
	              listener(null, nextState);
	            } else {
	               true ? _warning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
	            }
	          });
	        }
	      });
	    }

	    return _extends({}, history, {
	      isActive: isActive,
	      match: match,
	      listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	      listen: listen
	    });
	  };
	}

	exports['default'] = useRoutes;
	module.exports = exports['default'];

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _warning = __webpack_require__(180);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(204);

	var _runTransitionHook = __webpack_require__(195);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _parsePath = __webpack_require__(193);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(196);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);

	    var history = createHistory(historyOptions);

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var queryString = undefined;
	      if (!query || (queryString = stringifyQuery(query)) === '') return location;

	       true ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase + (searchBase ? '&' : '?') + queryString;

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      //warning(
	      //  !query,
	      //  'the query argument to createPath is deprecated; use a location descriptor instead'
	      //)
	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      //warning(
	      //  !query,
	      //  'the query argument to createHref is deprecated; use a location descriptor instead'
	      //)
	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation() {
	      return addQuery(history.createLocation.apply(history, arguments));
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(205);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 205 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(201);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = undefined,
	      enterRoutes = undefined;
	  if (prevRoutes) {
	    leaveRoutes = prevRoutes.filter(function (route) {
	      return nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });

	    // onLeave hooks start at the leaf route.
	    leaveRoutes.reverse();

	    enterRoutes = nextRoutes.filter(function (route) {
	      return prevRoutes.indexOf(route) === -1 || leaveRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leaveRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports['default'] = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(208);

	function createEnterHook(hook, route) {
	  return function (a, b, callback) {
	    hook.apply(route, arguments);

	    if (hook.length < 3) {
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createEnterHook(route.onEnter, route));

	    return hooks;
	  }, []);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replaceState, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replaceState short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */

	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);

	  if (!hooks.length) {
	    callback();
	    return;
	  }

	  var redirectInfo = undefined;
	  function replaceState(state, pathname, query) {
	    redirectInfo = { pathname: pathname, query: query, state: state };
	  }

	  _AsyncUtils.loopAsync(hooks.length, function (index, next, done) {
	    hooks[index](nextState, replaceState, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */

	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	  }
	}

/***/ },
/* 208 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(201);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if (typeof a === 'object') {
	    for (var p in a) {
	      if (!a.hasOwnProperty(p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!b.hasOwnProperty(p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	function paramsAreActive(paramNames, paramValues, activeParams) {
	  // FIXME: This doesn't work on repeated params in activeParams.
	  return paramNames.every(function (paramName, index) {
	    return String(paramValues[index]) === String(activeParams[paramName]);
	  });
	}

	function getMatchingRouteIndex(pathname, activeRoutes, activeParams) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  for (var i = 0, len = activeRoutes.length; i < len; ++i) {
	    var route = activeRoutes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null) {
	      var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	      remainingPathname = matched.remainingPathname;
	      paramNames = [].concat(paramNames, matched.paramNames);
	      paramValues = [].concat(paramValues, matched.paramValues);
	    }

	    if (remainingPathname === '' && route.path && paramsAreActive(paramNames, paramValues, activeParams)) return i;
	  }

	  return null;
	}

	/**
	 * Returns true if the given pathname matches the active routes
	 * and params.
	 */
	function routeIsActive(pathname, routes, params, indexOnly) {
	  var i = getMatchingRouteIndex(pathname, routes, params);

	  if (i === null) {
	    // No match.
	    return false;
	  } else if (!indexOnly) {
	    // Any match is good enough.
	    return true;
	  }

	  // If any remaining routes past the match index have paths, then we can't
	  // be on the index route.
	  return routes.slice(i + 1).every(function (route) {
	    return !route.path;
	  });
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(pathname, query, indexOnly, location, routes, params) {
	  if (location == null) return false;

	  if (!routeIsActive(pathname, routes, params, indexOnly)) return false;

	  return queryIsActive(query, location.query);
	}

	exports['default'] = isActive;
	module.exports = exports['default'];

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(208);

	function getComponentsForRoute(location, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponent) {
	    route.getComponent(location, callback);
	  } else if (route.getComponents) {
	    route.getComponents(location, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState.location, route, callback);
	  }, callback);
	}

	exports['default'] = getComponents;
	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(178);

	var _warning2 = _interopRequireDefault(_warning);

	var _AsyncUtils = __webpack_require__(208);

	var _PatternUtils = __webpack_require__(201);

	var _RouteUtils = __webpack_require__(197);

	function getChildRoutes(route, location, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(location, function (error, childRoutes) {
	      callback(error, !error && _RouteUtils.createRoutes(childRoutes));
	    });
	  } else {
	    callback();
	  }
	}

	function getIndexRoute(route, location, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(location, function (error, indexRoute) {
	      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (obj) {
	        return !obj.hasOwnProperty('path');
	      });

	      _AsyncUtils.loopAsync(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  if (remainingPathname !== null) {
	    var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	    remainingPathname = matched.remainingPathname;
	    paramNames = [].concat(paramNames, matched.paramNames);
	    paramValues = [].concat(paramValues, matched.paramValues);

	    if (remainingPathname === '' && route.path) {
	      var _ret2 = (function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	               true ? _warning2['default'](indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : undefined;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	               true ? _warning2['default'](!indexRoute.path, 'Index routes should not have paths') : undefined;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });
	        return {
	          v: undefined
	        };
	      })();

	      if (typeof _ret2 === 'object') return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    getChildRoutes(route, location, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback) {
	  var remainingPathname = arguments.length <= 3 || arguments[3] === undefined ? location.pathname : arguments[3];
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
	  return (function () {
	    _AsyncUtils.loopAsync(routes.length, function (index, next, done) {
	      matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	        if (error || match) {
	          done(error, match);
	        } else {
	          next();
	        }
	      });
	    }, callback);
	  })();
	}

	exports['default'] = matchRoutes;
	module.exports = exports['default'];

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.falsy = falsy;

	var _react = __webpack_require__(2);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;

	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = shape({
	  listen: func.isRequired,
	  pushState: func.isRequired,
	  replaceState: func.isRequired,
	  go: func.isRequired
	});

	exports.history = history;
	var location = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	exports.location = location;
	var component = oneOfType([func, string]);
	exports.component = component;
	var components = oneOfType([component, object]);
	exports.components = components;
	var route = oneOfType([object, element]);
	exports.route = route;
	var routes = oneOfType([route, arrayOf(route)]);

	exports.routes = routes;
	exports['default'] = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _React$PropTypes = _react2['default'].PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	function isEmptyObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return false;
	  }return true;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * `activeClassName` prop
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */

	var Link = (function (_Component) {
	  _inherits(Link, _Component);

	  function Link() {
	    _classCallCheck(this, Link);

	    _Component.apply(this, arguments);
	  }

	  Link.prototype.handleClick = function handleClick(event) {
	    var allowTransition = true;

	    if (this.props.onClick) this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (event.defaultPrevented === true) allowTransition = false;

	    // If target prop is set (e.g. to "_blank") let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) {
	      if (!allowTransition) event.preventDefault();

	      return;
	    }

	    event.preventDefault();

	    if (allowTransition) {
	      var _props = this.props;
	      var state = _props.state;
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;

	      if (hash) to += hash;

	      this.context.history.pushState(state, to, query);
	    }
	  };

	  Link.prototype.render = function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    // Manually override onClick.
	    props.onClick = function (e) {
	      return _this.handleClick(e);
	    };

	    // Ignore if rendered outside the context of history, simplifies unit testing.
	    var history = this.context.history;

	    if (history) {
	      props.href = history.createHref(to, query);

	      if (hash) props.href += hash;

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (history.isActive(to, query, onlyActiveOnIndex)) {
	          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2['default'].createElement('a', props);
	  };

	  return Link;
	})(_react.Component);

	Link.contextTypes = {
	  history: object
	};

	Link.propTypes = {
	  to: string.isRequired,
	  query: object,
	  hash: string,
	  state: object,
	  activeStyle: object,
	  activeClassName: string,
	  onlyActiveOnIndex: bool.isRequired,
	  onClick: func
	};

	Link.defaultProps = {
	  onlyActiveOnIndex: false,
	  className: '',
	  style: {}
	};

	exports['default'] = Link;
	module.exports = exports['default'];

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(213);

	var _Link2 = _interopRequireDefault(_Link);

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */

	var IndexLink = (function (_Component) {
	  _inherits(IndexLink, _Component);

	  function IndexLink() {
	    _classCallCheck(this, IndexLink);

	    _Component.apply(this, arguments);
	  }

	  IndexLink.prototype.render = function render() {
	    return _react2['default'].createElement(_Link2['default'], _extends({}, this.props, { onlyActiveOnIndex: true }));
	  };

	  return IndexLink;
	})(_react.Component);

	exports['default'] = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(178);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(199);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Redirect = __webpack_require__(216);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _PropTypes = __webpack_require__(212);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = (function (_Component) {
	  _inherits(IndexRedirect, _Component);

	  function IndexRedirect() {
	    _classCallCheck(this, IndexRedirect);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  IndexRedirect.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return IndexRedirect;
	})(_react.Component);

	IndexRedirect.propTypes = {
	  to: string.isRequired,
	  query: object,
	  state: object,
	  onEnter: _PropTypes.falsy,
	  children: _PropTypes.falsy
	};

	IndexRedirect.createRouteFromReactElement = function (element, parentRoute) {
	  /* istanbul ignore else: sanity check */
	  if (parentRoute) {
	    parentRoute.indexRoute = _Redirect2['default'].createRouteFromReactElement(element);
	  } else {
	     true ? _warning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
	  }
	};

	exports['default'] = IndexRedirect;
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(199);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(197);

	var _PatternUtils = __webpack_require__(201);

	var _PropTypes = __webpack_require__(212);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = (function (_Component) {
	  _inherits(Redirect, _Component);

	  function Redirect() {
	    _classCallCheck(this, Redirect);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  Redirect.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return Redirect;
	})(_react.Component);

	Redirect.createRouteFromReactElement = function (element) {
	  var route = _RouteUtils.createRouteFromReactElement(element);

	  if (route.from) route.path = route.from;

	  route.onEnter = function (nextState, replaceState) {
	    var location = nextState.location;
	    var params = nextState.params;

	    var pathname = undefined;
	    if (route.to.charAt(0) === '/') {
	      pathname = _PatternUtils.formatPattern(route.to, params);
	    } else if (!route.to) {
	      pathname = location.pathname;
	    } else {
	      var routeIndex = nextState.routes.indexOf(route);
	      var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	      var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	      pathname = _PatternUtils.formatPattern(pattern, params);
	    }

	    replaceState(route.state || location.state, pathname, route.query || location.query);
	  };

	  return route;
	};

	Redirect.getRoutePattern = function (routes, routeIndex) {
	  var parentPattern = '';

	  for (var i = routeIndex; i >= 0; i--) {
	    var route = routes[i];
	    var pattern = route.path || '';
	    parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	    if (pattern.indexOf('/') === 0) break;
	  }

	  return '/' + parentPattern;
	};

	Redirect.propTypes = {
	  path: string,
	  from: string, // Alias for path
	  to: string.isRequired,
	  query: object,
	  state: object,
	  onEnter: _PropTypes.falsy,
	  children: _PropTypes.falsy
	};

	exports['default'] = Redirect;
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(178);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(199);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(197);

	var _PropTypes = __webpack_require__(212);

	var func = _react2['default'].PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = (function (_Component) {
	  _inherits(IndexRoute, _Component);

	  function IndexRoute() {
	    _classCallCheck(this, IndexRoute);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  IndexRoute.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return IndexRoute;
	})(_react.Component);

	IndexRoute.propTypes = {
	  path: _PropTypes.falsy,
	  component: _PropTypes.component,
	  components: _PropTypes.components,
	  getComponent: func,
	  getComponents: func
	};

	IndexRoute.createRouteFromReactElement = function (element, parentRoute) {
	  /* istanbul ignore else: sanity check */
	  if (parentRoute) {
	    parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
	  } else {
	     true ? _warning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
	  }
	};

	exports['default'] = IndexRoute;
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(199);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(197);

	var _PropTypes = __webpack_require__(212);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = (function (_Component) {
	  _inherits(Route, _Component);

	  function Route() {
	    _classCallCheck(this, Route);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  Route.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return Route;
	})(_react.Component);

	Route.createRouteFromReactElement = _RouteUtils.createRouteFromReactElement;

	Route.propTypes = {
	  path: string,
	  component: _PropTypes.component,
	  components: _PropTypes.components,
	  getComponent: func,
	  getComponents: func
	};

	exports['default'] = Route;
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PropTypes = __webpack_require__(212);

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _PropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    this.history = this.context.history;
	  }

	};

	exports['default'] = History;
	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(199);

	var _invariant2 = _interopRequireDefault(_invariant);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */
	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    !this.routerWillLeave ?  true ? _invariant2['default'](false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : _invariant2['default'](false) : undefined;

	    var route = this.props.route || this.context.route;

	    !route ?  true ? _invariant2['default'](false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : _invariant2['default'](false) : undefined;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }

	};

	exports['default'] = Lifecycle;
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */
	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  }

	};

	exports['default'] = RouteContext;
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(199);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _historyLibCreateMemoryHistory = __webpack_require__(223);

	var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

	var _historyLibUseBasename = __webpack_require__(224);

	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);

	var _RouteUtils = __webpack_require__(197);

	var _useRoutes = __webpack_require__(202);

	var _useRoutes2 = _interopRequireDefault(_useRoutes);

	var createHistory = _useRoutes2['default'](_historyLibUseBasename2['default'](_historyLibCreateMemoryHistory2['default']));

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser. Use
	 * the history.listen API instead.
	 */
	function match(_ref, callback) {
	  var routes = _ref.routes;
	  var location = _ref.location;
	  var parseQueryString = _ref.parseQueryString;
	  var stringifyQuery = _ref.stringifyQuery;
	  var basename = _ref.basename;

	  !location ?  true ? _invariant2['default'](false, 'match needs a location') : _invariant2['default'](false) : undefined;

	  var history = createHistory({
	    routes: _RouteUtils.createRoutes(routes),
	    parseQueryString: parseQueryString,
	    stringifyQuery: stringifyQuery,
	    basename: basename
	  });

	  // Allow match({ location: '/the/path', ... })
	  if (typeof location === 'string') location = history.createLocation(location);

	  history.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, { history: history }));
	  });
	}

	exports['default'] = match;
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(180);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(182);

	var _createHistory = __webpack_require__(187);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _parsePath = __webpack_require__(193);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ?  true ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ?  true ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var key = entry.key;
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var state = undefined;
	    if (key) {
	      state = readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	      entry.key = key;
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	         true ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _ExecutionEnvironment = __webpack_require__(183);

	var _runTransitionHook = __webpack_require__(195);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _extractPath = __webpack_require__(194);

	var _extractPath2 = _interopRequireDefault(_extractPath);

	var _parsePath = __webpack_require__(193);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(196);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var basename = options.basename;

	    var historyOptions = _objectWithoutProperties(options, ['basename']);

	    var history = createHistory(historyOptions);

	    // Automatically use the value of <base href> in HTML
	    // documents as basename if it's not explicitly given.
	    if (basename == null && _ExecutionEnvironment.canUseDOM) {
	      var base = document.getElementsByTagName('base')[0];

	      if (base) basename = _extractPath2['default'](base.href);
	    }

	    function addBasename(location) {
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      if (!basename) return location;

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation() {
	      return addBasename(history.createLocation.apply(history, arguments));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(196);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _createLocation2 = __webpack_require__(192);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _createBrowserHistory = __webpack_require__(226);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	exports.createHistory = _createBrowserHistory2['default'];

	var _createHashHistory2 = __webpack_require__(179);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	exports.createHashHistory = _createHashHistory3['default'];

	var _createMemoryHistory2 = __webpack_require__(223);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	exports.createMemoryHistory = _createMemoryHistory3['default'];

	var _useBasename2 = __webpack_require__(224);

	var _useBasename3 = _interopRequireDefault(_useBasename2);

	exports.useBasename = _useBasename3['default'];

	var _useBeforeUnload2 = __webpack_require__(227);

	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

	exports.useBeforeUnload = _useBeforeUnload3['default'];

	var _useQueries2 = __webpack_require__(203);

	var _useQueries3 = _interopRequireDefault(_useQueries2);

	exports.useQueries = _useQueries3['default'];

	var _Actions2 = __webpack_require__(182);

	var _Actions3 = _interopRequireDefault(_Actions2);

	exports.Actions = _Actions3['default'];

	// deprecated

	var _enableBeforeUnload2 = __webpack_require__(228);

	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);

	exports.enableBeforeUnload = _enableBeforeUnload3['default'];

	var _enableQueries2 = __webpack_require__(229);

	var _enableQueries3 = _interopRequireDefault(_enableQueries2);

	exports.enableQueries = _enableQueries3['default'];
	var createLocation = _deprecate2['default'](_createLocation3['default'], 'Using createLocation without a history instance is deprecated; please use history.createLocation instead');
	exports.createLocation = createLocation;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(181);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(182);

	var _ExecutionEnvironment = __webpack_require__(183);

	var _DOMUtils = __webpack_require__(184);

	var _DOMStateStorage = __webpack_require__(185);

	var _createDOMHistory = __webpack_require__(186);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	var _parsePath = __webpack_require__(193);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  true ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(180);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(183);

	var _DOMUtils = __webpack_require__(184);

	var _deprecate = __webpack_require__(196);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
	  function listener(event) {
	    var message = getBeforeUnloadPromptMessage();

	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }
	  }

	  _DOMUtils.addEventListener(window, 'beforeunload', listener);

	  return function () {
	    _DOMUtils.removeEventListener(window, 'beforeunload', listener);
	  };
	}

	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	function useBeforeUnload(createHistory) {
	  return function (options) {
	    var history = createHistory(options);

	    var stopBeforeUnloadListener = undefined;
	    var beforeUnloadHooks = [];

	    function getBeforeUnloadPromptMessage() {
	      var message = undefined;

	      for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
	        message = beforeUnloadHooks[i].call();
	      }return message;
	    }

	    function listenBeforeUnload(hook) {
	      beforeUnloadHooks.push(hook);

	      if (beforeUnloadHooks.length === 1) {
	        if (_ExecutionEnvironment.canUseDOM) {
	          stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	        } else {
	           true ? _warning2['default'](false, 'listenBeforeUnload only works in DOM environments') : undefined;
	        }
	      }

	      return function () {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
	          stopBeforeUnloadListener();
	          stopBeforeUnloadListener = null;
	        }
	      };
	    }

	    // deprecated
	    function registerBeforeUnloadHook(hook) {
	      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
	        beforeUnloadHooks.push(hook);

	        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	      }
	    }

	    // deprecated
	    function unregisterBeforeUnloadHook(hook) {
	      if (beforeUnloadHooks.length > 0) {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
	      }
	    }

	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload,

	      registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
	      unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
	    });
	  };
	}

	exports['default'] = useBeforeUnload;
	module.exports = exports['default'];

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(196);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useBeforeUnload = __webpack_require__(227);

	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);

	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(196);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useQueries = __webpack_require__(203);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routeReducer = exports.UPDATE_PATH = undefined;
	exports.pushPath = pushPath;
	exports.replacePath = replacePath;
	exports.syncReduxAndRouter = syncReduxAndRouter;

	var _deepEqual = __webpack_require__(231);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Constants

	var INIT_PATH = '@@router/INIT_PATH';
	var UPDATE_PATH = exports.UPDATE_PATH = '@@router/UPDATE_PATH';
	var SELECT_STATE = function SELECT_STATE(state) {
	  return state.routing;
	};

	// Action creators

	function initPath(path, state) {
	  return {
	    type: INIT_PATH,
	    payload: {
	      path: path,
	      state: state,
	      replace: false,
	      avoidRouterUpdate: true
	    }
	  };
	}

	function pushPath(path, state) {
	  var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var _ref$avoidRouterUpdat = _ref.avoidRouterUpdate;
	  var avoidRouterUpdate = _ref$avoidRouterUpdat === undefined ? false : _ref$avoidRouterUpdat;

	  return {
	    type: UPDATE_PATH,
	    payload: {
	      path: path,
	      state: state,
	      replace: false,
	      avoidRouterUpdate: !!avoidRouterUpdate
	    }
	  };
	}

	function replacePath(path, state) {
	  var _ref2 = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var _ref2$avoidRouterUpda = _ref2.avoidRouterUpdate;
	  var avoidRouterUpdate = _ref2$avoidRouterUpda === undefined ? false : _ref2$avoidRouterUpda;

	  return {
	    type: UPDATE_PATH,
	    payload: {
	      path: path,
	      state: state,
	      replace: true,
	      avoidRouterUpdate: !!avoidRouterUpdate
	    }
	  };
	}

	// Reducer

	var initialState = {
	  changeId: 1,
	  path: undefined,
	  state: undefined,
	  replace: false
	};

	function update() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var _ref3 = arguments[1];
	  var type = _ref3.type;
	  var payload = _ref3.payload;

	  if (type === INIT_PATH || type === UPDATE_PATH) {
	    return _extends({}, state, {
	      path: payload.path,
	      changeId: state.changeId + (payload.avoidRouterUpdate ? 0 : 1),
	      state: payload.state,
	      replace: payload.replace
	    });
	  }
	  return state;
	}

	// Syncing

	function locationsAreEqual(a, b) {
	  return a != null && b != null && a.path === b.path && (0, _deepEqual2.default)(a.state, b.state);
	}

	function createPath(location) {
	  var pathname = location.pathname;
	  var search = location.search;
	  var hash = location.hash;

	  var result = pathname;
	  if (search) result += search;
	  if (hash) result += hash;
	  return result;
	}

	function syncReduxAndRouter(history, store) {
	  var selectRouterState = arguments.length <= 2 || arguments[2] === undefined ? SELECT_STATE : arguments[2];

	  var getRouterState = function getRouterState() {
	    return selectRouterState(store.getState());
	  };

	  // To properly handle store updates we need to track the last route.
	  // This route contains a `changeId` which is updated on every
	  // `pushPath` and `replacePath`. If this id changes we always
	  // trigger a history update. However, if the id does not change, we
	  // check if the location has changed, and if it is we trigger a
	  // history update. It's possible for this to happen when something
	  // reloads the entire app state such as redux devtools.
	  var lastRoute = undefined;

	  if (!getRouterState()) {
	    throw new Error('Cannot sync router: route state does not exist. Did you ' + 'install the routing reducer?');
	  }

	  var unsubscribeHistory = history.listen(function (location) {
	    var route = {
	      path: createPath(location),
	      state: location.state
	    };

	    if (!lastRoute) {
	      // `initialState` *should* represent the current location when
	      // the app loads, but we cannot get the current location when it
	      // is defined. What happens is `history.listen` is called
	      // immediately when it is registered, and it updates the app
	      // state with an UPDATE_PATH action. This causes problem when
	      // users are listening to UPDATE_PATH actions just for
	      // *changes*, and with redux devtools because "revert" will use
	      // `initialState` and it won't revert to the original URL.
	      // Instead, we specialize the first route notification and do
	      // different things based on it.
	      initialState = {
	        changeId: 1,
	        path: route.path,
	        state: route.state,
	        replace: false
	      };

	      // Also set `lastRoute` so that the store subscriber doesn't
	      // trigger an unnecessary `pushState` on load
	      lastRoute = initialState;

	      store.dispatch(initPath(route.path, route.state));
	    } else if (!locationsAreEqual(getRouterState(), route)) {
	      // The above check avoids dispatching an action if the store is
	      // already up-to-date
	      var method = location.action === 'REPLACE' ? replacePath : pushPath;
	      store.dispatch(method(route.path, route.state, { avoidRouterUpdate: true }));
	    }
	  });

	  var unsubscribeStore = store.subscribe(function () {
	    var routing = getRouterState();

	    // Only trigger history update if this is a new change or the
	    // location has changed.
	    if (lastRoute.changeId !== routing.changeId || !locationsAreEqual(lastRoute, routing)) {

	      lastRoute = routing;
	      var method = routing.replace ? 'replaceState' : 'pushState';
	      history[method](routing.state, routing.path);
	    }
	  });

	  return function unsubscribe() {
	    unsubscribeHistory();
	    unsubscribeStore();
	  };
	}

	exports.routeReducer = update;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(232);
	var isArguments = __webpack_require__(233);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 232 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 233 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(4);


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(236);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(248);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(249);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(253);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(278);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(165);

	var _reactRedux = __webpack_require__(1);

	var _Header = __webpack_require__(285);

	var _Header2 = _interopRequireDefault(_Header);

	var _MainSection = __webpack_require__(293);

	var _MainSection2 = _interopRequireDefault(_MainSection);

	var _todos = __webpack_require__(308);

	var TodoActions = _interopRequireWildcard(_todos);

	var _style = __webpack_require__(321);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = (function (_Component) {
	  (0, _inherits3.default)(App, _Component);

	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
	  }

	  (0, _createClass3.default)(App, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var todos = _props.todos;
	      var actions = _props.actions;
	      var children = _props.children;

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.normal },
	        _react2.default.createElement(_Header2.default, { addTodo: actions.addTodo }),
	        _react2.default.createElement(_MainSection2.default, { todos: todos, actions: actions }),
	        children
	      );
	    }
	  }]);
	  return App;
	})(_react.Component);

	App.propTypes = {
	  todos: _react.PropTypes.array.isRequired,
	  actions: _react.PropTypes.object.isRequired
	};

	function mapStateToProps(state) {
	  return {
	    todos: state.todos
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(TodoActions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(237), __esModule: true };

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(238);
	module.exports = __webpack_require__(244).Object.getPrototypeOf;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(239);

	__webpack_require__(241)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(240);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 240 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(242)
	  , core    = __webpack_require__(244)
	  , fails   = __webpack_require__(247);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(243)
	  , core      = __webpack_require__(244)
	  , ctx       = __webpack_require__(245)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 243 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 244 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(246);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 248 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(250);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(251), __esModule: true };

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(252);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 252 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(254);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _symbol = __webpack_require__(255);

	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }

	exports.default = function (obj) {
	  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(256), __esModule: true };

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(257);
	__webpack_require__(277);
	module.exports = __webpack_require__(244).Symbol;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(252)
	  , global         = __webpack_require__(243)
	  , has            = __webpack_require__(258)
	  , DESCRIPTORS    = __webpack_require__(259)
	  , $export        = __webpack_require__(242)
	  , redefine       = __webpack_require__(260)
	  , $fails         = __webpack_require__(247)
	  , shared         = __webpack_require__(263)
	  , setToStringTag = __webpack_require__(264)
	  , uid            = __webpack_require__(266)
	  , wks            = __webpack_require__(265)
	  , keyOf          = __webpack_require__(267)
	  , $names         = __webpack_require__(271)
	  , enumKeys       = __webpack_require__(272)
	  , isArray        = __webpack_require__(273)
	  , anObject       = __webpack_require__(274)
	  , toIObject      = __webpack_require__(268)
	  , createDesc     = __webpack_require__(262)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(276)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 258 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(247)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(261);

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(252)
	  , createDesc = __webpack_require__(262);
	module.exports = __webpack_require__(259) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 262 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(243)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(252).setDesc
	  , has = __webpack_require__(258)
	  , TAG = __webpack_require__(265)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(263)('wks')
	  , uid    = __webpack_require__(266)
	  , Symbol = __webpack_require__(243).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 266 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(252)
	  , toIObject = __webpack_require__(268);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(269)
	  , defined = __webpack_require__(240);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(270);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 270 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(268)
	  , getNames  = __webpack_require__(252).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(252);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(270);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(275);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 275 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 276 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 277 */
/***/ function(module, exports) {

	

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(279);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(283);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(254);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(280), __esModule: true };

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(281);
	module.exports = __webpack_require__(244).Object.setPrototypeOf;

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(242);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(282).set});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(252).getDesc
	  , isObject = __webpack_require__(275)
	  , anObject = __webpack_require__(274);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(245)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(284), __esModule: true };

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(252);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(236);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(248);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(249);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(253);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(278);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _TodoTextInput = __webpack_require__(286);

	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = (function (_Component) {
	  (0, _inherits3.default)(Header, _Component);

	  function Header() {
	    (0, _classCallCheck3.default)(this, Header);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Header, [{
	    key: 'handleSave',
	    value: function handleSave(text) {
	      if (text.length) {
	        this.props.addTodo(text);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'header',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Todos'
	        ),
	        _react2.default.createElement(_TodoTextInput2.default, {
	          newTodo: true,
	          onSave: this.handleSave.bind(this),
	          placeholder: 'What needs to be done?' })
	      );
	    }
	  }]);
	  return Header;
	})(_react.Component);

	Header.propTypes = {
	  addTodo: _react.PropTypes.func.isRequired
	};

	exports.default = Header;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(287);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(236);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(248);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(249);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(253);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(278);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(288);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _style = __webpack_require__(289);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoTextInput = (function (_Component) {
	  (0, _inherits3.default)(TodoTextInput, _Component);

	  function TodoTextInput(props, context) {
	    (0, _classCallCheck3.default)(this, TodoTextInput);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TodoTextInput).call(this, props, context));

	    _this.state = {
	      text: _this.props.text || ''
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(TodoTextInput, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var text = e.target.value.trim();
	      if (e.which === 13) {
	        this.props.onSave(text);
	        if (this.props.newTodo) {
	          this.setState({ text: '' });
	        }
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({ text: e.target.value });
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      if (!this.props.newTodo) {
	        this.props.onSave(e.target.value);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var classes = (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, _style2.default.edit, this.props.editing), (0, _defineProperty3.default)(_classnames, _style2.default.new, this.props.newTodo), _classnames), _style2.default.normal);

	      return _react2.default.createElement('input', { className: classes,
	        type: 'text',
	        autoFocus: 'true',
	        placeholder: this.props.placeholder,
	        value: this.state.text,
	        onBlur: this.handleBlur.bind(this),
	        onChange: this.handleChange.bind(this),
	        onKeyDown: this.handleSubmit.bind(this) });
	    }
	  }]);
	  return TodoTextInput;
	})(_react.Component);

	TodoTextInput.propTypes = {
	  onSave: _react.PropTypes.func.isRequired,
	  text: _react.PropTypes.string,
	  placeholder: _react.PropTypes.string,
	  editing: _react.PropTypes.bool,
	  newTodo: _react.PropTypes.bool
	};

	exports.default = TodoTextInput;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(250);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(290);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports


	// module
	exports.push([module.id, "\r\n.style__new___3uTeP,\r\n.style__edit___oiQLe {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  border: 0;\r\n  outline: none;\r\n  color: inherit;\r\n  padding: 6px;\r\n  border: 1px solid #999;\r\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n  box-sizing: border-box;\r\n  font-smoothing: antialiased;\r\n}\r\n\r\n.style__new___3uTeP {\r\n  padding: 16px 16px 16px 60px;\r\n  border: none;\r\n  background: rgba(0, 0, 0, 0.003);\r\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}", "", {"version":3,"sources":["/./components/TodoTextInput/style.css"],"names":[],"mappings":";AACA;;EAEE,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;EACnB,UAAU;EACV,cAAc;EACd,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,kDAAkD;EAClD,uBAAuB;EACvB,4BAA4B;CAC7B;;AAED;EACE,6BAA6B;EAC7B,aAAa;EACb,iCAAiC;EACjC,8CAA8C;CAC/C","file":"style.css","sourcesContent":["\r\n.new,\r\n.edit {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  border: 0;\r\n  outline: none;\r\n  color: inherit;\r\n  padding: 6px;\r\n  border: 1px solid #999;\r\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n  box-sizing: border-box;\r\n  font-smoothing: antialiased;\r\n}\r\n\r\n.new {\r\n  padding: 16px 16px 16px 60px;\r\n  border: none;\r\n  background: rgba(0, 0, 0, 0.003);\r\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"new": "style__new___3uTeP",
		"edit": "style__edit___oiQLe"
	};

/***/ },
/* 291 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _TODO_FILTERS;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(294);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(236);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(248);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(249);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(253);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(278);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _defineProperty2 = __webpack_require__(287);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _TodoItem = __webpack_require__(299);

	var _TodoItem2 = _interopRequireDefault(_TodoItem);

	var _Footer = __webpack_require__(302);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _filters = __webpack_require__(303);

	var _style = __webpack_require__(306);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TODO_FILTERS = (_TODO_FILTERS = {}, (0, _defineProperty3.default)(_TODO_FILTERS, _filters.SHOW_ALL, function () {
	  return true;
	}), (0, _defineProperty3.default)(_TODO_FILTERS, _filters.SHOW_ACTIVE, function (todo) {
	  return !todo.completed;
	}), (0, _defineProperty3.default)(_TODO_FILTERS, _filters.SHOW_COMPLETED, function (todo) {
	  return todo.completed;
	}), _TODO_FILTERS);

	var MainSection = (function (_Component) {
	  (0, _inherits3.default)(MainSection, _Component);

	  function MainSection(props, context) {
	    (0, _classCallCheck3.default)(this, MainSection);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MainSection).call(this, props, context));

	    _this.state = { filter: _filters.SHOW_ALL };
	    return _this;
	  }

	  (0, _createClass3.default)(MainSection, [{
	    key: 'handleClearCompleted',
	    value: function handleClearCompleted() {
	      var atLeastOneCompleted = this.props.todos.some(function (todo) {
	        return todo.completed;
	      });
	      if (atLeastOneCompleted) {
	        this.props.actions.clearCompleted();
	      }
	    }
	  }, {
	    key: 'handleShow',
	    value: function handleShow(filter) {
	      this.setState({ filter: filter });
	    }
	  }, {
	    key: 'renderToggleAll',
	    value: function renderToggleAll(completedCount) {
	      var _props = this.props;
	      var todos = _props.todos;
	      var actions = _props.actions;

	      if (todos.length > 0) {
	        return _react2.default.createElement('input', {
	          className: _style2.default.toggleAll,
	          type: 'checkbox',
	          checked: completedCount === todos.length,
	          onChange: actions.completeAll });
	      }
	    }
	  }, {
	    key: 'renderFooter',
	    value: function renderFooter(completedCount) {
	      var todos = this.props.todos;
	      var filter = this.state.filter;

	      var activeCount = todos.length - completedCount;

	      if (todos.length) {
	        return _react2.default.createElement(_Footer2.default, { completedCount: completedCount,
	          activeCount: activeCount,
	          filter: filter,
	          onClearCompleted: this.handleClearCompleted.bind(this),
	          onShow: this.handleShow.bind(this) });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var todos = _props2.todos;
	      var actions = _props2.actions;
	      var filter = this.state.filter;

	      var filteredTodos = todos.filter(TODO_FILTERS[filter]);
	      var completedCount = todos.reduce(function (count, todo) {
	        return todo.completed ? count + 1 : count;
	      }, 0);

	      return _react2.default.createElement(
	        'section',
	        { className: _style2.default.main },
	        this.renderToggleAll(completedCount),
	        _react2.default.createElement(
	          'ul',
	          { className: _style2.default.normal },
	          filteredTodos.map(function (todo) {
	            return _react2.default.createElement(_TodoItem2.default, (0, _extends3.default)({ key: todo.id, todo: todo }, actions));
	          })
	        ),
	        this.renderFooter(completedCount)
	      );
	    }
	  }]);
	  return MainSection;
	})(_react.Component);

	MainSection.propTypes = {
	  todos: _react.PropTypes.array.isRequired,
	  actions: _react.PropTypes.object.isRequired
	};

	exports.default = MainSection;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(295);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
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

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(296), __esModule: true };

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(297);
	module.exports = __webpack_require__(244).Object.assign;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(242);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(298)});

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(252)
	  , toObject = __webpack_require__(239)
	  , IObject  = __webpack_require__(269);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(247)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(287);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(236);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(248);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(249);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(253);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(278);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _TodoTextInput = __webpack_require__(286);

	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

	var _classnames2 = __webpack_require__(288);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _style = __webpack_require__(300);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoItem = (function (_Component) {
	  (0, _inherits3.default)(TodoItem, _Component);

	  function TodoItem(props, context) {
	    (0, _classCallCheck3.default)(this, TodoItem);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TodoItem).call(this, props, context));

	    _this.state = {
	      editing: false
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(TodoItem, [{
	    key: 'handleDoubleClick',
	    value: function handleDoubleClick() {
	      this.setState({ editing: true });
	    }
	  }, {
	    key: 'handleSave',
	    value: function handleSave(id, text) {
	      if (text.length === 0) {
	        this.props.deleteTodo(id);
	      } else {
	        this.props.editTodo({ id: id, text: text });
	      }
	      this.setState({ editing: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this,
	          _classnames;

	      var _props = this.props;
	      var todo = _props.todo;
	      var completeTodo = _props.completeTodo;
	      var deleteTodo = _props.deleteTodo;

	      var element = undefined;
	      if (this.state.editing) {
	        element = _react2.default.createElement(_TodoTextInput2.default, { text: todo.text,
	          editing: this.state.editing,
	          onSave: function onSave(text) {
	            return _this2.handleSave(todo.id, text);
	          } });
	      } else {
	        element = _react2.default.createElement(
	          'div',
	          { className: _style2.default.view },
	          _react2.default.createElement('input', { className: _style2.default.toggle,
	            type: 'checkbox',
	            checked: todo.completed,
	            onChange: function onChange() {
	              return completeTodo(todo.id);
	            } }),
	          _react2.default.createElement(
	            'label',
	            { onDoubleClick: this.handleDoubleClick.bind(this) },
	            todo.text
	          ),
	          _react2.default.createElement('button', { className: _style2.default.destroy, onClick: function onClick() {
	              return deleteTodo(todo.id);
	            } })
	        );
	      }

	      // TODO: compose
	      var classes = (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, _style2.default.completed, todo.completed), (0, _defineProperty3.default)(_classnames, _style2.default.editing, this.state.editing), (0, _defineProperty3.default)(_classnames, _style2.default.normal, !this.state.editing), _classnames));

	      return _react2.default.createElement(
	        'li',
	        { className: classes },
	        element
	      );
	    }
	  }]);
	  return TodoItem;
	})(_react.Component);

	TodoItem.propTypes = {
	  todo: _react.PropTypes.object.isRequired,
	  editTodo: _react.PropTypes.func.isRequired,
	  deleteTodo: _react.PropTypes.func.isRequired,
	  completeTodo: _react.PropTypes.func.isRequired
	};

	exports.default = TodoItem;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(301);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports


	// module
	exports.push([module.id, "\r\n.style__normal___397BS .style__toggle___1j5yE {\r\n  text-align: center;\r\n  width: 40px;\r\n  /* auto, since non-WebKit browsers doesn't support input styling */\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  border: none; /* Mobile Safari */\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n}\r\n\r\n.style__normal___397BS .style__toggle___1j5yE:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.style__normal___397BS .style__toggle___1j5yE:checked:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.style__normal___397BS label {\r\n  white-space: pre-line;\r\n  word-break: break-all;\r\n  padding: 15px 60px 15px 15px;\r\n  margin-left: 45px;\r\n  display: block;\r\n  line-height: 1.2;\r\n  -webkit-transition: color 0.4s;\r\n  transition: color 0.4s;\r\n}\r\n\r\n.style__normal___397BS .style__destroy___3I4dE {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  bottom: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: auto 0;\r\n  font-size: 30px;\r\n  color: #cc9a9a;\r\n  margin-bottom: 11px;\r\n  -webkit-transition: color 0.2s ease-out;\r\n  transition: color 0.2s ease-out;\r\n}\r\n\r\n.style__normal___397BS .style__destroy___3I4dE:hover {\r\n  color: #af5b5e;\r\n}\r\n\r\n.style__normal___397BS .style__destroy___3I4dE:after {\r\n  content: '\\D7';\r\n}\r\n\r\n.style__normal___397BS:hover .style__destroy___3I4dE {\r\n  display: block;\r\n}\r\n\r\n.style__normal___397BS .style__edit___1RaNC {\r\n  display: none;\r\n}\r\n\r\n.style__editing___2PULc {\r\n  border-bottom: none;\r\n  padding: 0;\r\n}\r\n\r\n.style__editing___2PULc:last-child {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.style__editing___2PULc .style__edit___1RaNC {\r\n  display: block;\r\n  width: 506px;\r\n  padding: 13px 17px 12px 17px;\r\n  margin: 0 0 0 43px;\r\n}\r\n\r\n.style__editing___2PULc .style__view___2HqOh {\r\n  display: none;\r\n}\r\n\r\n.style__completed___118kj label {\r\n  color: #d9d9d9;\r\n  text-decoration: line-through;\r\n}\r\n\r\n/*\r\n  Hack to remove background from Mobile Safari.\r\n  Can't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  .style__normal___397BS .style__toggle___1j5yE {\r\n    background: none;\r\n  }\r\n\r\n  .style__normal___397BS .style__toggle___1j5yE {\r\n    height: 40px;\r\n  }\r\n}", "", {"version":3,"sources":["/./components/TodoItem/style.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,mEAAmE;EACnE,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,eAAe;EACf,aAAa,CAAC,mBAAmB;EACjC,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;CAClB;;AAED;EACE,sNAAsN;CACvN;;AAED;EACE,qRAAqR;CACtR;;AAED;EACE,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,+BAAuB;EAAvB,uBAAuB;CACxB;;AAED;EACE,cAAc;EACd,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,wCAAgC;EAAhC,gCAAgC;CACjC;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAa;CACd;;AAED;EACE,eAAe;CAChB;;AAED;EACE,cAAc;CACf;;AAED;EACE,oBAAoB;EACpB,WAAW;CAEZ;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;CACpB;;AAED;EACE,cAAc;CACf;;AAED;EACE,eAAe;EACf,8BAA8B;CAC/B;;AAED;;;EAGE;AACF;EACE;IACE,iBAAiB;GAClB;;EAED;IACE,aAAa;GACd;CACF","file":"style.css","sourcesContent":["\r\n.normal .toggle {\r\n  text-align: center;\r\n  width: 40px;\r\n  /* auto, since non-WebKit browsers doesn't support input styling */\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  border: none; /* Mobile Safari */\r\n  appearance: none;\r\n}\r\n\r\n.normal .toggle:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.normal .toggle:checked:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.normal label {\r\n  white-space: pre-line;\r\n  word-break: break-all;\r\n  padding: 15px 60px 15px 15px;\r\n  margin-left: 45px;\r\n  display: block;\r\n  line-height: 1.2;\r\n  transition: color 0.4s;\r\n}\r\n\r\n.normal .destroy {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  bottom: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: auto 0;\r\n  font-size: 30px;\r\n  color: #cc9a9a;\r\n  margin-bottom: 11px;\r\n  transition: color 0.2s ease-out;\r\n}\r\n\r\n.normal .destroy:hover {\r\n  color: #af5b5e;\r\n}\r\n\r\n.normal .destroy:after {\r\n  content: '×';\r\n}\r\n\r\n.normal:hover .destroy {\r\n  display: block;\r\n}\r\n\r\n.normal .edit {\r\n  display: none;\r\n}\r\n\r\n.editing {\r\n  border-bottom: none;\r\n  padding: 0;\r\n  composes: normal;\r\n}\r\n\r\n.editing:last-child {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.editing .edit {\r\n  display: block;\r\n  width: 506px;\r\n  padding: 13px 17px 12px 17px;\r\n  margin: 0 0 0 43px;\r\n}\r\n\r\n.editing .view {\r\n  display: none;\r\n}\r\n\r\n.completed label {\r\n  color: #d9d9d9;\r\n  text-decoration: line-through;\r\n}\r\n\r\n/*\r\n  Hack to remove background from Mobile Safari.\r\n  Can't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  .normal .toggle {\r\n    background: none;\r\n  }\r\n\r\n  .normal .toggle {\r\n    height: 40px;\r\n  }\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "style__normal___397BS",
		"toggle": "style__toggle___1j5yE",
		"destroy": "style__destroy___3I4dE",
		"edit": "style__edit___1RaNC",
		"editing": "style__editing___2PULc style__normal___397BS",
		"view": "style__view___2HqOh",
		"completed": "style__completed___118kj"
	};

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _FILTER_TITLES;

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(236);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(248);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(249);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(253);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(278);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _defineProperty2 = __webpack_require__(287);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _filters = __webpack_require__(303);

	var _classnames = __webpack_require__(288);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(304);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FILTER_TITLES = (_FILTER_TITLES = {}, (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_ALL, 'All'), (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_ACTIVE, 'Active'), (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_COMPLETED, 'Completed'), _FILTER_TITLES);

	var Footer = (function (_Component) {
	  (0, _inherits3.default)(Footer, _Component);

	  function Footer() {
	    (0, _classCallCheck3.default)(this, Footer);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Footer, [{
	    key: 'renderTodoCount',
	    value: function renderTodoCount() {
	      var activeCount = this.props.activeCount;

	      var itemWord = activeCount === 1 ? 'item' : 'items';

	      return _react2.default.createElement(
	        'span',
	        { className: _style2.default.count },
	        _react2.default.createElement(
	          'strong',
	          null,
	          activeCount || 'No'
	        ),
	        ' ',
	        itemWord,
	        ' left'
	      );
	    }
	  }, {
	    key: 'renderFilterLink',
	    value: function renderFilterLink(filter) {
	      var title = FILTER_TITLES[filter];
	      var _props = this.props;
	      var selectedFilter = _props.filter;
	      var onShow = _props.onShow;

	      return _react2.default.createElement(
	        'a',
	        { className: (0, _classnames2.default)({ selected: filter === selectedFilter }),
	          style: { cursor: 'pointer' },
	          onClick: function onClick() {
	            return onShow(filter);
	          } },
	        title
	      );
	    }
	  }, {
	    key: 'renderClearButton',
	    value: function renderClearButton() {
	      var _props2 = this.props;
	      var completedCount = _props2.completedCount;
	      var onClearCompleted = _props2.onClearCompleted;

	      if (completedCount > 0) {
	        return _react2.default.createElement(
	          'button',
	          { className: _style2.default.clearCompleted, onClick: onClearCompleted },
	          'Clear completed'
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'footer',
	        { className: _style2.default.normal },
	        this.renderTodoCount(),
	        _react2.default.createElement(
	          'ul',
	          { className: _style2.default.filters },
	          [_filters.SHOW_ALL, _filters.SHOW_ACTIVE, _filters.SHOW_COMPLETED].map(function (filter) {
	            return _react2.default.createElement(
	              'li',
	              { key: filter },
	              _this2.renderFilterLink(filter)
	            );
	          })
	        ),
	        this.renderClearButton()
	      );
	    }
	  }]);
	  return Footer;
	})(_react.Component);

	Footer.propTypes = {
	  completedCount: _react.PropTypes.number.isRequired,
	  activeCount: _react.PropTypes.number.isRequired,
	  filter: _react.PropTypes.string.isRequired,
	  onClearCompleted: _react.PropTypes.func.isRequired,
	  onShow: _react.PropTypes.func.isRequired
	};

	exports.default = Footer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SHOW_ALL = exports.SHOW_ALL = 'show_all';
	var SHOW_COMPLETED = exports.SHOW_COMPLETED = 'show_completed';
	var SHOW_ACTIVE = exports.SHOW_ACTIVE = 'show_active';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "filters.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(305);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports


	// module
	exports.push([module.id, "\r\n.style__normal___2NVjP {\r\n  color: #777;\r\n  padding: 10px 15px;\r\n  height: 20px;\r\n  text-align: center;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.style__normal___2NVjP:before {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 50px;\r\n  overflow: hidden;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\r\n    0 8px 0 -3px #f6f6f6,\r\n    0 9px 1px -3px rgba(0, 0, 0, 0.2),\r\n    0 16px 0 -6px #f6f6f6,\r\n    0 17px 2px -6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.style__filters___1XtyZ {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.style__filters___1XtyZ li {\r\n  display: inline;\r\n}\r\n\r\n.style__filters___1XtyZ li a {\r\n  color: inherit;\r\n  margin: 3px;\r\n  padding: 3px 7px;\r\n  text-decoration: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 3px;\r\n}\r\n\r\n.style__filters___1XtyZ li a.style__selected___1cVb1,\r\n.style__filters___1XtyZ li a:hover {\r\n  border-color: rgba(175, 47, 47, 0.1);\r\n}\r\n\r\n.style__filters___1XtyZ li a.style__selected___1cVb1 {\r\n  border-color: rgba(175, 47, 47, 0.2);\r\n}\r\n\r\n.style__count___14dCb {\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\n.style__count___14dCb strong {\r\n  font-weight: 300;\r\n}\r\n\r\n.style__clearCompleted___1teqF,\r\nhtml .style__clearCompleted___1teqF:active {\r\n  float: right;\r\n  position: relative;\r\n  line-height: 20px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  position: relative;\r\n}\r\n\r\n.style__clearCompleted___1teqF::after {\r\n  visibility: visible;\r\n  content: 'Clear completed';\r\n  position: absolute;\r\n  right: 0;\r\n  white-space: nowrap;\r\n}\r\n\r\n.style__clearCompleted___1teqF:hover::after {\r\n  text-decoration: underline;\r\n}\r\n\r\n@media (max-width: 430px) {\r\n  .style__normal___2NVjP {\r\n    height: 50px;\r\n  }\r\n\r\n  .style__filters___1XtyZ {\r\n    bottom: 10px;\r\n  }\r\n}", "", {"version":3,"sources":["/./components/Footer/style.css"],"names":[],"mappings":";AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;CAC/B;;AAED;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,QAAQ;EACR,aAAa;EACb,iBAAiB;EACjB;;;;uCAIqC;CACtC;;AAED;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,QAAQ;CACT;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;CACpB;;AAED;;EAEE,qCAAqC;CACtC;;AAED;EACE,qCAAqC;CACtC;;AAED;EACE,YAAY;EACZ,iBAAiB;CAClB;;AAED;EACE,iBAAiB;CAClB;;AAED;;EAEE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;CACpB;;AAED;EACE,oBAAoB;EACpB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,oBAAoB;CACrB;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE;IACE,aAAa;GACd;;EAED;IACE,aAAa;GACd;CACF","file":"style.css","sourcesContent":["\r\n.normal {\r\n  color: #777;\r\n  padding: 10px 15px;\r\n  height: 20px;\r\n  text-align: center;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.normal:before {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 50px;\r\n  overflow: hidden;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\r\n    0 8px 0 -3px #f6f6f6,\r\n    0 9px 1px -3px rgba(0, 0, 0, 0.2),\r\n    0 16px 0 -6px #f6f6f6,\r\n    0 17px 2px -6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.filters {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.filters li {\r\n  display: inline;\r\n}\r\n\r\n.filters li a {\r\n  color: inherit;\r\n  margin: 3px;\r\n  padding: 3px 7px;\r\n  text-decoration: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 3px;\r\n}\r\n\r\n.filters li a.selected,\r\n.filters li a:hover {\r\n  border-color: rgba(175, 47, 47, 0.1);\r\n}\r\n\r\n.filters li a.selected {\r\n  border-color: rgba(175, 47, 47, 0.2);\r\n}\r\n\r\n.count {\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\n.count strong {\r\n  font-weight: 300;\r\n}\r\n\r\n.clearCompleted,\r\nhtml .clearCompleted:active {\r\n  float: right;\r\n  position: relative;\r\n  line-height: 20px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  position: relative;\r\n}\r\n\r\n.clearCompleted::after {\r\n  visibility: visible;\r\n  content: 'Clear completed';\r\n  position: absolute;\r\n  right: 0;\r\n  white-space: nowrap;\r\n}\r\n\r\n.clearCompleted:hover::after {\r\n  text-decoration: underline;\r\n}\r\n\r\n@media (max-width: 430px) {\r\n  .normal {\r\n    height: 50px;\r\n  }\r\n\r\n  .filters {\r\n    bottom: 10px;\r\n  }\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "style__normal___2NVjP",
		"filters": "style__filters___1XtyZ",
		"selected": "style__selected___1cVb1",
		"count": "style__count___14dCb",
		"clearCompleted": "style__clearCompleted___1teqF"
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(307);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports


	// module
	exports.push([module.id, "\r\n.style__main___3M5ao {\r\n  position: relative;\r\n  z-index: 2;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.style__normal___2f_dl {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.style__normal___2f_dl li {\r\n  position: relative;\r\n  font-size: 24px;\r\n  border-bottom: 1px solid #ededed;\r\n}\r\n\r\n.style__normal___2f_dl li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.style__normal___2f_dl li.style__editing___2k0W5 {\r\n  border-bottom: none;\r\n  padding: 0;\r\n}\r\n\r\n.style__normal___2f_dl li.style__editing___2k0W5 .style__edit___1JGBS {\r\n  display: block;\r\n  width: 506px;\r\n  padding: 13px 17px 12px 17px;\r\n  margin: 0 0 0 43px;\r\n}\r\n\r\n.style__normal___2f_dl li.style__editing___2k0W5 .style__view___rfASl {\r\n  display: none;\r\n}\r\n\r\n.style__normal___2f_dl li .style__toggle___ugbx7 {\r\n  text-align: center;\r\n  width: 40px;\r\n  /* auto, since non-WebKit browsers doesn't support input styling */\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  border: none; /* Mobile Safari */\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n}\r\n\r\n.style__normal___2f_dl li .style__toggle___ugbx7:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.style__normal___2f_dl li .style__toggle___ugbx7:checked:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.style__normal___2f_dl li label {\r\n  white-space: pre-line;\r\n  word-break: break-all;\r\n  padding: 15px 60px 15px 15px;\r\n  margin-left: 45px;\r\n  display: block;\r\n  line-height: 1.2;\r\n  -webkit-transition: color 0.4s;\r\n  transition: color 0.4s;\r\n}\r\n\r\n.style__normal___2f_dl li.style__completed___2ISyk label {\r\n  color: #d9d9d9;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.style__normal___2f_dl li .style__destroy___2WNnf {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  bottom: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: auto 0;\r\n  font-size: 30px;\r\n  color: #cc9a9a;\r\n  margin-bottom: 11px;\r\n  -webkit-transition: color 0.2s ease-out;\r\n  transition: color 0.2s ease-out;\r\n}\r\n\r\n.style__normal___2f_dl li .style__destroy___2WNnf:hover {\r\n  color: #af5b5e;\r\n}\r\n\r\n.style__normal___2f_dl li .style__destroy___2WNnf:after {\r\n  content: '\\D7';\r\n}\r\n\r\n.style__normal___2f_dl li:hover .style__destroy___2WNnf {\r\n  display: block;\r\n}\r\n\r\n.style__normal___2f_dl li .style__edit___1JGBS {\r\n  display: none;\r\n}\r\n\r\n.style__normal___2f_dl li.style__editing___2k0W5:last-child {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.style__toggleAll___3n0TX {\r\n  position: absolute;\r\n  top: -55px;\r\n  left: -12px;\r\n  width: 60px;\r\n  height: 34px;\r\n  text-align: center;\r\n  border: none; /* Mobile Safari */\r\n}\r\n\r\n.style__toggleAll___3n0TX:before {\r\n  content: '\\276F';\r\n  font-size: 22px;\r\n  color: #e6e6e6;\r\n  padding: 10px 27px 10px 27px;\r\n}\r\n\r\n.style__toggleAll___3n0TX:checked:before {\r\n  color: #737373;\r\n}\r\n\r\n/*\r\n  Hack to remove background from Mobile Safari.\r\n  Can't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  .style__toggleAll___3n0TX,\r\n  .style__normal___2f_dl li .style__toggle___ugbx7 {\r\n    background: none;\r\n  }\r\n\r\n  .style__normal___2f_dl li .style__toggle___ugbx7 {\r\n    height: 40px;\r\n  }\r\n\r\n  .style__toggleAll___3n0TX {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n  }\r\n}", "", {"version":3,"sources":["/./components/MainSection/style.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,WAAW;EACX,8BAA8B;CAC/B;;AAED;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;CAClC;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,oBAAoB;EACpB,WAAW;CACZ;;AAED;EACE,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;CACpB;;AAED;EACE,cAAc;CACf;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,mEAAmE;EACnE,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,eAAe;EACf,aAAa,CAAC,mBAAmB;EACjC,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;CAClB;;AAED;EACE,sNAAsN;CACvN;;AAED;EACE,qRAAqR;CACtR;;AAED;EACE,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,+BAAuB;EAAvB,uBAAuB;CACxB;;AAED;EACE,eAAe;EACf,8BAA8B;CAC/B;;AAED;EACE,cAAc;EACd,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,wCAAgC;EAAhC,gCAAgC;CACjC;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAa;CACd;;AAED;EACE,eAAe;CAChB;;AAED;EACE,cAAc;CACf;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa,CAAC,mBAAmB;CAClC;;AAED;EACE,iBAAa;EACb,gBAAgB;EAChB,eAAe;EACf,6BAA6B;CAC9B;;AAED;EACE,eAAe;CAChB;;AAED;;;EAGE;AACF;EACE;;IAEE,iBAAiB;GAClB;;EAED;IACE,aAAa;GACd;;EAED;IACE,iCAAyB;YAAzB,yBAAyB;IACzB,yBAAiB;OAAjB,sBAAiB;YAAjB,iBAAiB;GAClB;CACF","file":"style.css","sourcesContent":["\r\n.main {\r\n  position: relative;\r\n  z-index: 2;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.normal {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.normal li {\r\n  position: relative;\r\n  font-size: 24px;\r\n  border-bottom: 1px solid #ededed;\r\n}\r\n\r\n.normal li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.normal li.editing {\r\n  border-bottom: none;\r\n  padding: 0;\r\n}\r\n\r\n.normal li.editing .edit {\r\n  display: block;\r\n  width: 506px;\r\n  padding: 13px 17px 12px 17px;\r\n  margin: 0 0 0 43px;\r\n}\r\n\r\n.normal li.editing .view {\r\n  display: none;\r\n}\r\n\r\n.normal li .toggle {\r\n  text-align: center;\r\n  width: 40px;\r\n  /* auto, since non-WebKit browsers doesn't support input styling */\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  border: none; /* Mobile Safari */\r\n  appearance: none;\r\n}\r\n\r\n.normal li .toggle:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.normal li .toggle:checked:after {\r\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.normal li label {\r\n  white-space: pre-line;\r\n  word-break: break-all;\r\n  padding: 15px 60px 15px 15px;\r\n  margin-left: 45px;\r\n  display: block;\r\n  line-height: 1.2;\r\n  transition: color 0.4s;\r\n}\r\n\r\n.normal li.completed label {\r\n  color: #d9d9d9;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.normal li .destroy {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  bottom: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: auto 0;\r\n  font-size: 30px;\r\n  color: #cc9a9a;\r\n  margin-bottom: 11px;\r\n  transition: color 0.2s ease-out;\r\n}\r\n\r\n.normal li .destroy:hover {\r\n  color: #af5b5e;\r\n}\r\n\r\n.normal li .destroy:after {\r\n  content: '×';\r\n}\r\n\r\n.normal li:hover .destroy {\r\n  display: block;\r\n}\r\n\r\n.normal li .edit {\r\n  display: none;\r\n}\r\n\r\n.normal li.editing:last-child {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.toggleAll {\r\n  position: absolute;\r\n  top: -55px;\r\n  left: -12px;\r\n  width: 60px;\r\n  height: 34px;\r\n  text-align: center;\r\n  border: none; /* Mobile Safari */\r\n}\r\n\r\n.toggleAll:before {\r\n  content: '❯';\r\n  font-size: 22px;\r\n  color: #e6e6e6;\r\n  padding: 10px 27px 10px 27px;\r\n}\r\n\r\n.toggleAll:checked:before {\r\n  color: #737373;\r\n}\r\n\r\n/*\r\n  Hack to remove background from Mobile Safari.\r\n  Can't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n  .toggleAll,\r\n  .normal li .toggle {\r\n    background: none;\r\n  }\r\n\r\n  .normal li .toggle {\r\n    height: 40px;\r\n  }\r\n\r\n  .toggleAll {\r\n    transform: rotate(90deg);\r\n    appearance: none;\r\n  }\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___3M5ao",
		"normal": "style__normal___2f_dl",
		"editing": "style__editing___2k0W5",
		"edit": "style__edit___1JGBS",
		"view": "style__view___rfASl",
		"toggle": "style__toggle___ugbx7",
		"completed": "style__completed___2ISyk",
		"destroy": "style__destroy___2WNnf",
		"toggleAll": "style__toggleAll___3n0TX"
	};

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearCompleted = exports.completeAll = exports.completeTodo = exports.editTodo = exports.deleteTodo = exports.addTodo = undefined;

	var _reduxActions = __webpack_require__(309);

	var addTodo = exports.addTodo = (0, _reduxActions.createAction)('add todo');
	var deleteTodo = exports.deleteTodo = (0, _reduxActions.createAction)('delete todo');
	var editTodo = exports.editTodo = (0, _reduxActions.createAction)('edit todo');
	var completeTodo = exports.completeTodo = (0, _reduxActions.createAction)('complete todo');
	var completeAll = exports.completeAll = (0, _reduxActions.createAction)('complete all');
	var clearCompleted = exports.clearCompleted = (0, _reduxActions.createAction)('clear complete');

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "todos.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createAction = __webpack_require__(310);

	var _createAction2 = _interopRequireDefault(_createAction);

	var _handleAction = __webpack_require__(311);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _handleActions = __webpack_require__(318);

	var _handleActions2 = _interopRequireDefault(_handleActions);

	exports.createAction = _createAction2['default'];
	exports.handleAction = _handleAction2['default'];
	exports.handleActions = _handleActions2['default'];

/***/ },
/* 310 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createAction;
	function identity(t) {
	  return t;
	}

	function createAction(type, actionCreator, metaCreator) {
	  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;

	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var action = {
	      type: type,
	      payload: finalActionCreator.apply(undefined, args)
	    };

	    if (args.length === 1 && args[0] instanceof Error) {
	      // Handle FSA errors where the payload is an Error object. Set error.
	      action.error = true;
	    }

	    if (typeof metaCreator === 'function') {
	      action.meta = metaCreator.apply(undefined, args);
	    }

	    return action;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = handleAction;

	var _fluxStandardAction = __webpack_require__(312);

	function isFunction(val) {
	  return typeof val === 'function';
	}

	function handleAction(type, reducers) {
	  return function (state, action) {
	    // If action type does not match, return previous state
	    if (action.type !== type) return state;

	    var handlerKey = _fluxStandardAction.isError(action) ? 'throw' : 'next';

	    // If function is passed instead of map, use as reducer
	    if (isFunction(reducers)) {
	      reducers.next = reducers['throw'] = reducers;
	    }

	    // Otherwise, assume an action map was passed
	    var reducer = reducers[handlerKey];

	    return isFunction(reducer) ? reducer(state, action) : state;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.isFSA = isFSA;
	exports.isError = isError;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsplainobject = __webpack_require__(313);

	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);

	var validKeys = ['type', 'payload', 'error', 'meta'];

	function isValidKey(key) {
	  return validKeys.indexOf(key) > -1;
	}

	function isFSA(action) {
	  return _lodashIsplainobject2['default'](action) && typeof action.type !== 'undefined' && Object.keys(action).every(isValidKey);
	}

	function isError(action) {
	  return action.error === true;
	}

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(314),
	    isArguments = __webpack_require__(315),
	    keysIn = __webpack_require__(316);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 314 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = baseFor;


/***/ },
/* 315 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}

	module.exports = isArguments;


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(315),
	    isArray = __webpack_require__(317);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 317 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = handleActions;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _handleAction = __webpack_require__(311);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _ownKeys = __webpack_require__(319);

	var _ownKeys2 = _interopRequireDefault(_ownKeys);

	var _reduceReducers = __webpack_require__(320);

	var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

	function handleActions(handlers, defaultState) {
	  var reducers = _ownKeys2['default'](handlers).map(function (type) {
	    return _handleAction2['default'](type, handlers[type]);
	  });

	  return typeof defaultState !== 'undefined' ? function (state, action) {
	    if (state === undefined) state = defaultState;
	    return _reduceReducers2['default'].apply(undefined, reducers)(state, action);
	  } : _reduceReducers2['default'].apply(undefined, reducers);
	}

	module.exports = exports['default'];

/***/ },
/* 319 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = ownKeys;

	function ownKeys(object) {
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object);
	  }

	  var keys = Object.getOwnPropertyNames(object);

	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    keys = keys.concat(Object.getOwnPropertySymbols(object));
	  }

	  return keys;
	}

	module.exports = exports['default'];

/***/ },
/* 320 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = reduceReducers;

	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }

	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(322);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports


	// module
	exports.push([module.id, "\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  color: inherit;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  font-smoothing: antialiased;\r\n}\r\n\r\nbody {\r\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  line-height: 1.4em;\r\n  background: #f5f5f5;\r\n  color: #4d4d4d;\r\n  min-width: 230px;\r\n  max-width: 550px;\r\n  margin: 0 auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-font-smoothing: antialiased;\r\n  -ms-font-smoothing: antialiased;\r\n  font-smoothing: antialiased;\r\n  font-weight: 300;\r\n}\r\n\r\nbutton,\r\ninput[type=\"checkbox\"] {\r\n  outline: none;\r\n}\r\n\r\n.style__normal___18F7v {\r\n  background: #fff;\r\n  margin: 200px 0 40px 0;\r\n  position: relative;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\r\n              0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.style__normal___18F7v input::-webkit-input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.style__normal___18F7v input::-moz-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.style__normal___18F7v input::input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.style__normal___18F7v h1 {\r\n  position: absolute;\r\n  top: -155px;\r\n  width: 100%;\r\n  font-size: 100px;\r\n  font-weight: 100;\r\n  text-align: center;\r\n  color: rgba(175, 47, 47, 0.15);\r\n  -webkit-text-rendering: optimizeLegibility;\r\n  -moz-text-rendering: optimizeLegibility;\r\n  -ms-text-rendering: optimizeLegibility;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n", "", {"version":3,"sources":["/./containers/App/style.css"],"names":[],"mappings":";AACA;;EAEE,UAAU;EACV,WAAW;CACZ;;AAED;EACE,UAAU;EACV,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;EACjB,4BAA4B;CAC7B;;AAED;EACE,0DAA0D;EAC1D,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,oCAAoC;EACpC,iCAAiC;EACjC,gCAAgC;EAChC,4BAA4B;EAC5B,iBAAiB;CAClB;;AAED;;EAEE,cAAc;CACf;;AAED;EACE,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB;+CAC6C;CAC9C;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,+BAA+B;EAC/B,2CAA2C;EAC3C,wCAAwC;EACxC,uCAAuC;EACvC,mCAAmC;CACpC","file":"style.css","sourcesContent":["\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  color: inherit;\r\n  appearance: none;\r\n  font-smoothing: antialiased;\r\n}\r\n\r\nbody {\r\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  line-height: 1.4em;\r\n  background: #f5f5f5;\r\n  color: #4d4d4d;\r\n  min-width: 230px;\r\n  max-width: 550px;\r\n  margin: 0 auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-font-smoothing: antialiased;\r\n  -ms-font-smoothing: antialiased;\r\n  font-smoothing: antialiased;\r\n  font-weight: 300;\r\n}\r\n\r\nbutton,\r\ninput[type=\"checkbox\"] {\r\n  outline: none;\r\n}\r\n\r\n.normal {\r\n  background: #fff;\r\n  margin: 200px 0 40px 0;\r\n  position: relative;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\r\n              0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.normal input::-webkit-input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.normal input::-moz-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.normal input::input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: #e6e6e6;\r\n}\r\n\r\n.normal h1 {\r\n  position: absolute;\r\n  top: -155px;\r\n  width: 100%;\r\n  font-size: 100px;\r\n  font-weight: 100;\r\n  text-align: center;\r\n  color: rgba(175, 47, 47, 0.15);\r\n  -webkit-text-rendering: optimizeLegibility;\r\n  -moz-text-rendering: optimizeLegibility;\r\n  -ms-text-rendering: optimizeLegibility;\r\n  text-rendering: optimizeLegibility;\r\n}\r\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "style__normal___18F7v"
	};

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configure;

	var _redux = __webpack_require__(165);

	var _reducers = __webpack_require__(324);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configure(initialState) {
	  var create = window.devToolsExtension ? window.devToolsExtension()(_redux.createStore) : _redux.createStore;

	  var store = create(_reducers2.default, initialState);

	  if (false) {
	    module.hot.accept('../reducers', function () {
	      var nextReducer = require('../reducers');
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(165);

	var _reduxSimpleRouter = __webpack_require__(230);

	var _todos = __webpack_require__(325);

	var _todos2 = _interopRequireDefault(_todos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  routing: _reduxSimpleRouter.routeReducer,
	  todos: _todos2.default
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(294);

	var _extends3 = _interopRequireDefault(_extends2);

	var _toConsumableArray2 = __webpack_require__(326);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _reduxActions = __webpack_require__(309);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = [{
	  text: 'Use Redux',
	  completed: false,
	  id: 0
	}];

	exports.default = (0, _reduxActions.handleActions)({
	  'add todo': function addTodo(state, action) {
	    return [{
	      id: state.reduce(function (maxId, todo) {
	        return Math.max(todo.id, maxId);
	      }, -1) + 1,
	      completed: false,
	      text: action.payload
	    }].concat((0, _toConsumableArray3.default)(state));
	  },
	  'delete todo': function deleteTodo(state, action) {
	    return state.filter(function (todo) {
	      return todo.id !== action.payload;
	    });
	  },
	  'edit todo': function editTodo(state, action) {
	    return state.map(function (todo) {
	      return todo.id === action.payload.id ? (0, _extends3.default)({}, todo, { text: action.payload.text }) : todo;
	    });
	  },
	  'complete todo': function completeTodo(state, action) {
	    return state.map(function (todo) {
	      return todo.id === action.payload ? (0, _extends3.default)({}, todo, { completed: !todo.completed }) : todo;
	    });
	  },
	  'complete all': function completeAll(state, action) {
	    var areAllMarked = state.every(function (todo) {
	      return todo.completed;
	    });
	    return state.map(function (todo) {
	      return (0, _extends3.default)({}, todo, {
	        completed: !areAllMarked
	      });
	    });
	  },
	  'clear complete': function clearComplete(state, action) {
	    return state.filter(function (todo) {
	      return todo.completed === false;
	    });
	  }
	}, initialState);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\develop\\github\\frontend-boilerplate\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "todos.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(327);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(328), __esModule: true };

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(329);
	__webpack_require__(335);
	module.exports = __webpack_require__(244).Array.from;

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(330)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(332)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(331)
	  , defined   = __webpack_require__(240);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 331 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(276)
	  , $export        = __webpack_require__(242)
	  , redefine       = __webpack_require__(260)
	  , hide           = __webpack_require__(261)
	  , has            = __webpack_require__(258)
	  , Iterators      = __webpack_require__(333)
	  , $iterCreate    = __webpack_require__(334)
	  , setToStringTag = __webpack_require__(264)
	  , getProto       = __webpack_require__(252).getProto
	  , ITERATOR       = __webpack_require__(265)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 333 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(252)
	  , descriptor     = __webpack_require__(262)
	  , setToStringTag = __webpack_require__(264)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(261)(IteratorPrototype, __webpack_require__(265)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(245)
	  , $export     = __webpack_require__(242)
	  , toObject    = __webpack_require__(239)
	  , call        = __webpack_require__(336)
	  , isArrayIter = __webpack_require__(337)
	  , toLength    = __webpack_require__(338)
	  , getIterFn   = __webpack_require__(339);
	$export($export.S + $export.F * !__webpack_require__(341)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(274);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(333)
	  , ITERATOR   = __webpack_require__(265)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(331)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(340)
	  , ITERATOR  = __webpack_require__(265)('iterator')
	  , Iterators = __webpack_require__(333);
	module.exports = __webpack_require__(244).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(270)
	  , TAG = __webpack_require__(265)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(265)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }
]);