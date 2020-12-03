webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousel/Carousel.jsx":
/*!******************************************!*\
  !*** ./components/carousel/Carousel.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carousel; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel.module.scss */ \"./components/carousel/Carousel.module.scss\");\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hooks_UseWindowResize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/UseWindowResize */ \"./hooks/UseWindowResize.js\");\n/* harmony import */ var _lightbox_component_LightboxComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lightbox-component/LightboxComponent */ \"./components/lightbox-component/LightboxComponent.jsx\");\n/* harmony import */ var _asciinema_player_AsciinemaPlayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../asciinema-player/AsciinemaPlayer */ \"./components/asciinema-player/AsciinemaPlayer.jsx\");\n\n\n\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/components/carousel/Carousel.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction CarouselTabs(_ref) {\n  var _this = this;\n\n  var items = _ref.items,\n      currentIndex = _ref.currentIndex,\n      tabClick = _ref.tabClick;\n  return __jsx(\"ul\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselTabs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, items.map(function (tab, index) {\n    return __jsx(CarouselTabsItem, {\n      tab: tab,\n      active: currentIndex === index,\n      tabClick: tabClick,\n      index: index,\n      key: tab.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 34\n      }\n    });\n  }));\n}\n\n_c = CarouselTabs;\n\nfunction CarouselTabsItem(_ref2) {\n  var tab = _ref2.tab,\n      active = _ref2.active,\n      index = _ref2.index,\n      tabClick = _ref2.tabClick;\n\n  var handleTabClick = function handleTabClick(index) {\n    tabClick(index);\n  };\n\n  return __jsx(\"li\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselTabsItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"\".concat(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselTabsLink, \" \").concat(active ? _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselTabsLinkActive : ''),\n    onClick: function onClick() {\n      return handleTabClick(index);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, tab.title));\n}\n\n_c2 = CarouselTabsItem;\n\nfunction CarouselItem(_ref3) {\n  var item = _ref3.item,\n      imageClick = _ref3.imageClick;\n  return __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselFig,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, item.preview ? __jsx(\"a\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselLink,\n    onClick: function onClick() {\n      return imageClick(item.image);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselImg,\n    src: item.preview,\n    alt: item.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 99\n    }\n  })) : item.html ? __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselMedia,\n    dangerouslySetInnerHTML: {\n      __html: item.html\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 192\n    }\n  }) : item.asciicinema ? __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselAscii,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 301\n    }\n  }, __jsx(_asciinema_player_AsciinemaPlayer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    src: item.asciicinema,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 339\n    }\n  })) : ''), __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselContext,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, item.title), __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselSummary,\n    dangerouslySetInnerHTML: {\n      __html: item.summary\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  })));\n}\n\n_c3 = CarouselItem;\n\nfunction CarouselItems(_ref4) {\n  _s();\n\n  var _this2 = this;\n\n  var items = _ref4.items,\n      handleChangeCurrentIndex = _ref4.handleChangeCurrentIndex,\n      clickedTabIndex = _ref4.clickedTabIndex,\n      imageClick = _ref4.imageClick;\n  var slider = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      variableWidth = _useState[0],\n      setVariableWidth = _useState[1];\n\n  var _useWindowSize = Object(_hooks_UseWindowResize__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n      _useWindowSize2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useWindowSize, 1),\n      widthWidth = _useWindowSize2[0];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setVariableWidth(widthWidth < 768);\n  }, [widthWidth]);\n  var settings = {\n    dots: false,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    variableWidth: variableWidth,\n    beforeChange: function beforeChange(current, next) {\n      handleChangeCurrentIndex(next);\n    }\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (clickedTabIndex !== null) {\n      slider.current.slickGoTo(clickedTabIndex);\n    }\n  }, [clickedTabIndex]);\n  return __jsx(react_slick__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: slider\n  }, settings, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }), items.map(function (slide) {\n    return __jsx(CarouselItem, {\n      item: slide,\n      key: slide.id,\n      imageClick: imageClick,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 27\n      }\n    });\n  }));\n}\n\n_s(CarouselItems, \"bfakGvwCgPvfaQGtP2x8HVh7e3Y=\", false, function () {\n  return [_hooks_UseWindowResize__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c4 = CarouselItems;\nfunction Carousel(_ref5) {\n  _s2();\n\n  var items = _ref5.items;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      clickedTabIndex = _useState3[0],\n      setClickedTabIndex = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      images = _useState4[0],\n      setImages = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isOpen = _useState5[0],\n      setIsOpen = _useState5[1];\n\n  var handleChangeCurrentIndex = function handleChangeCurrentIndex(index) {\n    return setCurrentIndex(index);\n  };\n\n  var tabClick = function tabClick(index) {\n    setClickedTabIndex(index);\n  };\n\n  var imageClick = function imageClick(image) {\n    console.log(image);\n    setImages([image]);\n    setIsOpen(true);\n  };\n\n  var closeClick = function closeClick() {\n    setIsOpen(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carousel,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }, __jsx(CarouselTabs, {\n    items: items,\n    currentIndex: currentIndex,\n    tabClick: tabClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }), __jsx(CarouselItems, {\n    items: items,\n    handleChangeCurrentIndex: handleChangeCurrentIndex,\n    clickedTabIndex: clickedTabIndex,\n    imageClick: imageClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  })), __jsx(_lightbox_component_LightboxComponent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    images: images,\n    isOpen: isOpen,\n    closeClick: closeClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s2(Carousel, \"hhRs/jVkHvABm3sbbkp2YJ3vrp8=\");\n\n_c5 = Carousel;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"CarouselTabs\");\n$RefreshReg$(_c2, \"CarouselTabsItem\");\n$RefreshReg$(_c3, \"CarouselItem\");\n$RefreshReg$(_c4, \"CarouselItems\");\n$RefreshReg$(_c5, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC9DYXJvdXNlbC5qc3g/YjJhZiJdLCJuYW1lcyI6WyJDYXJvdXNlbFRhYnMiLCJpdGVtcyIsImN1cnJlbnRJbmRleCIsInRhYkNsaWNrIiwic3R5bGVzIiwiY2Fyb3VzZWxUYWJzIiwibWFwIiwidGFiIiwiaW5kZXgiLCJpZCIsIkNhcm91c2VsVGFic0l0ZW0iLCJhY3RpdmUiLCJoYW5kbGVUYWJDbGljayIsImNhcm91c2VsVGFic0l0ZW0iLCJjYXJvdXNlbFRhYnNMaW5rIiwiY2Fyb3VzZWxUYWJzTGlua0FjdGl2ZSIsInRpdGxlIiwiQ2Fyb3VzZWxJdGVtIiwiaXRlbSIsImltYWdlQ2xpY2siLCJjYXJvdXNlbEl0ZW0iLCJjYXJvdXNlbEZpZyIsInByZXZpZXciLCJjYXJvdXNlbExpbmsiLCJpbWFnZSIsImNhcm91c2VsSW1nIiwiaHRtbCIsImNhcm91c2VsTWVkaWEiLCJfX2h0bWwiLCJhc2NpaWNpbmVtYSIsImNhcm91c2VsQXNjaWkiLCJjYXJvdXNlbENvbnRleHQiLCJjYXJvdXNlbFRpdGxlIiwiY2Fyb3VzZWxTdW1tYXJ5Iiwic3VtbWFyeSIsIkNhcm91c2VsSXRlbXMiLCJoYW5kbGVDaGFuZ2VDdXJyZW50SW5kZXgiLCJjbGlja2VkVGFiSW5kZXgiLCJzbGlkZXIiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZhcmlhYmxlV2lkdGgiLCJzZXRWYXJpYWJsZVdpZHRoIiwidXNlV2luZG93U2l6ZSIsIndpZHRoV2lkdGgiLCJ1c2VFZmZlY3QiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJiZWZvcmVDaGFuZ2UiLCJjdXJyZW50IiwibmV4dCIsInNsaWNrR29UbyIsInNsaWRlIiwiQ2Fyb3VzZWwiLCJzZXRDdXJyZW50SW5kZXgiLCJzZXRDbGlja2VkVGFiSW5kZXgiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJp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QixnQkFBWSxFQUFFQyxZQUExQztBQUF3RCxZQUFRLEVBQUVDLFFBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsYUFBRDtBQUFlLFNBQUssRUFBRUYsS0FBdEI7QUFBNkIsNEJBQXdCLEVBQUVtQyx3QkFBdkQ7QUFBaUYsbUJBQWUsRUFBRUMsZUFBbEc7QUFBbUgsY0FBVSxFQUFFbEIsVUFBL0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLDZFQUFEO0FBQW1CLFVBQU0sRUFBRXlDLE1BQTNCO0FBQW1DLFVBQU0sRUFBRUUsTUFBM0M7QUFBbUQsY0FBVSxFQUFFSSxVQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERjtBQVNEOztJQWhDdUJULFE7O01BQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsL0Nhcm91c2VsLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJvdXNlbC5tb2R1bGUuc2Nzcyc7XG5cblxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vLi4vaG9va3MvVXNlV2luZG93UmVzaXplXCI7XG5pbXBvcnQgTGlnaHRib3hDb21wb25lbnQgZnJvbSBcIi4uL2xpZ2h0Ym94LWNvbXBvbmVudC9MaWdodGJveENvbXBvbmVudFwiO1xuaW1wb3J0IEFzY2lpbmVtYVBsYXllciBmcm9tIFwiLi4vYXNjaWluZW1hLXBsYXllci9Bc2NpaW5lbWFQbGF5ZXJcIjtcblxuXG5mdW5jdGlvbiBDYXJvdXNlbFRhYnMoeyBpdGVtcywgY3VycmVudEluZGV4LCB0YWJDbGljayB9KSB7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxUYWJzfT5cbiAgICAgIHtpdGVtcy5tYXAoKHRhYiwgaW5kZXgpID0+IDxDYXJvdXNlbFRhYnNJdGVtIHRhYj17dGFifSBhY3RpdmU9e2N1cnJlbnRJbmRleCA9PT0gaW5kZXh9IHRhYkNsaWNrPXt0YWJDbGlja30gaW5kZXg9e2luZGV4fSBrZXk9e3RhYi5pZH0vPil9XG4gICAgPC91bD5cbiAgKVxufVxuXG5mdW5jdGlvbiBDYXJvdXNlbFRhYnNJdGVtKHsgdGFiLCBhY3RpdmUsIGluZGV4LCB0YWJDbGljayB9KSB7XG4gIGNvbnN0IGhhbmRsZVRhYkNsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgdGFiQ2xpY2soaW5kZXgpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxUYWJzSXRlbX0+XG4gICAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJvdXNlbFRhYnNMaW5rfSAke2FjdGl2ZSA/IHN0eWxlcy5jYXJvdXNlbFRhYnNMaW5rQWN0aXZlIDogJyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soaW5kZXgpfT57dGFiLnRpdGxlfTwvYT5cbiAgICA8L2xpPlxuICApXG59XG5cbmZ1bmN0aW9uIENhcm91c2VsSXRlbSh7IGl0ZW0sIGltYWdlQ2xpY2sgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxJdGVtfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxGaWd9PlxuICAgICAgICB7aXRlbS5wcmV2aWV3ID8gPGEgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxMaW5rfSBvbkNsaWNrPXsoKSA9PiBpbWFnZUNsaWNrKGl0ZW0uaW1hZ2UpfT48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsSW1nfSBzcmM9e2l0ZW0ucHJldmlld30gYWx0PXtpdGVtLnRpdGxlfS8+PC9hPiAgOiBpdGVtLmh0bWwgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsTWVkaWF9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5odG1sIH19Lz4gOiBpdGVtLmFzY2lpY2luZW1hID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbEFzY2lpfT48QXNjaWluZW1hUGxheWVyIHNyYz17IGl0ZW0uYXNjaWljaW5lbWEgfSAvPjwvZGl2PiA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsQ29udGV4dH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxUaXRsZX0+XG4gICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsU3VtbWFyeX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLnN1bW1hcnkgfX0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcm91c2VsSXRlbXMoeyBpdGVtcywgaGFuZGxlQ2hhbmdlQ3VycmVudEluZGV4LCBjbGlja2VkVGFiSW5kZXgsIGltYWdlQ2xpY2sgfSkge1xuICBjb25zdCBzbGlkZXIgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt2YXJpYWJsZVdpZHRoLCBzZXRWYXJpYWJsZVdpZHRoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dpZHRoV2lkdGhdID0gdXNlV2luZG93U2l6ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VmFyaWFibGVXaWR0aCh3aWR0aFdpZHRoIDwgNzY4KTtcbiAgfSwgW3dpZHRoV2lkdGhdKTtcblxuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICB2YXJpYWJsZVdpZHRoOiB2YXJpYWJsZVdpZHRoLFxuICAgIGJlZm9yZUNoYW5nZTogKGN1cnJlbnQsIG5leHQpID0+IHtcbiAgICAgIGhhbmRsZUNoYW5nZUN1cnJlbnRJbmRleChuZXh0KVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjbGlja2VkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgIHNsaWRlci5jdXJyZW50LnNsaWNrR29UbyhjbGlja2VkVGFiSW5kZXgpXG4gICAgfVxuICB9LCBbY2xpY2tlZFRhYkluZGV4XSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxTbGlkZXJcbiAgICAgIHJlZj17c2xpZGVyfVxuICAgICAgey4uLnNldHRpbmdzfVxuICAgID5cbiAgICAgIHtpdGVtcy5tYXAoc2xpZGUgPT4gPENhcm91c2VsSXRlbSBpdGVtPXtzbGlkZX0ga2V5PXtzbGlkZS5pZH0gaW1hZ2VDbGljaz17aW1hZ2VDbGlja30vPil9XG4gICAgPC9TbGlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoeyBpdGVtcyB9KSB7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NsaWNrZWRUYWJJbmRleCwgc2V0Q2xpY2tlZFRhYkluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ3VycmVudEluZGV4ID0gaW5kZXggPT4gc2V0Q3VycmVudEluZGV4KGluZGV4KTtcblxuICBjb25zdCB0YWJDbGljayA9IChpbmRleCkgPT4ge1xuICAgIHNldENsaWNrZWRUYWJJbmRleChpbmRleCk7XG4gIH1cblxuICBjb25zdCBpbWFnZUNsaWNrID0gKGltYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coaW1hZ2UpXG4gICAgc2V0SW1hZ2VzKFtpbWFnZV0pO1xuICAgIHNldElzT3Blbih0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IGNsb3NlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbH0+XG4gICAgICAgIDxDYXJvdXNlbFRhYnMgaXRlbXM9e2l0ZW1zfSBjdXJyZW50SW5kZXg9e2N1cnJlbnRJbmRleH0gdGFiQ2xpY2s9e3RhYkNsaWNrfS8+XG4gICAgICAgIDxDYXJvdXNlbEl0ZW1zIGl0ZW1zPXtpdGVtc30gaGFuZGxlQ2hhbmdlQ3VycmVudEluZGV4PXtoYW5kbGVDaGFuZ2VDdXJyZW50SW5kZXh9IGNsaWNrZWRUYWJJbmRleD17Y2xpY2tlZFRhYkluZGV4fSBpbWFnZUNsaWNrPXtpbWFnZUNsaWNrfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaWdodGJveENvbXBvbmVudCBpbWFnZXM9e2ltYWdlc30gaXNPcGVuPXtpc09wZW59IGNsb3NlQ2xpY2s9e2Nsb3NlQ2xpY2t9Lz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carousel/Carousel.jsx\n");

/***/ })

})