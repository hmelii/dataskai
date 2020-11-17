webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousel/Carousel.jsx":
/*!******************************************!*\
  !*** ./components/carousel/Carousel.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carousel; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.module.scss */ \"./components/carousel/Carousel.module.scss\");\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/components/carousel/Carousel.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction CarouselTabs(_ref) {\n  var _this = this;\n\n  var items = _ref.items,\n      currentIndex = _ref.currentIndex;\n  console.log(currentIndex);\n  return __jsx(\"ul\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselTabs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, items.map(function (tab, index) {\n    return __jsx(CarouselTabsItem, {\n      tab: tab,\n      active: currentIndex === index,\n      key: tab.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 34\n      }\n    });\n  }));\n}\n\n_c = CarouselTabs;\n\nfunction CarouselTabsItem(_ref2) {\n  var tab = _ref2.tab,\n      active = _ref2.active;\n\n  var handleTabClick = function handleTabClick() {};\n\n  return __jsx(\"li\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselTabsItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"\".concat(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselTabsLink, \" \").concat(active ? _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselTabsLinkActive : ''),\n    onClick: handleTabClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, tab.title));\n}\n\n_c2 = CarouselTabsItem;\n\nfunction CarouselItem(_ref3) {\n  var item = _ref3.item;\n  return __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselFig,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselImg,\n    src: item.preview,\n    alt: item.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselContext,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, item.title), __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselSummary,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, item.summary)));\n}\n\n_c3 = CarouselItem;\n\nfunction CarouselItems(_ref4) {\n  var _this2 = this;\n\n  var items = _ref4.items,\n      handleChangeCurrentIndex = _ref4.handleChangeCurrentIndex;\n  var settings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    variableWidth: true,\n    afterChange: function afterChange(current) {\n      handleChangeCurrentIndex(current);\n    }\n  };\n\n  var handleTabClick = function handleTabClick() {};\n\n  return __jsx(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, settings, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }), items.map(function (slide) {\n    return __jsx(CarouselItem, {\n      item: slide,\n      key: slide.id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 28\n      }\n    });\n  }));\n}\n\n_c4 = CarouselItems;\nfunction Carousel(_ref5) {\n  _s();\n\n  var items = _ref5.items;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentIndex = _useState[0],\n      setCurrentIndex = _useState[1];\n\n  var handleChangeCurrentIndex = function handleChangeCurrentIndex(index) {\n    return setCurrentIndex(index);\n  };\n\n  return __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carousel,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 5\n    }\n  }, __jsx(CarouselTabs, {\n    items: items,\n    currentIndex: currentIndex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }), __jsx(CarouselItems, {\n    items: items,\n    handleChangeCurrentIndex: handleChangeCurrentIndex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(Carousel, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n\n_c5 = Carousel;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"CarouselTabs\");\n$RefreshReg$(_c2, \"CarouselTabsItem\");\n$RefreshReg$(_c3, \"CarouselItem\");\n$RefreshReg$(_c4, \"CarouselItems\");\n$RefreshReg$(_c5, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC9DYXJvdXNlbC5qc3g/YjJhZiJdLCJuYW1lcyI6WyJDYXJvdXNlbFRhYnMiLCJpdGVtcyIsImN1cnJlbnRJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjYXJvdXNlbFRhYnMiLCJtYXAiLCJ0YWIiLCJpbmRleCIsImlkIiwiQ2Fyb3VzZWxUYWJzSXRlbSIsImFjdGl2ZSIsImhhbmRsZVRhYkNsaWNrIiwiY2Fyb3VzZWxUYWJzSXRlbSIsImNhcm91c2VsVGFic0xpbmsiLCJjYXJvdXNlbFRhYnNMaW5rQWN0aXZlIiwidGl0bGUiLCJDYXJvdXNlbEl0ZW0iLCJpdGVtIiwiY2Fyb3VzZWxJdGVtIiwiY2Fyb3VzZWxGaWciLCJjYXJvdXNlbEltZyIsInByZXZpZXciLCJjYXJvdXNlbENvbnRleHQiLCJjYXJvdXNlbFRpdGxlIiwiY2Fyb3VzZWxTdW1tYXJ5Iiwic3VtbWFyeSIsIkNhcm91c2VsSXRlbXMiLCJoYW5kbGVDaGFuZ2VDdXJyZW50SW5kZXgiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJ2YXJpYWJsZVdpZHRoIiwiYWZ0ZXJDaGFuZ2UiLCJjdXJyZW50Iiwic2xpZGUiLCJDYXJvdXNlbCIsInVzZVN0YXRlIiwic2V0Q3VycmVudEluZGV4IiwiY2Fyb3VzZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFlBQVQsT0FBK0M7QUFBQTs7QUFBQSxNQUF2QkMsS0FBdUIsUUFBdkJBLEtBQXVCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUM3Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFlBQVo7QUFFQSxTQUNFO0FBQUksYUFBUyxFQUFFRyw0REFBTSxDQUFDQyxZQUF0QjtBQUFBO0FBQUE7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Q00sR0FBTixDQUFVLFVBQUFnQyxLQUFLO0FBQUEsV0FBSSxNQUFDLFlBQUQ7QUFBYyxVQUFJLEVBQUVBLEtBQXBCO0FBQTJCLFNBQUcsRUFBRUEsS0FBSyxDQUFDN0IsRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFKO0FBQUEsR0FBZixDQUhKLENBREY7QUFRRDs7TUExQlFrQixhO0FBNEJNLFNBQVNZLFFBQVQsUUFBNkI7QUFBQTs7QUFBQSxNQUFUdkMsS0FBUyxTQUFUQSxLQUFTOztBQUFBLGtCQUNGd0Msc0RBQVEsQ0FBQyxDQUFELENBRE47QUFBQSxNQUNuQ3ZDLFlBRG1DO0FBQUEsTUFDckJ3QyxlQURxQjs7QUFHMUMsTUFBTWIsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFBcEIsS0FBSztBQUFBLFdBQUlpQyxlQUFlLENBQUNqQyxLQUFELENBQW5CO0FBQUEsR0FBdEM7O0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBRUosNERBQU0sQ0FBQ3NDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFBYyxTQUFLLEVBQUUxQyxLQUFyQjtBQUE0QixnQkFBWSxFQUFFQyxZQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGFBQUQ7QUFBZSxTQUFLLEVBQUVELEtBQXRCO0FBQTZCLDRCQUF3QixFQUFFNEIsd0JBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQ7O0dBYnVCVyxROztNQUFBQSxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYXJvdXNlbC9DYXJvdXNlbC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2Fyb3VzZWwubW9kdWxlLnNjc3MnO1xuXG5cbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ2Fyb3VzZWxUYWJzKHsgaXRlbXMsIGN1cnJlbnRJbmRleCB9KSB7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRJbmRleClcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbFRhYnN9PlxuICAgICAge2l0ZW1zLm1hcCgodGFiLCBpbmRleCkgPT4gPENhcm91c2VsVGFic0l0ZW0gdGFiPXt0YWJ9IGFjdGl2ZT17Y3VycmVudEluZGV4PT09aW5kZXh9IGtleT17dGFiLmlkfSAvPil9XG4gICAgPC91bD5cbiAgKVxufVxuXG5mdW5jdGlvbiBDYXJvdXNlbFRhYnNJdGVtKHsgdGFiLCBhY3RpdmUgfSkge1xuICBjb25zdCBoYW5kbGVUYWJDbGljayA9ICgpID0+IHtcblxuICB9XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsVGFic0l0ZW19PlxuICAgICAgPGEgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2Fyb3VzZWxUYWJzTGlua30gJHthY3RpdmU/c3R5bGVzLmNhcm91c2VsVGFic0xpbmtBY3RpdmU6Jyd9YH0gb25DbGljaz17aGFuZGxlVGFiQ2xpY2t9Pnt0YWIudGl0bGV9PC9hPlxuICAgIDwvbGk+XG4gIClcbn1cblxuZnVuY3Rpb24gQ2Fyb3VzZWxJdGVtKHsgaXRlbSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbEl0ZW19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbEZpZ30+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxJbWd9IHNyYz17aXRlbS5wcmV2aWV3fSBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxDb250ZXh0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbFRpdGxlfT5cbiAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxTdW1tYXJ5fT5cbiAgICAgICAgICB7aXRlbS5zdW1tYXJ5fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJvdXNlbEl0ZW1zKHsgaXRlbXMsIGhhbmRsZUNoYW5nZUN1cnJlbnRJbmRleCB9KSB7XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICBhZnRlckNoYW5nZTogY3VycmVudCA9PiB7XG4gICAgICBoYW5kbGVDaGFuZ2VDdXJyZW50SW5kZXgoY3VycmVudClcbiAgICB9XG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVUYWJDbGljayA9ICgpID0+IHtcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U2xpZGVyXG4gICAgICB7Li4uc2V0dGluZ3N9XG4gICAgPlxuICAgICAgeyBpdGVtcy5tYXAoc2xpZGUgPT4gPENhcm91c2VsSXRlbSBpdGVtPXtzbGlkZX0ga2V5PXtzbGlkZS5pZH0gLz4pIH1cblxuICAgIDwvU2xpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHsgaXRlbXMgfSkge1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ3VycmVudEluZGV4ID0gaW5kZXggPT4gc2V0Q3VycmVudEluZGV4KGluZGV4KTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsfT5cbiAgICAgIDxDYXJvdXNlbFRhYnMgaXRlbXM9e2l0ZW1zfSBjdXJyZW50SW5kZXg9e2N1cnJlbnRJbmRleH0vPlxuICAgICAgPENhcm91c2VsSXRlbXMgaXRlbXM9e2l0ZW1zfSBoYW5kbGVDaGFuZ2VDdXJyZW50SW5kZXg9e2hhbmRsZUNoYW5nZUN1cnJlbnRJbmRleH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carousel/Carousel.jsx\n");

/***/ })

})