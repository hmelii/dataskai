webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu/Menu.jsx":
/*!**********************************!*\
  !*** ./components/menu/Menu.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.module.scss */ \"./components/menu/Menu.module.scss\");\n/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/components/menu/Menu.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Item(_ref) {\n  var item = _ref.item;\n  return __jsx(\"li\", {\n    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuLink,\n    href: item.href,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, item.title));\n}\n\n_c = Item;\nfunction Menu() {\n  var _this = this;\n\n  var items = [{\n    id: 1,\n    title: \"Beta testing\",\n    href: \"#testing\"\n  }];\n  return __jsx(\"nav\", {\n    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuTrigger,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuTriggerLine1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuTriggerLine2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuTriggerLine3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), __jsx(\"ul\", {\n    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuList,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, items.map(function (item) {\n    return __jsx(Item, {\n      item: item,\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 29\n      }\n    });\n  })));\n}\n_c2 = Menu;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Item\");\n$RefreshReg$(_c2, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51L01lbnUuanN4P2U0MjUiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJzdHlsZXMiLCJtZW51SXRlbSIsIm1lbnVMaW5rIiwiaHJlZiIsInRpdGxlIiwiTWVudSIsIml0ZW1zIiwiaWQiLCJtZW51IiwibWVudVRyaWdnZXIiLCJtZW51VHJpZ2dlckxpbmUxIiwibWVudVRyaWdnZXJMaW5lMiIsIm1lbnVUcmlnZ2VyTGluZTMiLCJtZW51TGlzdCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0EsU0FBU0EsSUFBVCxPQUF3QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN0QixTQUNFO0FBQUksYUFBUyxFQUFFQyx3REFBTSxDQUFDQyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVELHdEQUFNLENBQUNFLFFBQXJCO0FBQStCLFFBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlESixJQUFJLENBQUNLLEtBQXRELENBREYsQ0FERjtBQUtEOztLQU5RTixJO0FBUU0sU0FBU08sSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFSCxTQUFLLEVBQUUsY0FGVDtBQUdFRCxRQUFJLEVBQUU7QUFIUixHQURZLENBQWQ7QUFRQSxTQUNFO0FBQUssYUFBUyxFQUFFSCx3REFBTSxDQUFDUSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVSLHdEQUFNLENBQUNTLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRVQsd0RBQU0sQ0FBQ1UsZ0JBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sYUFBUyxFQUFFVix3REFBTSxDQUFDVyxnQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxhQUFTLEVBQUVYLHdEQUFNLENBQUNZLGdCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU1FO0FBQUksYUFBUyxFQUFFWix3REFBTSxDQUFDYSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lQLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUFmLElBQUk7QUFBQSxXQUFJLE1BQUMsSUFBRDtBQUFNLFVBQUksRUFBRUEsSUFBWjtBQUFrQixTQUFHLEVBQUVBLElBQUksQ0FBQ1EsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFKO0FBQUEsR0FBZCxDQURKLENBTkYsQ0FERjtBQVlEO01BckJ1QkYsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudS9NZW51LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9NZW51Lm1vZHVsZS5zY3NzJztcblxuXG5mdW5jdGlvbiBJdGVtKHsgaXRlbSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfT5cbiAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVMaW5rfSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT5cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6IFwiQmV0YSB0ZXN0aW5nXCIsXG4gICAgICBocmVmOiBcIiN0ZXN0aW5nXCJcbiAgICB9LFxuXG4gIF07XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cbiAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVUcmlnZ2VyfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWVudVRyaWdnZXJMaW5lMX0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWVudVRyaWdnZXJMaW5lMn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWVudVRyaWdnZXJMaW5lM30gLz5cbiAgICAgIDwvYT5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tZW51TGlzdH0+XG4gICAgICAgIHsgaXRlbXMubWFwKGl0ZW0gPT4gPEl0ZW0gaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPikgfVxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menu/Menu.jsx\n");

/***/ })

})