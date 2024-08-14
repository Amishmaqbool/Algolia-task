'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0af484e5.js');

function format(first, middle, last) {
  return ((first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.nameClicked = index.createEvent(this, "nameClicked", 7);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  render() {
    const fullText = this.getText();
    return index.h("div", { onClick: () => this.nameClicked.emit(fullText) }, "Hello, World! I'm ", fullText);
  }
  getText() {
    var _a;
    return format(this.first, (_a = this.middle) === null || _a === void 0 ? void 0 : _a.join(' '), this.last);
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
