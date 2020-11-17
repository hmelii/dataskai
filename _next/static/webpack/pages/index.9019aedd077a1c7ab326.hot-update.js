webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousel/Carousel.jsx":
/*!******************************************!*\
  !*** ./components/carousel/Carousel.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carousel; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.module.scss */ \"./components/carousel/Carousel.module.scss\");\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/components/carousel/Carousel.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction CarouselTabs(_ref) {\n  var _this = this;\n\n  var items = _ref.items,\n      currentIndex = _ref.currentIndex,\n      tabClick = _ref.tabClick;\n  return __jsx(\"ul\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselTabs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, items.map(function (tab, index) {\n    return __jsx(CarouselTabsItem, {\n      tab: tab,\n      active: currentIndex === index,\n      tabClick: tabClick,\n      index: index,\n      key: tab.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 34\n      }\n    });\n  }));\n}\n\n_c = CarouselTabs;\n\nfunction CarouselTabsItem(_ref2) {\n  var tab = _ref2.tab,\n      active = _ref2.active,\n      index = _ref2.index,\n      tabClick = _ref2.tabClick;\n\n  var handleTabClick = function handleTabClick(index) {\n    tabClick(index);\n  };\n\n  return __jsx(\"li\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselTabsItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"\".concat(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselTabsLink, \" \").concat(active ? _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselTabsLinkActive : ''),\n    onClick: function onClick() {\n      return handleTabClick(index);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, tab.title));\n}\n\n_c2 = CarouselTabsItem;\n\nfunction CarouselItem(_ref3) {\n  var item = _ref3.item;\n  return __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselFig,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselImg,\n    src: item.preview,\n    alt: item.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselContext,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, item.title), __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carouselSummary,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, item.summary)));\n}\n\n_c3 = CarouselItem;\n\nfunction CarouselItems(_ref4) {\n  _s();\n\n  var _this2 = this;\n\n  var items = _ref4.items,\n      handleChangeCurrentIndex = _ref4.handleChangeCurrentIndex;\n  var slider = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var settings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    variableWidth: true,\n    beforeChange: function beforeChange(current, next) {\n      handleChangeCurrentIndex(next);\n    }\n  };\n\n  var slickGoTo = function slickGoTo(index) {\n    slider.slickGoTo(index);\n  };\n\n  return __jsx(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: slider\n  }, settings, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }\n  }), items.map(function (slide) {\n    return __jsx(CarouselItem, {\n      item: slide,\n      key: slide.id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 28\n      }\n    });\n  }));\n}\n\n_s(CarouselItems, \"sRm15xTJlFTCZpmb4IPgNQa1O08=\");\n\n_c4 = CarouselItems;\nfunction Carousel(_ref5) {\n  _s2();\n\n  var items = _ref5.items;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentIndex = _useState[0],\n      setCurrentIndex = _useState[1];\n\n  var handleChangeCurrentIndex = function handleChangeCurrentIndex(index) {\n    return setCurrentIndex(index);\n  };\n\n  var tabClick = function tabClick(index) {\n    console.log(index);\n  };\n\n  return __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.carousel,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, __jsx(CarouselTabs, {\n    items: items,\n    currentIndex: currentIndex,\n    tabClick: tabClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }\n  }), __jsx(CarouselItems, {\n    items: items,\n    handleChangeCurrentIndex: handleChangeCurrentIndex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s2(Carousel, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n\n_c5 = Carousel;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"CarouselTabs\");\n$RefreshReg$(_c2, \"CarouselTabsItem\");\n$RefreshReg$(_c3, \"CarouselItem\");\n$RefreshReg$(_c4, \"CarouselItems\");\n$RefreshReg$(_c5, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC9DYXJvdXNlbC5qc3g/YjJhZiJdLCJuYW1lcyI6WyJDYXJvdXNlbFRhYnMiLCJpdGVtcyIsImN1cnJlbnRJbmRleCIsInRhYkNsaWNrIiwic3R5bGVzIiwiY2Fyb3VzZWxUYWJzIiwibWFwIiwidGFiIiwiaW5kZXgiLCJpZCIsIkNhcm91c2VsVGFic0l0ZW0iLCJhY3RpdmUiLCJoYW5kbGVUYWJDbGljayIsImNhcm91c2VsVGFic0l0ZW0iLCJjYXJvdXNlbFRhYnNMaW5rIiwiY2Fyb3VzZWxUYWJzTGlua0FjdGl2ZSIsInRpdGxlIiwiQ2Fyb3VzZWxJdGVtIiwiaXRlbSIsImNhcm91c2VsSXRlbSIsImNhcm91c2VsRmlnIiwiY2Fyb3VzZWxJbWciLCJwcmV2aWV3IiwiY2Fyb3VzZWxDb250ZXh0IiwiY2Fyb3VzZWxUaXRsZSIsImNhcm91c2VsU3VtbWFyeSIsInN1bW1hcnkiLCJDYXJvdXNlbEl0ZW1zIiwiaGFuZGxlQ2hhbmdlQ3VycmVudEluZGV4Iiwic2xpZGVyIiwidXNlUmVmIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwidmFyaWFibGVXaWR0aCIsImJlZm9yZUNoYW5nZSIsImN1cnJlbnQiLCJuZXh0Iiwic2xpY2tHb1RvIiwic2xpZGUiLCJDYXJvdXNlbCIsInVzZVN0YXRlIiwic2V0Q3VycmVudEluZGV4IiwiY29uc29sZSIsImxvZyIsImNhcm91c2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsWUFBVCxPQUF5RDtBQUFBOztBQUFBLE1BQWpDQyxLQUFpQyxRQUFqQ0EsS0FBaUM7QUFBQSxNQUExQkMsWUFBMEIsUUFBMUJBLFlBQTBCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBRXZELFNBQ0U7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LFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFBYyxTQUFLLEVBQUUvQyxLQUFyQjtBQUE0QixnQkFBWSxFQUFFQyxZQUExQztBQUF3RCxZQUFRLEVBQUVDLFFBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsYUFBRDtBQUFlLFNBQUssRUFBRUYsS0FBdEI7QUFBNkIsNEJBQXdCLEVBQUUyQix3QkFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRDs7SUFmdUJlLFE7O01BQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsL0Nhcm91c2VsLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Nhcm91c2VsLm1vZHVsZS5zY3NzJztcblxuXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcblxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENhcm91c2VsVGFicyh7IGl0ZW1zLCBjdXJyZW50SW5kZXgsIHRhYkNsaWNrIH0pIHtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbFRhYnN9PlxuICAgICAge2l0ZW1zLm1hcCgodGFiLCBpbmRleCkgPT4gPENhcm91c2VsVGFic0l0ZW0gdGFiPXt0YWJ9IGFjdGl2ZT17Y3VycmVudEluZGV4PT09aW5kZXh9IHRhYkNsaWNrPXt0YWJDbGlja30gaW5kZXg9e2luZGV4fSBrZXk9e3RhYi5pZH0gLz4pfVxuICAgIDwvdWw+XG4gIClcbn1cblxuZnVuY3Rpb24gQ2Fyb3VzZWxUYWJzSXRlbSh7IHRhYiwgYWN0aXZlLCBpbmRleCwgdGFiQ2xpY2sgfSkge1xuICBjb25zdCBoYW5kbGVUYWJDbGljayA9IChpbmRleCkgPT4ge1xuICAgIHRhYkNsaWNrKGluZGV4KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsVGFic0l0ZW19PlxuICAgICAgPGEgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2Fyb3VzZWxUYWJzTGlua30gJHthY3RpdmU/c3R5bGVzLmNhcm91c2VsVGFic0xpbmtBY3RpdmU6Jyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soaW5kZXgpfT57dGFiLnRpdGxlfTwvYT5cbiAgICA8L2xpPlxuICApXG59XG5cbmZ1bmN0aW9uIENhcm91c2VsSXRlbSh7IGl0ZW0gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxJdGVtfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxGaWd9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsSW1nfSBzcmM9e2l0ZW0ucHJldmlld30gYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsQ29udGV4dH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxUaXRsZX0+XG4gICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsU3VtbWFyeX0+XG4gICAgICAgICAge2l0ZW0uc3VtbWFyeX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2Fyb3VzZWxJdGVtcyh7IGl0ZW1zLCBoYW5kbGVDaGFuZ2VDdXJyZW50SW5kZXggfSkge1xuICBjb25zdCBzbGlkZXIgPSB1c2VSZWYoKTtcblxuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgYmVmb3JlQ2hhbmdlOiAoY3VycmVudCwgbmV4dCkgPT4ge1xuICAgICAgaGFuZGxlQ2hhbmdlQ3VycmVudEluZGV4KG5leHQpXG4gICAgfVxuICB9O1xuXG5cbiAgY29uc3Qgc2xpY2tHb1RvID0gKGluZGV4KSA9PiB7XG4gICAgc2xpZGVyLnNsaWNrR29UbyhpbmRleClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlclxuICAgICAgcmVmPXtzbGlkZXJ9XG4gICAgICB7Li4uc2V0dGluZ3N9XG4gICAgPlxuICAgICAgeyBpdGVtcy5tYXAoc2xpZGUgPT4gPENhcm91c2VsSXRlbSBpdGVtPXtzbGlkZX0ga2V5PXtzbGlkZS5pZH0gLz4pIH1cblxuICAgIDwvU2xpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHsgaXRlbXMgfSkge1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ3VycmVudEluZGV4ID0gaW5kZXggPT4gc2V0Q3VycmVudEluZGV4KGluZGV4KTtcblxuICBjb25zdCB0YWJDbGljayA9IChpbmRleCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsfT5cbiAgICAgIDxDYXJvdXNlbFRhYnMgaXRlbXM9e2l0ZW1zfSBjdXJyZW50SW5kZXg9e2N1cnJlbnRJbmRleH0gdGFiQ2xpY2s9e3RhYkNsaWNrfS8+XG4gICAgICA8Q2Fyb3VzZWxJdGVtcyBpdGVtcz17aXRlbXN9IGhhbmRsZUNoYW5nZUN1cnJlbnRJbmRleD17aGFuZGxlQ2hhbmdlQ3VycmVudEluZGV4fSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/carousel/Carousel.jsx\n");

/***/ })

})