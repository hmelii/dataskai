webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousel/Carousel.jsx":
/*!******************************************!*\
  !*** ./components/carousel/Carousel.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carousel; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel.module.scss */ \"./components/carousel/Carousel.module.scss\");\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hooks_UseWindowResize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/UseWindowResize */ \"./hooks/UseWindowResize.js\");\n/* harmony import */ var _lightbox_component_LightboxComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lightbox-component/LightboxComponent */ \"./components/lightbox-component/LightboxComponent.jsx\");\n/* harmony import */ var _asciinema_player_AsciinemaPlayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../asciinema-player/AsciinemaPlayer */ \"./components/asciinema-player/AsciinemaPlayer.jsx\");\n\n\n\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/components/carousel/Carousel.jsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction CarouselTabs(_ref) {\n  var _this = this;\n\n  var items = _ref.items,\n      currentIndex = _ref.currentIndex,\n      tabClick = _ref.tabClick;\n  return __jsx(\"ul\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselTabs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, items.map(function (tab, index) {\n    return __jsx(CarouselTabsItem, {\n      tab: tab,\n      active: currentIndex === index,\n      tabClick: tabClick,\n      index: index,\n      key: tab.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 34\n      }\n    });\n  }));\n}\n\n_c = CarouselTabs;\n\nfunction CarouselTabsItem(_ref2) {\n  var tab = _ref2.tab,\n      active = _ref2.active,\n      index = _ref2.index,\n      tabClick = _ref2.tabClick;\n\n  var handleTabClick = function handleTabClick(index) {\n    tabClick(index);\n  };\n\n  return __jsx(\"li\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselTabsItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"\".concat(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselTabsLink, \" \").concat(active ? _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselTabsLinkActive : ''),\n    onClick: function onClick() {\n      return handleTabClick(index);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, tab.title));\n}\n\n_c2 = CarouselTabsItem;\n\nfunction CarouselItem(_ref3) {\n  var item = _ref3.item,\n      imageClick = _ref3.imageClick;\n  return __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselFig,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, item.preview ? __jsx(\"a\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselLink,\n    onClick: function onClick() {\n      return imageClick(item.image);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselImg,\n    src: item.preview,\n    alt: item.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 99\n    }\n  })) : item.html ? __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselMedia,\n    dangerouslySetInnerHTML: {\n      __html: item.html\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 192\n    }\n  }) : item.asciicinema ? __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselAscii,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 301\n    }\n  }, __jsx(_asciinema_player_AsciinemaPlayer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    src: item.asciicinema,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 339\n    }\n  })) : ''), __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselContext,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, item.title), __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carouselSummary,\n    dangerouslySetInnerHTML: {\n      __html: item.summary\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  })));\n}\n\n_c3 = CarouselItem;\n\nfunction CarouselItems(_ref4) {\n  _s();\n\n  var _this2 = this;\n\n  var items = _ref4.items,\n      handleChangeCurrentIndex = _ref4.handleChangeCurrentIndex,\n      clickedTabIndex = _ref4.clickedTabIndex,\n      imageClick = _ref4.imageClick;\n  var slider = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      variableWidth = _useState[0],\n      setVariableWidth = _useState[1];\n\n  var _useWindowSize = Object(_hooks_UseWindowResize__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n      _useWindowSize2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useWindowSize, 1),\n      widthWidth = _useWindowSize2[0];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setVariableWidth(widthWidth < 768);\n  }, [widthWidth]);\n  var settings = {\n    dots: false,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    focusOnSelect: true,\n    variableWidth: variableWidth,\n    beforeChange: function beforeChange(current, next) {\n      handleChangeCurrentIndex(next);\n    }\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (clickedTabIndex !== null) {\n      slider.current.slickGoTo(clickedTabIndex);\n    }\n  }, [clickedTabIndex]);\n  return __jsx(react_slick__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: slider\n  }, settings, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }), items.map(function (slide) {\n    return __jsx(CarouselItem, {\n      item: slide,\n      key: slide.id,\n      imageClick: imageClick,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 27\n      }\n    });\n  }));\n}\n\n_s(CarouselItems, \"bfakGvwCgPvfaQGtP2x8HVh7e3Y=\", false, function () {\n  return [_hooks_UseWindowResize__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c4 = CarouselItems;\nfunction Carousel(_ref5) {\n  _s2();\n\n  var items = _ref5.items;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      clickedTabIndex = _useState3[0],\n      setClickedTabIndex = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      images = _useState4[0],\n      setImages = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isOpen = _useState5[0],\n      setIsOpen = _useState5[1];\n\n  var handleChangeCurrentIndex = function handleChangeCurrentIndex(index) {\n    return setCurrentIndex(index);\n  };\n\n  var tabClick = function tabClick(index) {\n    setClickedTabIndex(index);\n  };\n\n  var imageClick = function imageClick(image) {\n    console.log(image);\n    setImages([image]);\n    setIsOpen(true);\n  };\n\n  var closeClick = function closeClick() {\n    setIsOpen(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.carousel,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }, __jsx(CarouselTabs, {\n    items: items,\n    currentIndex: currentIndex,\n    tabClick: tabClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }), __jsx(CarouselItems, {\n    items: items,\n    handleChangeCurrentIndex: handleChangeCurrentIndex,\n    clickedTabIndex: clickedTabIndex,\n    imageClick: imageClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  })), __jsx(_lightbox_component_LightboxComponent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    images: images,\n    isOpen: isOpen,\n    closeClick: closeClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s2(Carousel, \"hhRs/jVkHvABm3sbbkp2YJ3vrp8=\");\n\n_c5 = Carousel;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"CarouselTabs\");\n$RefreshReg$(_c2, \"CarouselTabsItem\");\n$RefreshReg$(_c3, \"CarouselItem\");\n$RefreshReg$(_c4, \"CarouselItems\");\n$RefreshReg$(_c5, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC9DYXJvdXNlbC5qc3g/YjJhZiJdLCJuYW1lcyI6WyJDYXJvdXNlbFRhYnMiLCJpdGVtcyIsImN1cnJlbnRJbmRleCIsInRhYkNsaWNrIiwic3R5bGVzIiwiY2Fyb3VzZWxUYWJzIiwibWFwIiwidGFiIiwiaW5kZXgiLCJpZCIsIkNhcm91c2VsVGFic0l0ZW0iLCJhY3RpdmUiLCJoYW5kbGVUYWJDbGljayIsImNhcm91c2VsVGFic0l0ZW0iLCJjYXJvdXNlbFRhYnNMaW5rIiwiY2Fyb3VzZWxUYWJzTGlua0FjdGl2ZSIsInRpdGxlIiwiQ2Fyb3VzZWxJdGVtIiwiaXRlbSIsImltYWdlQ2xpY2siLCJjYXJvdXNlbEl0ZW0iLCJjYXJvdXNlbEZpZyIsInByZXZpZXciLCJjYXJvdXNlbExpbmsiLCJpbWFnZSIsImNhcm91c2VsSW1nIiwiaHRtbCIsImNhcm91c2VsTWVkaWEiLCJfX2h0bWwiLCJhc2NpaWNpbmVtYSIsImNhcm91c2VsQXNjaWkiLCJjYXJvdXNlbENvbnRleHQiLCJjYXJvdXNlbFRpdGxlIiwiY2Fyb3VzZWxTdW1tYXJ5Iiwic3VtbWFyeSIsIkNhcm91c2VsSXRlbXMiLCJoYW5kbGVDaGFuZ2VDdXJyZW50SW5kZXgiLCJjbGlja2VkVGFiSW5kZXgiLCJzbGlkZXIiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZhcmlhYmxlV2lkdGgiLCJzZXRWYXJpYWJsZVdpZHRoIiwidXNlV2luZG93U2l6ZSIsIndpZHRoV2lkdGgiLCJ1c2VFZmZlY3QiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJmb2N1c09uU2VsZWN0IiwiYmVmb3JlQ2hhbmdlIiwiY3VycmVudCIsIm5leHQiLCJzbGlja0dvVG8iLCJzbGlkZSIsIkNhcm91c2VsIiwic2V0Q3VycmVudEluZGV4Iiwic2V0Q2xpY2tlZFRhYkluZGV4IiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY29uc29sZSIsImxvZyIsImNsb3NlQ2xpY2siLCJjYXJvdXNlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFlBQVQsT0FBeUQ7QUFBQTs7QUFBQSxNQUFqQ0MsS0FBaUMsUUFBakNBLEtBQWlDO0FBQUEsTUFBMUJDLFlBQTBCLFFBQTFCQSxZQUEwQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUV2RCxTQUNFO0FBQUksYUFBUyxFQUFFQyw0REFBTSxDQUFDQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUNDLEdBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQWdCLE1BQUMsZ0JBQUQ7QUFBa0IsU0FBRyxFQUFFRCxHQUF2QjtBQUE0QixZQUFNLEVBQUVMLFlBQVksS0FBS00sS0FBckQ7QUFBNEQsY0FBUSxFQUFFTCxRQUF0RTtBQUFnRixXQUFLLEVBQUVLLEtBQXZGO0FBQThGLFNBQUcsRUFBRUQsR0FBRyxDQUFDRSxFQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWhCO0FBQUEsR0FBVixDQURILENBREY7QUFLRDs7S0FQUVQsWTs7QUFTVCxTQUFTVSxnQkFBVCxRQUE0RDtBQUFBLE1BQWhDSCxHQUFnQyxTQUFoQ0EsR0FBZ0M7QUFBQSxNQUEzQkksTUFBMkIsU0FBM0JBLE1BQTJCO0FBQUEsTUFBbkJILEtBQW1CLFNBQW5CQSxLQUFtQjtBQUFBLE1BQVpMLFFBQVksU0FBWkEsUUFBWTs7QUFDMUQsTUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDSixLQUFELEVBQVc7QUFDaENMLFlBQVEsQ0FBQ0ssS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxTQUNFO0FBQUksYUFBUyxFQUFFSiw0REFB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RSxNQUFDLFlBQUQ7QUFBYyxTQUFLLEVBQUVuRSxLQUFyQjtBQUE0QixnQkFBWSxFQUFFQyxZQUExQztBQUF3RCxZQUFRLEVBQUVDLFFBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsYUFBRDtBQUFlLFNBQUssRUFBRUYsS0FBdEI7QUFBNkIsNEJBQXdCLEVBQUVtQyx3QkFBdkQ7QUFBaUYsbUJBQWUsRUFBRUMsZUFBbEc7QUFBbUgsY0FBVSxFQUFFbEIsVUFBL0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLDZFQUFEO0FBQW1CLFVBQU0sRUFBRTBDLE1BQTNCO0FBQW1DLFVBQU0sRUFBRUUsTUFBM0M7QUFBbUQsY0FBVSxFQUFFSSxVQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERjtBQVNEOztJQWhDdUJULFE7O01BQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsL0Nhcm91c2VsLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJvdXNlbC5tb2R1bGUuc2Nzcyc7XG5cblxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vLi4vaG9va3MvVXNlV2luZG93UmVzaXplXCI7XG5pbXBvcnQgTGlnaHRib3hDb21wb25lbnQgZnJvbSBcIi4uL2xpZ2h0Ym94LWNvbXBvbmVudC9MaWdodGJveENvbXBvbmVudFwiO1xuaW1wb3J0IEFzY2lpbmVtYVBsYXllciBmcm9tIFwiLi4vYXNjaWluZW1hLXBsYXllci9Bc2NpaW5lbWFQbGF5ZXJcIjtcblxuXG5mdW5jdGlvbiBDYXJvdXNlbFRhYnMoeyBpdGVtcywgY3VycmVudEluZGV4LCB0YWJDbGljayB9KSB7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxUYWJzfT5cbiAgICAgIHtpdGVtcy5tYXAoKHRhYiwgaW5kZXgpID0+IDxDYXJvdXNlbFRhYnNJdGVtIHRhYj17dGFifSBhY3RpdmU9e2N1cnJlbnRJbmRleCA9PT0gaW5kZXh9IHRhYkNsaWNrPXt0YWJDbGlja30gaW5kZXg9e2luZGV4fSBrZXk9e3RhYi5pZH0vPil9XG4gICAgPC91bD5cbiAgKVxufVxuXG5mdW5jdGlvbiBDYXJvdXNlbFRhYnNJdGVtKHsgdGFiLCBhY3RpdmUsIGluZGV4LCB0YWJDbGljayB9KSB7XG4gIGNvbnN0IGhhbmRsZVRhYkNsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgdGFiQ2xpY2soaW5kZXgpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxUYWJzSXRlbX0+XG4gICAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJvdXNlbFRhYnNMaW5rfSAke2FjdGl2ZSA/IHN0eWxlcy5jYXJvdXNlbFRhYnNMaW5rQWN0aXZlIDogJyd9YH0gb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soaW5kZXgpfT57dGFiLnRpdGxlfTwvYT5cbiAgICA8L2xpPlxuICApXG59XG5cbmZ1bmN0aW9uIENhcm91c2VsSXRlbSh7IGl0ZW0sIGltYWdlQ2xpY2sgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxJdGVtfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxGaWd9PlxuICAgICAgICB7aXRlbS5wcmV2aWV3ID8gPGEgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxMaW5rfSBvbkNsaWNrPXsoKSA9PiBpbWFnZUNsaWNrKGl0ZW0uaW1hZ2UpfT48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsSW1nfSBzcmM9e2l0ZW0ucHJldmlld30gYWx0PXtpdGVtLnRpdGxlfS8+PC9hPiAgOiBpdGVtLmh0bWwgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsTWVkaWF9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5odG1sIH19Lz4gOiBpdGVtLmFzY2lpY2luZW1hID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbEFzY2lpfT48QXNjaWluZW1hUGxheWVyIHNyYz17IGl0ZW0uYXNjaWljaW5lbWEgfSAvPjwvZGl2PiA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsQ29udGV4dH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxUaXRsZX0+XG4gICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsU3VtbWFyeX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpdGVtLnN1bW1hcnkgfX0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcm91c2VsSXRlbXMoeyBpdGVtcywgaGFuZGxlQ2hhbmdlQ3VycmVudEluZGV4LCBjbGlja2VkVGFiSW5kZXgsIGltYWdlQ2xpY2sgfSkge1xuICBjb25zdCBzbGlkZXIgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFt2YXJpYWJsZVdpZHRoLCBzZXRWYXJpYWJsZVdpZHRoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dpZHRoV2lkdGhdID0gdXNlV2luZG93U2l6ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VmFyaWFibGVXaWR0aCh3aWR0aFdpZHRoIDwgNzY4KTtcbiAgfSwgW3dpZHRoV2lkdGhdKTtcblxuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgIHZhcmlhYmxlV2lkdGg6IHZhcmlhYmxlV2lkdGgsXG4gICAgYmVmb3JlQ2hhbmdlOiAoY3VycmVudCwgbmV4dCkgPT4ge1xuICAgICAgaGFuZGxlQ2hhbmdlQ3VycmVudEluZGV4KG5leHQpXG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNsaWNrZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgc2xpZGVyLmN1cnJlbnQuc2xpY2tHb1RvKGNsaWNrZWRUYWJJbmRleClcbiAgICB9XG4gIH0sIFtjbGlja2VkVGFiSW5kZXhdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlclxuICAgICAgcmVmPXtzbGlkZXJ9XG4gICAgICB7Li4uc2V0dGluZ3N9XG4gICAgPlxuICAgICAge2l0ZW1zLm1hcChzbGlkZSA9PiA8Q2Fyb3VzZWxJdGVtIGl0ZW09e3NsaWRlfSBrZXk9e3NsaWRlLmlkfSBpbWFnZUNsaWNrPXtpbWFnZUNsaWNrfS8+KX1cbiAgICA8L1NsaWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCh7IGl0ZW1zIH0pIHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2xpY2tlZFRhYkluZGV4LCBzZXRDbGlja2VkVGFiSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICBjb25zdCBoYW5kbGVDaGFuZ2VDdXJyZW50SW5kZXggPSBpbmRleCA9PiBzZXRDdXJyZW50SW5kZXgoaW5kZXgpO1xuXG4gIGNvbnN0IHRhYkNsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0Q2xpY2tlZFRhYkluZGV4KGluZGV4KTtcbiAgfVxuXG4gIGNvbnN0IGltYWdlQ2xpY2sgPSAoaW1hZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbWFnZSlcbiAgICBzZXRJbWFnZXMoW2ltYWdlXSk7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9XG5cbiAgY29uc3QgY2xvc2VDbGljayA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4oZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsfT5cbiAgICAgICAgPENhcm91c2VsVGFicyBpdGVtcz17aXRlbXN9IGN1cnJlbnRJbmRleD17Y3VycmVudEluZGV4fSB0YWJDbGljaz17dGFiQ2xpY2t9Lz5cbiAgICAgICAgPENhcm91c2VsSXRlbXMgaXRlbXM9e2l0ZW1zfSBoYW5kbGVDaGFuZ2VDdXJyZW50SW5kZXg9e2hhbmRsZUNoYW5nZUN1cnJlbnRJbmRleH0gY2xpY2tlZFRhYkluZGV4PXtjbGlja2VkVGFiSW5kZXh9IGltYWdlQ2xpY2s9e2ltYWdlQ2xpY2t9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPExpZ2h0Ym94Q29tcG9uZW50IGltYWdlcz17aW1hZ2VzfSBpc09wZW49e2lzT3Blbn0gY2xvc2VDbGljaz17Y2xvc2VDbGlja30vPlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/carousel/Carousel.jsx\n");

/***/ })

})