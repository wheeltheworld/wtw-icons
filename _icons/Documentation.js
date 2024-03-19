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
var Documentation = function (props) { return (react_1.default.createElement(Icon_1.default, __assign({ viewBox: "0 0 24 24" }, props),
    react_1.default.createElement("g", { transform: "translate(0.5, 0.5)", fill: "currentColor" },
        react_1.default.createElement("path", { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, d: "M21,20c0,1.7-1.3,3-3,3H3V1 h15c1.7,0,3,1.3,3,3V20z", strokeLinejoin: "round" }),
        react_1.default.createElement("circle", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, cx: 12, cy: 10, r: 4, strokeLinejoin: "round" }),
        react_1.default.createElement("line", { "data-color": "color-2", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeMiterlimit: 10, x1: 14, y1: 18, x2: 10, y2: 18, strokeLinejoin: "round" })))); };
exports.default = Documentation;
//# sourceMappingURL=Documentation.js.map