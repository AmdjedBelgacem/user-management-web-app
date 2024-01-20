"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-clientside-effect";
exports.ids = ["vendor-chunks/react-clientside-effect"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-clientside-effect/lib/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-clientside-effect/lib/index.es.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction withSideEffect(reducePropsToState, handleStateChangeOnClient) {\n    if (true) {\n        if (typeof reducePropsToState !== \"function\") {\n            throw new Error(\"Expected reducePropsToState to be a function.\");\n        }\n        if (typeof handleStateChangeOnClient !== \"function\") {\n            throw new Error(\"Expected handleStateChangeOnClient to be a function.\");\n        }\n    }\n    function getDisplayName(WrappedComponent) {\n        return WrappedComponent.displayName || WrappedComponent.name || \"Component\";\n    }\n    return function wrap(WrappedComponent) {\n        if (true) {\n            if (typeof WrappedComponent !== \"function\") {\n                throw new Error(\"Expected WrappedComponent to be a React component.\");\n            }\n        }\n        var mountedInstances = [];\n        var state;\n        function emitChange() {\n            state = reducePropsToState(mountedInstances.map(function(instance) {\n                return instance.props;\n            }));\n            handleStateChangeOnClient(state);\n        }\n        var SideEffect = /*#__PURE__*/ function(_PureComponent) {\n            (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SideEffect, _PureComponent);\n            function SideEffect() {\n                return _PureComponent.apply(this, arguments) || this;\n            }\n            // Try to use displayName of wrapped component\n            SideEffect.peek = function peek() {\n                return state;\n            };\n            var _proto = SideEffect.prototype;\n            _proto.componentDidMount = function componentDidMount() {\n                mountedInstances.push(this);\n                emitChange();\n            };\n            _proto.componentDidUpdate = function componentDidUpdate() {\n                emitChange();\n            };\n            _proto.componentWillUnmount = function componentWillUnmount() {\n                var index = mountedInstances.indexOf(this);\n                mountedInstances.splice(index, 1);\n                emitChange();\n            };\n            _proto.render = function render() {\n                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(WrappedComponent, this.props);\n            };\n            return SideEffect;\n        }(react__WEBPACK_IMPORTED_MODULE_2__.PureComponent);\n        (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SideEffect, \"displayName\", \"SideEffect(\" + getDisplayName(WrappedComponent) + \")\");\n        return SideEffect;\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSideEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtY2xpZW50c2lkZS1lZmZlY3QvbGliL2luZGV4LmVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNFO0FBQ0U7QUFDM0I7QUFFN0MsU0FBU0ksZUFBZUMsa0JBQWtCLEVBQUVDLHlCQUF5QjtJQUNuRSxJQUFJQyxJQUFxQyxFQUFFO1FBQ3pDLElBQUksT0FBT0YsdUJBQXVCLFlBQVk7WUFDNUMsTUFBTSxJQUFJRyxNQUFNO1FBQ2xCO1FBRUEsSUFBSSxPQUFPRiw4QkFBOEIsWUFBWTtZQUNuRCxNQUFNLElBQUlFLE1BQU07UUFDbEI7SUFDRjtJQUVBLFNBQVNDLGVBQWVDLGdCQUFnQjtRQUN0QyxPQUFPQSxpQkFBaUJDLFdBQVcsSUFBSUQsaUJBQWlCRSxJQUFJLElBQUk7SUFDbEU7SUFFQSxPQUFPLFNBQVNDLEtBQUtILGdCQUFnQjtRQUNuQyxJQUFJSCxJQUFxQyxFQUFFO1lBQ3pDLElBQUksT0FBT0cscUJBQXFCLFlBQVk7Z0JBQzFDLE1BQU0sSUFBSUYsTUFBTTtZQUNsQjtRQUNGO1FBRUEsSUFBSU0sbUJBQW1CLEVBQUU7UUFDekIsSUFBSUM7UUFFSixTQUFTQztZQUNQRCxRQUFRVixtQkFBbUJTLGlCQUFpQkcsR0FBRyxDQUFDLFNBQVVDLFFBQVE7Z0JBQ2hFLE9BQU9BLFNBQVNDLEtBQUs7WUFDdkI7WUFDQWIsMEJBQTBCUztRQUM1QjtRQUVBLElBQUlLLGFBQWEsV0FBVyxHQUFFLFNBQVVDLGNBQWM7WUFDcERyQixvRkFBY0EsQ0FBQ29CLFlBQVlDO1lBRTNCLFNBQVNEO2dCQUNQLE9BQU9DLGVBQWVDLEtBQUssQ0FBQyxJQUFJLEVBQUVDLGNBQWMsSUFBSTtZQUN0RDtZQUVBLDhDQUE4QztZQUM5Q0gsV0FBV0ksSUFBSSxHQUFHLFNBQVNBO2dCQUN6QixPQUFPVDtZQUNUO1lBRUEsSUFBSVUsU0FBU0wsV0FBV00sU0FBUztZQUVqQ0QsT0FBT0UsaUJBQWlCLEdBQUcsU0FBU0E7Z0JBQ2xDYixpQkFBaUJjLElBQUksQ0FBQyxJQUFJO2dCQUMxQlo7WUFDRjtZQUVBUyxPQUFPSSxrQkFBa0IsR0FBRyxTQUFTQTtnQkFDbkNiO1lBQ0Y7WUFFQVMsT0FBT0ssb0JBQW9CLEdBQUcsU0FBU0E7Z0JBQ3JDLElBQUlDLFFBQVFqQixpQkFBaUJrQixPQUFPLENBQUMsSUFBSTtnQkFDekNsQixpQkFBaUJtQixNQUFNLENBQUNGLE9BQU87Z0JBQy9CZjtZQUNGO1lBRUFTLE9BQU9TLE1BQU0sR0FBRyxTQUFTQTtnQkFDdkIsT0FBTyxXQUFXLEdBQUVoQywwREFBbUIsQ0FBQ1Esa0JBQWtCLElBQUksQ0FBQ1MsS0FBSztZQUN0RTtZQUVBLE9BQU9DO1FBQ1QsRUFBRWpCLGdEQUFhQTtRQUVmRixxRkFBZUEsQ0FBQ21CLFlBQVksZUFBZSxnQkFBZ0JYLGVBQWVDLG9CQUFvQjtRQUU5RixPQUFPVTtJQUNUO0FBQ0Y7QUFFQSxpRUFBZWhCLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2VyLXByb2plY3Qtd2ViLWFwcC8uL25vZGVfbW9kdWxlcy9yZWFjdC1jbGllbnRzaWRlLWVmZmVjdC9saWIvaW5kZXguZXMuanM/ZmRjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICh0eXBlb2YgcmVkdWNlUHJvcHNUb1N0YXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHJlZHVjZVByb3BzVG9TdGF0ZSB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50IHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAodHlwZW9mIFdyYXBwZWRDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBXcmFwcGVkQ29tcG9uZW50IHRvIGJlIGEgUmVhY3QgY29tcG9uZW50LicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtb3VudGVkSW5zdGFuY2VzID0gW107XG4gICAgdmFyIHN0YXRlO1xuXG4gICAgZnVuY3Rpb24gZW1pdENoYW5nZSgpIHtcbiAgICAgIHN0YXRlID0gcmVkdWNlUHJvcHNUb1N0YXRlKG1vdW50ZWRJbnN0YW5jZXMubWFwKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UucHJvcHM7XG4gICAgICB9KSk7XG4gICAgICBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KHN0YXRlKTtcbiAgICB9XG5cbiAgICB2YXIgU2lkZUVmZmVjdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFNpZGVFZmZlY3QsIF9QdXJlQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gU2lkZUVmZmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9QdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIHVzZSBkaXNwbGF5TmFtZSBvZiB3cmFwcGVkIGNvbXBvbmVudFxuICAgICAgU2lkZUVmZmVjdC5wZWVrID0gZnVuY3Rpb24gcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfTtcblxuICAgICAgdmFyIF9wcm90byA9IFNpZGVFZmZlY3QucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gbW91bnRlZEluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCB0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICAgIH0oUHVyZUNvbXBvbmVudCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoU2lkZUVmZmVjdCwgXCJkaXNwbGF5TmFtZVwiLCBcIlNpZGVFZmZlY3QoXCIgKyBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSArIFwiKVwiKTtcblxuICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdDtcbiJdLCJuYW1lcyI6WyJfaW5oZXJpdHNMb29zZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIndpdGhTaWRlRWZmZWN0IiwicmVkdWNlUHJvcHNUb1N0YXRlIiwiaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCIsInByb2Nlc3MiLCJFcnJvciIsImdldERpc3BsYXlOYW1lIiwiV3JhcHBlZENvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwibmFtZSIsIndyYXAiLCJtb3VudGVkSW5zdGFuY2VzIiwic3RhdGUiLCJlbWl0Q2hhbmdlIiwibWFwIiwiaW5zdGFuY2UiLCJwcm9wcyIsIlNpZGVFZmZlY3QiLCJfUHVyZUNvbXBvbmVudCIsImFwcGx5IiwiYXJndW1lbnRzIiwicGVlayIsIl9wcm90byIsInByb3RvdHlwZSIsImNvbXBvbmVudERpZE1vdW50IiwicHVzaCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-clientside-effect/lib/index.es.js\n");

/***/ })

};
;