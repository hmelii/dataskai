webpackHotUpdate_N_E("pages/index",{

/***/ "./components/typed-text/TypedText.jsx":
/*!*********************************************!*\
  !*** ./components/typed-text/TypedText.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TypedText; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-typist */ \"./node_modules/react-typist/dist/Typist.js\");\n/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typist/dist/Typist.css */ \"./node_modules/react-typist/dist/Typist.css\");\n/* harmony import */ var react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/components/typed-text/TypedText.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction TypedText(_ref) {\n  _s();\n\n  var texts = _ref.texts;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var cursor = {\n    show: true,\n    blink: true,\n    element: '|',\n    hideWhenDone: false,\n    hideWhenDoneDelay: 1000\n  };\n\n  var typingDone = function typingDone() {\n    index < texts.length - 1 ? setIndex(index + 1) : setIndex(0);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, texts && texts[index] ? __jsx(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    key: index,\n    cursor: cursor,\n    startDelay: 2000,\n    onTypingDone: typingDone,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, texts[index], __jsx(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Backspace, {\n    count: texts[index].length,\n    delay: 2000,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  })) : '');\n}\n\n_s(TypedText, \"x2oTrUAHknTo02Ld7gcDOqaxQ8E=\");\n\n_c = TypedText;\n\nvar _c;\n\n$RefreshReg$(_c, \"TypedText\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90eXBlZC10ZXh0L1R5cGVkVGV4dC5qc3g/NTZjMSJdLCJuYW1lcyI6WyJUeXBlZFRleHQiLCJ0ZXh0cyIsInVzZVN0YXRlIiwiaW5kZXgiLCJzZXRJbmRleCIsImN1cnNvciIsInNob3ciLCJibGluayIsImVsZW1lbnQiLCJoaWRlV2hlbkRvbmUiLCJoaWRlV2hlbkRvbmVEZWxheSIsInR5cGluZ0RvbmUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFROztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLENBQUQsQ0FETztBQUFBLE1BQ2xDQyxLQURrQztBQUFBLE1BQzNCQyxRQUQyQjs7QUFHekMsTUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFFBQUksRUFBRSxJQURPO0FBRWJDLFNBQUssRUFBRSxJQUZNO0FBR2JDLFdBQU8sRUFBRSxHQUhJO0FBSWJDLGdCQUFZLEVBQUUsS0FKRDtBQUtiQyxxQkFBaUIsRUFBRTtBQUxOLEdBQWY7O0FBUUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUV2QlIsU0FBSyxHQUFJRixLQUFLLENBQUNXLE1BQU4sR0FBZSxDQUF4QixHQUE2QlIsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFyQyxHQUFtREMsUUFBUSxDQUFDLENBQUQsQ0FBM0Q7QUFDRCxHQUhEOztBQVNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsS0FBRCxDQUFkLEdBQ0UsTUFBQyxtREFBRDtBQUFRLE9BQUcsRUFBRUEsS0FBYjtBQUFvQixVQUFNLEVBQUVFLE1BQTVCO0FBQW9DLGNBQVUsRUFBRSxJQUFoRDtBQUFzRCxnQkFBWSxFQUFFTSxVQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dWLEtBQUssQ0FBQ0UsS0FBRCxDQURSLEVBRUUsTUFBQyxtREFBRCxDQUFRLFNBQVI7QUFBa0IsU0FBSyxFQUFFRixLQUFLLENBQUNFLEtBQUQsQ0FBTCxDQUFhUyxNQUF0QztBQUE4QyxTQUFLLEVBQUUsSUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsR0FLSSxFQVBOLENBREY7QUFZRDs7R0FoQ3VCWixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90eXBlZC10ZXh0L1R5cGVkVGV4dC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwaXN0IGZyb20gJ3JlYWN0LXR5cGlzdCc7XG5pbXBvcnQgJ3JlYWN0LXR5cGlzdC9kaXN0L1R5cGlzdC5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUeXBlZFRleHQoe3RleHRzfSkge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGN1cnNvciA9IHtcbiAgICBzaG93OiB0cnVlLFxuICAgIGJsaW5rOiB0cnVlLFxuICAgIGVsZW1lbnQ6ICd8JyxcbiAgICBoaWRlV2hlbkRvbmU6IGZhbHNlLFxuICAgIGhpZGVXaGVuRG9uZURlbGF5OiAxMDAwLFxuICB9O1xuXG4gIGNvbnN0IHR5cGluZ0RvbmUgPSAoKSA9PiB7XG5cbiAgICBpbmRleCA8ICh0ZXh0cy5sZW5ndGggLSAxKSA/IHNldEluZGV4KGluZGV4ICsgMSkgOiBzZXRJbmRleCgwKTtcbiAgfVxuXG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHtcbiAgICAgIHRleHRzICYmIHRleHRzW2luZGV4XSA/XG4gICAgICAgIDxUeXBpc3Qga2V5PXtpbmRleH0gY3Vyc29yPXtjdXJzb3J9IHN0YXJ0RGVsYXk9ezIwMDB9IG9uVHlwaW5nRG9uZT17dHlwaW5nRG9uZX0+XG4gICAgICAgICAge3RleHRzW2luZGV4XX1cbiAgICAgICAgICA8VHlwaXN0LkJhY2tzcGFjZSBjb3VudD17dGV4dHNbaW5kZXhdLmxlbmd0aH0gZGVsYXk9ezIwMDB9Lz5cbiAgICAgICAgPC9UeXBpc3Q+XG4gICAgICAgIDogJydcbiAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/typed-text/TypedText.jsx\n");

/***/ })

})