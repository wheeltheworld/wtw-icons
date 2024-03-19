"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("../components/Icon"));
var AccessibleElevator = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", className: "nc-icon-wrapper" },
        react_1.default.createElement("circle", { cx: "10.5", cy: "2.5", r: "1.5" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", d: "M9 24L6 20 3 24 9 24z" }),
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", d: "M21 20L18 24 15 20 21 20z" }),
        react_1.default.createElement("path", { d: "M7.449 9.943A3.983 3.983 0 1012.62 16M18 17l-.811-3.243a1 1 0 00-.97-.757h-4.372a1 1 0 01-.986-.836L10 7h6" })))); };
exports.default = AccessibleElevator;
//# sourceMappingURL=AccessibleElevator.js.map