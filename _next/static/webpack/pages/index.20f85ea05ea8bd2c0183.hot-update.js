webpackHotUpdate_N_E("pages/index",{

/***/ "./components/typed-text/TypedText.jsx":
/*!*********************************************!*\
  !*** ./components/typed-text/TypedText.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TypedText; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-typist */ \"./node_modules/react-typist/dist/Typist.js\");\n/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typist/dist/Typist.css */ \"./node_modules/react-typist/dist/Typist.css\");\n/* harmony import */ var react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typist_dist_Typist_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/components/typed-text/TypedText.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction TypedText(_ref) {\n  _s();\n\n  var texts = _ref.texts;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      index = _useState2[0],\n      setIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      textLength = _useState3[0],\n      setTextLength = _useState3[1];\n\n  var cursor = {\n    show: true,\n    blink: true,\n    element: '|',\n    hideWhenDone: false,\n    hideWhenDoneDelay: 1000\n  };\n\n  var typingDone = function typingDone() {\n    console.log('done');\n    var i = index;\n    i < texts[i].length ? i++ : i = 0;\n    setCurrentText(index);\n  };\n\n  var setCurrentText = function setCurrentText(i) {\n    console.log(i);\n    setIndex(i);\n    setTextLength(texts[i].length);\n    setText(texts[i]);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setCurrentText(0);\n  }, [texts]);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, textLength ? __jsx(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    cursor: cursor,\n    startDelay: 2000,\n    onTypingDone: typingDone,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 22\n    }\n  }, text) : '');\n}\n\n_s(TypedText, \"gdENKmVffVr9lAmgtK0iJiEdzSg=\");\n\n_c = TypedText;\n\nvar _c;\n\n$RefreshReg$(_c, \"TypedText\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90eXBlZC10ZXh0L1R5cGVkVGV4dC5qc3g/NTZjMSJdLCJuYW1lcyI6WyJUeXBlZFRleHQiLCJ0ZXh0cyIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJpbmRleCIsInNldEluZGV4IiwidGV4dExlbmd0aCIsInNldFRleHRMZW5ndGgiLCJjdXJzb3IiLCJzaG93IiwiYmxpbmsiLCJlbGVtZW50IiwiaGlkZVdoZW5Eb25lIiwiaGlkZVdoZW5Eb25lRGVsYXkiLCJ0eXBpbmdEb25lIiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJzZXRDdXJyZW50VGV4dCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7O0FBQUEsa0JBQ2pCQyxzREFBUSxDQUFDLEVBQUQsQ0FEUztBQUFBLE1BQ2xDQyxJQURrQztBQUFBLE1BQzVCQyxPQUQ0Qjs7QUFBQSxtQkFFZkYsc0RBQVEsQ0FBQyxDQUFELENBRk87QUFBQSxNQUVsQ0csS0FGa0M7QUFBQSxNQUUzQkMsUUFGMkI7O0FBQUEsbUJBR0xKLHNEQUFRLENBQUMsQ0FBRCxDQUhIO0FBQUEsTUFHbENLLFVBSGtDO0FBQUEsTUFHdEJDLGFBSHNCOztBQUt6QyxNQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBSSxFQUFFLElBRE87QUFFYkMsU0FBSyxFQUFFLElBRk07QUFHYkMsV0FBTyxFQUFFLEdBSEk7QUFJYkMsZ0JBQVksRUFBRSxLQUpEO0FBS2JDLHFCQUFpQixFQUFFO0FBTE4sR0FBZjs7QUFRQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHYixLQUFSO0FBQ0FhLEtBQUMsR0FBR2pCLEtBQUssQ0FBQ2lCLENBQUQsQ0FBTCxDQUFTQyxNQUFiLEdBQXNCRCxDQUFDLEVBQXZCLEdBQTRCQSxDQUFDLEdBQUcsQ0FBaEM7QUFDQUUsa0JBQWMsQ0FBQ2YsS0FBRCxDQUFkO0FBQ0QsR0FMRDs7QUFPQSxNQUFNZSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNGLENBQUQsRUFBTztBQUM1QkYsV0FBTyxDQUFDQyxHQUFSLENBQVlDLENBQVo7QUFDQVosWUFBUSxDQUFDWSxDQUFELENBQVI7QUFDQVYsaUJBQWEsQ0FBQ1AsS0FBSyxDQUFDaUIsQ0FBRCxDQUFMLENBQVNDLE1BQVYsQ0FBYjtBQUNBZixXQUFPLENBQUNILEtBQUssQ0FBQ2lCLENBQUQsQ0FBTixDQUFQO0FBQ0QsR0FMRDs7QUFPQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGtCQUFjLENBQUMsQ0FBRCxDQUFkO0FBQ0QsR0FGUSxFQUVOLENBQUNuQixLQUFELENBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJTSxVQUFVLEdBQUcsTUFBQyxtREFBRDtBQUFRLFVBQU0sRUFBRUUsTUFBaEI7QUFBd0IsY0FBVSxFQUFFLElBQXBDO0FBQTBDLGdCQUFZLEVBQUVNLFVBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUVaLElBQXJFLENBQUgsR0FBeUYsRUFEdkcsQ0FERjtBQUtEOztHQXBDdUJILFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3R5cGVkLXRleHQvVHlwZWRUZXh0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBpc3QgZnJvbSAncmVhY3QtdHlwaXN0JztcbmltcG9ydCAncmVhY3QtdHlwaXN0L2Rpc3QvVHlwaXN0LmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR5cGVkVGV4dCh7dGV4dHN9KSB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RleHRMZW5ndGgsIHNldFRleHRMZW5ndGhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY3Vyc29yID0ge1xuICAgIHNob3c6IHRydWUsXG4gICAgYmxpbms6IHRydWUsXG4gICAgZWxlbWVudDogJ3wnLFxuICAgIGhpZGVXaGVuRG9uZTogZmFsc2UsXG4gICAgaGlkZVdoZW5Eb25lRGVsYXk6IDEwMDAsXG4gIH07XG5cbiAgY29uc3QgdHlwaW5nRG9uZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZG9uZScpXG4gICAgbGV0IGkgPSBpbmRleDtcbiAgICBpIDwgdGV4dHNbaV0ubGVuZ3RoID8gaSsrIDogaSA9IDA7XG4gICAgc2V0Q3VycmVudFRleHQoaW5kZXgpO1xuICB9XG5cbiAgY29uc3Qgc2V0Q3VycmVudFRleHQgPSAoaSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGkpXG4gICAgc2V0SW5kZXgoaSk7XG4gICAgc2V0VGV4dExlbmd0aCh0ZXh0c1tpXS5sZW5ndGgpXG4gICAgc2V0VGV4dCh0ZXh0c1tpXSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1cnJlbnRUZXh0KDApXG4gIH0sIFt0ZXh0c10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyB0ZXh0TGVuZ3RoID8gPFR5cGlzdCBjdXJzb3I9e2N1cnNvcn0gc3RhcnREZWxheT17MjAwMH0gb25UeXBpbmdEb25lPXt0eXBpbmdEb25lfT57dGV4dH08L1R5cGlzdD4gOiAnJ31cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/typed-text/TypedText.jsx\n");

/***/ })

})