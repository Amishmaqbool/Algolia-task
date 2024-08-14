(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../../dist/libs/ui-components/dist/esm/my-component.entry.js":
/*!***********************************************************************************************************!*\
  !*** /Users/stellarstack/Desktop/Nx-Stencil-React/dist/libs/ui-components/dist/esm/my-component.entry.js ***!
  \***********************************************************************************************************/
/*! exports provided: my_component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_component", function() { return MyComponent; });
/* harmony import */ var _index_5bb720a0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-5bb720a0.js */ "../../../dist/libs/ui-components/dist/esm/index-5bb720a0.js");

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
const myComponentCss = ":host{display:block}";
const MyComponent = class {
  constructor(hostRef) {
    Object(_index_5bb720a0_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.nameClicked = Object(_index_5bb720a0_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "nameClicked", 7);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  render() {
    const fullText = this.getText();
    return Object(_index_5bb720a0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      onClick: () => this.nameClicked.emit(fullText)
    }, "Hello, World! I'm ", fullText);
  }
  getText() {
    var _a;
    return format(this.first, (_a = this.middle) === null || _a === void 0 ? void 0 : _a.join(' '), this.last);
  }
};
MyComponent.style = myComponentCss;


/***/ })

}]);
//# sourceMappingURL=1.js.map