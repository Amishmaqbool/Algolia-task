(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../dist/libs/generated/ui-components-react/src/components.ts":
/*!**************************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/generated/ui-components-react/src/components.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AssessmentComponent, MyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function() { return AssessmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponent", function() { return MyComponent; });
/* harmony import */ var _react_component_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-component-lib */ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/index.ts");
/* harmony import */ var ui_components_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-components/loader */ "../../../dist/libs/ui-components/loader/index.es2017.js");
/* eslint-disable */

/* tslint:disable */

/* auto-generated react proxies */


Object(ui_components_loader__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"])();
const AssessmentComponent = /*@__PURE__*/Object(_react_component_lib__WEBPACK_IMPORTED_MODULE_0__["createReactComponent"])('assessment-component');
const MyComponent = /*@__PURE__*/Object(_react_component_lib__WEBPACK_IMPORTED_MODULE_0__["createReactComponent"])('my-component');

/***/ }),

/***/ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/createComponent.tsx":
/*!****************************************************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/generated/ui-components-react/src/react-component-lib/createComponent.tsx ***!
  \****************************************************************************************************************************************/
/*! exports provided: createReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactComponent", function() { return createReactComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/utils/index.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction) => {
  var _temp;

  const displayName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dashToPascalCase"])(tagName);
  const ReactComponent = (_temp = class ReactComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.componentEl = void 0;

      this.setComponentElRef = element => {
        this.componentEl = element;
      };
    }

    componentDidMount() {
      this.componentDidUpdate(this.props);
    }

    componentDidUpdate(prevProps) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attachProps"])(this.componentEl, this.props, prevProps);
    }

    render() {
      const _this$props = this.props,
            {
        children,
        forwardedRef,
        style,
        className,
        ref
      } = _this$props,
            cProps = _objectWithoutProperties(_this$props, ["children", "forwardedRef", "style", "className", "ref"]);

      let propsToPass = Object.keys(cProps).reduce((acc, name) => {
        if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();

          if (typeof document !== 'undefined' && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isCoveredByReact"])(eventName, document)) {
            acc[name] = cProps[name];
          }
        } else {
          acc[name] = cProps[name];
        }

        return acc;
      }, {});

      if (manipulatePropsFunction) {
        propsToPass = manipulatePropsFunction(this.props, propsToPass);
      }

      let newProps = _objectSpread(_objectSpread({}, propsToPass), {}, {
        ref: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["mergeRefs"])(forwardedRef, this.setComponentElRef),
        style
      });

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tagName, newProps, children);
    }

    static get displayName() {
      return displayName;
    }

  }, _temp); // If context was passed to createReactComponent then conditionally add it to the Component Class

  if (ReactComponentContext) {
    ReactComponent.contextType = ReactComponentContext;
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createForwardRef"])(ReactComponent, displayName);
};

/***/ }),

/***/ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/createOverlayComponent.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/generated/ui-components-react/src/react-component-lib/createOverlayComponent.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: createOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOverlayComponent", function() { return createOverlayComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/utils/index.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const createOverlayComponent = (displayName, controller) => {
  const didDismissEventName = `on${displayName}DidDismiss`;
  const didPresentEventName = `on${displayName}DidPresent`;
  const willDismissEventName = `on${displayName}WillDismiss`;
  const willPresentEventName = `on${displayName}WillPresent`;

  class Overlay extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.overlay = void 0;
      this.el = void 0;
      this.el = document.createElement('div');
      this.handleDismiss = this.handleDismiss.bind(this);
    }

    static get displayName() {
      return displayName;
    }

    componentDidMount() {
      if (this.props.isOpen) {
        this.present();
      }
    }

    componentWillUnmount() {
      if (this.overlay) {
        this.overlay.dismiss();
      }
    }

    handleDismiss(event) {
      if (this.props.onDidDismiss) {
        this.props.onDidDismiss(event);
      }

      if (this.props.forwardedRef) {
        this.props.forwardedRef.current = undefined;
      }
    }

    async componentDidUpdate(prevProps) {
      if (this.overlay) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["attachProps"])(this.overlay, this.props, prevProps);
      }

      if (prevProps.isOpen !== this.props.isOpen && this.props.isOpen === true) {
        this.present(prevProps);
      }

      if (this.overlay && prevProps.isOpen !== this.props.isOpen && this.props.isOpen === false) {
        await this.overlay.dismiss();
      }
    }

    async present(prevProps) {
      const _this$props = this.props,
            {
        children,
        isOpen,
        onDidDismiss,
        onDidPresent,
        onWillDismiss,
        onWillPresent
      } = _this$props,
            cProps = _objectWithoutProperties(_this$props, ["children", "isOpen", "onDidDismiss", "onDidPresent", "onWillDismiss", "onWillPresent"]);

      const elementProps = _objectSpread(_objectSpread({}, cProps), {}, {
        ref: this.props.forwardedRef,
        [didDismissEventName]: this.handleDismiss,
        [didPresentEventName]: e => this.props.onDidPresent && this.props.onDidPresent(e),
        [willDismissEventName]: e => this.props.onWillDismiss && this.props.onWillDismiss(e),
        [willPresentEventName]: e => this.props.onWillPresent && this.props.onWillPresent(e)
      });

      this.overlay = await controller.create(_objectSpread(_objectSpread({}, elementProps), {}, {
        component: this.el,
        componentProps: {}
      }));

      if (this.props.forwardedRef) {
        this.props.forwardedRef.current = this.overlay;
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["attachProps"])(this.overlay, elementProps, prevProps);
      await this.overlay.present();
    }

    render() {
      return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(this.props.isOpen ? this.props.children : null, this.el);
    }

  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overlay, _extends({}, props, {
      forwardedRef: ref
    }));
  });
};

/***/ }),

/***/ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/index.ts":
/*!*****************************************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/generated/ui-components-react/src/react-component-lib/index.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: createReactComponent, createOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComponent */ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/createComponent.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReactComponent", function() { return _createComponent__WEBPACK_IMPORTED_MODULE_0__["createReactComponent"]; });

/* harmony import */ var _createOverlayComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createOverlayComponent */ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/createOverlayComponent.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOverlayComponent", function() { return _createOverlayComponent__WEBPACK_IMPORTED_MODULE_1__["createOverlayComponent"]; });




/***/ }),

/***/ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/utils/attachProps.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/generated/ui-components-react/src/react-component-lib/utils/attachProps.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: attachProps, getClassName, isCoveredByReact, syncEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachProps", function() { return attachProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return getClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCoveredByReact", function() { return isCoveredByReact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncEvent", function() { return syncEvent; });
/* harmony import */ var _case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case */ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/utils/case.ts");

const attachProps = (node, newProps, oldProps = {}) => {
  // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
  if (node instanceof Element) {
    // add any classes in className to the class list
    const className = getClassName(node.classList, newProps, oldProps);

    if (className !== '') {
      node.className = className;
    }

    Object.keys(newProps).forEach(name => {
      if (name === 'children' || name === 'style' || name === 'ref' || name === 'class' || name === 'className' || name === 'forwardedRef') {
        return;
      }

      if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);

        if (typeof document !== 'undefined' && !isCoveredByReact(eventNameLc, document)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        node[name] = newProps[name];
        const propType = typeof newProps[name];

        if (propType === 'string') {
          node.setAttribute(Object(_case__WEBPACK_IMPORTED_MODULE_0__["camelToDashCase"])(name), newProps[name]);
        } else {
          node[name] = newProps[name];
        }
      }
    });
  }
};
const getClassName = (classList, newProps, oldProps) => {
  const newClassProp = newProps.className || newProps.class;
  const oldClassProp = oldProps.className || oldProps.class; // map the classes to Maps for performance

  const currentClasses = arrayToMap(classList);
  const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(' ') : []);
  const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(' ') : []);
  const finalClassNames = []; // loop through each of the current classes on the component
  // to see if it should be a part of the classNames added

  currentClasses.forEach(currentClass => {
    if (incomingPropClasses.has(currentClass)) {
      // add it as its already included in classnames coming in from newProps
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      // add it as it has NOT been removed by user
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach(s => finalClassNames.push(s));
  return finalClassNames.join(' ');
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */

const isCoveredByReact = (eventNameSuffix, doc) => {
  const eventName = 'on' + eventNameSuffix;
  let isSupported = (eventName in doc);

  if (!isSupported) {
    const element = doc.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  return isSupported;
};
const syncEvent = (node, eventName, newEventHandler) => {
  const eventStore = node.__events || (node.__events = {});
  const oldEventHandler = eventStore[eventName]; // Remove old listener so they don't double up.

  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  } // Bind new listener.


  node.addEventListener(eventName, eventStore[eventName] = function handler(e) {
    if (newEventHandler) {
      newEventHandler.call(this, e);
    }
  });
};

const arrayToMap = arr => {
  const map = new Map();
  arr.forEach(s => map.set(s, s));
  return map;
};

/***/ }),

/***/ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/utils/case.ts":
/*!**********************************************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/generated/ui-components-react/src/react-component-lib/utils/case.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: dashToPascalCase, camelToDashCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashToPascalCase", function() { return dashToPascalCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToDashCase", function() { return camelToDashCase; });
const dashToPascalCase = str => str.toLowerCase().split('-').map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join('');
const camelToDashCase = str => str.replace(/([A-Z])/g, m => `-${m[0].toLowerCase()}`);

/***/ }),

/***/ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/utils/index.tsx":
/*!************************************************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/generated/ui-components-react/src/react-component-lib/utils/index.tsx ***!
  \************************************************************************************************************************************/
/*! exports provided: mergeRefs, createForwardRef, attachProps, getClassName, isCoveredByReact, syncEvent, dashToPascalCase, camelToDashCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForwardRef", function() { return createForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attachProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attachProps */ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/utils/attachProps.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attachProps", function() { return _attachProps__WEBPACK_IMPORTED_MODULE_1__["attachProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return _attachProps__WEBPACK_IMPORTED_MODULE_1__["getClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCoveredByReact", function() { return _attachProps__WEBPACK_IMPORTED_MODULE_1__["isCoveredByReact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syncEvent", function() { return _attachProps__WEBPACK_IMPORTED_MODULE_1__["syncEvent"]; });

/* harmony import */ var _case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./case */ "../../../dist/libs/generated/ui-components-react/src/react-component-lib/utils/case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dashToPascalCase", function() { return _case__WEBPACK_IMPORTED_MODULE_2__["dashToPascalCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelToDashCase", function() { return _case__WEBPACK_IMPORTED_MODULE_2__["camelToDashCase"]; });

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


// The comma in the type is to trick typescript because it things a single generic in a tsx file is jsx
const mergeRefs = (...refs) => value => refs.forEach(ref => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref != null) {
    // This is typed as readonly so we need to allow for override
    ref.current = value;
  }
});
const createForwardRef = (ReactComponent, displayName) => {
  const forwardRef = (props, ref) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactComponent, _extends({}, props, {
      forwardedRef: ref
    }));
  };

  forwardRef.displayName = displayName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(forwardRef);
};



/***/ }),

/***/ "../../../dist/libs/ui-components/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/ui-components/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./assessment-component.entry.js": [
		"../../../dist/libs/ui-components/dist/esm/assessment-component.entry.js",
		0
	],
	"./my-component.entry.js": [
		"../../../dist/libs/ui-components/dist/esm/my-component.entry.js",
		1
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../dist/libs/ui-components/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../dist/libs/ui-components/dist/esm/index-5bb720a0.js":
/*!*******************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/ui-components/dist/esm/index-5bb720a0.js ***!
  \*******************************************************************************************************/
/*! exports provided: b, c, h, p, r, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return promiseResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setNonce; });
const NAMESPACE = 'ui-components';

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
let scopeId;
let hostTagName;
let isSvgMode = false;
let queuePending = false;
const createTime = (fnName, tagName = '') => {
  {
    return () => {
      return;
    };
  }
};
const uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
const isDef = v => v != null;
const isComplexType = o => {
  // https://jsperf.com/typeof-fn-object/5
  o = typeof o;
  return o === 'object' || o === 'function';
};
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = c => {
    for (let i = 0; i < c.length; i++) {
      child = c[i];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== 'boolean') {
        if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          // If the previous child was simple (string), we merge both
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          // Append a new vNode, if it's text, we create a text vNode
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    // normalize class / classname attributes
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== 'object' ? classData : Object.keys(classData).filter(k => classData[k]).join(' ');
      }
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  return vnode;
};
/**
 * A utility function for creating a virtual DOM node from a tag and some
 * possible text content.
 *
 * @param tag the tag for this element
 * @param text possible text content for the node
 * @returns a newly-minted virtual DOM node
 */
const newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  return vnode;
};
const Host = {};
/**
 * Check whether a given node is a Host node or not
 *
 * @param node the virtual DOM node to check
 * @returns whether it's a Host node or not
 */
const isHost = node => node && node.$tag$ === Host;
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */
const parsePropertyValue = (propValue, propType) => {
  // ensure this value is of the correct prop type
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* MEMBER_FLAGS.Boolean */) {
      // per the HTML spec, any string value means it is a boolean true value
      // but we'll cheat here and say that the string "false" is the boolean false
      return propValue === 'false' ? false : propValue === '' || !!propValue;
    }
    if (propType & 1 /* MEMBER_FLAGS.String */) {
      // could have been passed as a number or boolean
      // but we still want it as a string
      return String(propValue);
    }
    // redundant return here for better minification
    return propValue;
  }
  // not sure exactly what type we want
  // so no need to change to a different type
  return propValue;
};
const getElement = ref => getHostRef(ref).$hostElement$;
const createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: detail => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4 /* EVENT_FLAGS.Bubbles */),
        composed: !!(flags & 2 /* EVENT_FLAGS.Composed */),
        cancelable: !!(flags & 1 /* EVENT_FLAGS.Cancellable */),
        detail
      });
    }
  };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
const rootAppliedStyles = /*@__PURE__*/new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
  let style = styles.get(scopeId);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === 'string') {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
  var _a;
  let scopeId = getScopeId(cmpMeta);
  const style = styles.get(scopeId);
  // if an element is NOT connected then getRootNode() will return the wrong root node
  // so the fallback is to always use the document for the root node in those cases
  styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */ ? styleContainerNode : doc;
  if (style) {
    if (typeof style === 'string') {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
      }
      if (!appliedStyles.has(scopeId)) {
        {
          {
            styleElm = doc.createElement('style');
            styleElm.innerHTML = style;
          }
          // Apply CSP nonce to the style tag if it exists
          const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute('nonce', nonce);
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId;
};
const attachStyles = hostRef => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
  const scopeId = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
  if (flags & 10 /* CMP_FLAGS.needsScopedEncapsulation */) {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    // DOM WRITE!!
    elm['s-sc'] = scopeId;
    elm.classList.add(scopeId + '-h');
  }
  endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + cmp.$tagName$;
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === 'class') {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter(c => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter(c => c && !oldClasses.includes(c)));
    } else if (memberName === 'key') ;else if (!isProp && memberName[0] === 'o' && memberName[1] === 'n') {
      // Event Handlers
      // so if the member name starts with "on" and the 3rd characters is
      // a capital letter, and it's not already a member on the element,
      // then we're assuming it's an event listener
      if (memberName[2] === '-') {
        // on- prefixed events
        // allows to be explicit about the dom event to listen without any magic
        // under the hood:
        // <my-cmp on-click> // listens for "click"
        // <my-cmp on-Click> // listens for "Click"
        // <my-cmp on-ionChange> // listens for "ionChange"
        // <my-cmp on-EVENTS> // listens for "EVENTS"
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        // standard event
        // the JSX attribute could have been "onMouseOver" and the
        // member name "onmouseover" is on the window's prototype
        // so let's add the listener "mouseover", which is all lowercased
        memberName = ln.slice(2);
      } else {
        // custom event
        // the JSX attribute could have been "onMyCustomEvent"
        // so let's trim off the "on" prefix and lowercase the first character
        // and add the listener "myCustomEvent"
        // except for the first character, we keep the event name case
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, false);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, false);
      }
    } else {
      // Set property if it exists and it's not a SVG
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes('-')) {
            const n = newValue == null ? '' : newValue;
            // Workaround for Safari, moving the <input> caret when re-assigning the same valued
            if (memberName === 'list') {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {}
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === '') {
          {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 /* VNODE_FLAGS.isHost */ || isSvg) && !isComplex) {
        newValue = newValue === true ? '' : newValue;
        {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
const parseClassListRegex = /\s/;
const parseClassList = value => !value ? [] : value.split(parseClassListRegex);
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
  // if the element passed in is a shadow root, which is a document fragment
  // then we want to be adding attrs/props to the shadow root's "host" element
  // if it's not a shadow root, then we add attrs/props to the same element
  const elm = newVnode.$elm$.nodeType === 11 /* NODE_TYPE.DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    // remove attributes no longer present on the vnode by setting them to undefined
    for (memberName in oldVnodeAttrs) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
      }
    }
  }
  // add new & update changed attributes
  for (memberName in newVnodeAttrs) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
  }
};
/**
 * Create a DOM Node corresponding to one of the children of a given VNode.
 *
 * @param oldParentVNode the parent VNode from the previous render
 * @param newParentVNode the parent VNode from the current render
 * @param childIndex the index of the VNode, in the _new_ parent node's
 * children, for which we will create a new DOM node
 * @param parentElm the parent DOM node which our new node will be a child of
 * @returns the newly created node
 */
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  // tslint:disable-next-line: prefer-const
  const newVNode = newParentVNode.$children$[childIndex];
  let i = 0;
  let elm;
  let childNode;
  if (newVNode.$text$ !== null) {
    // create text node
    elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
  } else {
    // create element
    elm = newVNode.$elm$ = doc.createElement(newVNode.$tag$);
    // add css classes, attrs, props, listeners, etc.
    {
      updateElement(null, newVNode, isSvgMode);
    }
    if (isDef(scopeId) && elm['s-si'] !== scopeId) {
      // if there is a scopeId and this is the initial render
      // then let's add the scopeId as a css class
      elm.classList.add(elm['s-si'] = scopeId);
    }
    if (newVNode.$children$) {
      for (i = 0; i < newVNode.$children$.length; ++i) {
        // create the node
        childNode = createElm(oldParentVNode, newVNode, i);
        // return node could have been null
        if (childNode) {
          // append our new node
          elm.appendChild(childNode);
        }
      }
    }
  }
  return elm;
};
/**
 * Create DOM nodes corresponding to a list of {@link d.Vnode} objects and
 * add them to the DOM in the appropriate place.
 *
 * @param parentElm the DOM node which should be used as a parent for the new
 * DOM nodes
 * @param before a child of the `parentElm` which the new children should be
 * inserted before (optional)
 * @param parentVNode the parent virtual DOM node
 * @param vnodes the new child virtual DOM nodes to produce DOM nodes for
 * @param startIdx the index in the child virtual DOM nodes at which to start
 * creating DOM nodes (inclusive)
 * @param endIdx the index in the child virtual DOM nodes at which to stop
 * creating DOM nodes (inclusive)
 */
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, before);
      }
    }
  }
};
/**
 * Remove the DOM elements corresponding to a list of {@link d.VNode} objects.
 * This can be used to, for instance, clean up after a list of children which
 * should no longer be shown.
 *
 * This function also handles some of Stencil's slot relocation logic.
 *
 * @param vnodes a list of virtual DOM nodes to remove
 * @param startIdx the index at which to start removing nodes (inclusive)
 * @param endIdx the index at which to stop removing nodes (inclusive)
 * @param vnode a VNode
 * @param elm an element
 */
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnode = vnodes[startIdx]) {
      elm = vnode.$elm$;
      // remove the vnode's element from the dom
      elm.remove();
    }
  }
};
/**
 * Reconcile the children of a new VNode with the children of an old VNode by
 * traversing the two collections of children, identifying nodes that are
 * conserved or changed, calling out to `patch` to make any necessary
 * updates to the DOM, and rearranging DOM nodes as needed.
 *
 * The algorithm for reconciling children works by analyzing two 'windows' onto
 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
 * 'windows' by storing start and end indices and references to the
 * corresponding array entries. Initially the two 'windows' are basically equal
 * to the entire array, but we progressively narrow the windows until there are
 * no children left to update by doing the following:
 *
 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
 *    that if we have an initial array like the following we'll end up dealing
 *    only with a window bounded by the highlighted elements:
 *
 *    [null, null, VNode1 , ... , VNode2, null, null]
 *                 ^^^^^^         ^^^^^^
 *
 * 2. Check to see if the elements at the head and tail positions are equal
 *    across the windows. This will basically detect elements which haven't
 *    been added, removed, or changed position, i.e. if you had the following
 *    VNode elements (represented as HTML):
 *
 *    oldVNode: `<div><p><span>HEY</span></p></div>`
 *    newVNode: `<div><p><span>THERE</span></p></div>`
 *
 *    Then when comparing the children of the `<div>` tag we check the equality
 *    of the VNodes corresponding to the `<p>` tags and, since they are the
 *    same tag in the same position, we'd be able to avoid completely
 *    re-rendering the subtree under them with a new DOM element and would just
 *    call out to `patch` to handle reconciling their children and so on.
 *
 * 3. Check, for both windows, to see if the element at the beginning of the
 *    window corresponds to the element at the end of the other window. This is
 *    a heuristic which will let us identify _some_ situations in which
 *    elements have changed position, for instance it _should_ detect that the
 *    children nodes themselves have not changed but merely moved in the
 *    following example:
 *
 *    oldVNode: `<div><element-one /><element-two /></div>`
 *    newVNode: `<div><element-two /><element-one /></div>`
 *
 *    If we find cases like this then we also need to move the concrete DOM
 *    elements corresponding to the moved children to write the re-order to the
 *    DOM.
 *
 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
 *    nodes in the old children which have the same key as the first element in
 *    our window on the new children. If we find such a node we handle calling
 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
 *    what we find.
 *
 * Finally, once we've narrowed our 'windows' to the point that either of them
 * collapse (i.e. they have length 0) we then handle any remaining VNode
 * insertion or deletion that needs to happen to get a DOM state that correctly
 * reflects the new child VNodes. If, for instance, after our window on the old
 * children has collapsed we still have more nodes on the new children that
 * we haven't dealt with yet then we need to add them, or if the new children
 * collapse but we still have unhandled _old_ children then we need to make
 * sure the corresponding DOM nodes are removed.
 *
 * @param parentElm the node into which the parent VNode is rendered
 * @param oldCh the old children of the parent node
 * @param newVNode the new VNode which will replace the parent
 * @param newCh the new children of the parent node
 */
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      // VNode might have been moved left
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      // if the start nodes are the same then we should patch the new VNode
      // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
      // indices to reflect that. We don't need to move any DOM Nodes around
      // since things are matched up in order.
      patch(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      // likewise, if the end nodes are the same we patch new onto old and
      // decrement our end indices, and also likewise in this case we don't
      // need to move any DOM Nodes.
      patch(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      patch(oldStartVnode, newEndVnode);
      // We need to move the element for `oldStartVnode` into a position which
      // will be appropriate for `newEndVnode`. For this we can use
      // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
      // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
      // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
      //
      // <old-start-node />
      // <some-intervening-node />
      // <old-end-node />
      // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
      // <next-sibling />
      //
      // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
      // the node for `oldStartVnode` at the end of the children of
      // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
      // aren't any siblings, and passing `null` to `Node.insertBefore` will
      // append it to the children of the parent element.
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      patch(oldEndVnode, newStartVnode);
      // We've already checked above if `oldStartVnode` and `newStartVnode` are
      // the same node, so since we're here we know that they are not. Thus we
      // can move the element for `oldEndVnode` _before_ the element for
      // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
      // future.
      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      // Here we do some checks to match up old and new nodes based on the
      // `$key$` attribute, which is set by putting a `key="my-key"` attribute
      // in the JSX for a DOM element in the implementation of a Stencil
      // component.
      //
      // First we check to see if there are any nodes in the array of old
      // children which have the same key as the first node in the new
      // children.
      idxInOld = -1;
      {
        for (i = oldStartIdx; i <= oldEndIdx; ++i) {
          if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
            idxInOld = i;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        // We found a node in the old children which matches up with the first
        // node in the new children! So let's deal with that
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          // the tag doesn't match so we'll need a new DOM element
          node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld);
        } else {
          patch(elmToMove, newStartVnode);
          // invalidate the matching old node so that we won't try to update it
          // again later on
          oldCh[idxInOld] = undefined;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        // We either didn't find an element in the old children that matches
        // the key of the first new child OR the build is not using `key`
        // attributes at all. In either case we need to create a new element
        // for the new node.
        node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        // if we created a new node then handle inserting it to the DOM
        {
          oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    // we have some more new nodes to add which don't match up with old nodes
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    // there are nodes in the `oldCh` array which no longer correspond to nodes
    // in the new array, so lets remove them (which entails cleaning up the
    // relevant DOM nodes)
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
/**
 * Compare two VNodes to determine if they are the same
 *
 * **NB**: This function is an equality _heuristic_ based on the available
 * information set on the two VNodes and can be misleading under certain
 * circumstances. In particular, if the two nodes do not have `key` attrs
 * (available under `$key$` on VNodes) then the function falls back on merely
 * checking that they have the same tag.
 *
 * So, in other words, if `key` attrs are not set on VNodes which may be
 * changing order within a `children` array or something along those lines then
 * we could obtain a false negative and then have to do needless re-rendering
 * (i.e. we'd say two VNodes aren't equal when in fact they should be).
 *
 * @param leftVNode the first VNode to check
 * @param rightVNode the second VNode to check
 * @returns whether they're equal or not
 */
const isSameVnode = (leftVNode, rightVNode) => {
  // compare if two vnode to see if they're "technically" the same
  // need to have the same element tag, and same key to be the same
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    // this will be set if components in the build have `key` attrs set on them
    {
      return leftVNode.$key$ === rightVNode.$key$;
    }
  }
  return false;
};
/**
 * Handle reconciling an outdated VNode with a new one which corresponds to
 * it. This function handles flushing updates to the DOM and reconciling the
 * children of the two nodes (if any).
 *
 * @param oldVNode an old VNode whose DOM element and children we want to update
 * @param newVNode a new VNode representing an updated version of the old one
 */
const patch = (oldVNode, newVNode) => {
  const elm = newVNode.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode.$children$;
  const text = newVNode.$text$;
  if (text === null) {
    {
      {
        // either this is the first render of an element OR it's an update
        // AND we already know it's possible it could have changed
        // this updates the element's css classes, attrs, props, listeners, etc.
        updateElement(oldVNode, newVNode, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      // looks like there's child vnodes for both the old and new vnodes
      // so we need to call `updateChildren` to reconcile them
      updateChildren(elm, oldChildren, newVNode, newChildren);
    } else if (newChildren !== null) {
      // no old child vnodes, but there are new child vnodes to add
      if (oldVNode.$text$ !== null) {
        // the old vnode was text, so be sure to clear it out
        elm.textContent = '';
      }
      // add the new vnode children
      addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
    } else if (oldChildren !== null) {
      // no new child vnodes, but there are old child vnodes to remove
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
  } else if (oldVNode.$text$ !== text) {
    // update the text content for the text only vnode
    // and also only if the text is different than before
    elm.data = text;
  }
};
/**
 * The main entry point for Stencil's virtual DOM-based rendering engine
 *
 * Given a {@link d.HostRef} container and some virtual DOM nodes, this
 * function will handle creating a virtual DOM tree with a single root, patching
 * the current virtual DOM tree onto an old one (if any), dealing with slot
 * relocation, and reflecting attributes.
 *
 * @param hostRef data needed to root and render the virtual DOM tree, such as
 * the DOM node into which it should be rendered.
 * @param renderFnResults the virtual DOM nodes to be rendered
 */
const renderVdom = (hostRef, renderFnResults) => {
  const hostElm = hostRef.$hostElement$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* VNODE_FLAGS.isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm['s-sc'];
  }
  // synchronous patch
  patch(oldVNode, rootVnode);
};
const attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
    ancestorComponent['s-p'].push(new Promise(r => hostRef.$onRenderResolve$ = r));
  }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* HOST_FLAGS.isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* HOST_FLAGS.needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  // there is no ancestor component or the ancestor component
  // has already fired off its lifecycle update then
  // fire off the initial update
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch);
};
const dispatchHooks = (hostRef, isInitialLoad) => {
  const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$;
  let promise;
  endSchedule();
  return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
  // updateComponent
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
  const rc = elm['s-rc'];
  if (isInitialLoad) {
    // DOM WRITE!
    attachStyles(hostRef);
  }
  const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance);
  }
  if (rc) {
    // ok, so turns out there are some child host elements
    // waiting on this parent element to load
    // let's fire off all update callbacks waiting
    rc.map(cb => cb());
    elm['s-rc'] = undefined;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = elm['s-p'];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* HOST_FLAGS.isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
const callRender = (hostRef, instance, elm) => {
  try {
    instance = instance.render();
    {
      hostRef.$flags$ &= ~16 /* HOST_FLAGS.isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */;
    }
    {
      {
        // looks like we've got child nodes to render into this host element
        // or we need to update the css class/attrs on the host element
        // DOM WRITE!
        {
          renderVdom(hostRef, instance);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
const postUpdateComponent = hostRef => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime('postUpdate', tagName);
  const ancestorComponent = hostRef.$ancestorComponent$;
  if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */;
    {
      // DOM WRITE!
      addHydratedFlag(elm);
    }
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    endPostUpdate();
  }
  // load events fire from bottom to top
  // the deepest elements load first then bubbles up
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = undefined;
    }
    if (hostRef.$flags$ & 512 /* HOST_FLAGS.needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 /* HOST_FLAGS.isWaitingForChildren */ | 512 /* HOST_FLAGS.needsRerender */);
  }
  // ( •_•)
  // ( •_•)>⌐■-■
  // (⌐■_■)
};
const appDidLoad = who => {
  // on appload
  // we have finish the first big initial render
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent(win, 'appload', {
    detail: {
      namespace: NAMESPACE
    }
  }));
};
const then = (promise, thenFn) => {
  return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = elm => elm.classList.add('hydrated');
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
  // check our new property value against our internal value
  const hostRef = getHostRef(ref);
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  // explicitly check for NaN on both sides, as `NaN === NaN` is always false
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* HOST_FLAGS.isConstructingInstance */) || oldVal === undefined) && didValueChange) {
    // gadzooks! the property's value has changed!!
    // set our new value!
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if ((flags & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
        // looks like this value actually changed, so we've got work to do!
        // but only if we've already rendered, otherwise just chill out
        // queue that we need to do an update, but don't worry about queuing
        // up millions cuz this function ensures it only runs once
        scheduleUpdate(hostRef, false);
      }
    }
  }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */
const proxyComponent = (Cstr, cmpMeta, flags) => {
  if (cmpMeta.$members$) {
    // It's better to have a const than two Object.entries()
    const members = Object.entries(cmpMeta.$members$);
    const prototype = Cstr.prototype;
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ || flags & 2 /* PROXY_FLAGS.proxyState */ && memberFlags & 32 /* MEMBER_FLAGS.State */) {
        // proxyComponent - prop
        Object.defineProperty(prototype, memberName, {
          get() {
            // proxyComponent, get value
            return getValue(this, memberName);
          },
          set(newValue) {
            // proxyComponent, set value
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      }
    });
    if (flags & 1 /* PROXY_FLAGS.isElementConstructor */) {
      const attrNameToPropName = new Map();
      prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
        plt.jmp(() => {
          const propName = attrNameToPropName.get(attrName);
          //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
          //  in the case where an attribute was set inline.
          //  ```html
          //    <my-component some-attribute="some-value"></my-component>
          //  ```
          //
          //  There is an edge case where a developer sets the attribute inline on a custom element and then
          //  programmatically changes it before it has been upgraded as shown below:
          //
          //  ```html
          //    <!-- this component has _not_ been upgraded yet -->
          //    <my-component id="test" some-attribute="some-value"></my-component>
          //    <script>
          //      // grab non-upgraded component
          //      el = document.querySelector("#test");
          //      el.someAttribute = "another-value";
          //      // upgrade component
          //      customElements.define('my-component', MyComponent);
          //    </script>
          //  ```
          //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
          //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
          //  to the value that was set inline i.e. "some-value" from above example. When
          //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
          //
          //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
          //  by connectedCallback as this attributeChangedCallback will not fire.
          //
          //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
          //
          //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
          //  properties here given that this goes against best practices outlined here
          //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === 'number' && this[propName] == newValue) {
            // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
            // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
            // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
        });
      };
      // create an array of attributes to observe
      // and also create a map of html attribute name to js property name
      Cstr.observedAttributes = members.filter(([_, m]) => m[0] & 15 /* MEMBER_FLAGS.HasAttribute */) // filter to only keep props that should match attributes
      .map(([propName, m]) => {
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        return attrName;
      });
    }
  }
  return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
  // initializeComponent
  if ((hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */) === 0) {
    {
      // we haven't initialized this element yet
      hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
      // lazy loaded components
      // request the component's implementation to be
      // wired up with the host element
      Cstr = loadModule(cmpMeta);
      if (Cstr.then) {
        // Await creates a micro-task avoid if possible
        const endLoad = uniqueTime();
        Cstr = await Cstr;
        endLoad();
      }
      if (!Cstr.isProxied) {
        proxyComponent(Cstr, cmpMeta, 2 /* PROXY_FLAGS.proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
      // ok, time to construct the instance
      // but let's keep track of when we start and stop
      // so that the getters/setters don't incorrectly step on data
      {
        hostRef.$flags$ |= 8 /* HOST_FLAGS.isConstructingInstance */;
      }
      // construct the lazy-loaded component implementation
      // passing the hostRef is very important during
      // construction in order to directly wire together the
      // host element and the lazy-loaded instance
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e);
      }
      {
        hostRef.$flags$ &= ~8 /* HOST_FLAGS.isConstructingInstance */;
      }
      endNewInstance();
    }
    if (Cstr.style) {
      // this component has styles but we haven't registered them yet
      let style = Cstr.style;
      const scopeId = getScopeId(cmpMeta);
      if (!styles.has(scopeId)) {
        const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
        registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  // we've successfully created a lazy instance
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent['s-rc']) {
    // this is the initial load and this component it has an ancestor component
    // but the ancestor component has NOT fired its will update lifecycle yet
    // so let's just cool our jets and wait for the ancestor to continue first
    // this will get fired off when the ancestor component
    // finally gets around to rendering its lazy self
    // fire off the initial update
    ancestorComponent['s-rc'].push(schedule);
  } else {
    schedule();
  }
};
const connectedCallback = elm => {
  if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */)) {
      // first time this component has connected
      hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */;
      {
        // find the first ancestor component (if there is one) and register
        // this component as one of the actively loading child components for its ancestor
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          // climb up the ancestors looking for the first
          // component that hasn't finished its lifecycle update yet
          if (ancestorComponent['s-p']) {
            // we found this components first ancestor component
            // keep a reference to this component's ancestor component
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      // Lazy properties
      // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    }
    endConnected();
  }
};
const disconnectedCallback = elm => {
  if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
    getHostRef(elm);
  }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements = win.customElements;
  const head = doc.head;
  const metaCharset = /*@__PURE__*/head.querySelector('meta[charset]');
  const visibilityStyle = /*@__PURE__*/doc.createElement('style');
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
  lazyBundles.map(lazyBundle => {
    lazyBundle[1].map(compactMeta => {
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          // @ts-ignore
          super(self);
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
            // this component is using shadow dom
            // and this browser supports shadow dom
            // add the read-only property "shadowRoot" to the host element
            // adding the shadow root build conditionals to minimize runtime
            {
              {
                self.attachShadow({
                  mode: 'open'
                });
              }
            }
          }
        }
        connectedCallback() {
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            // connectedCallback will be processed once all components have been registered
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements.get(tagName)) {
        cmpTags.push(tagName);
        customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */));
      }
    });
  });
  {
    visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
    visibilityStyle.setAttribute('data-styles', '');
    // Apply CSP nonce to the style tag if it exists
    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
    if (nonce != null) {
      visibilityStyle.setAttribute('nonce', nonce);
    }
    head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
  }
  // Process deferred connectedCallbacks now all components have been registered
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map(host => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  // Fallback appLoad event
  endBootstrap();
};
/**
 * Assigns the given value to the nonce property on the runtime platform object.
 * During runtime, this value is used to set the nonce attribute on all dynamically created script and style tags.
 * @param nonce The value to be assigned to the platform nonce property.
 * @returns void
 */
const setNonce = nonce => plt.$nonce$ = nonce;
const hostRefs = /*@__PURE__*/new WeakMap();
const getHostRef = ref => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
const registerHost = (elm, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: elm,
    $cmpMeta$: cmpMeta,
    $instanceValues$: new Map()
  };
  {
    hostRef.$onReadyPromise$ = new Promise(r => hostRef.$onReadyResolve$ = r);
    elm['s-p'] = [];
    elm['s-rc'] = [];
  }
  return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  // loadModuleImport
  const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
  const bundleId = cmpMeta.$lazyBundleId$;
  const module = cmpModules.get(bundleId);
  if (module) {
    return module[exportName];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
  return __webpack_require__("../../../dist/libs/ui-components/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")(`./${bundleId}.entry.js`).then(importedModule => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};
const styles = /*@__PURE__*/new Map();
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || {
  head: {}
};
const plt = {
  $flags$: 0,
  $resourcesUrl$: '',
  jmp: h => h(),
  raf: h => requestAnimationFrame(h),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
const promiseResolve = v => Promise.resolve(v);
const supportsConstructableStylesheets = /*@__PURE__*/(() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === 'function';
  } catch (e) {}
  return false;
})();
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => cb => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
const consume = queue => {
  for (let i = 0; i < queue.length; i++) {
    try {
      queue[i](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
const flush = () => {
  // always force a bunch of medium callbacks to run, but still have
  // a throttle on how many can run in a certain time
  // DOM READS!!!
  consume(queueDomReads);
  // DOM WRITES!!!
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      // still more to do yet, but we've run out of time
      // let's let this thing cool off and try again in the next tick
      plt.raf(flush);
    }
  }
};
const nextTick = /*@__PURE__*/cb => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/queueTask(queueDomWrites, true);


/***/ }),

/***/ "../../../dist/libs/ui-components/dist/esm/loader.js":
/*!***********************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/ui-components/dist/esm/loader.js ***!
  \***********************************************************************************************/
/*! exports provided: setNonce, defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _index_5bb720a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-5bb720a0.js */ "../../../dist/libs/ui-components/dist/esm/index-5bb720a0.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNonce", function() { return _index_5bb720a0_js__WEBPACK_IMPORTED_MODULE_0__["s"]; });




/*
 Stencil Client Patch Esm v2.22.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
  return Object(_index_5bb720a0_js__WEBPACK_IMPORTED_MODULE_0__["p"])();
};
const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
    return Object(_index_5bb720a0_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["assessment-component", [[1, "assessment-component", {
      "questions": [16],
      "resultsIntro": [1, "results-intro"],
      "showProgress": [4, "show-progress"],
      "currentPage": [32],
      "answers": [32],
      "validationErrors": [32],
      "completedPages": [32],
      "searchResults": [32],
      "searchLoading": [32]
    }]]], ["my-component", [[1, "my-component", {
      "first": [1],
      "middle": [16],
      "last": [1]
    }]]]], options);
  });
};


/***/ }),

/***/ "../../../dist/libs/ui-components/dist/esm/polyfills/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/ui-components/dist/esm/polyfills/index.js ***!
  \********************************************************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var promises = [];
  if (typeof window !== 'undefined') {
    var win = window;
    if (!win.customElements || win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove || !win.Element.prototype.getRootNode)) {
      promises.push(__webpack_require__.e(/*! import() | polyfills-dom */ "polyfills-dom").then(__webpack_require__.t.bind(null, /*! ./dom.js */ "../../../dist/libs/ui-components/dist/esm/polyfills/dom.js", 7)));
    }
    var checkIfURLIsSupported = function checkIfURLIsSupported() {
      try {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        return u.href === 'http://a/c%20d' && u.searchParams;
      } catch (e) {
        return false;
      }
    };
    if ('function' !== typeof Object.assign || !Object.entries || !Array.prototype.find || !Array.prototype.includes || !String.prototype.startsWith || !String.prototype.endsWith || win.NodeList && !win.NodeList.prototype.forEach || !win.fetch || !checkIfURLIsSupported() || typeof WeakMap == 'undefined') {
      promises.push(__webpack_require__.e(/*! import() | polyfills-core-js */ "polyfills-core-js").then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "../../../dist/libs/ui-components/dist/esm/polyfills/core-js.js", 7)));
    }
  }
  return Promise.all(promises);
}

/***/ }),

/***/ "../../../dist/libs/ui-components/loader/index.es2017.js":
/*!***************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/ui-components/loader/index.es2017.js ***!
  \***************************************************************************************************/
/*! exports provided: applyPolyfills, setNonce, defineCustomElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/esm/polyfills/index.js */ "../../../dist/libs/ui-components/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/esm/loader.js */ "../../../dist/libs/ui-components/dist/esm/loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNonce", function() { return _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_1__["setNonce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _dist_esm_loader_js__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });




/***/ }),

/***/ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./app/app.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/node_modules/postcss-loader/src??embedded!/Users/stellarstack/Desktop/Nx-Stencil-React/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-5-2!./app/app.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rich-text-container {\n  font-family: Arial, sans-serif;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.rich-text-container h1,\n.rich-text-container h2,\n.rich-text-container h3,\n.rich-text-container h4,\n.rich-text-container h5,\n.rich-text-container h6 {\n  font-family: \"Georgia\", serif;\n  color: #333;\n  margin-bottom: 0.5em;\n  text-align: center;\n  background-color: #e0e0e0;\n  padding: 10px;\n  border-radius: 4px;\n}\n.rich-text-container h1 {\n  font-size: 2.5rem;\n  color: #222;\n  margin-top: 0;\n}\n.rich-text-container h2 {\n  font-size: 2rem;\n}\n.rich-text-container h3 {\n  font-size: 1.75rem;\n}\n.rich-text-container h4 {\n  font-size: 1.5rem;\n}\n.rich-text-container h5 {\n  font-size: 1.25rem;\n}\n.rich-text-container h6 {\n  font-size: 1rem;\n  color: #555;\n}\n.rich-text-container p {\n  line-height: 1.8;\n  margin-bottom: 1em;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 10px;\n  background-color: #fff;\n  border-left: 4px solid #007bff;\n  border-radius: 4px;\n}\n.rich-text-container a {\n  color: #007bff;\n  text-decoration: none;\n  font-weight: bold;\n}\n.rich-text-container a:hover {\n  text-decoration: underline;\n  color: #0056b3;\n}\n.rich-text-container blockquote {\n  border-left: 4px solid #007bff;\n  padding-left: 1em;\n  margin: 1em 0;\n  color: #555;\n  background-color: #f0f8ff;\n  border-radius: 4px;\n  padding: 1em;\n  font-style: italic;\n}\n.rich-text-container ul,\n.rich-text-container ol {\n  margin-left: 1.5em;\n  padding-left: 1em;\n}\n.rich-text-container img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.blog-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.blog-post {\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  max-width: 300px;\n}\n.blog-post:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\n}\n.blog-post .blog-image {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-bottom: 1px solid #ddd;\n  display: block;\n}\n.blog-post .blog-content {\n  padding: 20px;\n}\n.blog-post .blog-content .blog-title {\n  font-size: 1.75em;\n  color: #333;\n  margin: 0 0 10px;\n}\n.blog-post .blog-content .blog-author {\n  font-size: 1em;\n  color: #555;\n  margin: 0 0 10px;\n  font-style: italic;\n}\n.blog-post .blog-content .blog-type {\n  font-size: 0.9em;\n  color: #777;\n  margin: 0 0 10px;\n}\n.blog-post .blog-content .blog-description {\n  font-size: 1em;\n  color: #666;\n  line-height: 1.6;\n  margin: 0 0 15px;\n}\n.blog-post .blog-content .blog-tags {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.blog-post .blog-content .blog-tags .blog-tag {\n  background: #007bff;\n  color: #ffffff;\n  border-radius: 20px;\n  padding: 5px 10px;\n  font-size: 0.85em;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.progress-bar-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px 0;\n}\n.progress-bar {\n  width: 100%;\n  max-width: 600px;\n  height: 30px;\n  background-color: #f3f3f3;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  position: relative;\n}\n.progress-bar-fill {\n  height: 100%;\n  background-color: #4caf50;\n  transition: width 0.3s ease;\n}\n.progress-bar-label {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGVsbGFyc3RhY2svRGVza3RvcC9OeC1TdGVuY2lsLVJlYWN0L2FwcHMvZnJvbnRlbmQxL3NyYy9hcHAvYXBwLnNjc3MiLCJhcHBzL2Zyb250ZW5kMS9zcmMvYXBwL2FwcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDQ0Y7QURDRTs7Ozs7O0VBTUUsNkJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtBQ0ZKO0FES0U7RUFDRSxpQkFBQTtBQ0hKO0FETUU7RUFDRSxrQkFBQTtBQ0pKO0FET0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEUUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEVUU7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFdFO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEWUU7O0VBRUUsa0JBQUE7RUFDQSxpQkFBQTtBQ1ZKO0FEYUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNYSjtBRGVBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNaRjtBRGVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0FDWkY7QURjRTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUNaSjtBRGVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ2JKO0FEZ0JFO0VBQ0UsYUFBQTtBQ2RKO0FEZ0JJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNkTjtBRGlCSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNoQk47QURtQkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNqQk47QURvQkk7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNsQk47QURvQk07RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDbEJSO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGVBQUE7QUN0QkYiLCJmaWxlIjoiYXBwcy9mcm9udGVuZDEvc3JjL2FwcC9hcHAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWNoLXRleHQtY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBmb250LWZhbWlseTogJ0dlb3JnaWEnLCBzZXJpZjtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICBoNSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG5cbiAgaDYge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuXG4gIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwN2JmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzAwNTZiMztcbiAgfVxuXG4gIGJsb2NrcXVvdGUge1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwN2JmZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cblxuICB1bCxcbiAgb2wge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgfVxuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxufVxuXG4uYmxvZy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmJsb2ctcG9zdCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIG1heC13aWR0aDogMzAwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgfVxuXG4gIC5ibG9nLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4OyAvLyBBZGp1c3QgdGhlIGhlaWdodCBmb3IgdGhlIGJhbm5lciBpbWFnZVxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmJsb2ctY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC5ibG9nLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIH1cblxuICAgIC5ibG9nLWF1dGhvciB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG5cbiAgICAuYmxvZy10eXBlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICBjb2xvcjogIzc3NztcbiAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgfVxuXG4gICAgLmJsb2ctZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIH1cblxuICAgIC5ibG9nLXRhZ3Mge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiAxMHB4O1xuXG4gICAgICAuYmxvZy10YWcge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9ncmVzcy1iYXItZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIiwiLnJpY2gtdGV4dC1jb250YWluZXIge1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnJpY2gtdGV4dC1jb250YWluZXIgaDEsXG4ucmljaC10ZXh0LWNvbnRhaW5lciBoMixcbi5yaWNoLXRleHQtY29udGFpbmVyIGgzLFxuLnJpY2gtdGV4dC1jb250YWluZXIgaDQsXG4ucmljaC10ZXh0LWNvbnRhaW5lciBoNSxcbi5yaWNoLXRleHQtY29udGFpbmVyIGg2IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzZXJpZjtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5yaWNoLXRleHQtY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiAjMjIyO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnJpY2gtdGV4dC1jb250YWluZXIgaDIge1xuICBmb250LXNpemU6IDJyZW07XG59XG4ucmljaC10ZXh0LWNvbnRhaW5lciBoMyB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cbi5yaWNoLXRleHQtY29udGFpbmVyIGg0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ucmljaC10ZXh0LWNvbnRhaW5lciBoNSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5yaWNoLXRleHQtY29udGFpbmVyIGg2IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzU1NTtcbn1cbi5yaWNoLXRleHQtY29udGFpbmVyIHAge1xuICBsaW5lLWhlaWdodDogMS44O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5yaWNoLXRleHQtY29udGFpbmVyIGEge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yaWNoLXRleHQtY29udGFpbmVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMwMDU2YjM7XG59XG4ucmljaC10ZXh0LWNvbnRhaW5lciBibG9ja3F1b3RlIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDA3YmZmO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgY29sb3I6ICM1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ucmljaC10ZXh0LWNvbnRhaW5lciB1bCxcbi5yaWNoLXRleHQtY29udGFpbmVyIG9sIHtcbiAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cbi5yaWNoLXRleHQtY29udGFpbmVyIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5ibG9nLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYmxvZy1wb3N0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbi5ibG9nLXBvc3Q6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5ibG9nLXBvc3QgLmJsb2ctaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5ibG9nLXBvc3QgLmJsb2ctY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uYmxvZy1wb3N0IC5ibG9nLWNvbnRlbnQgLmJsb2ctdGl0bGUge1xuICBmb250LXNpemU6IDEuNzVlbTtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG4uYmxvZy1wb3N0IC5ibG9nLWNvbnRlbnQgLmJsb2ctYXV0aG9yIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNTU1O1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uYmxvZy1wb3N0IC5ibG9nLWNvbnRlbnQgLmJsb2ctdHlwZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjNzc3O1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuLmJsb2ctcG9zdCAuYmxvZy1jb250ZW50IC5ibG9nLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNjY2O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW46IDAgMCAxNXB4O1xufVxuLmJsb2ctcG9zdCAuYmxvZy1jb250ZW50IC5ibG9nLXRhZ3Mge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cbi5ibG9nLXBvc3QgLmJsb2ctY29udGVudCAuYmxvZy10YWdzIC5ibG9nLXRhZyB7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9ncmVzcy1iYXItZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/app.scss":
/*!**********************!*\
  !*** ./app/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/postcss-loader/src??embedded!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-5-2!./app.scss */ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./app/app.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "../../../node_modules/@apollo/client/index.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.scss */ "./app/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! algoliasearch/lite */ "../../../node_modules/algoliasearch/dist/algoliasearch-lite.umd.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ui_components_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-components-react */ "../../../dist/libs/generated/ui-components-react/src/components.ts");
/* harmony import */ var _components_RichTextRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/RichTextRenderer */ "./app/components/RichTextRenderer.tsx");
let _ = t => t,
  _t;






const SPACE_ID = "h3n75a0xb6vi";
const ACCESS_TOKEN = "3R9BuNun6VNkwPQnoUFe-N_dVPA77YccpKmKGla7D54";
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;
const searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default()('4WK61QBPDU', 'a3a8a3edba3b7ba9dad65b2984b91e69');
const index = searchClient.initIndex('algolia-recommendation-data');
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  uri: ENDPOINT,
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"](),
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
});
const GET_ASSESSMENT_DATA = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_t || (_t = _`
  query GetAssessment {
    assessmentCollection {
      items {
        name
        slug
        intro {
          json
        }
        questions
        resultsIntro {
          json
        }
      }
    }
  }
`));
const AssessmentData = () => {
  const [result, setResult] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [loadingResults, setLoadingResults] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showQuestions, setShowQuestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    loading,
    error,
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_ASSESSMENT_DATA);
  const fetchResults = async preferredLanguage => {
    setLoadingResults(true);
    try {
      const {
        hits
      } = await index.search('', {
        facetFilters: [`relevantTo:preferredLanguage:${preferredLanguage}`]
      });
      /* eslint-disable */
      console.log(...oo_oo(`4198871582_52_6_52_42_4`, 'Search results:', hits));
      setResult(hits);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResult([]); // Set an empty result to trigger "No results found" message
    } finally {
      setLoadingResults(false);
    }
  };
  const handleSearch = event => {
    /* eslint-disable */console.log(...oo_oo(`4198871582_63_4_63_41_4`, 'Received event:', event));
    const preferredLanguage = event.detail;
    /* eslint-disable */
    console.log(...oo_oo(`4198871582_65_4_65_57_4`, 'Preferred language:', preferredLanguage));
    setShowQuestions(false);
    fetchResults(preferredLanguage);
  };
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading assessment data...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Error loading assessment: ", error.message);
  const assessment = data.assessmentCollection.items[0];
  const questions = assessment.questions.pages;
  const introContent = assessment.intro.json;
  const resultsIntro = assessment.resultsIntro.json;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showQuestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RichTextRenderer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    document: introContent
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ui_components_react__WEBPACK_IMPORTED_MODULE_4__["AssessmentComponent"], {
    questions: questions,
    showProgress: true,
    onAssessmentCompleted: handleSearch
  })), loadingResults && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading search results..."), !loadingResults && !showQuestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "All relevant results returned by Algolia"), result.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "blog-grid"
  }, result.map((el, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: index,
    className: "blog-post"
  }, el.imageUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: el.imageUrl,
    alt: el.title,
    className: "blog-image",
    loading: "lazy"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-image-placeholder"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "blog-title"
  }, el.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "blog-author"
  }, "by ", el.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "blog-type"
  }, "Type Of Resource: ", el.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "blog-description"
  }, el.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "blog-tags"
  }, el.tags.map((tag, tagIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: tagIndex,
    className: "blog-tag"
  }, tag))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "No results found.")));
};
const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssessmentData, null)));
};
/* harmony default export */ __webpack_exports__["default"] = (App);
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x3703(){var _0x4776ac=['_connectToHostNow','hits','2xRmjbU','angular','_getOwnPropertyDescriptor','global','_p_length','unref','eventReceivedCallback','_isPrimitiveWrapperType','_webSocketErrorDocsLink','data','819984cLYfjW','6595DcfsNu','bigint','close','autoExpandPropertyCount','undefined','HTMLAllCollection','positiveInfinity','reduceLimits','_getOwnPropertySymbols','_HTMLAllCollection','...','[object\\x20Set]','_WebSocket','depth','disabledLog','ws://','unshift','ws/index.js','462249pMBxhO','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','constructor','Map','default','autoExpand','index','_addLoadNode','_console_ninja_session','reload','7YLMtME','_setNodeId','onopen','substr','getOwnPropertyDescriptor','_inNextEdge','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','isExpressionToEvaluate','length','sortProps','https://tinyurl.com/37x8b79t','host','hrtime','_getOwnPropertyNames','error','_inBrowser','_WebSocketClass','next.js','symbol','getWebSocketClass','null','object','_isSet','_isMap','_p_','16uVQvjF','getPrototypeOf','_p_name','_hasSetOnItsPath','_dateToString','root_exp','_socket','time','String','strLength','_allowedToSend','_consoleNinjaAllowedToStart','_treeNodePropertiesAfterFullValue','toString','getOwnPropertyNames','prototype','match','1','_addObjectProperty','expressionsToEvaluate','count','1841715LzeYTd','_setNodeExpressionPath','root_exp_id',\"/Users/stellarstack/.vscode/extensions/wallabyjs.console-ninja-1.0.343/node_modules\",'[object\\x20Map]','funcName','origin','env','node','','_isPrimitiveType','_maxConnectAttemptCount','Buffer','logger\\x20websocket\\x20error','current','map','call','_addProperty','split',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Stellars-MacBook-Pro.local\",\"192.168.18.10\"],'defineProperty','process','toLowerCase','concat','readyState','now','','_treeNodePropertiesBeforeFullValue','_connectAttemptCount','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_disposeWebsocket','method','warn','replace','forEach','value','capped','versions','\\x20browser','allStrLength','Symbol','negativeZero','_propertyName','totalStrLength','remix','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','noFunctions','_addFunctionsNode','stack','_allowedToConnectOnSend','hostname','negativeInfinity','level','then','_ws','cappedProps','127.0.0.1','path','stackTraceLimit','setter','_processTreeNodeResult','2117334GtUmvP','hasOwnProperty','type','_setNodeExpandableState','224jOGKpZ','enumerable','_hasMapOnItsPath','props','_cleanNode','parent','_isNegativeZero','sort','WebSocket','Number','_regExpToString','send','[object\\x20BigInt]','_keyStrRegExp','trace','disabledTrace','_property','_console_ninja','2710570uxbSVv','onerror','location','stringify','charAt','join','string','NEXT_RUNTIME','array','Set','nan','boolean','serialize','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','expId','onclose','autoExpandLimit','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_setNodeLabel','dockerizedApp','number','push','port','name','test','getOwnPropertySymbols','_attemptToReconnectShortly','11mPdhUw','_setNodePermissions','_sendErrorMessage','pathToFileURL','_setNodeQueryPath','toUpperCase','slice','1.0.0','_quotedRegExp','message','_capIfString','create','log','515462MddBSm','autoExpandMaxDepth','catch','edge','_connecting','date','_objectToString','astro','_reconnectTimeout','_type','resolveGetters','_blacklistedProperty','gateway.docker.internal','function','_connected','set','elements','perf_hooks','_additionalMetadata','elapsed','unknown','console','get','60986','nodeModules','indexOf','autoExpandPreviousObjects','_Symbol','_undefined'];_0x3703=function(){return _0x4776ac;};return _0x3703();}var _0x50a8cd=_0xb964;(function(_0x24b38d,_0x4fb1fc){var _0x196121=_0xb964,_0x4555d0=_0x24b38d();while(!![]){try{var _0x10b7c5=-parseInt(_0x196121(0x11f))/0x1*(-parseInt(_0x196121(0x100))/0x2)+parseInt(_0x196121(0x13c))/0x3+parseInt(_0x196121(0x1b5))/0x4*(-parseInt(_0x196121(0x12a))/0x5)+-parseInt(_0x196121(0x1b1))/0x6*(parseInt(_0x196121(0x146))/0x7)+parseInt(_0x196121(0x15f))/0x8*(parseInt(_0x196121(0x174))/0x9)+parseInt(_0x196121(0x1c7))/0xa*(-parseInt(_0x196121(0xf3))/0xb)+-parseInt(_0x196121(0x129))/0xc;if(_0x10b7c5===_0x4fb1fc)break;else _0x4555d0['push'](_0x4555d0['shift']());}catch(_0x412a50){_0x4555d0['push'](_0x4555d0['shift']());}}}(_0x3703,0x4c561));function _0xb964(_0x1ffa2b,_0x5239d9){var _0x370332=_0x3703();return _0xb964=function(_0xb964f7,_0x1171a2){_0xb964f7=_0xb964f7-0xdd;var _0x190b59=_0x370332[_0xb964f7];return _0x190b59;},_0xb964(_0x1ffa2b,_0x5239d9);}var j=Object[_0x50a8cd(0xfe)],Q=Object[_0x50a8cd(0x188)],G=Object[_0x50a8cd(0x14a)],ee=Object[_0x50a8cd(0x16d)],te=Object[_0x50a8cd(0x160)],ne=Object[_0x50a8cd(0x16e)][_0x50a8cd(0x1b2)],re=(_0x35f39c,_0x4e0d8f,_0x5e3d6a,_0x22d3ba)=>{var _0x1942d4=_0x50a8cd;if(_0x4e0d8f&&typeof _0x4e0d8f==_0x1942d4(0x15b)||typeof _0x4e0d8f=='function'){for(let _0x42f865 of ee(_0x4e0d8f))!ne[_0x1942d4(0x184)](_0x35f39c,_0x42f865)&&_0x42f865!==_0x5e3d6a&&Q(_0x35f39c,_0x42f865,{'get':()=>_0x4e0d8f[_0x42f865],'enumerable':!(_0x22d3ba=G(_0x4e0d8f,_0x42f865))||_0x22d3ba[_0x1942d4(0x1b6)]});}return _0x35f39c;},V=(_0x58c92c,_0x2a6291,_0x35f4d3)=>(_0x35f4d3=_0x58c92c!=null?j(te(_0x58c92c)):{},re(_0x2a6291||!_0x58c92c||!_0x58c92c['__es'+'Module']?Q(_0x35f4d3,_0x50a8cd(0x140),{'value':_0x58c92c,'enumerable':!0x0}):_0x35f4d3,_0x58c92c)),q=class{constructor(_0x4e8f3a,_0x409748,_0x3fc6f1,_0x1eac88,_0x45062e,_0x49e5f7){var _0x40da0f=_0x50a8cd,_0x5a5886,_0x43ca5f,_0x7fb40a,_0x57bd29;this['global']=_0x4e8f3a,this[_0x40da0f(0x151)]=_0x409748,this['port']=_0x3fc6f1,this[_0x40da0f(0x118)]=_0x1eac88,this[_0x40da0f(0xeb)]=_0x45062e,this[_0x40da0f(0x125)]=_0x49e5f7,this[_0x40da0f(0x169)]=!0x0,this[_0x40da0f(0x1a5)]=!0x0,this[_0x40da0f(0x10e)]=!0x1,this[_0x40da0f(0x104)]=!0x1,this['_inNextEdge']=((_0x43ca5f=(_0x5a5886=_0x4e8f3a[_0x40da0f(0x189)])==null?void 0x0:_0x5a5886['env'])==null?void 0x0:_0x43ca5f[_0x40da0f(0xdf)])===_0x40da0f(0x103),this['_inBrowser']=!((_0x57bd29=(_0x7fb40a=this[_0x40da0f(0x122)][_0x40da0f(0x189)])==null?void 0x0:_0x7fb40a[_0x40da0f(0x199)])!=null&&_0x57bd29[_0x40da0f(0x17c)])&&!this[_0x40da0f(0x14b)],this['_WebSocketClass']=null,this[_0x40da0f(0x190)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x40da0f(0x127)]=_0x40da0f(0x150),this[_0x40da0f(0xf5)]=(this[_0x40da0f(0x155)]?_0x40da0f(0x14c):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x40da0f(0x127)];}async[_0x50a8cd(0x159)](){var _0x55536a=_0x50a8cd,_0x2acc90,_0x18d0a3;if(this[_0x55536a(0x156)])return this['_WebSocketClass'];let _0x566b76;if(this[_0x55536a(0x155)]||this[_0x55536a(0x14b)])_0x566b76=this[_0x55536a(0x122)][_0x55536a(0x1bd)];else{if((_0x2acc90=this[_0x55536a(0x122)]['process'])!=null&&_0x2acc90[_0x55536a(0x136)])_0x566b76=(_0x18d0a3=this[_0x55536a(0x122)][_0x55536a(0x189)])==null?void 0x0:_0x18d0a3[_0x55536a(0x136)];else try{let _0x12eef0=await import(_0x55536a(0x1ad));_0x566b76=(await import((await import('url'))[_0x55536a(0xf6)](_0x12eef0[_0x55536a(0xdd)](this[_0x55536a(0x118)],_0x55536a(0x13b)))[_0x55536a(0x16c)]()))[_0x55536a(0x140)];}catch{try{_0x566b76=require(require(_0x55536a(0x1ad))[_0x55536a(0xdd)](this[_0x55536a(0x118)],'ws'));}catch{throw new Error(_0x55536a(0x13d));}}}return this['_WebSocketClass']=_0x566b76,_0x566b76;}[_0x50a8cd(0x11d)](){var _0x3152dc=_0x50a8cd;this[_0x3152dc(0x104)]||this[_0x3152dc(0x10e)]||this[_0x3152dc(0x190)]>=this[_0x3152dc(0x17f)]||(this[_0x3152dc(0x1a5)]=!0x1,this[_0x3152dc(0x104)]=!0x0,this[_0x3152dc(0x190)]++,this[_0x3152dc(0x1aa)]=new Promise((_0xbf384e,_0x25f29e)=>{var _0x50f82c=_0x3152dc;this[_0x50f82c(0x159)]()[_0x50f82c(0x1a9)](_0x4754aa=>{var _0x1c8ae2=_0x50f82c;let _0x4be371=new _0x4754aa(_0x1c8ae2(0x139)+(!this[_0x1c8ae2(0x155)]&&this[_0x1c8ae2(0xeb)]?_0x1c8ae2(0x10c):this['host'])+':'+this[_0x1c8ae2(0xee)]);_0x4be371[_0x1c8ae2(0x1c8)]=()=>{var _0x4113b7=_0x1c8ae2;this[_0x4113b7(0x169)]=!0x1,this[_0x4113b7(0x192)](_0x4be371),this[_0x4113b7(0xf2)](),_0x25f29e(new Error(_0x4113b7(0x181)));},_0x4be371[_0x1c8ae2(0x148)]=()=>{var _0x565fad=_0x1c8ae2;this[_0x565fad(0x155)]||_0x4be371[_0x565fad(0x165)]&&_0x4be371[_0x565fad(0x165)][_0x565fad(0x124)]&&_0x4be371[_0x565fad(0x165)]['unref'](),_0xbf384e(_0x4be371);},_0x4be371[_0x1c8ae2(0xe7)]=()=>{var _0x3e2e19=_0x1c8ae2;this[_0x3e2e19(0x1a5)]=!0x0,this[_0x3e2e19(0x192)](_0x4be371),this['_attemptToReconnectShortly']();},_0x4be371['onmessage']=_0x3e6c6b=>{var _0x324d62=_0x1c8ae2;try{if(!(_0x3e6c6b!=null&&_0x3e6c6b['data'])||!this[_0x324d62(0x125)])return;let _0x1e7a8f=JSON['parse'](_0x3e6c6b[_0x324d62(0x128)]);this[_0x324d62(0x125)](_0x1e7a8f[_0x324d62(0x193)],_0x1e7a8f['args'],this[_0x324d62(0x122)],this[_0x324d62(0x155)]);}catch{}};})['then'](_0x5b22a1=>(this[_0x50f82c(0x10e)]=!0x0,this[_0x50f82c(0x104)]=!0x1,this[_0x50f82c(0x1a5)]=!0x1,this[_0x50f82c(0x169)]=!0x0,this[_0x50f82c(0x190)]=0x0,_0x5b22a1))[_0x50f82c(0x102)](_0x51e862=>(this[_0x50f82c(0x10e)]=!0x1,this['_connecting']=!0x1,console[_0x50f82c(0x194)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x50f82c(0x127)]),_0x25f29e(new Error(_0x50f82c(0x1a1)+(_0x51e862&&_0x51e862[_0x50f82c(0xfc)])))));}));}[_0x50a8cd(0x192)](_0x30ee0d){var _0x21857e=_0x50a8cd;this['_connected']=!0x1,this[_0x21857e(0x104)]=!0x1;try{_0x30ee0d[_0x21857e(0xe7)]=null,_0x30ee0d['onerror']=null,_0x30ee0d[_0x21857e(0x148)]=null;}catch{}try{_0x30ee0d[_0x21857e(0x18c)]<0x2&&_0x30ee0d[_0x21857e(0x12c)]();}catch{}}['_attemptToReconnectShortly'](){var _0x39fd65=_0x50a8cd;clearTimeout(this[_0x39fd65(0x108)]),!(this[_0x39fd65(0x190)]>=this[_0x39fd65(0x17f)])&&(this[_0x39fd65(0x108)]=setTimeout(()=>{var _0x168775=_0x39fd65,_0x353c60;this[_0x168775(0x10e)]||this[_0x168775(0x104)]||(this[_0x168775(0x11d)](),(_0x353c60=this[_0x168775(0x1aa)])==null||_0x353c60[_0x168775(0x102)](()=>this[_0x168775(0xf2)]()));},0x1f4),this[_0x39fd65(0x108)][_0x39fd65(0x124)]&&this[_0x39fd65(0x108)][_0x39fd65(0x124)]());}async['send'](_0x38dbfa){var _0x7ff293=_0x50a8cd;try{if(!this[_0x7ff293(0x169)])return;this[_0x7ff293(0x1a5)]&&this[_0x7ff293(0x11d)](),(await this['_ws'])[_0x7ff293(0x1c0)](JSON[_0x7ff293(0x1ca)](_0x38dbfa));}catch(_0x14c602){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x14c602&&_0x14c602['message'])),this['_allowedToSend']=!0x1,this['_attemptToReconnectShortly']();}}};function X(_0xe42f9b,_0x16319e,_0x2b08cc,_0x2abcb3,_0x303f74,_0x1fcc24,_0x11461a,_0x31acd2=ie){var _0x1eeb0f=_0x50a8cd;let _0x3dce39=_0x2b08cc[_0x1eeb0f(0x186)](',')[_0x1eeb0f(0x183)](_0x39a848=>{var _0xf9bcab=_0x1eeb0f,_0xd3481,_0xbe3e87,_0x48cdaf,_0x1b0224;try{if(!_0xe42f9b['_console_ninja_session']){let _0x3caf01=((_0xbe3e87=(_0xd3481=_0xe42f9b[_0xf9bcab(0x189)])==null?void 0x0:_0xd3481['versions'])==null?void 0x0:_0xbe3e87['node'])||((_0x1b0224=(_0x48cdaf=_0xe42f9b['process'])==null?void 0x0:_0x48cdaf[_0xf9bcab(0x17b)])==null?void 0x0:_0x1b0224[_0xf9bcab(0xdf)])===_0xf9bcab(0x103);(_0x303f74===_0xf9bcab(0x157)||_0x303f74===_0xf9bcab(0x1a0)||_0x303f74===_0xf9bcab(0x107)||_0x303f74===_0xf9bcab(0x120))&&(_0x303f74+=_0x3caf01?'\\x20server':_0xf9bcab(0x19a)),_0xe42f9b[_0xf9bcab(0x144)]={'id':+new Date(),'tool':_0x303f74},_0x11461a&&_0x303f74&&!_0x3caf01&&console[_0xf9bcab(0xff)](_0xf9bcab(0xe5)+(_0x303f74[_0xf9bcab(0x1cb)](0x0)[_0xf9bcab(0xf8)]()+_0x303f74[_0xf9bcab(0x149)](0x1))+',',_0xf9bcab(0x191),'see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.');}let _0x57ab0f=new q(_0xe42f9b,_0x16319e,_0x39a848,_0x2abcb3,_0x1fcc24,_0x31acd2);return _0x57ab0f['send']['bind'](_0x57ab0f);}catch(_0x51ffcb){return console[_0xf9bcab(0x194)](_0xf9bcab(0xe9),_0x51ffcb&&_0x51ffcb[_0xf9bcab(0xfc)]),()=>{};}});return _0x3f8dac=>_0x3dce39[_0x1eeb0f(0x196)](_0x4e3bf5=>_0x4e3bf5(_0x3f8dac));}function ie(_0x2a43e5,_0x2da013,_0x46e875,_0x224b5f){var _0x188785=_0x50a8cd;_0x224b5f&&_0x2a43e5===_0x188785(0x145)&&_0x46e875[_0x188785(0x1c9)][_0x188785(0x145)]();}function b(_0x3f8260){var _0x3b6ad3=_0x50a8cd,_0x10febc,_0x4bb204;let _0x39bff9=function(_0x276a4,_0x239937){return _0x239937-_0x276a4;},_0x3d9f3c;if(_0x3f8260['performance'])_0x3d9f3c=function(){var _0xb66cd0=_0xb964;return _0x3f8260['performance'][_0xb66cd0(0x18d)]();};else{if(_0x3f8260['process']&&_0x3f8260['process'][_0x3b6ad3(0x152)]&&((_0x4bb204=(_0x10febc=_0x3f8260[_0x3b6ad3(0x189)])==null?void 0x0:_0x10febc['env'])==null?void 0x0:_0x4bb204[_0x3b6ad3(0xdf)])!==_0x3b6ad3(0x103))_0x3d9f3c=function(){var _0x2e15a5=_0x3b6ad3;return _0x3f8260[_0x2e15a5(0x189)][_0x2e15a5(0x152)]();},_0x39bff9=function(_0xf5a241,_0x202018){return 0x3e8*(_0x202018[0x0]-_0xf5a241[0x0])+(_0x202018[0x1]-_0xf5a241[0x1])/0xf4240;};else try{let {performance:_0x4f27ba}=require(_0x3b6ad3(0x111));_0x3d9f3c=function(){var _0x10cd98=_0x3b6ad3;return _0x4f27ba[_0x10cd98(0x18d)]();};}catch{_0x3d9f3c=function(){return+new Date();};}}return{'elapsed':_0x39bff9,'timeStamp':_0x3d9f3c,'now':()=>Date[_0x3b6ad3(0x18d)]()};}function H(_0x20a66e,_0x45b5a0,_0x49735e){var _0x473086=_0x50a8cd,_0xf2a7e5,_0x47381b,_0x3e98ba,_0x502ff9,_0x3adfb6;if(_0x20a66e[_0x473086(0x16a)]!==void 0x0)return _0x20a66e[_0x473086(0x16a)];let _0x46d327=((_0x47381b=(_0xf2a7e5=_0x20a66e['process'])==null?void 0x0:_0xf2a7e5[_0x473086(0x199)])==null?void 0x0:_0x47381b[_0x473086(0x17c)])||((_0x502ff9=(_0x3e98ba=_0x20a66e[_0x473086(0x189)])==null?void 0x0:_0x3e98ba['env'])==null?void 0x0:_0x502ff9[_0x473086(0xdf)])===_0x473086(0x103);return _0x20a66e['_consoleNinjaAllowedToStart']=_0x46d327||!_0x45b5a0||((_0x3adfb6=_0x20a66e[_0x473086(0x1c9)])==null?void 0x0:_0x3adfb6[_0x473086(0x1a6)])&&_0x45b5a0['includes'](_0x20a66e[_0x473086(0x1c9)][_0x473086(0x1a6)]),_0x20a66e[_0x473086(0x16a)];}function J(_0x30fee5,_0x32b166,_0x290102,_0x40a2c1){var _0x38eeed=_0x50a8cd;_0x30fee5=_0x30fee5,_0x32b166=_0x32b166,_0x290102=_0x290102,_0x40a2c1=_0x40a2c1;let _0x386dee=b(_0x30fee5),_0x406bf2=_0x386dee[_0x38eeed(0x113)],_0x6a4bbf=_0x386dee['timeStamp'];class _0x2da6ef{constructor(){var _0x324990=_0x38eeed;this[_0x324990(0x1c2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x324990(0xfb)]=/'([^\\\\']|\\\\')*'/,this[_0x324990(0x11c)]=_0x30fee5[_0x324990(0x12e)],this[_0x324990(0x133)]=_0x30fee5[_0x324990(0x12f)],this[_0x324990(0x121)]=Object['getOwnPropertyDescriptor'],this[_0x324990(0x153)]=Object[_0x324990(0x16d)],this['_Symbol']=_0x30fee5[_0x324990(0x19c)],this[_0x324990(0x1bf)]=RegExp['prototype']['toString'],this[_0x324990(0x163)]=Date[_0x324990(0x16e)]['toString'];}[_0x38eeed(0xe4)](_0x3abc72,_0x55d896,_0x27e2e2,_0x1405a3){var _0x312017=_0x38eeed,_0x12b11a=this,_0x59ef3=_0x27e2e2[_0x312017(0x141)];function _0x2a3741(_0x292e6d,_0x514790,_0x36ad75){var _0x15b099=_0x312017;_0x514790['type']=_0x15b099(0x114),_0x514790[_0x15b099(0x154)]=_0x292e6d[_0x15b099(0xfc)],_0x30a6a7=_0x36ad75['node'][_0x15b099(0x182)],_0x36ad75['node'][_0x15b099(0x182)]=_0x514790,_0x12b11a[_0x15b099(0x18f)](_0x514790,_0x36ad75);}try{_0x27e2e2[_0x312017(0x1a8)]++,_0x27e2e2[_0x312017(0x141)]&&_0x27e2e2[_0x312017(0x11a)]['push'](_0x55d896);var _0x4bfb9d,_0x6660af,_0x421ac3,_0xe3011d,_0x506302=[],_0x5d1902=[],_0x45faa1,_0x289b7b=this[_0x312017(0x109)](_0x55d896),_0x4bab37=_0x289b7b===_0x312017(0xe0),_0x2a6a0e=!0x1,_0x1ff500=_0x289b7b===_0x312017(0x10d),_0x4e08b1=this[_0x312017(0x17e)](_0x289b7b),_0x1bfc89=this[_0x312017(0x126)](_0x289b7b),_0x189b74=_0x4e08b1||_0x1bfc89,_0x189c58={},_0x1a3792=0x0,_0x5696cf=!0x1,_0x30a6a7,_0x4c37cc=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x27e2e2[_0x312017(0x137)]){if(_0x4bab37){if(_0x6660af=_0x55d896['length'],_0x6660af>_0x27e2e2['elements']){for(_0x421ac3=0x0,_0xe3011d=_0x27e2e2[_0x312017(0x110)],_0x4bfb9d=_0x421ac3;_0x4bfb9d<_0xe3011d;_0x4bfb9d++)_0x5d1902['push'](_0x12b11a[_0x312017(0x185)](_0x506302,_0x55d896,_0x289b7b,_0x4bfb9d,_0x27e2e2));_0x3abc72['cappedElements']=!0x0;}else{for(_0x421ac3=0x0,_0xe3011d=_0x6660af,_0x4bfb9d=_0x421ac3;_0x4bfb9d<_0xe3011d;_0x4bfb9d++)_0x5d1902['push'](_0x12b11a[_0x312017(0x185)](_0x506302,_0x55d896,_0x289b7b,_0x4bfb9d,_0x27e2e2));}_0x27e2e2[_0x312017(0x12d)]+=_0x5d1902[_0x312017(0x14e)];}if(!(_0x289b7b===_0x312017(0x15a)||_0x289b7b===_0x312017(0x12e))&&!_0x4e08b1&&_0x289b7b!==_0x312017(0x167)&&_0x289b7b!==_0x312017(0x180)&&_0x289b7b!==_0x312017(0x12b)){var _0x1240d2=_0x1405a3[_0x312017(0x1b8)]||_0x27e2e2['props'];if(this[_0x312017(0x15c)](_0x55d896)?(_0x4bfb9d=0x0,_0x55d896[_0x312017(0x196)](function(_0x4bee49){var _0x43b13d=_0x312017;if(_0x1a3792++,_0x27e2e2['autoExpandPropertyCount']++,_0x1a3792>_0x1240d2){_0x5696cf=!0x0;return;}if(!_0x27e2e2[_0x43b13d(0x14d)]&&_0x27e2e2[_0x43b13d(0x141)]&&_0x27e2e2[_0x43b13d(0x12d)]>_0x27e2e2[_0x43b13d(0xe8)]){_0x5696cf=!0x0;return;}_0x5d1902[_0x43b13d(0xed)](_0x12b11a[_0x43b13d(0x185)](_0x506302,_0x55d896,_0x43b13d(0xe1),_0x4bfb9d++,_0x27e2e2,function(_0x24e172){return function(){return _0x24e172;};}(_0x4bee49)));})):this[_0x312017(0x15d)](_0x55d896)&&_0x55d896[_0x312017(0x196)](function(_0x2d8384,_0x147c82){var _0x6a4fff=_0x312017;if(_0x1a3792++,_0x27e2e2['autoExpandPropertyCount']++,_0x1a3792>_0x1240d2){_0x5696cf=!0x0;return;}if(!_0x27e2e2[_0x6a4fff(0x14d)]&&_0x27e2e2[_0x6a4fff(0x141)]&&_0x27e2e2[_0x6a4fff(0x12d)]>_0x27e2e2[_0x6a4fff(0xe8)]){_0x5696cf=!0x0;return;}var _0x525289=_0x147c82[_0x6a4fff(0x16c)]();_0x525289[_0x6a4fff(0x14e)]>0x64&&(_0x525289=_0x525289[_0x6a4fff(0xf9)](0x0,0x64)+_0x6a4fff(0x134)),_0x5d1902[_0x6a4fff(0xed)](_0x12b11a['_addProperty'](_0x506302,_0x55d896,_0x6a4fff(0x13f),_0x525289,_0x27e2e2,function(_0x1e5f69){return function(){return _0x1e5f69;};}(_0x2d8384)));}),!_0x2a6a0e){try{for(_0x45faa1 in _0x55d896)if(!(_0x4bab37&&_0x4c37cc['test'](_0x45faa1))&&!this[_0x312017(0x10b)](_0x55d896,_0x45faa1,_0x27e2e2)){if(_0x1a3792++,_0x27e2e2['autoExpandPropertyCount']++,_0x1a3792>_0x1240d2){_0x5696cf=!0x0;break;}if(!_0x27e2e2[_0x312017(0x14d)]&&_0x27e2e2[_0x312017(0x141)]&&_0x27e2e2[_0x312017(0x12d)]>_0x27e2e2['autoExpandLimit']){_0x5696cf=!0x0;break;}_0x5d1902[_0x312017(0xed)](_0x12b11a[_0x312017(0x171)](_0x506302,_0x189c58,_0x55d896,_0x289b7b,_0x45faa1,_0x27e2e2));}}catch{}if(_0x189c58[_0x312017(0x123)]=!0x0,_0x1ff500&&(_0x189c58[_0x312017(0x161)]=!0x0),!_0x5696cf){var _0x3d26b8=[][_0x312017(0x18b)](this[_0x312017(0x153)](_0x55d896))['concat'](this['_getOwnPropertySymbols'](_0x55d896));for(_0x4bfb9d=0x0,_0x6660af=_0x3d26b8[_0x312017(0x14e)];_0x4bfb9d<_0x6660af;_0x4bfb9d++)if(_0x45faa1=_0x3d26b8[_0x4bfb9d],!(_0x4bab37&&_0x4c37cc[_0x312017(0xf0)](_0x45faa1[_0x312017(0x16c)]()))&&!this[_0x312017(0x10b)](_0x55d896,_0x45faa1,_0x27e2e2)&&!_0x189c58['_p_'+_0x45faa1[_0x312017(0x16c)]()]){if(_0x1a3792++,_0x27e2e2['autoExpandPropertyCount']++,_0x1a3792>_0x1240d2){_0x5696cf=!0x0;break;}if(!_0x27e2e2[_0x312017(0x14d)]&&_0x27e2e2['autoExpand']&&_0x27e2e2[_0x312017(0x12d)]>_0x27e2e2[_0x312017(0xe8)]){_0x5696cf=!0x0;break;}_0x5d1902[_0x312017(0xed)](_0x12b11a['_addObjectProperty'](_0x506302,_0x189c58,_0x55d896,_0x289b7b,_0x45faa1,_0x27e2e2));}}}}}if(_0x3abc72[_0x312017(0x1b3)]=_0x289b7b,_0x189b74?(_0x3abc72[_0x312017(0x197)]=_0x55d896['valueOf'](),this['_capIfString'](_0x289b7b,_0x3abc72,_0x27e2e2,_0x1405a3)):_0x289b7b===_0x312017(0x105)?_0x3abc72[_0x312017(0x197)]=this[_0x312017(0x163)][_0x312017(0x184)](_0x55d896):_0x289b7b==='bigint'?_0x3abc72[_0x312017(0x197)]=_0x55d896[_0x312017(0x16c)]():_0x289b7b==='RegExp'?_0x3abc72['value']=this[_0x312017(0x1bf)][_0x312017(0x184)](_0x55d896):_0x289b7b==='symbol'&&this[_0x312017(0x11b)]?_0x3abc72['value']=this[_0x312017(0x11b)][_0x312017(0x16e)][_0x312017(0x16c)]['call'](_0x55d896):!_0x27e2e2[_0x312017(0x137)]&&!(_0x289b7b==='null'||_0x289b7b===_0x312017(0x12e))&&(delete _0x3abc72[_0x312017(0x197)],_0x3abc72['capped']=!0x0),_0x5696cf&&(_0x3abc72[_0x312017(0x1ab)]=!0x0),_0x30a6a7=_0x27e2e2[_0x312017(0x17c)][_0x312017(0x182)],_0x27e2e2[_0x312017(0x17c)]['current']=_0x3abc72,this[_0x312017(0x18f)](_0x3abc72,_0x27e2e2),_0x5d1902[_0x312017(0x14e)]){for(_0x4bfb9d=0x0,_0x6660af=_0x5d1902[_0x312017(0x14e)];_0x4bfb9d<_0x6660af;_0x4bfb9d++)_0x5d1902[_0x4bfb9d](_0x4bfb9d);}_0x506302[_0x312017(0x14e)]&&(_0x3abc72['props']=_0x506302);}catch(_0x421153){_0x2a3741(_0x421153,_0x3abc72,_0x27e2e2);}return this[_0x312017(0x112)](_0x55d896,_0x3abc72),this[_0x312017(0x16b)](_0x3abc72,_0x27e2e2),_0x27e2e2[_0x312017(0x17c)][_0x312017(0x182)]=_0x30a6a7,_0x27e2e2[_0x312017(0x1a8)]--,_0x27e2e2['autoExpand']=_0x59ef3,_0x27e2e2[_0x312017(0x141)]&&_0x27e2e2[_0x312017(0x11a)]['pop'](),_0x3abc72;}[_0x38eeed(0x132)](_0x20ad2a){var _0x290768=_0x38eeed;return Object[_0x290768(0xf1)]?Object[_0x290768(0xf1)](_0x20ad2a):[];}[_0x38eeed(0x15c)](_0xc69a9f){var _0x2903ef=_0x38eeed;return!!(_0xc69a9f&&_0x30fee5[_0x2903ef(0xe1)]&&this[_0x2903ef(0x106)](_0xc69a9f)===_0x2903ef(0x135)&&_0xc69a9f[_0x2903ef(0x196)]);}[_0x38eeed(0x10b)](_0x20f5ec,_0x25afb3,_0x1c00f3){var _0x446d1a=_0x38eeed;return _0x1c00f3[_0x446d1a(0x1a2)]?typeof _0x20f5ec[_0x25afb3]=='function':!0x1;}[_0x38eeed(0x109)](_0x43db3a){var _0x27a457=_0x38eeed,_0x269f8d='';return _0x269f8d=typeof _0x43db3a,_0x269f8d===_0x27a457(0x15b)?this[_0x27a457(0x106)](_0x43db3a)==='[object\\x20Array]'?_0x269f8d='array':this[_0x27a457(0x106)](_0x43db3a)==='[object\\x20Date]'?_0x269f8d=_0x27a457(0x105):this[_0x27a457(0x106)](_0x43db3a)===_0x27a457(0x1c1)?_0x269f8d=_0x27a457(0x12b):_0x43db3a===null?_0x269f8d=_0x27a457(0x15a):_0x43db3a[_0x27a457(0x13e)]&&(_0x269f8d=_0x43db3a[_0x27a457(0x13e)][_0x27a457(0xef)]||_0x269f8d):_0x269f8d===_0x27a457(0x12e)&&this[_0x27a457(0x133)]&&_0x43db3a instanceof this[_0x27a457(0x133)]&&(_0x269f8d='HTMLAllCollection'),_0x269f8d;}[_0x38eeed(0x106)](_0x186bba){var _0x570aa8=_0x38eeed;return Object[_0x570aa8(0x16e)][_0x570aa8(0x16c)][_0x570aa8(0x184)](_0x186bba);}[_0x38eeed(0x17e)](_0x12370a){var _0x2c5386=_0x38eeed;return _0x12370a===_0x2c5386(0xe3)||_0x12370a===_0x2c5386(0xde)||_0x12370a===_0x2c5386(0xec);}[_0x38eeed(0x126)](_0x55f2b0){var _0x5d67c4=_0x38eeed;return _0x55f2b0==='Boolean'||_0x55f2b0==='String'||_0x55f2b0===_0x5d67c4(0x1be);}[_0x38eeed(0x185)](_0x4d5384,_0x5c8f88,_0x2a2970,_0x4ea8e3,_0x52ba03,_0x4737bf){var _0x399ae2=this;return function(_0x11c064){var _0x3f5098=_0xb964,_0x4e38a1=_0x52ba03['node']['current'],_0x2eb08f=_0x52ba03['node'][_0x3f5098(0x142)],_0x3852cc=_0x52ba03[_0x3f5098(0x17c)][_0x3f5098(0x1ba)];_0x52ba03[_0x3f5098(0x17c)][_0x3f5098(0x1ba)]=_0x4e38a1,_0x52ba03[_0x3f5098(0x17c)][_0x3f5098(0x142)]=typeof _0x4ea8e3==_0x3f5098(0xec)?_0x4ea8e3:_0x11c064,_0x4d5384[_0x3f5098(0xed)](_0x399ae2['_property'](_0x5c8f88,_0x2a2970,_0x4ea8e3,_0x52ba03,_0x4737bf)),_0x52ba03[_0x3f5098(0x17c)]['parent']=_0x3852cc,_0x52ba03[_0x3f5098(0x17c)][_0x3f5098(0x142)]=_0x2eb08f;};}['_addObjectProperty'](_0x2c2797,_0x35eaa6,_0x21501f,_0x375a48,_0x55b1e5,_0x216efb,_0x190c63){var _0xaf317c=_0x38eeed,_0x45f347=this;return _0x35eaa6[_0xaf317c(0x15e)+_0x55b1e5['toString']()]=!0x0,function(_0x2475f7){var _0x3856dd=_0xaf317c,_0x451d6f=_0x216efb['node']['current'],_0x56dab4=_0x216efb[_0x3856dd(0x17c)][_0x3856dd(0x142)],_0x96b01f=_0x216efb[_0x3856dd(0x17c)][_0x3856dd(0x1ba)];_0x216efb[_0x3856dd(0x17c)][_0x3856dd(0x1ba)]=_0x451d6f,_0x216efb[_0x3856dd(0x17c)][_0x3856dd(0x142)]=_0x2475f7,_0x2c2797['push'](_0x45f347[_0x3856dd(0x1c5)](_0x21501f,_0x375a48,_0x55b1e5,_0x216efb,_0x190c63)),_0x216efb['node'][_0x3856dd(0x1ba)]=_0x96b01f,_0x216efb[_0x3856dd(0x17c)]['index']=_0x56dab4;};}[_0x38eeed(0x1c5)](_0xfb0fe,_0x56030d,_0x52a73c,_0x2ffd82,_0x10fd54){var _0x459543=_0x38eeed,_0x514cec=this;_0x10fd54||(_0x10fd54=function(_0x27144e,_0x425f7a){return _0x27144e[_0x425f7a];});var _0x176462=_0x52a73c[_0x459543(0x16c)](),_0x4c554c=_0x2ffd82[_0x459543(0x172)]||{},_0x2655be=_0x2ffd82[_0x459543(0x137)],_0x4a97b8=_0x2ffd82[_0x459543(0x14d)];try{var _0x2230ed=this[_0x459543(0x15d)](_0xfb0fe),_0x1719e8=_0x176462;_0x2230ed&&_0x1719e8[0x0]==='\\x27'&&(_0x1719e8=_0x1719e8['substr'](0x1,_0x1719e8[_0x459543(0x14e)]-0x2));var _0x4a4bc4=_0x2ffd82[_0x459543(0x172)]=_0x4c554c[_0x459543(0x15e)+_0x1719e8];_0x4a4bc4&&(_0x2ffd82['depth']=_0x2ffd82[_0x459543(0x137)]+0x1),_0x2ffd82['isExpressionToEvaluate']=!!_0x4a4bc4;var _0x592b45=typeof _0x52a73c=='symbol',_0x5c68c8={'name':_0x592b45||_0x2230ed?_0x176462:this[_0x459543(0x19e)](_0x176462)};if(_0x592b45&&(_0x5c68c8[_0x459543(0x158)]=!0x0),!(_0x56030d==='array'||_0x56030d==='Error')){var _0x57abaf=this[_0x459543(0x121)](_0xfb0fe,_0x52a73c);if(_0x57abaf&&(_0x57abaf[_0x459543(0x10f)]&&(_0x5c68c8[_0x459543(0x1af)]=!0x0),_0x57abaf[_0x459543(0x116)]&&!_0x4a4bc4&&!_0x2ffd82[_0x459543(0x10a)]))return _0x5c68c8['getter']=!0x0,this[_0x459543(0x1b0)](_0x5c68c8,_0x2ffd82),_0x5c68c8;}var _0x376fbb;try{_0x376fbb=_0x10fd54(_0xfb0fe,_0x52a73c);}catch(_0x4daff7){return _0x5c68c8={'name':_0x176462,'type':_0x459543(0x114),'error':_0x4daff7[_0x459543(0xfc)]},this[_0x459543(0x1b0)](_0x5c68c8,_0x2ffd82),_0x5c68c8;}var _0xbfcb3f=this[_0x459543(0x109)](_0x376fbb),_0x22eb49=this[_0x459543(0x17e)](_0xbfcb3f);if(_0x5c68c8[_0x459543(0x1b3)]=_0xbfcb3f,_0x22eb49)this[_0x459543(0x1b0)](_0x5c68c8,_0x2ffd82,_0x376fbb,function(){var _0x3b01ea=_0x459543;_0x5c68c8[_0x3b01ea(0x197)]=_0x376fbb['valueOf'](),!_0x4a4bc4&&_0x514cec[_0x3b01ea(0xfd)](_0xbfcb3f,_0x5c68c8,_0x2ffd82,{});});else{var _0x50f401=_0x2ffd82[_0x459543(0x141)]&&_0x2ffd82['level']<_0x2ffd82[_0x459543(0x101)]&&_0x2ffd82[_0x459543(0x11a)][_0x459543(0x119)](_0x376fbb)<0x0&&_0xbfcb3f!==_0x459543(0x10d)&&_0x2ffd82[_0x459543(0x12d)]<_0x2ffd82[_0x459543(0xe8)];_0x50f401||_0x2ffd82[_0x459543(0x1a8)]<_0x2655be||_0x4a4bc4?(this[_0x459543(0xe4)](_0x5c68c8,_0x376fbb,_0x2ffd82,_0x4a4bc4||{}),this['_additionalMetadata'](_0x376fbb,_0x5c68c8)):this['_processTreeNodeResult'](_0x5c68c8,_0x2ffd82,_0x376fbb,function(){var _0x202918=_0x459543;_0xbfcb3f===_0x202918(0x15a)||_0xbfcb3f===_0x202918(0x12e)||(delete _0x5c68c8['value'],_0x5c68c8[_0x202918(0x198)]=!0x0);});}return _0x5c68c8;}finally{_0x2ffd82[_0x459543(0x172)]=_0x4c554c,_0x2ffd82[_0x459543(0x137)]=_0x2655be,_0x2ffd82[_0x459543(0x14d)]=_0x4a97b8;}}[_0x38eeed(0xfd)](_0x4447d9,_0x55d8e4,_0x10f661,_0x387bce){var _0x324fea=_0x38eeed,_0x44215e=_0x387bce[_0x324fea(0x168)]||_0x10f661[_0x324fea(0x168)];if((_0x4447d9===_0x324fea(0xde)||_0x4447d9===_0x324fea(0x167))&&_0x55d8e4[_0x324fea(0x197)]){let _0xbbcc8b=_0x55d8e4[_0x324fea(0x197)][_0x324fea(0x14e)];_0x10f661[_0x324fea(0x19b)]+=_0xbbcc8b,_0x10f661[_0x324fea(0x19b)]>_0x10f661[_0x324fea(0x19f)]?(_0x55d8e4[_0x324fea(0x198)]='',delete _0x55d8e4[_0x324fea(0x197)]):_0xbbcc8b>_0x44215e&&(_0x55d8e4['capped']=_0x55d8e4[_0x324fea(0x197)]['substr'](0x0,_0x44215e),delete _0x55d8e4['value']);}}[_0x38eeed(0x15d)](_0x544442){var _0x3f84e8=_0x38eeed;return!!(_0x544442&&_0x30fee5['Map']&&this[_0x3f84e8(0x106)](_0x544442)===_0x3f84e8(0x178)&&_0x544442[_0x3f84e8(0x196)]);}[_0x38eeed(0x19e)](_0x42e5e7){var _0xc11c02=_0x38eeed;if(_0x42e5e7[_0xc11c02(0x16f)](/^\\d+$/))return _0x42e5e7;var _0x1156dc;try{_0x1156dc=JSON[_0xc11c02(0x1ca)](''+_0x42e5e7);}catch{_0x1156dc='\\x22'+this[_0xc11c02(0x106)](_0x42e5e7)+'\\x22';}return _0x1156dc['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1156dc=_0x1156dc['substr'](0x1,_0x1156dc[_0xc11c02(0x14e)]-0x2):_0x1156dc=_0x1156dc['replace'](/'/g,'\\x5c\\x27')[_0xc11c02(0x195)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x1156dc;}[_0x38eeed(0x1b0)](_0x9de420,_0x5f23e7,_0x5057a8,_0x60bdad){var _0x4f6d0e=_0x38eeed;this['_treeNodePropertiesBeforeFullValue'](_0x9de420,_0x5f23e7),_0x60bdad&&_0x60bdad(),this['_additionalMetadata'](_0x5057a8,_0x9de420),this[_0x4f6d0e(0x16b)](_0x9de420,_0x5f23e7);}[_0x38eeed(0x18f)](_0x1944ff,_0x1c8bbe){var _0x56f4f=_0x38eeed;this[_0x56f4f(0x147)](_0x1944ff,_0x1c8bbe),this[_0x56f4f(0xf7)](_0x1944ff,_0x1c8bbe),this[_0x56f4f(0x175)](_0x1944ff,_0x1c8bbe),this[_0x56f4f(0xf4)](_0x1944ff,_0x1c8bbe);}['_setNodeId'](_0x561ae2,_0x5a2235){}[_0x38eeed(0xf7)](_0x541f53,_0x284ff7){}['_setNodeLabel'](_0x50c76c,_0x169ea4){}['_isUndefined'](_0x4f7acf){var _0x37635b=_0x38eeed;return _0x4f7acf===this[_0x37635b(0x11c)];}['_treeNodePropertiesAfterFullValue'](_0x26b1b6,_0x1818c9){var _0x508791=_0x38eeed;this[_0x508791(0xea)](_0x26b1b6,_0x1818c9),this[_0x508791(0x1b4)](_0x26b1b6),_0x1818c9[_0x508791(0x14f)]&&this['_sortProps'](_0x26b1b6),this['_addFunctionsNode'](_0x26b1b6,_0x1818c9),this['_addLoadNode'](_0x26b1b6,_0x1818c9),this['_cleanNode'](_0x26b1b6);}[_0x38eeed(0x112)](_0x501c4a,_0x579e07){var _0x8674df=_0x38eeed;let _0x504ca9;try{_0x30fee5[_0x8674df(0x115)]&&(_0x504ca9=_0x30fee5[_0x8674df(0x115)][_0x8674df(0x154)],_0x30fee5[_0x8674df(0x115)][_0x8674df(0x154)]=function(){}),_0x501c4a&&typeof _0x501c4a[_0x8674df(0x14e)]==_0x8674df(0xec)&&(_0x579e07['length']=_0x501c4a[_0x8674df(0x14e)]);}catch{}finally{_0x504ca9&&(_0x30fee5[_0x8674df(0x115)][_0x8674df(0x154)]=_0x504ca9);}if(_0x579e07['type']==='number'||_0x579e07['type']===_0x8674df(0x1be)){if(isNaN(_0x579e07['value']))_0x579e07[_0x8674df(0xe2)]=!0x0,delete _0x579e07[_0x8674df(0x197)];else switch(_0x579e07[_0x8674df(0x197)]){case Number['POSITIVE_INFINITY']:_0x579e07[_0x8674df(0x130)]=!0x0,delete _0x579e07[_0x8674df(0x197)];break;case Number['NEGATIVE_INFINITY']:_0x579e07[_0x8674df(0x1a7)]=!0x0,delete _0x579e07[_0x8674df(0x197)];break;case 0x0:this['_isNegativeZero'](_0x579e07[_0x8674df(0x197)])&&(_0x579e07[_0x8674df(0x19d)]=!0x0);break;}}else _0x579e07[_0x8674df(0x1b3)]===_0x8674df(0x10d)&&typeof _0x501c4a['name']==_0x8674df(0xde)&&_0x501c4a[_0x8674df(0xef)]&&_0x579e07[_0x8674df(0xef)]&&_0x501c4a[_0x8674df(0xef)]!==_0x579e07[_0x8674df(0xef)]&&(_0x579e07[_0x8674df(0x179)]=_0x501c4a[_0x8674df(0xef)]);}[_0x38eeed(0x1bb)](_0x2e0706){return 0x1/_0x2e0706===Number['NEGATIVE_INFINITY'];}['_sortProps'](_0x4483ed){var _0xf656fc=_0x38eeed;!_0x4483ed[_0xf656fc(0x1b8)]||!_0x4483ed['props']['length']||_0x4483ed['type']===_0xf656fc(0xe0)||_0x4483ed[_0xf656fc(0x1b3)]==='Map'||_0x4483ed[_0xf656fc(0x1b3)]===_0xf656fc(0xe1)||_0x4483ed[_0xf656fc(0x1b8)][_0xf656fc(0x1bc)](function(_0x2b5902,_0x38139a){var _0x3e8724=_0xf656fc,_0x183450=_0x2b5902[_0x3e8724(0xef)][_0x3e8724(0x18a)](),_0x2ba27e=_0x38139a[_0x3e8724(0xef)][_0x3e8724(0x18a)]();return _0x183450<_0x2ba27e?-0x1:_0x183450>_0x2ba27e?0x1:0x0;});}[_0x38eeed(0x1a3)](_0x58b1ac,_0x4bd64d){var _0x7660cf=_0x38eeed;if(!(_0x4bd64d[_0x7660cf(0x1a2)]||!_0x58b1ac['props']||!_0x58b1ac[_0x7660cf(0x1b8)]['length'])){for(var _0x542148=[],_0x59855b=[],_0x53deff=0x0,_0x54b53d=_0x58b1ac[_0x7660cf(0x1b8)][_0x7660cf(0x14e)];_0x53deff<_0x54b53d;_0x53deff++){var _0x11f0fe=_0x58b1ac[_0x7660cf(0x1b8)][_0x53deff];_0x11f0fe[_0x7660cf(0x1b3)]===_0x7660cf(0x10d)?_0x542148[_0x7660cf(0xed)](_0x11f0fe):_0x59855b[_0x7660cf(0xed)](_0x11f0fe);}if(!(!_0x59855b['length']||_0x542148['length']<=0x1)){_0x58b1ac[_0x7660cf(0x1b8)]=_0x59855b;var _0x2de021={'functionsNode':!0x0,'props':_0x542148};this[_0x7660cf(0x147)](_0x2de021,_0x4bd64d),this[_0x7660cf(0xea)](_0x2de021,_0x4bd64d),this[_0x7660cf(0x1b4)](_0x2de021),this[_0x7660cf(0xf4)](_0x2de021,_0x4bd64d),_0x2de021['id']+='\\x20f',_0x58b1ac['props'][_0x7660cf(0x13a)](_0x2de021);}}}[_0x38eeed(0x143)](_0x37760c,_0x45976f){}[_0x38eeed(0x1b4)](_0x25c6fa){}['_isArray'](_0x8d81fa){var _0x1864d9=_0x38eeed;return Array['isArray'](_0x8d81fa)||typeof _0x8d81fa==_0x1864d9(0x15b)&&this[_0x1864d9(0x106)](_0x8d81fa)==='[object\\x20Array]';}['_setNodePermissions'](_0x25d824,_0x8cb663){}[_0x38eeed(0x1b9)](_0x4b7008){var _0xc995c0=_0x38eeed;delete _0x4b7008['_hasSymbolPropertyOnItsPath'],delete _0x4b7008[_0xc995c0(0x162)],delete _0x4b7008[_0xc995c0(0x1b7)];}[_0x38eeed(0x175)](_0x3eef98,_0x1b294b){}}let _0x4a6b55=new _0x2da6ef(),_0x812709={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x277a7c={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x12cf7a(_0x3932fa,_0x444947,_0x71aca6,_0x1052f7,_0x4dd508,_0x5ac926){var _0x5ea906=_0x38eeed;let _0x221157,_0x35bd79;try{_0x35bd79=_0x6a4bbf(),_0x221157=_0x290102[_0x444947],!_0x221157||_0x35bd79-_0x221157['ts']>0x1f4&&_0x221157[_0x5ea906(0x173)]&&_0x221157[_0x5ea906(0x166)]/_0x221157[_0x5ea906(0x173)]<0x64?(_0x290102[_0x444947]=_0x221157={'count':0x0,'time':0x0,'ts':_0x35bd79},_0x290102[_0x5ea906(0x11e)]={}):_0x35bd79-_0x290102[_0x5ea906(0x11e)]['ts']>0x32&&_0x290102[_0x5ea906(0x11e)][_0x5ea906(0x173)]&&_0x290102['hits']['time']/_0x290102['hits']['count']<0x64&&(_0x290102['hits']={});let _0x354c99=[],_0x35d4fc=_0x221157[_0x5ea906(0x131)]||_0x290102[_0x5ea906(0x11e)][_0x5ea906(0x131)]?_0x277a7c:_0x812709,_0x787d69=_0x5db58c=>{var _0x5b44c5=_0x5ea906;let _0x4ea6f4={};return _0x4ea6f4['props']=_0x5db58c[_0x5b44c5(0x1b8)],_0x4ea6f4['elements']=_0x5db58c[_0x5b44c5(0x110)],_0x4ea6f4[_0x5b44c5(0x168)]=_0x5db58c['strLength'],_0x4ea6f4[_0x5b44c5(0x19f)]=_0x5db58c['totalStrLength'],_0x4ea6f4[_0x5b44c5(0xe8)]=_0x5db58c[_0x5b44c5(0xe8)],_0x4ea6f4[_0x5b44c5(0x101)]=_0x5db58c[_0x5b44c5(0x101)],_0x4ea6f4['sortProps']=!0x1,_0x4ea6f4[_0x5b44c5(0x1a2)]=!_0x32b166,_0x4ea6f4[_0x5b44c5(0x137)]=0x1,_0x4ea6f4[_0x5b44c5(0x1a8)]=0x0,_0x4ea6f4[_0x5b44c5(0xe6)]=_0x5b44c5(0x176),_0x4ea6f4['rootExpression']=_0x5b44c5(0x164),_0x4ea6f4[_0x5b44c5(0x141)]=!0x0,_0x4ea6f4[_0x5b44c5(0x11a)]=[],_0x4ea6f4['autoExpandPropertyCount']=0x0,_0x4ea6f4['resolveGetters']=!0x0,_0x4ea6f4[_0x5b44c5(0x19b)]=0x0,_0x4ea6f4[_0x5b44c5(0x17c)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x4ea6f4;};for(var _0x386e41=0x0;_0x386e41<_0x4dd508['length'];_0x386e41++)_0x354c99[_0x5ea906(0xed)](_0x4a6b55[_0x5ea906(0xe4)]({'timeNode':_0x3932fa===_0x5ea906(0x166)||void 0x0},_0x4dd508[_0x386e41],_0x787d69(_0x35d4fc),{}));if(_0x3932fa===_0x5ea906(0x1c3)){let _0x5a4a6d=Error['stackTraceLimit'];try{Error[_0x5ea906(0x1ae)]=0x1/0x0,_0x354c99[_0x5ea906(0xed)](_0x4a6b55[_0x5ea906(0xe4)]({'stackNode':!0x0},new Error()[_0x5ea906(0x1a4)],_0x787d69(_0x35d4fc),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x5a4a6d;}}return{'method':_0x5ea906(0xff),'version':_0x40a2c1,'args':[{'ts':_0x71aca6,'session':_0x1052f7,'args':_0x354c99,'id':_0x444947,'context':_0x5ac926}]};}catch(_0x11c544){return{'method':_0x5ea906(0xff),'version':_0x40a2c1,'args':[{'ts':_0x71aca6,'session':_0x1052f7,'args':[{'type':'unknown','error':_0x11c544&&_0x11c544[_0x5ea906(0xfc)]}],'id':_0x444947,'context':_0x5ac926}]};}finally{try{if(_0x221157&&_0x35bd79){let _0x1e5f14=_0x6a4bbf();_0x221157[_0x5ea906(0x173)]++,_0x221157[_0x5ea906(0x166)]+=_0x406bf2(_0x35bd79,_0x1e5f14),_0x221157['ts']=_0x1e5f14,_0x290102[_0x5ea906(0x11e)][_0x5ea906(0x173)]++,_0x290102[_0x5ea906(0x11e)]['time']+=_0x406bf2(_0x35bd79,_0x1e5f14),_0x290102[_0x5ea906(0x11e)]['ts']=_0x1e5f14,(_0x221157[_0x5ea906(0x173)]>0x32||_0x221157[_0x5ea906(0x166)]>0x64)&&(_0x221157['reduceLimits']=!0x0),(_0x290102['hits'][_0x5ea906(0x173)]>0x3e8||_0x290102['hits'][_0x5ea906(0x166)]>0x12c)&&(_0x290102[_0x5ea906(0x11e)][_0x5ea906(0x131)]=!0x0);}}catch{}}}return _0x12cf7a;}((_0x4ebcea,_0x27328,_0xfc453c,_0x4f44be,_0x15f885,_0x1427b2,_0x5bed56,_0x203e11,_0x36d900,_0x14db4d,_0x57afa4)=>{var _0x1b7045=_0x50a8cd;if(_0x4ebcea['_console_ninja'])return _0x4ebcea['_console_ninja'];if(!H(_0x4ebcea,_0x203e11,_0x15f885))return _0x4ebcea[_0x1b7045(0x1c6)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x4ebcea[_0x1b7045(0x1c6)];let _0x366bf4=b(_0x4ebcea),_0x56ed67=_0x366bf4[_0x1b7045(0x113)],_0x9a1ff0=_0x366bf4['timeStamp'],_0x4d5929=_0x366bf4[_0x1b7045(0x18d)],_0x2b0dd4={'hits':{},'ts':{}},_0x126688=J(_0x4ebcea,_0x36d900,_0x2b0dd4,_0x1427b2),_0x4c8e6a=_0x1c6179=>{_0x2b0dd4['ts'][_0x1c6179]=_0x9a1ff0();},_0x384860=(_0x2f6f27,_0x5d6000)=>{var _0x564f94=_0x1b7045;let _0x30cd47=_0x2b0dd4['ts'][_0x5d6000];if(delete _0x2b0dd4['ts'][_0x5d6000],_0x30cd47){let _0x55886c=_0x56ed67(_0x30cd47,_0x9a1ff0());_0x385ee7(_0x126688(_0x564f94(0x166),_0x2f6f27,_0x4d5929(),_0xde855e,[_0x55886c],_0x5d6000));}},_0x226ee6=_0x6a209e=>{var _0x24b7f3=_0x1b7045,_0x5b9221;return _0x15f885==='next.js'&&_0x4ebcea['origin']&&((_0x5b9221=_0x6a209e==null?void 0x0:_0x6a209e['args'])==null?void 0x0:_0x5b9221['length'])&&(_0x6a209e['args'][0x0]['origin']=_0x4ebcea[_0x24b7f3(0x17a)]),_0x6a209e;};_0x4ebcea['_console_ninja']={'consoleLog':(_0x49728f,_0x3aa3d2)=>{var _0x419516=_0x1b7045;_0x4ebcea[_0x419516(0x115)][_0x419516(0xff)][_0x419516(0xef)]!==_0x419516(0x138)&&_0x385ee7(_0x126688(_0x419516(0xff),_0x49728f,_0x4d5929(),_0xde855e,_0x3aa3d2));},'consoleTrace':(_0x17c20b,_0x1e559f)=>{var _0x262ee6=_0x1b7045;_0x4ebcea['console'][_0x262ee6(0xff)][_0x262ee6(0xef)]!==_0x262ee6(0x1c4)&&_0x385ee7(_0x226ee6(_0x126688(_0x262ee6(0x1c3),_0x17c20b,_0x4d5929(),_0xde855e,_0x1e559f)));},'consoleTime':_0x55f570=>{_0x4c8e6a(_0x55f570);},'consoleTimeEnd':(_0x2f313e,_0x252a20)=>{_0x384860(_0x252a20,_0x2f313e);},'autoLog':(_0x435f2a,_0x3963ed)=>{var _0x5ec98d=_0x1b7045;_0x385ee7(_0x126688(_0x5ec98d(0xff),_0x3963ed,_0x4d5929(),_0xde855e,[_0x435f2a]));},'autoLogMany':(_0xe030f4,_0x45bc5b)=>{var _0xd427da=_0x1b7045;_0x385ee7(_0x126688(_0xd427da(0xff),_0xe030f4,_0x4d5929(),_0xde855e,_0x45bc5b));},'autoTrace':(_0x4ac41a,_0x489da3)=>{var _0x5e5a8e=_0x1b7045;_0x385ee7(_0x226ee6(_0x126688(_0x5e5a8e(0x1c3),_0x489da3,_0x4d5929(),_0xde855e,[_0x4ac41a])));},'autoTraceMany':(_0x16d6a0,_0x103b55)=>{var _0x1eaed0=_0x1b7045;_0x385ee7(_0x226ee6(_0x126688(_0x1eaed0(0x1c3),_0x16d6a0,_0x4d5929(),_0xde855e,_0x103b55)));},'autoTime':(_0x1ff345,_0x2501d2,_0x44f947)=>{_0x4c8e6a(_0x44f947);},'autoTimeEnd':(_0x51f1d3,_0x3bbcfd,_0x550547)=>{_0x384860(_0x3bbcfd,_0x550547);},'coverage':_0x53db49=>{_0x385ee7({'method':'coverage','version':_0x1427b2,'args':[{'id':_0x53db49}]});}};let _0x385ee7=X(_0x4ebcea,_0x27328,_0xfc453c,_0x4f44be,_0x15f885,_0x14db4d,_0x57afa4),_0xde855e=_0x4ebcea[_0x1b7045(0x144)];return _0x4ebcea['_console_ninja'];})(globalThis,_0x50a8cd(0x1ac),_0x50a8cd(0x117),_0x50a8cd(0x177),'webpack',_0x50a8cd(0xfa),'1723637430467',_0x50a8cd(0x187),_0x50a8cd(0x18e),_0x50a8cd(0x17d),_0x50a8cd(0x170));");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
oo_oo; /* istanbul ignore next */
function oo_tr(i, ...v) {
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
;
oo_tr; /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
;
oo_ts; /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
;
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./app/components/RichTextRenderer.tsx":
/*!*********************************************!*\
  !*** ./app/components/RichTextRenderer.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "../../../node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1__);


const RichTextRenderer = ({
  document
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rich-text-container"
  }, Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1__["documentToReactComponents"])(document));
};
/* harmony default export */ __webpack_exports__["default"] = (RichTextRenderer);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stellarstack/Desktop/Nx-Stencil-React/apps/frontend1/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map