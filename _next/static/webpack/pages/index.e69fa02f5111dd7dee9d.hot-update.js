webpackHotUpdate_N_E("pages/index",{

/***/ "./components/our-work/OurWork.jsx":
/*!*****************************************!*\
  !*** ./components/our-work/OurWork.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OurWork; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OurWork.module.scss */ \"./components/our-work/OurWork.module.scss\");\n/* harmony import */ var _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_content_pic1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/content/pic1.png */ \"./images/content/pic1.png\");\n\n\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/components/our-work/OurWork.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction WorkTabs(_ref) {\n  var _this = this;\n\n  var items = _ref.items;\n  return __jsx(\"ul\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ourWorkTabs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, items.map(function (tab) {\n    return __jsx(WorkTabsItem, {\n      tab: tab,\n      key: tab.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 25\n      }\n    });\n  }));\n}\n\n_c = WorkTabs;\n\nfunction WorkTabsItem(_ref2) {\n  var tab = _ref2.tab;\n  return __jsx(\"li\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ourWorkTabsItem,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ourWorkTabsLink,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, tab.name));\n}\n\n_c2 = WorkTabsItem;\n\nfunction WorkCarouselItem(_ref3) {\n  var item = _ref3.item,\n      width = _ref3.width;\n  return __jsx(\"div\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.workCarouselItem,\n    style: {\n      width: width\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.workCarouselFig,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.workCarouselImg,\n    src: item.preview,\n    alt: item.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.workCarouselContext,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.workCarouselTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, item.title), __jsx(\"div\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.workCarouselSummary,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, item.summary)));\n}\n\n_c3 = WorkCarouselItem;\n\nfunction WorkCarousel(_ref4) {\n  _s();\n\n  var _this2 = this;\n\n  var items = _ref4.items;\n  var settings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    variableWidth: true\n  };\n  var vw = 0;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useLayoutEffect\"])(function () {\n    if (typeof document !== 'undefined') {\n      vw = window.innerWidth;\n      window.addEventListener('resize', function () {\n        vw = window.innerWidth;\n      });\n      console.log(vw);\n    }\n  }, []);\n  return __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, settings, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }), items.map(function (slide) {\n    return __jsx(WorkCarouselItem, {\n      width: vw,\n      item: slide,\n      key: slide.id,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 28\n      }\n    });\n  }));\n}\n\n_s(WorkCarousel, \"n7/vCynhJvM+pLkyL2DMQUF0odM=\");\n\n_c4 = WorkCarousel;\nfunction OurWork() {\n  var items = [{\n    id: 1,\n    preview: _images_content_pic1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    title: 'Team Leaderboard',\n    summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'\n  }, {\n    id: 2,\n    preview: _images_content_pic1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    title: 'Project file structure',\n    summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'\n  }, {\n    id: 3,\n    preview: _images_content_pic1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    title: 'Feature extractor',\n    summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'\n  }, {\n    id: 4,\n    preview: _images_content_pic1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    title: 'Feature Store',\n    summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'\n  }, {\n    id: 5,\n    preview: _images_content_pic1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    title: 'Task configuration',\n    summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'\n  }, {\n    id: 6,\n    preview: _images_content_pic1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    title: 'Modul structure',\n    summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'\n  }];\n  return __jsx(\"div\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ourWork,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    className: _OurWork_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.ourWorkHeading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }\n  }, \"See your teammate work in realtime\"), __jsx(WorkTabs, {\n    items: items,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }\n  }), __jsx(WorkCarousel, {\n    items: items,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }));\n}\n_c5 = OurWork;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"WorkTabs\");\n$RefreshReg$(_c2, \"WorkTabsItem\");\n$RefreshReg$(_c3, \"WorkCarouselItem\");\n$RefreshReg$(_c4, \"WorkCarousel\");\n$RefreshReg$(_c5, \"OurWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdXItd29yay9PdXJXb3JrLmpzeD83MTFjIl0sIm5hbWVzIjpbIldvcmtUYWJzIiwiaXRlbXMiLCJzdHlsZXMiLCJvdXJXb3JrVGFicyIsIm1hcCIsInRhYiIsImlkIiwiV29ya1RhYnNJdGVtIiwib3VyV29ya1RhYnNJdGVtIiwib3VyV29ya1RhYnNMaW5rIiwibmFtZSIsIldvcmtDYXJvdXNlbEl0ZW0iLCJpdGVtIiwid2lkdGgiLCJ3b3JrQ2Fyb3VzZWxJdGVtIiwid29ya0Nhcm91c2VsRmlnIiwid29ya0Nhcm91c2VsSW1nIiwicHJldmlldyIsInRpdGxlIiwid29ya0Nhcm91c2VsQ29udGV4dCIsIndvcmtDYXJvdXNlbFRpdGxlIiwid29ya0Nhcm91c2VsU3VtbWFyeSIsInN1bW1hcnkiLCJXb3JrQ2Fyb3VzZWwiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJ2YXJpYWJsZVdpZHRoIiwidnciLCJ1c2VMYXlvdXRFZmZlY3QiLCJkb2N1bWVudCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInNsaWRlIiwiT3VyV29yayIsImltZyIsIm91cldvcmsiLCJvdXJXb3JrSGVhZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFFM0IsU0FDRTtBQUFJLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxHQUFHO0FBQUEsV0FBSSxNQUFDLFlBQUQ7QUFBYyxTQUFHLEVB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O0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBRUUsTUFBQyxRQUFEO0FBQVUsU0FBSyxFQUFFMUMsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxZQUFEO0FBQWMsU0FBSyxFQUFFQSxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERjtBQU9EO01BOUN1QnVDLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL291ci13b3JrL091cldvcmsuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9PdXJXb3JrLm1vZHVsZS5zY3NzJztcbmltcG9ydCBpbWcgZnJvbSAnLi4vLi4vaW1hZ2VzL2NvbnRlbnQvcGljMS5wbmcnO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFdvcmtUYWJzKHsgaXRlbXMgfSkge1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm91cldvcmtUYWJzfT5cbiAgICAgIHtpdGVtcy5tYXAodGFiID0+IDxXb3JrVGFic0l0ZW0gdGFiPXt0YWJ9IGtleT17dGFiLmlkfS8+KX1cbiAgICA8L3VsPlxuICApXG59XG5cbmZ1bmN0aW9uIFdvcmtUYWJzSXRlbSh7IHRhYiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm91cldvcmtUYWJzSXRlbX0+XG4gICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5vdXJXb3JrVGFic0xpbmt9Pnt0YWIubmFtZX08L2E+XG4gICAgPC9saT5cbiAgKVxufVxuXG5mdW5jdGlvbiBXb3JrQ2Fyb3VzZWxJdGVtKHsgaXRlbSwgd2lkdGggfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29ya0Nhcm91c2VsSXRlbX0gc3R5bGU9e3sgd2lkdGggfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtDYXJvdXNlbEZpZ30+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMud29ya0Nhcm91c2VsSW1nfSBzcmM9e2l0ZW0ucHJldmlld30gYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtDYXJvdXNlbENvbnRleHR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmtDYXJvdXNlbFRpdGxlfT5cbiAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29ya0Nhcm91c2VsU3VtbWFyeX0+XG4gICAgICAgICAge2l0ZW0uc3VtbWFyeX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gV29ya0Nhcm91c2VsKHsgaXRlbXMgfSkge1xuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICB9O1xuXG4gIGxldCB2dyA9IDA7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIHZ3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHZ3KTtcbiAgICB9XG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlclxuICAgICAgey4uLnNldHRpbmdzfVxuICAgID5cbiAgICAgIHsgaXRlbXMubWFwKHNsaWRlID0+IDxXb3JrQ2Fyb3VzZWxJdGVtIHdpZHRoPXt2d30gaXRlbT17c2xpZGV9IGtleT17c2xpZGUuaWR9IC8+KX1cblxuICAgIDwvU2xpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE91cldvcmsoKSB7XG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgcHJldmlldzogaW1nLFxuICAgICAgdGl0bGU6ICdUZWFtIExlYWRlcmJvYXJkJyxcbiAgICAgIHN1bW1hcnk6ICdUaGlzIGludGVyZmFjZSBhbGxvd3MgeW91IHRvJm5ic3A7Y2hlY2sgbWV0cmljcyBmb3IgYWxsIHN1Ym1pdHRlZCBzb2x1dGlvbnMgb24mbmJzcDtjdXJyZW50IHRhc2ssIHNlYXJjaCBmb3IgYmVzdC93b3JzdCBtZXRyaWMgdmFsdWVzLCBtYWtlIGZhc3QgdGV4dCBzZWFyY2ggZm9yIHN1Ym1pdHMsIGhpZGUgc29tZSBmaWVsZHMsIGV0Yy4gTW9yZW92ZXIsIGJyZWFkY3J1bWJzIG9uJm5ic3A7dG9wIG9mJm5ic3A7dGhlIHdpbmRvdyBhbGxvd3MgeW91IHRvJm5ic3A7c3dpdGNoIHRvJm5ic3A7YWxsIGF2YWlsYWJsZSBpbiZuYnNwO0dVSSB0YXNrcyBhbmQgY2hlY2sgb3V0IHNjb3JlcyBvbiZuYnNwO2l0LidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgcHJldmlldzogaW1nLFxuICAgICAgdGl0bGU6ICdQcm9qZWN0IGZpbGUgc3RydWN0dXJlJyxcbiAgICAgIHN1bW1hcnk6ICdUaGlzIGludGVyZmFjZSBhbGxvd3MgeW91IHRvJm5ic3A7Y2hlY2sgbWV0cmljcyBmb3IgYWxsIHN1Ym1pdHRlZCBzb2x1dGlvbnMgb24mbmJzcDtjdXJyZW50IHRhc2ssIHNlYXJjaCBmb3IgYmVzdC93b3JzdCBtZXRyaWMgdmFsdWVzLCBtYWtlIGZhc3QgdGV4dCBzZWFyY2ggZm9yIHN1Ym1pdHMsIGhpZGUgc29tZSBmaWVsZHMsIGV0Yy4gTW9yZW92ZXIsIGJyZWFkY3J1bWJzIG9uJm5ic3A7dG9wIG9mJm5ic3A7dGhlIHdpbmRvdyBhbGxvd3MgeW91IHRvJm5ic3A7c3dpdGNoIHRvJm5ic3A7YWxsIGF2YWlsYWJsZSBpbiZuYnNwO0dVSSB0YXNrcyBhbmQgY2hlY2sgb3V0IHNjb3JlcyBvbiZuYnNwO2l0LidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgcHJldmlldzogaW1nLFxuICAgICAgdGl0bGU6ICdGZWF0dXJlIGV4dHJhY3RvcicsXG4gICAgICBzdW1tYXJ5OiAnVGhpcyBpbnRlcmZhY2UgYWxsb3dzIHlvdSB0byZuYnNwO2NoZWNrIG1ldHJpY3MgZm9yIGFsbCBzdWJtaXR0ZWQgc29sdXRpb25zIG9uJm5ic3A7Y3VycmVudCB0YXNrLCBzZWFyY2ggZm9yIGJlc3Qvd29yc3QgbWV0cmljIHZhbHVlcywgbWFrZSBmYXN0IHRleHQgc2VhcmNoIGZvciBzdWJtaXRzLCBoaWRlIHNvbWUgZmllbGRzLCBldGMuIE1vcmVvdmVyLCBicmVhZGNydW1icyBvbiZuYnNwO3RvcCBvZiZuYnNwO3RoZSB3aW5kb3cgYWxsb3dzIHlvdSB0byZuYnNwO3N3aXRjaCB0byZuYnNwO2FsbCBhdmFpbGFibGUgaW4mbmJzcDtHVUkgdGFza3MgYW5kIGNoZWNrIG91dCBzY29yZXMgb24mbmJzcDtpdC4nXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHByZXZpZXc6IGltZyxcbiAgICAgIHRpdGxlOiAnRmVhdHVyZSBTdG9yZScsXG4gICAgICBzdW1tYXJ5OiAnVGhpcyBpbnRlcmZhY2UgYWxsb3dzIHlvdSB0byZuYnNwO2NoZWNrIG1ldHJpY3MgZm9yIGFsbCBzdWJtaXR0ZWQgc29sdXRpb25zIG9uJm5ic3A7Y3VycmVudCB0YXNrLCBzZWFyY2ggZm9yIGJlc3Qvd29yc3QgbWV0cmljIHZhbHVlcywgbWFrZSBmYXN0IHRleHQgc2VhcmNoIGZvciBzdWJtaXRzLCBoaWRlIHNvbWUgZmllbGRzLCBldGMuIE1vcmVvdmVyLCBicmVhZGNydW1icyBvbiZuYnNwO3RvcCBvZiZuYnNwO3RoZSB3aW5kb3cgYWxsb3dzIHlvdSB0byZuYnNwO3N3aXRjaCB0byZuYnNwO2FsbCBhdmFpbGFibGUgaW4mbmJzcDtHVUkgdGFza3MgYW5kIGNoZWNrIG91dCBzY29yZXMgb24mbmJzcDtpdC4nXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNSxcbiAgICAgIHByZXZpZXc6IGltZyxcbiAgICAgIHRpdGxlOiAnVGFzayBjb25maWd1cmF0aW9uJyxcbiAgICAgIHN1bW1hcnk6ICdUaGlzIGludGVyZmFjZSBhbGxvd3MgeW91IHRvJm5ic3A7Y2hlY2sgbWV0cmljcyBmb3IgYWxsIHN1Ym1pdHRlZCBzb2x1dGlvbnMgb24mbmJzcDtjdXJyZW50IHRhc2ssIHNlYXJjaCBmb3IgYmVzdC93b3JzdCBtZXRyaWMgdmFsdWVzLCBtYWtlIGZhc3QgdGV4dCBzZWFyY2ggZm9yIHN1Ym1pdHMsIGhpZGUgc29tZSBmaWVsZHMsIGV0Yy4gTW9yZW92ZXIsIGJyZWFkY3J1bWJzIG9uJm5ic3A7dG9wIG9mJm5ic3A7dGhlIHdpbmRvdyBhbGxvd3MgeW91IHRvJm5ic3A7c3dpdGNoIHRvJm5ic3A7YWxsIGF2YWlsYWJsZSBpbiZuYnNwO0dVSSB0YXNrcyBhbmQgY2hlY2sgb3V0IHNjb3JlcyBvbiZuYnNwO2l0LidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA2LFxuICAgICAgcHJldmlldzogaW1nLFxuICAgICAgdGl0bGU6ICdNb2R1bCBzdHJ1Y3R1cmUnLFxuICAgICAgc3VtbWFyeTogJ1RoaXMgaW50ZXJmYWNlIGFsbG93cyB5b3UgdG8mbmJzcDtjaGVjayBtZXRyaWNzIGZvciBhbGwgc3VibWl0dGVkIHNvbHV0aW9ucyBvbiZuYnNwO2N1cnJlbnQgdGFzaywgc2VhcmNoIGZvciBiZXN0L3dvcnN0IG1ldHJpYyB2YWx1ZXMsIG1ha2UgZmFzdCB0ZXh0IHNlYXJjaCBmb3Igc3VibWl0cywgaGlkZSBzb21lIGZpZWxkcywgZXRjLiBNb3Jlb3ZlciwgYnJlYWRjcnVtYnMgb24mbmJzcDt0b3Agb2YmbmJzcDt0aGUgd2luZG93IGFsbG93cyB5b3UgdG8mbmJzcDtzd2l0Y2ggdG8mbmJzcDthbGwgYXZhaWxhYmxlIGluJm5ic3A7R1VJIHRhc2tzIGFuZCBjaGVjayBvdXQgc2NvcmVzIG9uJm5ic3A7aXQuJ1xuICAgIH1cbiAgXVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3VyV29ya30+XG4gICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMub3VyV29ya0hlYWRpbmd9PlNlZSB5b3VyIHRlYW1tYXRlIHdvcmsgaW4gcmVhbHRpbWU8L2gzPlxuICAgICAgPFdvcmtUYWJzIGl0ZW1zPXtpdGVtc30vPlxuICAgICAgPFdvcmtDYXJvdXNlbCBpdGVtcz17aXRlbXN9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/our-work/OurWork.jsx\n");

/***/ })

})