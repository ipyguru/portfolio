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

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_HiChatBubbleBottomCenterText_HiEnvelope_HiHome_HiRectangleGroup_HiUser_HiViewColumns_react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=HiChatBubbleBottomCenterText,HiEnvelope,HiHome,HiRectangleGroup,HiUser,HiViewColumns!=!react-icons/hi2 */ \"__barrel_optimize__?names=HiChatBubbleBottomCenterText,HiEnvelope,HiHome,HiRectangleGroup,HiUser,HiViewColumns!=!./node_modules/react-icons/hi2/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n//  Nav Data\nconst navData = [\n    {\n        name: \"home\",\n        path: \"/\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiChatBubbleBottomCenterText_HiEnvelope_HiHome_HiRectangleGroup_HiUser_HiViewColumns_react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__.HiHome, {}, void 0, false, {\n            fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n            lineNumber: 7,\n            columnNumber: 36\n        }, undefined)\n    },\n    {\n        name: \"about\",\n        path: \"/about\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiChatBubbleBottomCenterText_HiEnvelope_HiHome_HiRectangleGroup_HiUser_HiViewColumns_react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__.HiUser, {}, void 0, false, {\n            fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n            lineNumber: 8,\n            columnNumber: 42\n        }, undefined)\n    },\n    {\n        name: \"services\",\n        path: \"/services\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiChatBubbleBottomCenterText_HiEnvelope_HiHome_HiRectangleGroup_HiUser_HiViewColumns_react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__.HiRectangleGroup, {}, void 0, false, {\n            fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n            lineNumber: 9,\n            columnNumber: 48\n        }, undefined)\n    },\n    {\n        name: \"work\",\n        path: \"/work\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiChatBubbleBottomCenterText_HiEnvelope_HiHome_HiRectangleGroup_HiUser_HiViewColumns_react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__.HiViewColumns, {}, void 0, false, {\n            fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n            lineNumber: 10,\n            columnNumber: 40\n        }, undefined)\n    },\n    {\n        name: \"testimonials\",\n        path: \"/testimonials\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiChatBubbleBottomCenterText_HiEnvelope_HiHome_HiRectangleGroup_HiUser_HiViewColumns_react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__.HiChatBubbleBottomCenterText, {}, void 0, false, {\n            fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n            lineNumber: 14,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        name: \"contact\",\n        path: \"/contact\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiChatBubbleBottomCenterText_HiEnvelope_HiHome_HiRectangleGroup_HiUser_HiViewColumns_react_icons_hi2__WEBPACK_IMPORTED_MODULE_3__.HiEnvelope, {}, void 0, false, {\n            fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n            lineNumber: 19,\n            columnNumber: 11\n        }, undefined)\n    }\n];\nconst Nav = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const pathname = router.pathname;\n    console.log(pathname);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full\",\n            children: navData.map((link, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"\".concat(link.path === pathname && \"text-accent\", \" relative flex items-center group hover:text-accent transition-all duration-200\"),\n                    href: link.path,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-[12px]\",\n                                children: link.name\n                            }, void 0, false, {\n                                fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: link.icon\n                        }, void 0, false, {\n                            fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n                    lineNumber: 33,\n                    columnNumber: 18\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vbuoc/Devs/portfolio/portfolio/components/Nav.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRCO0FBQ1c7QUFDb0Y7QUFFM0gsWUFBWTtBQUNaLE1BQU1RLFVBQVU7SUFDZDtRQUFFQyxNQUFNO1FBQVFDLE1BQU07UUFBS0Msb0JBQU0sOERBQUNQLCtKQUFNQTs7Ozs7SUFBSTtJQUM1QztRQUFFSyxNQUFNO1FBQVNDLE1BQU07UUFBVUMsb0JBQU0sOERBQUNMLCtKQUFNQTs7Ozs7SUFBSTtJQUNsRDtRQUFFRyxNQUFNO1FBQVlDLE1BQU07UUFBYUMsb0JBQU0sOERBQUNOLHlLQUFnQkE7Ozs7O0lBQUk7SUFDbEU7UUFBRUksTUFBTTtRQUFRQyxNQUFNO1FBQVNDLG9CQUFNLDhEQUFDSixzS0FBYUE7Ozs7O0lBQUk7SUFDdkQ7UUFDRUUsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLG9CQUFNLDhEQUFDVCxxTEFBNEJBOzs7OztJQUNyQztJQUNBO1FBQ0VPLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxvQkFBTSw4REFBQ1IsbUtBQVVBOzs7OztJQUNuQjtDQUNEO0FBRUQsTUFBTVMsTUFBTTs7SUFFVixNQUFNQyxTQUFTWixzREFBU0E7SUFDeEIsTUFBTWEsV0FBV0QsT0FBT0MsUUFBUTtJQUNoQ0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUViLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNaVixRQUFRWSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0JBQ2xCLHFCQUFPLDhEQUFDdEIsa0RBQUlBO29CQUFDa0IsV0FBVyxHQUEyQyxPQUF4Q0csS0FBS1gsSUFBSSxLQUFLSSxZQUFZLGVBQWM7b0JBQWtGUyxNQUFNRixLQUFLWCxJQUFJOztzQ0FFbEssOERBQUNTO3NDQUNDLDRFQUFDQTtnQ0FBSUQsV0FBVTswQ0FBZUcsS0FBS1osSUFBSTs7Ozs7Ozs7Ozs7c0NBRXpDLDhEQUFDVTtzQ0FBS0UsS0FBS1YsSUFBSTs7Ozs7OzttQkFMMEpXOzs7OztZQU83Szs7Ozs7Ozs7Ozs7QUFJUjtHQXJCTVY7O1FBRVdYLGtEQUFTQTs7O0tBRnBCVztBQXVCTiwrREFBZUEsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qcz84NjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgSGlDaGF0QnViYmxlQm90dG9tQ2VudGVyVGV4dCwgSGlFbnZlbG9wZSwgSGlIb21lLCBIaVJlY3RhbmdsZUdyb3VwLCBIaVVzZXIsIEhpVmlld0NvbHVtbnMgfSBmcm9tICdyZWFjdC1pY29ucy9oaTInXG5cbi8vICBOYXYgRGF0YVxuY29uc3QgbmF2RGF0YSA9IFtcbiAgeyBuYW1lOiAnaG9tZScsIHBhdGg6ICcvJywgaWNvbjogPEhpSG9tZSAvPiB9LFxuICB7IG5hbWU6ICdhYm91dCcsIHBhdGg6ICcvYWJvdXQnLCBpY29uOiA8SGlVc2VyIC8+IH0sXG4gIHsgbmFtZTogJ3NlcnZpY2VzJywgcGF0aDogJy9zZXJ2aWNlcycsIGljb246IDxIaVJlY3RhbmdsZUdyb3VwIC8+IH0sXG4gIHsgbmFtZTogJ3dvcmsnLCBwYXRoOiAnL3dvcmsnLCBpY29uOiA8SGlWaWV3Q29sdW1ucyAvPiB9LFxuICB7XG4gICAgbmFtZTogJ3Rlc3RpbW9uaWFscycsXG4gICAgcGF0aDogJy90ZXN0aW1vbmlhbHMnLFxuICAgIGljb246IDxIaUNoYXRCdWJibGVCb3R0b21DZW50ZXJUZXh0IC8+LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2NvbnRhY3QnLFxuICAgIHBhdGg6ICcvY29udGFjdCcsXG4gICAgaWNvbjogPEhpRW52ZWxvcGUgLz4sXG4gIH0sXG5dXG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxuICBjb25zb2xlLmxvZyhwYXRobmFtZSlcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgeGw6anVzdGlmeS1jZW50ZXIgZ2FwLXktNCBmaXhlZCBoLW1heCBib3R0b20tMCBtdC1hdXRvIHhsOnJpZ2h0LVsyJV0gei01MCB0b3AtMCB3LWZ1bGwgeGw6dy0xNiB4bDptYXgtdy1tZCB4bDpoLXNjcmVlbic+XG4gICAgICB7LyogTmF2IExpbmtzIGlubmVyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIHhsOmZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4geGw6anVzdGlmeS1jZW50ZXIgZ2FwLXktMTAgcHgtNCBtZDpweC00MCB4bDpweC0wIGgtWzgwcHhdIGJnLXdoaXRlLzEwIHhsOmgtbWF4IHB5LTggYmFja2Ryb3AtYmx1ci1zbSB0ZXh0LTN4bCB4bDp0ZXh0LXhsIHhsOnJvdW5kZWQtZnVsbCc+XG4gICAgICAgIHtuYXZEYXRhLm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPExpbmsgY2xhc3NOYW1lPXtgJHtsaW5rLnBhdGggPT09IHBhdGhuYW1lICYmICd0ZXh0LWFjY2VudCd9IHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGdyb3VwIGhvdmVyOnRleHQtYWNjZW50IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMGB9IGhyZWY9e2xpbmsucGF0aH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7LyogdG9vbHRpcCAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LVsxMnB4XSc+e2xpbmsubmFtZX08L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgIHsvKiBpY29uICovfVxuICAgICAgICAgICAgPGRpdj57bGluay5pY29ufTwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiSGlDaGF0QnViYmxlQm90dG9tQ2VudGVyVGV4dCIsIkhpRW52ZWxvcGUiLCJIaUhvbWUiLCJIaVJlY3RhbmdsZUdyb3VwIiwiSGlVc2VyIiwiSGlWaWV3Q29sdW1ucyIsIm5hdkRhdGEiLCJuYW1lIiwicGF0aCIsImljb24iLCJOYXYiLCJyb3V0ZXIiLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n"));

/***/ })

});