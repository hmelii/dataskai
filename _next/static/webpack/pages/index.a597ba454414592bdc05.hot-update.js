webpackHotUpdate_N_E("pages/index",{

/***/ "./components/operations/Operations.jsx":
/*!**********************************************!*\
  !*** ./components/operations/Operations.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Operations; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Operations_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Operations.module.scss */ \"./components/operations/Operations.module.scss\");\n/* harmony import */ var _Operations_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Operations_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/components/operations/Operations.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ListItem(_ref) {\n  var item = _ref.item;\n  return __jsx(\"li\", {\n    className: _Operations_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.listItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Operations_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.listTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, item.title), __jsx(\"div\", {\n    className: _Operations_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.listSummary,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, item.summary));\n}\n\n_c = ListItem;\n\nfunction List(_ref2) {\n  var _this = this;\n\n  var items = _ref2.items;\n  return __jsx(\"ul\", {\n    className: _Operations_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.list,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, items.map(function (item) {\n    return __jsx(ListItem, {\n      item: item,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 27\n      }\n    });\n  }));\n}\n\n_c2 = List;\nfunction Operations() {\n  var operations = [{\n    id: 1,\n    title: 'Task and target loader',\n    summary: 'At any moment you can see teammate progress'\n  }, {\n    id: 2,\n    title: 'Feature Store',\n    summary: 'Effectively search and use features for solving DS tasks\\n' + 'Build self-explanatory feature naming system for easy interpretation and dialog with experts\\n' + 'Create automatic services for interpretation and explanation of features for experts and managers.'\n  }, {\n    id: 3,\n    title: 'Metric Service',\n    summary: 'Effectively search and use features for solving DS tasks.Build self-explanatory feature naming system for easy interpretation and dialog with experts\\n' + 'Create automatic services for interpretation and explanation of features for experts and managers.'\n  }, {\n    id: 4,\n    title: 'Submitter',\n    summary: 'Effectively search and use features for solving DS tasks.Build self-explanatory feature naming system for easy interpretation and dialog with experts\\n' + 'Create automatic services for interpretation and explanation of features for experts and managers.'\n  }];\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h3\", {\n    className: _Operations_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, \"Make frequent operations easier \"), __jsx(\"h4\", {\n    className: _Operations_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subHeading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, \"even don't do it at all\"), __jsx(List, {\n    items: operations,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }));\n}\n_c3 = Operations;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ListItem\");\n$RefreshReg$(_c2, \"List\");\n$RefreshReg$(_c3, \"Operations\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcGVyYXRpb25zL09wZXJhdGlvbnMuanN4PzAyYTkiXSwibmFtZXMiOlsiTGlzdEl0ZW0iLCJpdGVtIiwic3R5bGVzIiwibGlzdEl0ZW0iLCJsaXN0VGl0bGUiLCJ0aXRsZSIsImxpc3RTdW1tYXJ5Iiwic3VtbWFyeSIsIkxpc3QiLCJpdGVtcyIsImxpc3QiLCJtYXAiLCJPcGVyYXRpb25zIiwib3BlcmF0aW9ucyIsImlkIiwiaGVhZGluZyIsInN1YkhlYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsT0FBNEI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDMUIsU0FDRTtBQUFJLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCw4REFBTSxDQUFDRSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DSCxJQUFJLENBQUNJLEtBQXpDLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQ0wsSUFBSSxDQUFDTSxPQUEzQyxDQUZGLENBREY7QUFNRDs7S0FQUVAsUTs7QUFTVCxTQUFTUSxJQUFULFFBQXlCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxTQUFUQSxLQUFTO0FBQ3ZCLFNBQ0U7QUFBSSxhQUFTLEVBQUVQLDhEQUFNLENBQUNRLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUQsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQVYsSUFBSTtBQUFBLFdBQUksTUFBQyxRQUFEO0FBQVUsVUFBSSxFQUFFQSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFBQSxHQUFkLENBREosQ0FERjtBQUtEOztNQU5RTyxJO0FBU00sU0FBU0ksVUFBVCxHQUFzQjtBQUNuQyxNQUFNQyxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRVQsU0FBSyxFQUFFLHdCQUZUO0FBR0VFLFdBQU8sRUFBRTtBQUhYLEdBRGlCLEVBTWpCO0FBQ0VPLE1BQUUsRUFBRSxDQUROO0FBRUVULFNBQUssRUFBRSxlQUZUO0FBR0VFLFdBQU8sRUFBRSwrREFDUCxnR0FETyxHQUVQO0FBTEosR0FOaUIsRUFhakI7QUFDRU8sTUFBRSxFQUFFLENBRE47QUFFRVQsU0FBSyxFQUFFLGdCQUZUO0FBR0VFLFdBQU8sRUFBRSw0SkFDUDtBQUpKLEdBYmlCLEVBbUJqQjtBQUNFTyxNQUFFLEVBQUUsQ0FETjtBQUVFVCxTQUFLLEVBQUUsV0FGVDtBQUdFRSxXQUFPLEVBQUUsNEpBQ1A7QUFKSixHQW5CaUIsQ0FBbkI7QUE0QkEsU0FDRSxtRUFDRTtBQUFJLGFBQVMsRUFBRUwsOERBQU0sQ0FBQ2EsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FERixFQUVFO0FBQUksYUFBUyxFQUFFYiw4REFBTSxDQUFDYyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGLEVBR0UsTUFBQyxJQUFEO0FBQU0sU0FBSyxFQUFFSCxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGO0FBT0Q7TUFwQ3VCRCxVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9vcGVyYXRpb25zL09wZXJhdGlvbnMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL09wZXJhdGlvbnMubW9kdWxlLnNjc3MnO1xuXG5mdW5jdGlvbiBMaXN0SXRlbSh7IGl0ZW0gfSkge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RUaXRsZX0+eyBpdGVtLnRpdGxlIH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdFN1bW1hcnl9PnsgaXRlbS5zdW1tYXJ5IH08L2Rpdj5cbiAgICA8L2xpPlxuICApXG59XG5cbmZ1bmN0aW9uIExpc3QoeyBpdGVtcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgeyBpdGVtcy5tYXAoaXRlbSA9PiA8TGlzdEl0ZW0gaXRlbT17aXRlbX0gLz4pIH1cbiAgICA8L3VsPlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3BlcmF0aW9ucygpIHtcbiAgY29uc3Qgb3BlcmF0aW9ucyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiAnVGFzayBhbmQgdGFyZ2V0IGxvYWRlcicsXG4gICAgICBzdW1tYXJ5OiAnQXQgYW55IG1vbWVudCB5b3UgY2FuIHNlZSB0ZWFtbWF0ZSBwcm9ncmVzcydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGl0bGU6ICdGZWF0dXJlIFN0b3JlJyxcbiAgICAgIHN1bW1hcnk6ICdFZmZlY3RpdmVseSBzZWFyY2ggYW5kIHVzZSBmZWF0dXJlcyBmb3Igc29sdmluZyBEUyB0YXNrc1xcbicgK1xuICAgICAgICAnQnVpbGQgc2VsZi1leHBsYW5hdG9yeSBmZWF0dXJlIG5hbWluZyBzeXN0ZW0gZm9yIGVhc3kgaW50ZXJwcmV0YXRpb24gYW5kIGRpYWxvZyB3aXRoIGV4cGVydHNcXG4nICtcbiAgICAgICAgJ0NyZWF0ZSBhdXRvbWF0aWMgc2VydmljZXMgZm9yIGludGVycHJldGF0aW9uIGFuZCBleHBsYW5hdGlvbiBvZiBmZWF0dXJlcyBmb3IgZXhwZXJ0cyBhbmQgbWFuYWdlcnMuJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICB0aXRsZTogJ01ldHJpYyBTZXJ2aWNlJyxcbiAgICAgIHN1bW1hcnk6ICdFZmZlY3RpdmVseSBzZWFyY2ggYW5kIHVzZSBmZWF0dXJlcyBmb3Igc29sdmluZyBEUyB0YXNrcy5CdWlsZCBzZWxmLWV4cGxhbmF0b3J5IGZlYXR1cmUgbmFtaW5nIHN5c3RlbSBmb3IgZWFzeSBpbnRlcnByZXRhdGlvbiBhbmQgZGlhbG9nIHdpdGggZXhwZXJ0c1xcbicgK1xuICAgICAgICAnQ3JlYXRlIGF1dG9tYXRpYyBzZXJ2aWNlcyBmb3IgaW50ZXJwcmV0YXRpb24gYW5kIGV4cGxhbmF0aW9uIG9mIGZlYXR1cmVzIGZvciBleHBlcnRzIGFuZCBtYW5hZ2Vycy4nXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHRpdGxlOiAnU3VibWl0dGVyJyxcbiAgICAgIHN1bW1hcnk6ICdFZmZlY3RpdmVseSBzZWFyY2ggYW5kIHVzZSBmZWF0dXJlcyBmb3Igc29sdmluZyBEUyB0YXNrcy5CdWlsZCBzZWxmLWV4cGxhbmF0b3J5IGZlYXR1cmUgbmFtaW5nIHN5c3RlbSBmb3IgZWFzeSBpbnRlcnByZXRhdGlvbiBhbmQgZGlhbG9nIHdpdGggZXhwZXJ0c1xcbicgK1xuICAgICAgICAnQ3JlYXRlIGF1dG9tYXRpYyBzZXJ2aWNlcyBmb3IgaW50ZXJwcmV0YXRpb24gYW5kIGV4cGxhbmF0aW9uIG9mIGZlYXR1cmVzIGZvciBleHBlcnRzIGFuZCBtYW5hZ2Vycy4nXG4gICAgfVxuXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9Pk1ha2UgZnJlcXVlbnQgb3BlcmF0aW9ucyBlYXNpZXIgPC9oMz5cbiAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5zdWJIZWFkaW5nfT5ldmVuIGRvbid0IGRvIGl0IGF0IGFsbDwvaDQ+XG4gICAgICA8TGlzdCBpdGVtcz17b3BlcmF0aW9uc30gLz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/operations/Operations.jsx\n");

/***/ })

})