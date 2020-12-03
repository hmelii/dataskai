webpackHotUpdate_N_E("pages/index",{

/***/ "./components/our-projects/OurProjects.jsx":
/*!*************************************************!*\
  !*** ./components/our-projects/OurProjects.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OurProjects; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _OurProjects_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OurProjects.module.scss */ \"./components/our-projects/OurProjects.module.scss\");\n/* harmony import */ var _OurProjects_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_OurProjects_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_content_pic3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/content/pic3.png */ \"./images/content/pic3.png\");\n/* harmony import */ var _images_content_pic4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/content/pic4.png */ \"./images/content/pic4.png\");\n/* harmony import */ var _carousel_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carousel/Carousel */ \"./components/carousel/Carousel.jsx\");\nvar _jsxFileName = \"/Users/hmelii/Projects/dataskai/components/our-projects/OurProjects.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction OurProjects() {\n  var projects = [{\n    id: 1,\n    preview: _images_content_pic3_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    title: 'Wizard',\n    summary: \"<p>Create new project instances and configure existing with CLI.</p>\\n                <p>Wizard is a CLI tool for installation, creating project instances, configuring services, starting/stopping services, managing tasks, domain models, managing client docker containers and more.</p>\"\n  }, {\n    id: 2,\n    preview: _images_content_pic4_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    title: 'Project structure',\n    summary: \"<p>All instances of DATASKAI projects has templated structure.\\n                <p>This behaviour is an answer to AI/ML exploration challenge. It contains all files related to project and intended to be in sync with all clients. To fulfill this requirement project files are stored in git.</p>\\n                <p>Default project structure help your team to easily switch between different projects, and navigate inside the project.</p>\"\n  }, {\n    id: 3,\n    preview: _images_content_pic4_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    title: 'Data & features naming conventions',\n    summary: \"<p>Data and features naming conventions solves a lot of issues inside your team and in communication with experts.</p>\\n                <p>It\\u2019s easy to understand origin and all the transformations applied to data. You can enforce naming conventions in feature extractors and solve miscommunication at the root of a problem. You can use simple name resolving to give a suggestion and explanation to user or expert when you communicate.</p>\"\n  }, {\n    id: 4,\n    preview: _images_content_pic3_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    title: 'Default AI/ML solution architecture',\n    summary: \"<p>We use straighforward and simplest possible solution. There is a lot of situations where simple is enough.</p> \\n                <p>Our solution include few steps: data gathering -> feature extraction -> model inference. All this stages run asyncronously. Don\\u2019t use pipelines if you don\\u2019t need it. Use data storage to reuse data for other ML tasks and feature store to share features between colleagues and ML models.</p>\"\n  }, {\n    id: 5,\n    preview: img,\n    title: 'Domain models in AI/ML projects',\n    summary: \"<p>Divide code into explicit parts - responsible for AI/ML, and responsible for domain.</p>\\n                <p>AI/ML projects struggles from misunderstanding. It\\u2019s a struggle inside your team, and a struggle in interaction between team and domain experts.</p>\\n                <p>Build the code of domain model and share it between many AI/ML tasks. Put all the domain knowledge inside it, and all the AI/ML knowledge outside.</p>\"\n  }, {\n    id: 6,\n    preview: img,\n    title: 'Logging and monitoring',\n    summary: \"<p>DATASKAI has built-in support for graylog, netdata and redash.</p>\\n                <p>All deployed services are connected to graylog by default, so all logs are collected in one logging and monitoring system. Netdata is used to check network load. Redash is used to visualize data, features, predictions and more.</p>\"\n  }];\n  return __jsx(\"div\", {\n    className: _OurProjects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ourProjects,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    className: _OurProjects_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, \"Keep your project organized\"), __jsx(_carousel_Carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    items: projects,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }));\n}\n_c = OurProjects;\n\nvar _c;\n\n$RefreshReg$(_c, \"OurProjects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdXItcHJvamVjdHMvT3VyUHJvamVjdHMuanN4P2Q2MzciXSwibmFtZXMiOlsiT3VyUHJvamVjdHMiLCJwcm9qZWN0cyIsImlkIiwicHJldmlldyIsImltZzMiLCJ0aXRsZSIsInN1bW1hcnkiLCJpbWc0IiwiaW1nNSIsImltZyIsInN0eWxlcyIsIm91clByb2plY3RzIiwiaGVhZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsTUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsV0FBTyxFQUFFQyxnRUFGWDtBQUdFQyxTQUFLLEVBQUUsUUFIVDtBQUlFQyxXQUFPO0FBSlQsR0FEZSxFQVFmO0FBQ0VKLE1BQUUsRUFBRSxDQUROO0FBRUVDLFdBQU8sRUFBRUksZ0VBRlg7QUFHRUYsU0FBSyxFQUFFLG1CQUhUO0FBSUVDLFdBQU87QUFKVCxHQVJlLEVBZ0JmO0FBQ0VKLE1BQUUsRUFBRSxDQUROO0FBRUVDLFdBQU8sRUFBRUssZ0VBRlg7QUFHRUgsU0FBSyxFQUFFLG9DQUhUO0FBSUVDLFdBQU87QUFKVCxHQWhCZSxFQXVCZjtBQUNFSixNQUFFLEVBQUUsQ0FETjtBQUVFQyxXQUFPLEVBQUVDLGdFQUZYO0FBR0VDLFNBQUssRUFBRSxxQ0FIVDtBQUlFQyxXQUFPO0FBSlQsR0F2QmUsRUE4QmY7QUFDRUosTUFBRSxFQUFFLENBRE47QUFFRUMsV0FBTyxFQUFFTSxHQUZYO0FBR0VKLFNBQUssRUFBRSxpQ0FIVDtBQUlFQyxXQUFPO0FBSlQsR0E5QmUsRUFzQ2Y7QUFDRUosTUFBRSxFQUFFLENBRE47QUFFRUMsV0FBTyxFQUFFTSxHQUZYO0FBR0VKLFNBQUssRUFBRSx3QkFIVDtBQUlFQyxXQUFPO0FBSlQsR0F0Q2UsQ0FBakI7QUErQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUksK0RBQU0sQ0FBQ0MsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRCwrREFBTSxDQUFDRSxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBRUUsTUFBQywwREFBRDtBQUFVLFNBQUssRUFBRVgsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRDtLQXREdUJELFciLCJmaWxlIjoiLi9jb21wb25lbnRzL291ci1wcm9qZWN0cy9PdXJQcm9qZWN0cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vT3VyUHJvamVjdHMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGltZzMgZnJvbSAnLi4vLi4vaW1hZ2VzL2NvbnRlbnQvcGljMy5wbmcnO1xuaW1wb3J0IGltZzQgZnJvbSAnLi4vLi4vaW1hZ2VzL2NvbnRlbnQvcGljNC5wbmcnO1xuaW1wb3J0IGltZzUgZnJvbSAnLi4vLi4vaW1hZ2VzL2NvbnRlbnQvcGljNC5wbmcnO1xuXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL2Nhcm91c2VsL0Nhcm91c2VsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE91clByb2plY3RzKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHByZXZpZXc6IGltZzMsXG4gICAgICB0aXRsZTogJ1dpemFyZCcsXG4gICAgICBzdW1tYXJ5OiBgPHA+Q3JlYXRlIG5ldyBwcm9qZWN0IGluc3RhbmNlcyBhbmQgY29uZmlndXJlIGV4aXN0aW5nIHdpdGggQ0xJLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5XaXphcmQgaXMgYSBDTEkgdG9vbCBmb3IgaW5zdGFsbGF0aW9uLCBjcmVhdGluZyBwcm9qZWN0IGluc3RhbmNlcywgY29uZmlndXJpbmcgc2VydmljZXMsIHN0YXJ0aW5nL3N0b3BwaW5nIHNlcnZpY2VzLCBtYW5hZ2luZyB0YXNrcywgZG9tYWluIG1vZGVscywgbWFuYWdpbmcgY2xpZW50IGRvY2tlciBjb250YWluZXJzIGFuZCBtb3JlLjwvcD5gXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHByZXZpZXc6IGltZzQsXG4gICAgICB0aXRsZTogJ1Byb2plY3Qgc3RydWN0dXJlJyxcbiAgICAgIHN1bW1hcnk6IGA8cD5BbGwgaW5zdGFuY2VzIG9mIERBVEFTS0FJIHByb2plY3RzIGhhcyB0ZW1wbGF0ZWQgc3RydWN0dXJlLlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgYmVoYXZpb3VyIGlzIGFuIGFuc3dlciB0byBBSS9NTCBleHBsb3JhdGlvbiBjaGFsbGVuZ2UuIEl0IGNvbnRhaW5zIGFsbCBmaWxlcyByZWxhdGVkIHRvIHByb2plY3QgYW5kIGludGVuZGVkIHRvIGJlIGluIHN5bmMgd2l0aCBhbGwgY2xpZW50cy4gVG8gZnVsZmlsbCB0aGlzIHJlcXVpcmVtZW50IHByb2plY3QgZmlsZXMgYXJlIHN0b3JlZCBpbiBnaXQuPC9wPlxuICAgICAgICAgICAgICAgIDxwPkRlZmF1bHQgcHJvamVjdCBzdHJ1Y3R1cmUgaGVscCB5b3VyIHRlYW0gdG8gZWFzaWx5IHN3aXRjaCBiZXR3ZWVuIGRpZmZlcmVudCBwcm9qZWN0cywgYW5kIG5hdmlnYXRlIGluc2lkZSB0aGUgcHJvamVjdC48L3A+YFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBwcmV2aWV3OiBpbWc1LFxuICAgICAgdGl0bGU6ICdEYXRhICYgZmVhdHVyZXMgbmFtaW5nIGNvbnZlbnRpb25zJyxcbiAgICAgIHN1bW1hcnk6IGA8cD5EYXRhIGFuZCBmZWF0dXJlcyBuYW1pbmcgY29udmVudGlvbnMgc29sdmVzIGEgbG90IG9mIGlzc3VlcyBpbnNpZGUgeW91ciB0ZWFtIGFuZCBpbiBjb21tdW5pY2F0aW9uIHdpdGggZXhwZXJ0cy48L3A+XG4gICAgICAgICAgICAgICAgPHA+SXTigJlzIGVhc3kgdG8gdW5kZXJzdGFuZCBvcmlnaW4gYW5kIGFsbCB0aGUgdHJhbnNmb3JtYXRpb25zIGFwcGxpZWQgdG8gZGF0YS4gWW91IGNhbiBlbmZvcmNlIG5hbWluZyBjb252ZW50aW9ucyBpbiBmZWF0dXJlIGV4dHJhY3RvcnMgYW5kIHNvbHZlIG1pc2NvbW11bmljYXRpb24gYXQgdGhlIHJvb3Qgb2YgYSBwcm9ibGVtLiBZb3UgY2FuIHVzZSBzaW1wbGUgbmFtZSByZXNvbHZpbmcgdG8gZ2l2ZSBhIHN1Z2dlc3Rpb24gYW5kIGV4cGxhbmF0aW9uIHRvIHVzZXIgb3IgZXhwZXJ0IHdoZW4geW91IGNvbW11bmljYXRlLjwvcD5gXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHByZXZpZXc6IGltZzMsXG4gICAgICB0aXRsZTogJ0RlZmF1bHQgQUkvTUwgc29sdXRpb24gYXJjaGl0ZWN0dXJlJyxcbiAgICAgIHN1bW1hcnk6IGA8cD5XZSB1c2Ugc3RyYWlnaGZvcndhcmQgYW5kIHNpbXBsZXN0IHBvc3NpYmxlIHNvbHV0aW9uLiBUaGVyZSBpcyBhIGxvdCBvZiBzaXR1YXRpb25zIHdoZXJlIHNpbXBsZSBpcyBlbm91Z2guPC9wPiBcbiAgICAgICAgICAgICAgICA8cD5PdXIgc29sdXRpb24gaW5jbHVkZSBmZXcgc3RlcHM6IGRhdGEgZ2F0aGVyaW5nIC0+IGZlYXR1cmUgZXh0cmFjdGlvbiAtPiBtb2RlbCBpbmZlcmVuY2UuIEFsbCB0aGlzIHN0YWdlcyBydW4gYXN5bmNyb25vdXNseS4gRG9u4oCZdCB1c2UgcGlwZWxpbmVzIGlmIHlvdSBkb27igJl0IG5lZWQgaXQuIFVzZSBkYXRhIHN0b3JhZ2UgdG8gcmV1c2UgZGF0YSBmb3Igb3RoZXIgTUwgdGFza3MgYW5kIGZlYXR1cmUgc3RvcmUgdG8gc2hhcmUgZmVhdHVyZXMgYmV0d2VlbiBjb2xsZWFndWVzIGFuZCBNTCBtb2RlbHMuPC9wPmBcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgcHJldmlldzogaW1nLFxuICAgICAgdGl0bGU6ICdEb21haW4gbW9kZWxzIGluIEFJL01MIHByb2plY3RzJyxcbiAgICAgIHN1bW1hcnk6IGA8cD5EaXZpZGUgY29kZSBpbnRvIGV4cGxpY2l0IHBhcnRzIC0gcmVzcG9uc2libGUgZm9yIEFJL01MLCBhbmQgcmVzcG9uc2libGUgZm9yIGRvbWFpbi48L3A+XG4gICAgICAgICAgICAgICAgPHA+QUkvTUwgcHJvamVjdHMgc3RydWdnbGVzIGZyb20gbWlzdW5kZXJzdGFuZGluZy4gSXTigJlzIGEgc3RydWdnbGUgaW5zaWRlIHlvdXIgdGVhbSwgYW5kIGEgc3RydWdnbGUgaW4gaW50ZXJhY3Rpb24gYmV0d2VlbiB0ZWFtIGFuZCBkb21haW4gZXhwZXJ0cy48L3A+XG4gICAgICAgICAgICAgICAgPHA+QnVpbGQgdGhlIGNvZGUgb2YgZG9tYWluIG1vZGVsIGFuZCBzaGFyZSBpdCBiZXR3ZWVuIG1hbnkgQUkvTUwgdGFza3MuIFB1dCBhbGwgdGhlIGRvbWFpbiBrbm93bGVkZ2UgaW5zaWRlIGl0LCBhbmQgYWxsIHRoZSBBSS9NTCBrbm93bGVkZ2Ugb3V0c2lkZS48L3A+YFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDYsXG4gICAgICBwcmV2aWV3OiBpbWcsXG4gICAgICB0aXRsZTogJ0xvZ2dpbmcgYW5kIG1vbml0b3JpbmcnLFxuICAgICAgc3VtbWFyeTogYDxwPkRBVEFTS0FJIGhhcyBidWlsdC1pbiBzdXBwb3J0IGZvciBncmF5bG9nLCBuZXRkYXRhIGFuZCByZWRhc2guPC9wPlxuICAgICAgICAgICAgICAgIDxwPkFsbCBkZXBsb3llZCBzZXJ2aWNlcyBhcmUgY29ubmVjdGVkIHRvIGdyYXlsb2cgYnkgZGVmYXVsdCwgc28gYWxsIGxvZ3MgYXJlIGNvbGxlY3RlZCBpbiBvbmUgbG9nZ2luZyBhbmQgbW9uaXRvcmluZyBzeXN0ZW0uIE5ldGRhdGEgaXMgdXNlZCB0byBjaGVjayBuZXR3b3JrIGxvYWQuIFJlZGFzaCBpcyB1c2VkIHRvIHZpc3VhbGl6ZSBkYXRhLCBmZWF0dXJlcywgcHJlZGljdGlvbnMgYW5kIG1vcmUuPC9wPmBcbiAgICB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm91clByb2plY3RzfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5LZWVwIHlvdXIgcHJvamVjdCBvcmdhbml6ZWQ8L2gzPlxuICAgICAgPENhcm91c2VsIGl0ZW1zPXtwcm9qZWN0c30gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/our-projects/OurProjects.jsx\n");

/***/ })

})