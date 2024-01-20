"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-remove-scroll-bar";
exports.ids = ["vendor-chunks/react-remove-scroll-bar"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/component.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RemoveScrollBar: () => (/* binding */ RemoveScrollBar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-style-singleton */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/utils.js\");\n\n\n\n\nvar Style = (0,react_style_singleton__WEBPACK_IMPORTED_MODULE_1__.styleSingleton)();\n// important tip - once we measure scrollBar width and remove them\n// we could not repeat this operation\n// thus we are using style-singleton - only the first \"yet correct\" style will be applied.\nvar getStyles = function(_a, allowRelative, gapMode, important) {\n    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;\n    if (gapMode === void 0) {\n        gapMode = \"margin\";\n    }\n    return \"\\n  .\".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.noScrollbarsClassName, \" {\\n   overflow: hidden \").concat(important, \";\\n   padding-right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  body {\\n    overflow: hidden \").concat(important, \";\\n    overscroll-behavior: contain;\\n    \").concat([\n        allowRelative && \"position: relative \".concat(important, \";\"),\n        gapMode === \"margin\" && \"\\n    padding-left: \".concat(left, \"px;\\n    padding-top: \").concat(top, \"px;\\n    padding-right: \").concat(right, \"px;\\n    margin-left:0;\\n    margin-top:0;\\n    margin-right: \").concat(gap, \"px \").concat(important, \";\\n    \"),\n        gapMode === \"padding\" && \"padding-right: \".concat(gap, \"px \").concat(important, \";\")\n    ].filter(Boolean).join(\"\"), \"\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, \" {\\n    right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, \" {\\n    margin-right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, \" .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, \" {\\n    right: 0 \").concat(important, \";\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, \" .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, \" {\\n    margin-right: 0 \").concat(important, \";\\n  }\\n  \\n  body {\\n    \").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.removedBarSizeVariable, \": \").concat(gap, \"px;\\n  }\\n\");\n};\n/**\n * Removes page scrollbar and blocks page scroll when mounted\n */ var RemoveScrollBar = function(props) {\n    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? \"margin\" : _a;\n    /*\n     gap will be measured on every component mount\n     however it will be used only by the \"first\" invocation\n     due to singleton nature of <Style\n     */ var gap = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function() {\n        return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getGapWidth)(gapMode);\n    }, [\n        gapMode\n    ]);\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Style, {\n        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? \"!important\" : \"\")\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvY29tcG9uZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUN3QjtBQUM2RDtBQUM5RTtBQUN0QyxJQUFJTyxRQUFRTixxRUFBY0E7QUFDMUIsa0VBQWtFO0FBQ2xFLHFDQUFxQztBQUNyQywwRkFBMEY7QUFDMUYsSUFBSU8sWUFBWSxTQUFVQyxFQUFFLEVBQUVDLGFBQWEsRUFBRUMsT0FBTyxFQUFFQyxTQUFTO0lBQzNELElBQUlDLE9BQU9KLEdBQUdJLElBQUksRUFBRUMsTUFBTUwsR0FBR0ssR0FBRyxFQUFFQyxRQUFRTixHQUFHTSxLQUFLLEVBQUVDLE1BQU1QLEdBQUdPLEdBQUc7SUFDaEUsSUFBSUwsWUFBWSxLQUFLLEdBQUc7UUFBRUEsVUFBVTtJQUFVO0lBQzlDLE9BQU8sUUFBUU0sTUFBTSxDQUFDYiw2REFBcUJBLEVBQUUsNEJBQTRCYSxNQUFNLENBQUNMLFdBQVcseUJBQXlCSyxNQUFNLENBQUNELEtBQUssT0FBT0MsTUFBTSxDQUFDTCxXQUFXLDJDQUEyQ0ssTUFBTSxDQUFDTCxXQUFXLDhDQUE4Q0ssTUFBTSxDQUFDO1FBQ3ZRUCxpQkFBaUIsc0JBQXNCTyxNQUFNLENBQUNMLFdBQVc7UUFDekRELFlBQVksWUFDUix1QkFBdUJNLE1BQU0sQ0FBQ0osTUFBTSwwQkFBMEJJLE1BQU0sQ0FBQ0gsS0FBSyw0QkFBNEJHLE1BQU0sQ0FBQ0YsT0FBTyxrRUFBa0VFLE1BQU0sQ0FBQ0QsS0FBSyxPQUFPQyxNQUFNLENBQUNMLFdBQVc7UUFDL05ELFlBQVksYUFBYSxrQkFBa0JNLE1BQU0sQ0FBQ0QsS0FBSyxPQUFPQyxNQUFNLENBQUNMLFdBQVc7S0FDbkYsQ0FDSU0sTUFBTSxDQUFDQyxTQUNQQyxJQUFJLENBQUMsS0FBSyxrQkFBa0JILE1BQU0sQ0FBQ2QsMERBQWtCQSxFQUFFLG1CQUFtQmMsTUFBTSxDQUFDRCxLQUFLLE9BQU9DLE1BQU0sQ0FBQ0wsV0FBVyxtQkFBbUJLLE1BQU0sQ0FBQ2YsMERBQWtCQSxFQUFFLDBCQUEwQmUsTUFBTSxDQUFDRCxLQUFLLE9BQU9DLE1BQU0sQ0FBQ0wsV0FBVyxtQkFBbUJLLE1BQU0sQ0FBQ2QsMERBQWtCQSxFQUFFLE1BQU1jLE1BQU0sQ0FBQ2QsMERBQWtCQSxFQUFFLHFCQUFxQmMsTUFBTSxDQUFDTCxXQUFXLG1CQUFtQkssTUFBTSxDQUFDZiwwREFBa0JBLEVBQUUsTUFBTWUsTUFBTSxDQUFDZiwwREFBa0JBLEVBQUUsNEJBQTRCZSxNQUFNLENBQUNMLFdBQVcsOEJBQThCSyxNQUFNLENBQUNaLDhEQUFzQkEsRUFBRSxNQUFNWSxNQUFNLENBQUNELEtBQUs7QUFDdmlCO0FBQ0E7O0NBRUMsR0FDTSxJQUFJSyxrQkFBa0IsU0FBVUMsS0FBSztJQUN4QyxJQUFJQyxhQUFhRCxNQUFNQyxVQUFVLEVBQUVDLGNBQWNGLE1BQU1FLFdBQVcsRUFBRWYsS0FBS2EsTUFBTVgsT0FBTyxFQUFFQSxVQUFVRixPQUFPLEtBQUssSUFBSSxXQUFXQTtJQUM3SDs7OztLQUlDLEdBQ0QsSUFBSU8sTUFBTWhCLDBDQUFhLENBQUM7UUFBYyxPQUFPTSxtREFBV0EsQ0FBQ0s7SUFBVSxHQUFHO1FBQUNBO0tBQVE7SUFDL0UscUJBQU9YLGdEQUFtQixDQUFDTyxPQUFPO1FBQUVvQixRQUFRbkIsVUFBVVEsS0FBSyxDQUFDTyxZQUFZWixTQUFTLENBQUNhLGNBQWMsZUFBZTtJQUFJO0FBQ3ZILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyLXByb2plY3Qtd2ViLWFwcC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9jb21wb25lbnQuanM/YWYxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdHlsZVNpbmdsZXRvbiB9IGZyb20gJ3JlYWN0LXN0eWxlLXNpbmdsZXRvbic7XG5pbXBvcnQgeyBmdWxsV2lkdGhDbGFzc05hbWUsIHplcm9SaWdodENsYXNzTmFtZSwgbm9TY3JvbGxiYXJzQ2xhc3NOYW1lLCByZW1vdmVkQmFyU2l6ZVZhcmlhYmxlIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0R2FwV2lkdGggfSBmcm9tICcuL3V0aWxzJztcbnZhciBTdHlsZSA9IHN0eWxlU2luZ2xldG9uKCk7XG4vLyBpbXBvcnRhbnQgdGlwIC0gb25jZSB3ZSBtZWFzdXJlIHNjcm9sbEJhciB3aWR0aCBhbmQgcmVtb3ZlIHRoZW1cbi8vIHdlIGNvdWxkIG5vdCByZXBlYXQgdGhpcyBvcGVyYXRpb25cbi8vIHRodXMgd2UgYXJlIHVzaW5nIHN0eWxlLXNpbmdsZXRvbiAtIG9ubHkgdGhlIGZpcnN0IFwieWV0IGNvcnJlY3RcIiBzdHlsZSB3aWxsIGJlIGFwcGxpZWQuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gKF9hLCBhbGxvd1JlbGF0aXZlLCBnYXBNb2RlLCBpbXBvcnRhbnQpIHtcbiAgICB2YXIgbGVmdCA9IF9hLmxlZnQsIHRvcCA9IF9hLnRvcCwgcmlnaHQgPSBfYS5yaWdodCwgZ2FwID0gX2EuZ2FwO1xuICAgIGlmIChnYXBNb2RlID09PSB2b2lkIDApIHsgZ2FwTW9kZSA9ICdtYXJnaW4nOyB9XG4gICAgcmV0dXJuIFwiXFxuICAuXCIuY29uY2F0KG5vU2Nyb2xsYmFyc0NsYXNzTmFtZSwgXCIge1xcbiAgIG92ZXJmbG93OiBoaWRkZW4gXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgIHBhZGRpbmctcmlnaHQ6IFwiKS5jb25jYXQoZ2FwLCBcInB4IFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuIFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gICAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcXG4gICAgXCIpLmNvbmNhdChbXG4gICAgICAgIGFsbG93UmVsYXRpdmUgJiYgXCJwb3NpdGlvbjogcmVsYXRpdmUgXCIuY29uY2F0KGltcG9ydGFudCwgXCI7XCIpLFxuICAgICAgICBnYXBNb2RlID09PSAnbWFyZ2luJyAmJlxuICAgICAgICAgICAgXCJcXG4gICAgcGFkZGluZy1sZWZ0OiBcIi5jb25jYXQobGVmdCwgXCJweDtcXG4gICAgcGFkZGluZy10b3A6IFwiKS5jb25jYXQodG9wLCBcInB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBcIikuY29uY2F0KHJpZ2h0LCBcInB4O1xcbiAgICBtYXJnaW4tbGVmdDowO1xcbiAgICBtYXJnaW4tdG9wOjA7XFxuICAgIG1hcmdpbi1yaWdodDogXCIpLmNvbmNhdChnYXAsIFwicHggXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgICBcIiksXG4gICAgICAgIGdhcE1vZGUgPT09ICdwYWRkaW5nJyAmJiBcInBhZGRpbmctcmlnaHQ6IFwiLmNvbmNhdChnYXAsIFwicHggXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1wiKSxcbiAgICBdXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJycpLCBcIlxcbiAgfVxcbiAgXFxuICAuXCIpLmNvbmNhdCh6ZXJvUmlnaHRDbGFzc05hbWUsIFwiIHtcXG4gICAgcmlnaHQ6IFwiKS5jb25jYXQoZ2FwLCBcInB4IFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gIH1cXG4gIFxcbiAgLlwiKS5jb25jYXQoZnVsbFdpZHRoQ2xhc3NOYW1lLCBcIiB7XFxuICAgIG1hcmdpbi1yaWdodDogXCIpLmNvbmNhdChnYXAsIFwicHggXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgfVxcbiAgXFxuICAuXCIpLmNvbmNhdCh6ZXJvUmlnaHRDbGFzc05hbWUsIFwiIC5cIikuY29uY2F0KHplcm9SaWdodENsYXNzTmFtZSwgXCIge1xcbiAgICByaWdodDogMCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICB9XFxuICBcXG4gIC5cIikuY29uY2F0KGZ1bGxXaWR0aENsYXNzTmFtZSwgXCIgLlwiKS5jb25jYXQoZnVsbFdpZHRoQ2xhc3NOYW1lLCBcIiB7XFxuICAgIG1hcmdpbi1yaWdodDogMCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICB9XFxuICBcXG4gIGJvZHkge1xcbiAgICBcIikuY29uY2F0KHJlbW92ZWRCYXJTaXplVmFyaWFibGUsIFwiOiBcIikuY29uY2F0KGdhcCwgXCJweDtcXG4gIH1cXG5cIik7XG59O1xuLyoqXG4gKiBSZW1vdmVzIHBhZ2Ugc2Nyb2xsYmFyIGFuZCBibG9ja3MgcGFnZSBzY3JvbGwgd2hlbiBtb3VudGVkXG4gKi9cbmV4cG9ydCB2YXIgUmVtb3ZlU2Nyb2xsQmFyID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIG5vUmVsYXRpdmUgPSBwcm9wcy5ub1JlbGF0aXZlLCBub0ltcG9ydGFudCA9IHByb3BzLm5vSW1wb3J0YW50LCBfYSA9IHByb3BzLmdhcE1vZGUsIGdhcE1vZGUgPSBfYSA9PT0gdm9pZCAwID8gJ21hcmdpbicgOiBfYTtcbiAgICAvKlxuICAgICBnYXAgd2lsbCBiZSBtZWFzdXJlZCBvbiBldmVyeSBjb21wb25lbnQgbW91bnRcbiAgICAgaG93ZXZlciBpdCB3aWxsIGJlIHVzZWQgb25seSBieSB0aGUgXCJmaXJzdFwiIGludm9jYXRpb25cbiAgICAgZHVlIHRvIHNpbmdsZXRvbiBuYXR1cmUgb2YgPFN0eWxlXG4gICAgICovXG4gICAgdmFyIGdhcCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0R2FwV2lkdGgoZ2FwTW9kZSk7IH0sIFtnYXBNb2RlXSk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGUsIHsgc3R5bGVzOiBnZXRTdHlsZXMoZ2FwLCAhbm9SZWxhdGl2ZSwgZ2FwTW9kZSwgIW5vSW1wb3J0YW50ID8gJyFpbXBvcnRhbnQnIDogJycpIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlU2luZ2xldG9uIiwiZnVsbFdpZHRoQ2xhc3NOYW1lIiwiemVyb1JpZ2h0Q2xhc3NOYW1lIiwibm9TY3JvbGxiYXJzQ2xhc3NOYW1lIiwicmVtb3ZlZEJhclNpemVWYXJpYWJsZSIsImdldEdhcFdpZHRoIiwiU3R5bGUiLCJnZXRTdHlsZXMiLCJfYSIsImFsbG93UmVsYXRpdmUiLCJnYXBNb2RlIiwiaW1wb3J0YW50IiwibGVmdCIsInRvcCIsInJpZ2h0IiwiZ2FwIiwiY29uY2F0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJSZW1vdmVTY3JvbGxCYXIiLCJwcm9wcyIsIm5vUmVsYXRpdmUiLCJub0ltcG9ydGFudCIsInVzZU1lbW8iLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/constants.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/constants.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fullWidthClassName: () => (/* binding */ fullWidthClassName),\n/* harmony export */   noScrollbarsClassName: () => (/* binding */ noScrollbarsClassName),\n/* harmony export */   removedBarSizeVariable: () => (/* binding */ removedBarSizeVariable),\n/* harmony export */   zeroRightClassName: () => (/* binding */ zeroRightClassName)\n/* harmony export */ });\nvar zeroRightClassName = \"right-scroll-bar-position\";\nvar fullWidthClassName = \"width-before-scroll-bar\";\nvar noScrollbarsClassName = \"with-scroll-bars-hidden\";\n/**\n * Name of a CSS variable containing the amount of \"hidden\" scrollbar\n * ! might be undefined ! use will fallback!\n */ var removedBarSizeVariable = \"--removed-body-scroll-bar-size\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvY29uc3RhbnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFJQSxxQkFBcUIsNEJBQTRCO0FBQ3JELElBQUlDLHFCQUFxQiwwQkFBMEI7QUFDbkQsSUFBSUMsd0JBQXdCLDBCQUEwQjtBQUM3RDs7O0NBR0MsR0FDTSxJQUFJQyx5QkFBeUIsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlci1wcm9qZWN0LXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvY29uc3RhbnRzLmpzPzVlMzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciB6ZXJvUmlnaHRDbGFzc05hbWUgPSAncmlnaHQtc2Nyb2xsLWJhci1wb3NpdGlvbic7XG5leHBvcnQgdmFyIGZ1bGxXaWR0aENsYXNzTmFtZSA9ICd3aWR0aC1iZWZvcmUtc2Nyb2xsLWJhcic7XG5leHBvcnQgdmFyIG5vU2Nyb2xsYmFyc0NsYXNzTmFtZSA9ICd3aXRoLXNjcm9sbC1iYXJzLWhpZGRlbic7XG4vKipcbiAqIE5hbWUgb2YgYSBDU1MgdmFyaWFibGUgY29udGFpbmluZyB0aGUgYW1vdW50IG9mIFwiaGlkZGVuXCIgc2Nyb2xsYmFyXG4gKiAhIG1pZ2h0IGJlIHVuZGVmaW5lZCAhIHVzZSB3aWxsIGZhbGxiYWNrIVxuICovXG5leHBvcnQgdmFyIHJlbW92ZWRCYXJTaXplVmFyaWFibGUgPSAnLS1yZW1vdmVkLWJvZHktc2Nyb2xsLWJhci1zaXplJztcbiJdLCJuYW1lcyI6WyJ6ZXJvUmlnaHRDbGFzc05hbWUiLCJmdWxsV2lkdGhDbGFzc05hbWUiLCJub1Njcm9sbGJhcnNDbGFzc05hbWUiLCJyZW1vdmVkQmFyU2l6ZVZhcmlhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/constants.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RemoveScrollBar: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.RemoveScrollBar),\n/* harmony export */   fullWidthClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.fullWidthClassName),\n/* harmony export */   getGapWidth: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getGapWidth),\n/* harmony export */   noScrollbarsClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.noScrollbarsClassName),\n/* harmony export */   removedBarSizeVariable: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.removedBarSizeVariable),\n/* harmony export */   zeroRightClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.zeroRightClassName)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/component.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/utils.js\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ3NFO0FBQzlFO0FBQzBGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlci1wcm9qZWN0LXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvaW5kZXguanM/ZGNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW1vdmVTY3JvbGxCYXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyB6ZXJvUmlnaHRDbGFzc05hbWUsIGZ1bGxXaWR0aENsYXNzTmFtZSwgbm9TY3JvbGxiYXJzQ2xhc3NOYW1lLCByZW1vdmVkQmFyU2l6ZVZhcmlhYmxlIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0R2FwV2lkdGggfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCB7IFJlbW92ZVNjcm9sbEJhciwgemVyb1JpZ2h0Q2xhc3NOYW1lLCBmdWxsV2lkdGhDbGFzc05hbWUsIG5vU2Nyb2xsYmFyc0NsYXNzTmFtZSwgcmVtb3ZlZEJhclNpemVWYXJpYWJsZSwgZ2V0R2FwV2lkdGgsIH07XG4iXSwibmFtZXMiOlsiUmVtb3ZlU2Nyb2xsQmFyIiwiemVyb1JpZ2h0Q2xhc3NOYW1lIiwiZnVsbFdpZHRoQ2xhc3NOYW1lIiwibm9TY3JvbGxiYXJzQ2xhc3NOYW1lIiwicmVtb3ZlZEJhclNpemVWYXJpYWJsZSIsImdldEdhcFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/utils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getGapWidth: () => (/* binding */ getGapWidth),\n/* harmony export */   zeroGap: () => (/* binding */ zeroGap)\n/* harmony export */ });\nvar zeroGap = {\n    left: 0,\n    top: 0,\n    right: 0,\n    gap: 0\n};\nvar parse = function(x) {\n    return parseInt(x || \"\", 10) || 0;\n};\nvar getOffset = function(gapMode) {\n    var cs = window.getComputedStyle(document.body);\n    var left = cs[gapMode === \"padding\" ? \"paddingLeft\" : \"marginLeft\"];\n    var top = cs[gapMode === \"padding\" ? \"paddingTop\" : \"marginTop\"];\n    var right = cs[gapMode === \"padding\" ? \"paddingRight\" : \"marginRight\"];\n    return [\n        parse(left),\n        parse(top),\n        parse(right)\n    ];\n};\nvar getGapWidth = function(gapMode) {\n    if (gapMode === void 0) {\n        gapMode = \"margin\";\n    }\n    if (true) {\n        return zeroGap;\n    }\n    var offsets = getOffset(gapMode);\n    var documentWidth = document.documentElement.clientWidth;\n    var windowWidth = window.innerWidth;\n    return {\n        left: offsets[0],\n        top: offsets[1],\n        right: offsets[2],\n        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvdXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFJQSxVQUFVO0lBQ2pCQyxNQUFNO0lBQ05DLEtBQUs7SUFDTEMsT0FBTztJQUNQQyxLQUFLO0FBQ1QsRUFBRTtBQUNGLElBQUlDLFFBQVEsU0FBVUMsQ0FBQztJQUFJLE9BQU9DLFNBQVNELEtBQUssSUFBSSxPQUFPO0FBQUc7QUFDOUQsSUFBSUUsWUFBWSxTQUFVQyxPQUFPO0lBQzdCLElBQUlDLEtBQUtDLE9BQU9DLGdCQUFnQixDQUFDQyxTQUFTQyxJQUFJO0lBQzlDLElBQUliLE9BQU9TLEVBQUUsQ0FBQ0QsWUFBWSxZQUFZLGdCQUFnQixhQUFhO0lBQ25FLElBQUlQLE1BQU1RLEVBQUUsQ0FBQ0QsWUFBWSxZQUFZLGVBQWUsWUFBWTtJQUNoRSxJQUFJTixRQUFRTyxFQUFFLENBQUNELFlBQVksWUFBWSxpQkFBaUIsY0FBYztJQUN0RSxPQUFPO1FBQUNKLE1BQU1KO1FBQU9JLE1BQU1IO1FBQU1HLE1BQU1GO0tBQU87QUFDbEQ7QUFDTyxJQUFJWSxjQUFjLFNBQVVOLE9BQU87SUFDdEMsSUFBSUEsWUFBWSxLQUFLLEdBQUc7UUFBRUEsVUFBVTtJQUFVO0lBQzlDLElBQUksSUFBa0IsRUFBYTtRQUMvQixPQUFPVDtJQUNYO0lBQ0EsSUFBSWdCLFVBQVVSLFVBQVVDO0lBQ3hCLElBQUlRLGdCQUFnQkosU0FBU0ssZUFBZSxDQUFDQyxXQUFXO0lBQ3hELElBQUlDLGNBQWNULE9BQU9VLFVBQVU7SUFDbkMsT0FBTztRQUNIcEIsTUFBTWUsT0FBTyxDQUFDLEVBQUU7UUFDaEJkLEtBQUtjLE9BQU8sQ0FBQyxFQUFFO1FBQ2ZiLE9BQU9hLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCWixLQUFLa0IsS0FBS0MsR0FBRyxDQUFDLEdBQUdILGNBQWNILGdCQUFnQkQsT0FBTyxDQUFDLEVBQUUsR0FBR0EsT0FBTyxDQUFDLEVBQUU7SUFDMUU7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlci1wcm9qZWN0LXdlYi1hcHAvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvdXRpbHMuanM/NzY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIHplcm9HYXAgPSB7XG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgZ2FwOiAwLFxufTtcbnZhciBwYXJzZSA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiBwYXJzZUludCh4IHx8ICcnLCAxMCkgfHwgMDsgfTtcbnZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiAoZ2FwTW9kZSkge1xuICAgIHZhciBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIHZhciBsZWZ0ID0gY3NbZ2FwTW9kZSA9PT0gJ3BhZGRpbmcnID8gJ3BhZGRpbmdMZWZ0JyA6ICdtYXJnaW5MZWZ0J107XG4gICAgdmFyIHRvcCA9IGNzW2dhcE1vZGUgPT09ICdwYWRkaW5nJyA/ICdwYWRkaW5nVG9wJyA6ICdtYXJnaW5Ub3AnXTtcbiAgICB2YXIgcmlnaHQgPSBjc1tnYXBNb2RlID09PSAncGFkZGluZycgPyAncGFkZGluZ1JpZ2h0JyA6ICdtYXJnaW5SaWdodCddO1xuICAgIHJldHVybiBbcGFyc2UobGVmdCksIHBhcnNlKHRvcCksIHBhcnNlKHJpZ2h0KV07XG59O1xuZXhwb3J0IHZhciBnZXRHYXBXaWR0aCA9IGZ1bmN0aW9uIChnYXBNb2RlKSB7XG4gICAgaWYgKGdhcE1vZGUgPT09IHZvaWQgMCkgeyBnYXBNb2RlID0gJ21hcmdpbic7IH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHplcm9HYXA7XG4gICAgfVxuICAgIHZhciBvZmZzZXRzID0gZ2V0T2Zmc2V0KGdhcE1vZGUpO1xuICAgIHZhciBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IG9mZnNldHNbMF0sXG4gICAgICAgIHRvcDogb2Zmc2V0c1sxXSxcbiAgICAgICAgcmlnaHQ6IG9mZnNldHNbMl0sXG4gICAgICAgIGdhcDogTWF0aC5tYXgoMCwgd2luZG93V2lkdGggLSBkb2N1bWVudFdpZHRoICsgb2Zmc2V0c1syXSAtIG9mZnNldHNbMF0pLFxuICAgIH07XG59O1xuIl0sIm5hbWVzIjpbInplcm9HYXAiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJnYXAiLCJwYXJzZSIsIngiLCJwYXJzZUludCIsImdldE9mZnNldCIsImdhcE1vZGUiLCJjcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJkb2N1bWVudCIsImJvZHkiLCJnZXRHYXBXaWR0aCIsIm9mZnNldHMiLCJkb2N1bWVudFdpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJNYXRoIiwibWF4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-remove-scroll-bar/dist/es2015/utils.js\n");

/***/ })

};
;