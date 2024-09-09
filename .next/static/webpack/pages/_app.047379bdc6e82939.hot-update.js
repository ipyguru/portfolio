"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Transition.js":
/*!**********************************!*\
  !*** ./components/Transition.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n// Desc: Transition variant for page transitions\nconst transitionVariants = {\n    initial: {\n        x: \"100%\",\n        width: \"100%\"\n    },\n    animate: {\n        x: 0,\n        width: \"100%\"\n    },\n    exit: {\n        x: [\n            \"0%\",\n            \"100%\"\n        ],\n        width: [\n            \"0%\",\n            \"100%\"\n        ]\n    }\n};\nconst Transition = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]\",\n                variants: transitionVariants,\n                initial: \"initial\",\n                animate: \"animate\",\n                exit: \"exit\",\n                transition: {\n                    delay: 0.2,\n                    duration: 0.6,\n                    erase: \"eraseInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Transition.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]\",\n                variants: transitionVariants,\n                initial: \"initial\",\n                animate: \"animate\",\n                exit: \"exit\",\n                transition: {\n                    delay: 0.4,\n                    duration: 0.6,\n                    erase: \"eraseInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Transition.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#2e2257]\",\n                variants: transitionVariants,\n                initial: \"initial\",\n                animate: \"animate\",\n                exit: \"exit\",\n                transition: {\n                    delay: 0.7,\n                    duration: 0.6,\n                    erase: \"eraseInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Transition.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Transition;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transition);\nvar _c;\n$RefreshReg$(_c, \"Transition\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zaXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFFdEMsZ0RBQWdEO0FBQ2hELE1BQU1DLHFCQUFxQjtJQUN6QkMsU0FBUztRQUNQQyxHQUFHO1FBQ0hDLE9BQU87SUFDVDtJQUNBQyxTQUFTO1FBQ1BGLEdBQUc7UUFDSEMsT0FBTztJQUNUO0lBQ0FFLE1BQU07UUFDSkgsR0FBRztZQUFDO1lBQU07U0FBTztRQUNqQkMsT0FBTztZQUFDO1lBQU07U0FBTztJQUN2QjtBQUNGO0FBRUEsTUFBTUcsYUFBYTtJQUNqQixxQkFDRTs7MEJBQ0UsOERBQUNQLGlEQUFNQSxDQUFDUSxHQUFHO2dCQUFDQyxXQUFVO2dCQUFzRUMsVUFBVVQ7Z0JBQW9CQyxTQUFRO2dCQUFVRyxTQUFRO2dCQUFVQyxNQUFLO2dCQUFPSyxZQUFZO29CQUFFQyxPQUFPO29CQUFLQyxVQUFVO29CQUFLQyxPQUFPO2dCQUFhOzs7Ozs7MEJBQ3ZPLDhEQUFDZCxpREFBTUEsQ0FBQ1EsR0FBRztnQkFBQ0MsV0FBVTtnQkFBc0VDLFVBQVVUO2dCQUFvQkMsU0FBUTtnQkFBVUcsU0FBUTtnQkFBVUMsTUFBSztnQkFBT0ssWUFBWTtvQkFBRUMsT0FBTztvQkFBS0MsVUFBVTtvQkFBS0MsT0FBTztnQkFBYTs7Ozs7OzBCQUN2Tyw4REFBQ2QsaURBQU1BLENBQUNRLEdBQUc7Z0JBQUNDLFdBQVU7Z0JBQXNFQyxVQUFVVDtnQkFBb0JDLFNBQVE7Z0JBQVVHLFNBQVE7Z0JBQVVDLE1BQUs7Z0JBQU9LLFlBQVk7b0JBQUVDLE9BQU87b0JBQUtDLFVBQVU7b0JBQUtDLE9BQU87Z0JBQWE7Ozs7Ozs7O0FBRzdPO0tBUk1QO0FBVU4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmFuc2l0aW9uLmpzP2IwMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuLy8gRGVzYzogVHJhbnNpdGlvbiB2YXJpYW50IGZvciBwYWdlIHRyYW5zaXRpb25zXG5jb25zdCB0cmFuc2l0aW9uVmFyaWFudHMgPSB7XG4gIGluaXRpYWw6IHtcbiAgICB4OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgYW5pbWF0ZToge1xuICAgIHg6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgZXhpdDoge1xuICAgIHg6IFsnMCUnLCAnMTAwJSddLFxuICAgIHdpZHRoOiBbJzAlJywgJzEwMCUnXSxcbiAgfSxcbn1cblxuY29uc3QgVHJhbnNpdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPSdmaXhlZCB0b3AtMCBib3R0b20tMCByaWdodC1mdWxsIHctc2NyZWVuIGgtc2NyZWVuIHotMzAgYmctWyMyZTIyNTddJyB2YXJpYW50cz17dHJhbnNpdGlvblZhcmlhbnRzfSBpbml0aWFsPSdpbml0aWFsJyBhbmltYXRlPSdhbmltYXRlJyBleGl0PSdleGl0JyB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIsIGR1cmF0aW9uOiAwLjYsIGVyYXNlOiAnZXJhc2VJbk91dCcgfX0gPjwvbW90aW9uLmRpdj5cbiAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgYm90dG9tLTAgcmlnaHQtZnVsbCB3LXNjcmVlbiBoLXNjcmVlbiB6LTIwIGJnLVsjM2IyZDcxXScgdmFyaWFudHM9e3RyYW5zaXRpb25WYXJpYW50c30gaW5pdGlhbD0naW5pdGlhbCcgYW5pbWF0ZT0nYW5pbWF0ZScgZXhpdD0nZXhpdCcgdHJhbnNpdGlvbj17eyBkZWxheTogMC40LCBkdXJhdGlvbjogMC42LCBlcmFzZTogJ2VyYXNlSW5PdXQnIH19ID48L21vdGlvbi5kaXY+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9J2ZpeGVkIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LWZ1bGwgdy1zY3JlZW4gaC1zY3JlZW4gei0xMCBiZy1bIzJlMjI1N10nIHZhcmlhbnRzPXt0cmFuc2l0aW9uVmFyaWFudHN9IGluaXRpYWw9J2luaXRpYWwnIGFuaW1hdGU9J2FuaW1hdGUnIGV4aXQ9J2V4aXQnIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNywgZHVyYXRpb246IDAuNiwgZXJhc2U6ICdlcmFzZUluT3V0JyB9fSA+PC9tb3Rpb24uZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb25cbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ0cmFuc2l0aW9uVmFyaWFudHMiLCJpbml0aWFsIiwieCIsIndpZHRoIiwiYW5pbWF0ZSIsImV4aXQiLCJUcmFuc2l0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsImVyYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Transition.js\n"));

/***/ })

});