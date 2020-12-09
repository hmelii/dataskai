webpackHotUpdate_N_E("pages/index",{

/***/ "./layouts/footer/Footer.js":
/*!**********************************!*\
  !*** ./layouts/footer/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ \"./layouts/footer/Footer.module.scss\");\n/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/layouts/footer/Footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Logo() {\n  return __jsx(\"div\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  });\n}\n\n_c = Logo;\n\nfunction Slogan() {\n  return __jsx(\"div\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.slogan,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"Dataskai is developed by a team of programmers and ML-enthusiasts who believe that teamwork and best practices are the future of AI/ML solutions.\"));\n}\n\n_c2 = Slogan;\n\nfunction NavItem(_ref) {\n  var item = _ref.item;\n  return __jsx(\"li\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, item.name);\n}\n\n_c3 = NavItem;\n\nfunction Nav() {\n  var _this = this;\n\n  var items = [{\n    id: 1,\n    url: '#',\n    name: 'Documentation'\n  }, {\n    id: 6,\n    url: '#',\n    name: 'We hire'\n  }];\n  return __jsx(\"nav\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navList,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, items.map(function (item) {\n    return __jsx(NavItem, {\n      item: item,\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 29\n      }\n    });\n  })));\n}\n\n_c4 = Nav;\n\nfunction Terms() {\n  return __jsx(\"div\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.terms,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.termsLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 35\n    }\n  }, \"Terms of service\"));\n}\n\n_c5 = Terms;\n\nfunction Privacy() {\n  return __jsx(\"div\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.privacy,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.privacylink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 37\n    }\n  }, \"Privacy policy\"));\n}\n\n_c6 = Privacy;\n\nfunction ContactUs() {\n  return __jsx(\"div\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contactUs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, \"We would be happy to hear from you. Don\\u2019t hesitate to send us your thoughts if you have any ideas or comments \\u2014 \", __jsx(\"a\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,\n    href: \"mailto:betatesters@dataskai.com\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 151\n    }\n  }, \"betatesters@dataskai.com\"), \" \");\n}\n\n_c7 = ContactUs;\nfunction Footer() {\n  return __jsx(\"footer\", {\n    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, __jsx(Logo, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }), __jsx(Slogan, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }), __jsx(Nav, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }), __jsx(Terms, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }), __jsx(Privacy, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }), __jsx(ContactUs, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }));\n}\n_c8 = Footer;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Logo\");\n$RefreshReg$(_c2, \"Slogan\");\n$RefreshReg$(_c3, \"NavItem\");\n$RefreshReg$(_c4, \"Nav\");\n$RefreshReg$(_c5, \"Terms\");\n$RefreshReg$(_c6, \"Privacy\");\n$RefreshReg$(_c7, \"ContactUs\");\n$RefreshReg$(_c8, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9mb290ZXIvRm9vdGVyLmpzPzc5YTEiXSwibmFtZXMiOlsiTG9nbyIsInN0eWxlcyIsImxvZ28iLCJTbG9nYW4iLCJzbG9nYW4iLCJOYXZJdGVtIiwiaXRlbSIsIm5hdkl0ZW0iLCJuYW1lIiwiTmF2IiwiaXRlbXMiLCJpZCIsInVybCIsIm5hdiIsIm5hdkxpc3QiLCJtYXAiLCJUZXJtcyIsInRlcm1zIiwidGVybXNMaW5rIiwiUHJpdmFjeSIsInByaXZhY3kiLCJwcml2YWN5bGluayIsIkNvbnRhY3RVcyIsImNvbnRhY3RVcyIsImxpbmsiLCJGb290ZXIiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDZCxTQUNFO0FBQUssYUFBUyxFQUFFQywwREFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFHRDs7S0FKUUYsSTs7QUFNVCxTQUFTRyxNQUFULEdBQWtCO0FBQ2hCLFNBQ0U7QUFBSyxhQUFTLEVBQUVGLDBEQUFNLENBQUNHLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlKQURGLENBREY7QUFLRDs7TUFOUUQsTTs7QUFRVCxTQUFTRSxPQUFULE9BQTJCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3pCLFNBQ0U7QUFBSSxhQUFTLEVBQUVMLDBEQUFNLENBQUNNLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsSUFBSSxDQUFDRSxJQURSLENBREY7QUFLRDs7TUFOUUgsTzs7QUFRVCxTQUFTSSxHQUFULEdBQWU7QUFBQTs7QUFDYixNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFHLEVBQUUsR0FGUDtBQUdFSixRQUFJLEVBQUU7QUFIUixHQURZLEVBT1o7QUFDRUcsTUFBRSxFQUFFLENBRE47QUFFRUMsT0FBRyxFQUFFLEdBRlA7QUFHRUosUUFBSSxFQUFFO0FBSFIsR0FQWSxDQUFkO0FBYUEsU0FDRTtBQUFLLGFBQVMsRUFBRVAsMERBQU0sQ0FBQ1ksR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFWiwwREFBTSxDQUFDYSxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lKLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUFULElBQUk7QUFBQSxXQUFJLE1BQUMsT0FBRDtBQUFTLFVBQUksRUFBRUEsSUFBZjtBQUFxQixTQUFHLEVBQUVBLElBQUksQ0FBQ0ssRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFKO0FBQUEsR0FBZCxDQURKLENBREYsQ0FERjtBQU9EOztNQXJCUUYsRzs7QUF1QlQsU0FBU08sS0FBVCxHQUFpQjtBQUNmLFNBQ0U7QUFBSyxhQUFTLEVBQUVmLDBEQUFNLENBQUNnQixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCO0FBQUcsYUFBUyxFQUFFaEIsMERBQU0sQ0FBQ2lCLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQTlCLENBREY7QUFHRDs7TUFKUUYsSzs7QUFNVCxTQUFTRyxPQUFULEdBQW1CO0FBQ2pCLFNBQ0U7QUFBSyxhQUFTLEVBQUVsQiwwREFBTSxDQUFDbUIsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQztBQUFHLGFBQVMsRUFBRW5CLDBEQUFNLENBQUNvQixXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFoQyxDQURGO0FBR0Q7O01BSlFGLE87O0FBTVQsU0FBU0csU0FBVCxHQUFxQjtBQUNuQixTQUNFO0FBQUssYUFBUyxFQUFFckIsMERBQU0sQ0FBQ3NCLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUlBQWtKO0FBQUcsYUFBUyxFQUFFdEIsMERBQU0sQ0FBQ3VCLElBQXJCO0FBQTJCLFFBQUksRUFBQyxpQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBbEosTUFERjtBQUdEOztNQUpRRixTO0FBTU0sU0FBU0csTUFBVCxHQUFrQjtBQUMvQixTQUNFO0FBQVEsYUFBUyxFQUFFeEIsMERBQU0sQ0FBQ3lCLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERjtBQVVEO01BWHVCRCxNIiwiZmlsZSI6Ii4vbGF5b3V0cy9mb290ZXIvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIExvZ28oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICApXG59XG5cbmZ1bmN0aW9uIFNsb2dhbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsb2dhbn0+XG4gICAgICA8cD5EYXRhc2thaSBpcyBkZXZlbG9wZWQgYnkgYSB0ZWFtIG9mIHByb2dyYW1tZXJzIGFuZCBNTC1lbnRodXNpYXN0cyB3aG8gYmVsaWV2ZSB0aGF0IHRlYW13b3JrIGFuZCBiZXN0IHByYWN0aWNlcyBhcmUgdGhlIGZ1dHVyZSBvZiBBSS9NTCBzb2x1dGlvbnMuPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIE5hdkl0ZW0oeyBpdGVtIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0+XG4gICAgICB7aXRlbS5uYW1lfVxuICAgIDwvbGk+XG4gIClcbn1cblxuZnVuY3Rpb24gTmF2KCkge1xuICBjb25zdCBpdGVtcyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHVybDogJyMnLFxuICAgICAgbmFtZTogJ0RvY3VtZW50YXRpb24nLFxuICAgIH0sXG4gIFxuICAgIHtcbiAgICAgIGlkOiA2LFxuICAgICAgdXJsOiAnIycsXG4gICAgICBuYW1lOiAnV2UgaGlyZScsXG4gICAgfSxcbiAgXVxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaXN0fT5cbiAgICAgICAgeyBpdGVtcy5tYXAoaXRlbSA9PiA8TmF2SXRlbSBpdGVtPXtpdGVtfSBrZXk9e2l0ZW0uaWR9IC8+KSB9XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmZ1bmN0aW9uIFRlcm1zKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVybXN9PjxhIGNsYXNzTmFtZT17c3R5bGVzLnRlcm1zTGlua30+VGVybXMgb2Ygc2VydmljZTwvYT48L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBQcml2YWN5KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpdmFjeX0+PGEgY2xhc3NOYW1lPXtzdHlsZXMucHJpdmFjeWxpbmt9PlByaXZhY3kgcG9saWN5PC9hPjwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIENvbnRhY3RVcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RVc30+V2Ugd291bGQgYmUgaGFwcHkgdG8gaGVhciBmcm9tIHlvdS4gRG9u4oCZdCBoZXNpdGF0ZSB0byBzZW5kIHVzIHlvdXIgdGhvdWdodHMgaWYgeW91IGhhdmUgYW55IGlkZWFzIG9yIGNvbW1lbnRzIOKAlCA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBocmVmPVwibWFpbHRvOmJldGF0ZXN0ZXJzQGRhdGFza2FpLmNvbVwiPmJldGF0ZXN0ZXJzQGRhdGFza2FpLmNvbTwvYT4gPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxMb2dvIC8+XG4gICAgICA8U2xvZ2FuIC8+XG4gICAgICA8TmF2IC8+XG4gICAgICA8VGVybXMgLz5cbiAgICAgIDxQcml2YWN5IC8+XG4gICAgICA8Q29udGFjdFVzIC8+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layouts/footer/Footer.js\n");

/***/ })

})